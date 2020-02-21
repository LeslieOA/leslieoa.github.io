import { html } from '../src/html';



export const template = (pageData, pages) => {

	const { markdown } = pageData;
	const { title, slug, tags, date, template } = pageData.meta;
	
	return html`
		<!doctype html>
		<html>
		<head>
			<title>${title}</title>
			<meta name="keywords" content="" />
			<meta name="" content="" />
			<meta name="" content="" />
			<link rel="stylesheet" href="/css/style.css" />
		</head>
		<body data-template="${template}">
			<header>
				<nav>
					<ul>
						${pages.map((page) => {
							const { slug, title, tags } = page.meta;
							return `<li><a href="/${slug}.html">${title}</a></li>`;
						}).join('')}
					</ul>
				</nav>
			</header>
			<h1>${title}</h1>
			<small>${date}</small>
			<main>
				${markdown}
			</main>
			<footer>
				<ul>
					${JSON.stringify(tags)}
				</ul>
			</footer>
		</body>
	</html>
	`;

};