/*
                                                        
                                                                                          
                                      ░░░                ░░░░                             
                                    ░░░░░░░░           ░░░░░░░░                           
                                    ░░░░░░░░          ░░░░░░░░░                           
                                    ░░░░░░░░░         ░░░░░░░░░                           
                                    ░░░░░░░░░        ░░░░░░░░░                            
                                     ░░░░░░░░░       ▓░░░░░░░░                            
                                     ░░░░░░░░░       ░░░░░░░░░                            
                                      ▓░░░░░░░░     ░░░░░░░░░                             
                                      ▓░░░░░░░░     ░░░░░░░░░                             
                                       ▓░░░░░░░░   ░░░░░░░░░░                             
                                    ░░ ▓▓░░░░░░░   ▓░░░░░░░░                              
                                ░░░░░░░░▓▓░░░░░░░ ░▓░░░░░░░░                              
                        ░░░░░░░░▓░░░░░░░░▓░░░░░░░░░░░░░░░░░░                              
                       ░░░░░░░░░▓░░░░░░░░▓░░░░░░░░░░░░░░░░░░                              
                       ░░░░░░░░░▓░░░░░░░░▓░░░░░░░░░░░░░░░░░░                              
                       ░░░░░░░░░▓░░░░░░░░▓░░░░░░░░░░░░░░░░░░                              
                       ░░░░░░░░▓▓▓░▓▓░░░░░░░░░░░░░░░░░░░░░░░                              
                       ░▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░                              
                       ░▓▓▓▓▓▓▓▓░▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░                             
                       ░▓░░░░░░░░░▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░                            
                       ░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░                            
                        ░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓██▓░░░░░░░░░░░░░                           
                        ░░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░▓░                           
                        ░░░░░░░░░░░░░░░░░░░░░░░░░▓░░░░░░░░░░░▓                            
                         ▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓░                            
                         ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓▓                             
                          ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓▓▓                              
                           ▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░▓▓▓▓                               
                            ░▓░░░░░░░░░░░░░░░░░░░░░░░▓▓▓▓▓                                
                              ░▓▓░░░░░░░░░░░░░░░░░▓▓▓▓▓▓░                                 
                                ░▓▓▓▓▓▓░░░░░░░▓▓▓▓▓▓▓░                                    
                                     ░░░░░░░░░░░░░                                        
                                                                                                                                                          
                                                                                          
  LeslieOA

  Hello again human.
  The JavaScript used on this website is also human readable.

  Spotted a bug or wanted to ask a question?

  * Visit https://github.com/LeslieOA/leslieoa.github.io/issues
  * ...or email: leslieoa@pm.me

  Happy hacking. 

*/

const body = document.body;
const mainContainer = document.querySelector("main");

const domainURI = `${window.top.location.host.toString()}`;

const internalLinksRegex = `a[href^="${domainURI}"], a[href^="/"]`;
const anchorLinks = document.querySelectorAll(internalLinksRegex);

const transition = {
  exit: "fade-out",
  enter: "fade-in",
};

function load(url) {
  fetch(url).then((resp) => {
    resp.text().then((content) => {
      render({ content, url, xhr: true });
    });
  });
}

function render(opts) {
  const content = opts.content;
  const url = opts.url;
  const xhr = opts.xhr;
  body.classList.add(transition.exit);
  const fadeAnimation = document.querySelector("body");
  fadeAnimation.addEventListener("animationend", handleAnimation, true);
  function handleAnimation(evt) {
    if (evt.animationName === transition.exit) {
      fadeAnimation.removeEventListener("animationend", handleAnimation, true);
      body.classList.remove(transition.exit);
      if (xhr) {
        const source = "main",
          target = "main";
        const targetContainer = document.querySelector(target);
        const partialTemp = document.createElement("div");
        partialTemp.innerHTML = content;
        const partial = partialTemp.querySelector(source);
        targetContainer.replaceWith(partial);
        history.pushState({ content: partial.innerHTML }, "", url);
      } else {
        const mainContainer = document.querySelector("main");
        mainContainer.innerHTML = content;
        body.classList.add(transition.enter);
      }
      const linkContainer = document.querySelector("main");
      addHyperlinks(linkContainer.querySelectorAll(internalLinksRegex));
      body.classList.add(transition.enter);
    }
  }
}

function addHyperlinks(hyperlinks) {
  hyperlinks.forEach((link) => {
    function handleLink(evt) {
      evt.preventDefault();
      const url = link.href;
      load(url);
    }
    link.removeEventListener("click", handleLink, true);
    link.addEventListener("click", handleLink, true);
  });
}

window.onload = () => {
  history.replaceState(
    { content: mainContainer.innerHTML },
    "",
    window.location.toString()
  );
  addHyperlinks(anchorLinks);
};

window.onpopstate = function (evt) {
  body.classList.add("fade-out");
  var state = evt.state;
  if (state) render({ content: state.content, url: null, xhr: false });
};
