import { html } from '../html'
import { template as hello } from './partials/hello-header.html'

export const template = (meta:any, markup:string) => {
	return html`
		<!doctype html>
		${hello()}
		<html lang="en">
			<head>
				<title>${meta.title}</title>
				<meta name="description" content="${meta.description}">
				<meta name="keywords" content="${meta.tags.join(', ')}">
				<link rel="preload" href="/assets/fonts/manrope/Manrope-VariableFont_wght.ttf" as="font" crossorigin="anonymous">
				<link rel="preload" href="/assets/fonts/manrope/Manrope-Regular.ttf" as="font" crossorigin="anonymous">
				<link rel="stylesheet" href="/assets/css/style.css">
			</head>
			<body>
				<main data-template="${meta.template}">
					<section>${markup}</section>
				</main>
				<script src="/assets/js/index.js"></script>
			</body>
		</html>
	`
}