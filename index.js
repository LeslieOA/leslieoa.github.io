import fs from 'fs';
import fm from 'front-matter';
import marked from 'marked';
import beautify from 'js-beautify';
import liveServer from 'live-server';
import sanitizeHtml from 'sanitize-html';

import { CONFIG } from './config';
import { template } from './templates/layout.html';

// import { html } from './src/html';


const pages = {
	markdown: []
};




function sanitizeMarkdown(markdown) {
	const sanitized = sanitizeHtml(markdown);
	return sanitized;
}



/**
 * Init
 * - Gather pages
 */
function init(opts) {
	fs.readdir('pages/', (err, filenames) => {

		filenames.map(file => {
			if (file.includes('.md') || file.includes('.markdown')) {

				const path = `${CONFIG.paths.pages}${file}`
				
				const data = fs.readFileSync(path, 'utf8', (err, data) => {
					if (err) throw err;
				});

				const meta = fm(data).attributes;
				const markdown = marked(fm(data).body);

				pages.markdown.push({
					path,
					markdown,
					meta: { ...meta, tags: meta.tags.split(',') }
				});

			}
		});

		// console.log('Markdown Pages', pages.markdown);

		if (opts.callback) opts.callback(pages)

	});
};



/**
 * Render Markdown
 */
function renderMarkdown(pageData) {

	// console.log(`${'*'.repeat(25)}\nPAGE DATA`, pageData);

	const fileDist = `${CONFIG.paths.dist}${pageData.meta.slug}.html`;

	const markdown = sanitizeMarkdown(pageData.markdown);
	const renderTemplate = template(
		{ ...pageData, markdown }, 
		pages.markdown
	);

	const renderedTemplate = beautify.html(
		renderTemplate, {
			indent_with_tabs: true,
			indent_size: 1,
		}
	);

	fs.writeFile(fileDist, renderedTemplate, (err) => {
		if (err) throw err;
		// console.log('File written!', pageData.meta.slug);
	});

};




init({
	callback: (pages) => {
		pages.markdown.forEach(page => {
			// console.log('Page', {...page});
			renderMarkdown({...page})
		});
	}
});



liveServer.start(CONFIG.server);
