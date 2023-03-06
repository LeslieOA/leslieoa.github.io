export const template = () => {
  return `<!--
																																					
	LeslieOA

	Hello human.
	The frontend code used on this website is presented in a human readable format.
	Why? Well: why not!?

	In the late 90s (when I started to gain curiosity into how websites were built),
	"View Source" was an invaluable tool. These days, with minification and obfuscation 
	used by bundlers and builders in web frameworks, it's harder than ever for someone starting 
	out to learn "how things are made". Hopefully this will help.

	This website can also be viewed without JavaScript (or with a text based web browser).
	I'm actively working to improve accessibility for tools such as screen readers (e.g. VoiceOver, et al), 
	so please let me know if this isn't the case.

	Spotted a bug or wanted to ask a question?

	* Visit https://github.com/LeslieOA/leslieoa.github.io/issues
	* ...or email: leslieoa@pm.me

	Happy hacking. 

	LeslieOA ${`${new Date().getFullYear()}`}

-->`;
};
