!function(e){function t(t){for(var n,i,s=t[0],l=t[1],c=t[2],d=0,u=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(m&&m(t);u.length;)u.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={0:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var m=l;o.push([23,1]),a()}({23:function(e,t,a){a(24),e.exports=a(47)},24:function(e,t,a){var n=a(8),r=a(25);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(r,o);e.exports=r.locals||{}},25:function(e,t,a){(t=a(9)(!1)).push([e.i,"html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote::before,blockquote::after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}a,del,ins{text-decoration:none}a{color:inherit}label,button{cursor:pointer}html{box-sizing:border-box}*,*::before,*::after{box-sizing:inherit}input,button{outline:0}body{font-size:16px;font-family:'Quicksand', sans-serif;box-sizing:border-box}\n",""]),e.exports=t},34:function(e,t,a){var n=a(8),r=a(35);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(r,o);e.exports=r.locals||{}},35:function(e,t,a){(t=a(9)(!1)).push([e.i,"",""]),e.exports=t},36:function(e,t,a){var n=a(8),r=a(37);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(r,o);e.exports=r.locals||{}},37:function(e,t,a){(t=a(9)(!1)).push([e.i,".navbar{position:fixed;background-color:#23232e;transition:width .6s ease;z-index:99999}.navbar-nav{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;align-items:center;height:100%;width:100%}.navbar-nav-item{width:100%}.navbar-nav-item .active{-webkit-filter:grayscale(0%) opacity(1);filter:grayscale(0%) opacity(1);background:#141418;color:#ececec}.navbar-nav-link{display:flex;align-items:center;justify-content:center;width:90%;margin:0 auto;height:5rem;color:#b6b6b6;text-decoration:none;-webkit-filter:grayscale(100%) opacity(0.7);filter:grayscale(100%) opacity(0.7);transition:600ms}.navbar-nav-link:hover{-webkit-filter:grayscale(0%) opacity(1);filter:grayscale(0%) opacity(1);background:#141418;color:#ececec}.navbar-nav-link svg{width:2rem;min-width:2rem;margin:0 1.5rem}.link-text{display:none;margin-left:1rem}.fa-primary{color:#ff7eee}.fa-secondary{color:#df49a6}.fa-primary,.fa-secondary{transition:600ms}.logo{font-weight:bold;text-transform:uppercase;text-align:center;color:#ececec;background:#141418;font-size:1.2rem;letter-spacing:0.15ch;width:90%;margin:1rem;border-radius:1rem}.logo svg{transform:rotate(0deg);transition:600ms}.logo-text{display:inline;position:absolute;left:-999px;transition:600ms}.navbar:hover .logo svg{transform:rotate(-180deg)}@media only screen and (max-width: 600px){.navbar{bottom:0;width:100vw;height:5rem;justify-content:center}.navbar-nav{flex-direction:row}.navbar-nav-link{justify-content:center}.logo{display:none}}@media only screen and (min-width: 601px){.active{border-radius:1rem}.navbar{top:0;width:7rem;height:100vh}.navbar-nav-item{transition:600ms;border-radius:1rem;margin-top:1rem}.navbar-nav-link:hover{border-radius:1rem;transition:600ms}.navbar:hover{width:16rem}.navbar:hover .link-text{display:inline}.navbar:hover .logo svg{margin-left:11rem}.navbar:hover .logo-text{left:0px}}\n",""]),e.exports=t},39:function(e,t,a){var n=a(8),r=a(40);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(r,o);e.exports=r.locals||{}},40:function(e,t,a){(t=a(9)(!1)).push([e.i,".home{background-color:#363b47;height:100%;width:100%;color:#eee;margin-bottom:5rem;padding-bottom:2rem}.home-title{padding-top:4rem;margin:0 auto 2rem;width:80%;text-transform:uppercase;text-align:center;font-size:2em}.home-title--home{color:#df49a6}.home-title--layout{color:#ff7eee}.home-description{padding:1.2rem 0;margin:0 auto;width:80%;font-size:14px;line-height:1.2rem}.home-button{display:block;width:55%;text-align:center;margin:2rem auto;padding:1rem;background-color:#20232a;border-radius:1rem;color:#fff;transition:600ms}.home-button:hover{transition:600ms;color:#ff7eee;text-decoration:none}@media only screen and (min-width: 601px){.home{padding-left:7rem;margin:0;height:100vh}.home-description{text-align:justify;margin:2rem auto}.home-button{width:35%}}@media only screen and (min-width: 1000px){.home-description{text-align:justify;margin:2rem auto}.home-button{width:20%}}\n",""]),e.exports=t},41:function(e,t,a){var n=a(8),r=a(42);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(r,o);e.exports=r.locals||{}},42:function(e,t,a){(t=a(9)(!1)).push([e.i,".categories{background-color:#363b47;height:100%;width:100%;color:#eee;margin-bottom:5rem;padding-bottom:2rem}.categories-title{text-align:center;padding-top:2rem;font-size:2em;text-transform:uppercase}.categories-container{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;margin-top:2rem}.categories-cards{width:250px;background-color:#eee;color:#000;text-align:center;padding:1rem;border-radius:.3rem;transition:600ms;margin:1.5rem}.categories-cards:hover{background-color:#bbb;text-decoration:none;color:#292929;transition:600ms}.categories-cards-title{margin:1rem 0;font-weight:600;letter-spacing:.2rem;font-size:1.5em;font-style:italic}.categories-cards-description{text-align:justify;font-size:13px;line-height:1.1rem;font-weight:500}.categories-cards-description--strong{text-decoration:underline;font-style:italic;font-weight:600;font-size:1em;margin:1rem 0}.categories-cards--soon{width:250px;text-align:center;padding:1rem;border-radius:.3rem;margin:1.5rem;background-color:#bbb;text-decoration:none;color:#292929;cursor:not-allowed;position:relative;z-index:0}.categories-cards--soon-specimen{width:150px;height:150px;overflow:hidden;position:absolute}.categories-cards--soon-specimen::before,.categories-cards--soon-specimen::after{position:absolute;z-index:-1;content:'';display:block;border:5px solid #f33}.categories-cards--soon-specimen span{position:absolute;display:block;width:225px;padding:15px 0;background-color:#f33;box-shadow:0 5px 10px rgba(0,0,0,0.1);color:#fff;text-shadow:0 1px 1px rgba(0,0,0,0.2);text-transform:uppercase;text-align:center;opacity:.85}.categories-specimen-top-left{top:-10px;left:-10px}.categories-speciment-top-left::before,.categories-speciment-top-left::after{border-top-color:transparent;border-left-color:transparent}.categories-specimen-top-left::before{top:0px;right:1px;opacity:.7}.categories-specimen-top-left::after{bottom:1px;left:0px;opacity:.7}.categories-specimen-top-left span{right:-25px;top:30px;transform:rotate(-45deg)}@media only screen and (min-width: 601px){.categories{padding-left:7rem;margin:0;height:100vh}.categories-cards--soon-specimen span{opacity:1}}\n",""]),e.exports=t},43:function(e,t,a){var n=a(8),r=a(44);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(r,o);e.exports=r.locals||{}},44:function(e,t,a){(t=a(9)(!1)).push([e.i,".about{background-color:#363b47;height:100vh;color:#eee}.about-title{text-align:center;padding-top:2rem;font-size:2em;text-transform:uppercase}\n",""]),e.exports=t},45:function(e,t,a){var n=a(8),r=a(46);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(r,o);e.exports=r.locals||{}},46:function(e,t,a){(t=a(9)(!1)).push([e.i,".contact{background-color:#363b47;height:100vh;color:#eee}.contact-title{text-align:center;padding-top:2rem;font-size:2em;text-transform:uppercase}\n",""]),e.exports=t},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),i=a(22),s=a(4),l=a(2),c=(a(34),a(36),function(){return r.a.createElement("nav",{className:"navbar",role:"navigation"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"logo"},r.a.createElement(s.b,{to:"/homelayout",className:"navbar-nav-link"},r.a.createElement("span",{className:"link-text logo-text"},"Homelayout"),r.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fad","data-icon":"angle-double-right",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",className:"svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"},r.a.createElement("g",{className:"fa-group"},r.a.createElement("path",{fill:"currentColor",d:"M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z",className:"fa-secondary"}),r.a.createElement("path",{fill:"currentColor",d:"M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z",className:"fa-primary"}))))),r.a.createElement("li",{className:"navbar-nav-item",activeclassname:"active"},r.a.createElement(s.b,{exact:!0,to:"/homelayout",className:"navbar-nav-link"},r.a.createElement("svg",{viewBox:"0 0 20 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"svg-inline--fa fa-home fa-w-16 fa-9x"},r.a.createElement("path",{d:"M8 17V11H12V17H17V9H20L10 0L0 9H3V17H8Z",fill:"currentColor",className:"fa-secondary"})),r.a.createElement("span",{className:"link-text"},"Accueil"))),r.a.createElement("li",{className:"navbar-nav-item",activeclassname:"active"},r.a.createElement(s.b,{to:"/categories",className:"navbar-nav-link"},r.a.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"svg-inline--fa fa-layout fa-w-18 fa-9x"},r.a.createElement("path",{d:"M4 11H9V5H4V11ZM4 18H9V12H4V18ZM10 18H15V12H10V18ZM16 18H21V12H16V18ZM10 11H15V5H10V11ZM16 5V11H21V5H16Z",fill:"currentColor",className:"fa-secondary"})),r.a.createElement("span",{className:"link-text"},"Catégories"))),r.a.createElement("li",{className:"navbar-nav-item",activeclassname:"active"},r.a.createElement(s.b,{to:"/about",className:"navbar-nav-link"},r.a.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"svg-inline--fa fa-book fa-w-16 fa-5x"},r.a.createElement("path",{d:"M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM6 4H11V12L8.5 10.5L6 12V4Z",fill:"currentColor",className:"fa-secondary"})),r.a.createElement("span",{className:"link-text"},"A propos"))),r.a.createElement("li",{className:"navbar-nav-item",activeclassname:"active"},r.a.createElement(s.b,{to:"/contact",className:"navbar-nav-link"},r.a.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"svg-inline--fa fa-message fa-w-20 fa-5x"},r.a.createElement("path",{d:"M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM18 14H6V12H18V14ZM18 11H6V9H18V11ZM18 8H6V6H18V8Z",fill:"currentColor",className:"fa-secondary"})),r.a.createElement("span",{className:"link-text"},"Contact")))))}),m=(a(39),function(){return r.a.createElement("div",{className:"home"},r.a.createElement("h1",{className:"home-title"},r.a.createElement("span",{className:"home-title--home"}," Home"),r.a.createElement("span",{className:"home-title--layout"}," Layout")),r.a.createElement("p",{className:"home-description"},"On a souvent besoin de maquette, Que ce soit pour représenter le rendu des bannières et de l'avatar d'une page professionnelle, la connexion ou la création de compte sur une application mobile, ou encore créer une bannière publicitaire et pleins d'autres..."),r.a.createElement("p",{className:"home-description"},'Bref, les utilisations des templates sont multiples et diverses. J\'ai donc créé cette application pour mettre mes idées sur "papier". Je vais mettre cette application à jour régulièrement a mesure de mon temps libre.'),r.a.createElement("p",{className:"home-description"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae harum a necessitatibus totam dolores laborum vero beatae impedit, quas, aperiam quam? In sed corporis delectus explicabo cupiditate. Molestiae, sed adipisci. Necessitatibus quos reiciendis, laborum quaerat quis minus, beatae asperiores, praesentium similique reprehenderit esse quidem porro aut assumenda qui aliquam odio!"),r.a.createElement("p",{className:"home-description"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sequi nisi eveniet quo veniam, eum consequuntur! Possimus nihil reiciendis laborum quasi itaque explicabo obcaecati, hic, dolorum beatae in similique temporibus."),r.a.createElement(s.b,{to:"/categories",className:"home-button"},"Voir les catégories"))}),d=(a(41),[{id:1,title:"Profil",text:"\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolorem consequatur vel dolorum id ipsam quas! Inventore impedit excepturi, in a necessitatibus odio molestias repudiandae eius ab perspiciatis blanditiis ipsum!\n    "}]),u=[{id:1,link:"/",title:"Contact",text:"\n      La page de contact d’un site web est aujourd’hui encore trop souvent délaissée, peu soignée, voir vide ou trop chargée. Pourtant son importance est grande.\n      Quand vous avez un rendez-vous professionnel, les premières secondes sont primordiales pour faire bonne impression, tout comme la manière de prendre congé à la fin de l’entrevue.\n    "}],p=function(){return r.a.createElement("div",{className:"categories"},r.a.createElement("h1",{className:"categories-title"},"Catégories"),r.a.createElement("div",{className:"categories-container"},u.map((function(e){var t=e.id,a=e.link,n=e.title,o=e.text;return r.a.createElement(s.b,{to:a,key:t,className:"categories-cards"},r.a.createElement("h2",{className:"categories-cards-title"},n),r.a.createElement("p",{className:"categories-cards-description"},r.a.createElement("strong",{className:"categories-cards-description--strong"},"Description: "),r.a.createElement("br",null),o))})),d.map((function(e){var t=e.id,a=e.title,n=e.text;return r.a.createElement("div",{key:t,className:"categories-cards--soon",disabled:!0},r.a.createElement("h2",{className:"categories-cards-title"},a),r.a.createElement("p",{className:"categories-cards-description"},r.a.createElement("strong",{className:"categories-cards-description--strong"},"Description: "),r.a.createElement("br",null),n),r.a.createElement("p",{className:"categories-cards--soon-specimen categories-specimen-top-left"},r.a.createElement("span",null,"A venir")))}))))},f=(a(43),function(){return r.a.createElement("div",{className:"about"},r.a.createElement("h1",{className:"about-title"},"about"))}),g=(a(45),function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("h1",{className:"contact-title"},"contact"))}),b=function(){var e=Object(l.f)().pathname;return Object(n.useEffect)((function(){!function(){switch(e){case"/categories":document.title="Catégories | Home Layout";break;case"/about":document.title="A Propos | Home Layout";break;case"/contact":document.title="Contact | Home Layout";break;default:document.title="Home Layout"}}()})),r.a.createElement("div",{id:"app"},r.a.createElement(c,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/about"},r.a.createElement(f,null)),r.a.createElement(l.a,{path:"/categories"},r.a.createElement(p,null)),r.a.createElement(l.a,{path:"/contact"},r.a.createElement(g,null)),r.a.createElement(l.a,{exact:!0,path:"/homelayout"},r.a.createElement(m,null))))},h=a(11);function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){y(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var w={message:"Hello"},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"DO_SOMETHING":return x(x({},e),{},{message:t.message});default:return e}},N=function(e){return function(e){return function(t){console.log("Je suis le middleware, et je laisse passer cette action: ",t),e(t)}}},k=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||h.c)(Object(h.a)(N)),O=Object(h.d)(E,k),j=r.a.createElement(i.a,{store:O},r.a.createElement(s.a,null,r.a.createElement(b,null)));Object(o.render)(j,document.getElementById("root"))}});