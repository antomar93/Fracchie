import './polyfills.server.mjs';
import{$ as W1,A as T1,B as _1,C as C2,D as X,E as X2,L as B1,N as E1,O as R1,P as g2,Q as I1,R as O1,S as U1,V as G1,a as M2,b as Z,c as U2,d as q,e as c2,f as G2,g as n2,h as y1,i as S1,j as W2,k as w1,l as j,m as D,n as q2,o as j2,p as $,q as k1,r as A1,s as D1,t as k,u as P,v as t2,w as P1,x as F1,y as o2,z as $2}from"./chunk-KJJFFW2M.mjs";import{a as b1,b as N1}from"./chunk-VVCT4QZE.mjs";var l4={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},w0=N1(b1({},l4),{"[class.ng-submitted]":"isSubmitted"});var q1=new U2("CallSetDisabledState",{providedIn:"root",factory:()=>Q2}),Q2="always";var f4=new U2("");var j1=(()=>{let a=class a{};a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=c2({type:a}),a.\u0275inj=Z({});let c=a;return c})();var $1=(()=>{let a=class a{static withConfig(e){return{ngModule:a,providers:[{provide:q1,useValue:e.callSetDisabledState??Q2}]}}};a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=c2({type:a}),a.\u0275inj=Z({imports:[j1]});let c=a;return c})(),X1=(()=>{let a=class a{static withConfig(e){return{ngModule:a,providers:[{provide:f4,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:q1,useValue:e.callSetDisabledState??Q2}]}}};a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=c2({type:a}),a.\u0275inj=Z({imports:[j1]});let c=a;return c})();function Y1(c,a){var r=Object.keys(c);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(c);a&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(c,i).enumerable})),r.push.apply(r,e)}return r}function f(c){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?Y1(Object(r),!0).forEach(function(e){V(c,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(r)):Y1(Object(r)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(r,e))})}return c}function F2(c){"@babel/helpers - typeof";return F2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},F2(c)}function m4(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function Q1(c,a){for(var r=0;r<a.length;r++){var e=a[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(c,e.key,e)}}function h4(c,a,r){return a&&Q1(c.prototype,a),r&&Q1(c,r),Object.defineProperty(c,"prototype",{writable:!1}),c}function V(c,a,r){return a in c?Object.defineProperty(c,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):c[a]=r,c}function h1(c,a){return u4(c)||z4(c,a)||C3(c,a)||p4()}function d2(c){return v4(c)||H4(c)||C3(c)||d4()}function v4(c){if(Array.isArray(c))return a1(c)}function u4(c){if(Array.isArray(c))return c}function H4(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function z4(c,a){var r=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(r!=null){var e=[],i=!0,s=!1,n,t;try{for(r=r.call(c);!(i=(n=r.next()).done)&&(e.push(n.value),!(a&&e.length===a));i=!0);}catch(o){s=!0,t=o}finally{try{!i&&r.return!=null&&r.return()}finally{if(s)throw t}}return e}}function C3(c,a){if(c){if(typeof c=="string")return a1(c,a);var r=Object.prototype.toString.call(c).slice(8,-1);if(r==="Object"&&c.constructor&&(r=c.constructor.name),r==="Map"||r==="Set")return Array.from(c);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a1(c,a)}}function a1(c,a){(a==null||a>c.length)&&(a=c.length);for(var r=0,e=new Array(a);r<a;r++)e[r]=c[r];return e}function d4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var K1=function(){},v1={},g3={},L3=null,x3={mark:K1,measure:K1};try{typeof window<"u"&&(v1=window),typeof document<"u"&&(g3=document),typeof MutationObserver<"u"&&(L3=MutationObserver),typeof performance<"u"&&(x3=performance)}catch{}var V4=v1.navigator||{},J1=V4.userAgent,Z1=J1===void 0?"":J1,I=v1,d=g3,c3=L3,L2=x3,D0=!!I.document,B=!!d.documentElement&&!!d.head&&typeof d.addEventListener=="function"&&typeof d.createElement=="function",b3=~Z1.indexOf("MSIE")||~Z1.indexOf("Trident/"),x2,b2,N2,y2,S2,F="___FONT_AWESOME___",e1=16,N3="fa",y3="svg-inline--fa",K="data-fa-i2svg",r1="data-fa-pseudo-element",M4="data-fa-pseudo-element-pending",u1="data-prefix",H1="data-icon",a3="fontawesome-i2svg",C4="async",g4=["HTML","HEAD","STYLE","SCRIPT"],S3=function(){try{return process.env.NODE_ENV==="production"}catch{return!1}}(),z="classic",p="sharp",z1=[z,p];function p2(c){return new Proxy(c,{get:function(r,e){return e in r?r[e]:r[z]}})}var h2=p2((x2={},V(x2,z,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),V(x2,p,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),x2)),v2=p2((b2={},V(b2,z,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),V(b2,p,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),b2)),u2=p2((N2={},V(N2,z,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),V(N2,p,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),N2)),L4=p2((y2={},V(y2,z,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),V(y2,p,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),y2)),x4=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,w3="fa-layers-text",b4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,N4=p2((S2={},V(S2,z,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),V(S2,p,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),S2)),k3=[1,2,3,4,5,6,7,8,9,10],y4=k3.concat([11,12,13,14,15,16,17,18,19,20]),S4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Y={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},H2=new Set;Object.keys(v2[z]).map(H2.add.bind(H2));Object.keys(v2[p]).map(H2.add.bind(H2));var w4=[].concat(z1,d2(H2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Y.GROUP,Y.SWAP_OPACITY,Y.PRIMARY,Y.SECONDARY]).concat(k3.map(function(c){return"".concat(c,"x")})).concat(y4.map(function(c){return"w-".concat(c)})),f2=I.FontAwesomeConfig||{};function k4(c){var a=d.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function A4(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}d&&typeof d.querySelector=="function"&&(e3=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],e3.forEach(function(c){var a=h1(c,2),r=a[0],e=a[1],i=A4(k4(r));i!=null&&(f2[e]=i)}));var e3,A3={styleDefault:"solid",familyDefault:"classic",cssPrefix:N3,replacementClass:y3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};f2.familyPrefix&&(f2.cssPrefix=f2.familyPrefix);var i2=f(f({},A3),f2);i2.autoReplaceSvg||(i2.observeMutations=!1);var h={};Object.keys(A3).forEach(function(c){Object.defineProperty(h,c,{enumerable:!0,set:function(r){i2[c]=r,m2.forEach(function(e){return e(h)})},get:function(){return i2[c]}})});Object.defineProperty(h,"familyPrefix",{enumerable:!0,set:function(a){i2.cssPrefix=a,m2.forEach(function(r){return r(h)})},get:function(){return i2.cssPrefix}});I.FontAwesomeConfig=h;var m2=[];function D4(c){return m2.push(c),function(){m2.splice(m2.indexOf(c),1)}}var R=e1,A={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function P4(c){if(!(!c||!B)){var a=d.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var r=d.head.childNodes,e=null,i=r.length-1;i>-1;i--){var s=r[i],n=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(e=s)}return d.head.insertBefore(a,e),c}}var F4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function z2(){for(var c=12,a="";c-- >0;)a+=F4[Math.random()*62|0];return a}function s2(c){for(var a=[],r=(c||[]).length>>>0;r--;)a[r]=c[r];return a}function d1(c){return c.classList?s2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function D3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function T4(c){return Object.keys(c||{}).reduce(function(a,r){return a+"".concat(r,'="').concat(D3(c[r]),'" ')},"").trim()}function B2(c){return Object.keys(c||{}).reduce(function(a,r){return a+"".concat(r,": ").concat(c[r].trim(),";")},"")}function p1(c){return c.size!==A.size||c.x!==A.x||c.y!==A.y||c.rotate!==A.rotate||c.flipX||c.flipY}function _4(c){var a=c.transform,r=c.containerWidth,e=c.iconWidth,i={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),t="rotate(".concat(a.rotate," 0 0)"),o={transform:"".concat(s," ").concat(n," ").concat(t)},m={transform:"translate(".concat(e/2*-1," -256)")};return{outer:i,inner:o,path:m}}function B4(c){var a=c.transform,r=c.width,e=r===void 0?e1:r,i=c.height,s=i===void 0?e1:i,n=c.startCentered,t=n===void 0?!1:n,o="";return t&&b3?o+="translate(".concat(a.x/R-e/2,"em, ").concat(a.y/R-s/2,"em) "):t?o+="translate(calc(-50% + ".concat(a.x/R,"em), calc(-50% + ").concat(a.y/R,"em)) "):o+="translate(".concat(a.x/R,"em, ").concat(a.y/R,"em) "),o+="scale(".concat(a.size/R*(a.flipX?-1:1),", ").concat(a.size/R*(a.flipY?-1:1),") "),o+="rotate(".concat(a.rotate,"deg) "),o}var E4=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function P3(){var c=N3,a=y3,r=h.cssPrefix,e=h.replacementClass,i=E4;if(r!==c||e!==a){var s=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),t=new RegExp("\\.".concat(a),"g");i=i.replace(s,".".concat(r,"-")).replace(n,"--".concat(r,"-")).replace(t,".".concat(e))}return i}var r3=!1;function K2(){h.autoAddCss&&!r3&&(P4(P3()),r3=!0)}var R4={mixout:function(){return{dom:{css:P3,insertCss:K2}}},hooks:function(){return{beforeDOMElementCreation:function(){K2()},beforeI2svg:function(){K2()}}}},T=I||{};T[F]||(T[F]={});T[F].styles||(T[F].styles={});T[F].hooks||(T[F].hooks={});T[F].shims||(T[F].shims=[]);var y=T[F],F3=[],I4=function c(){d.removeEventListener("DOMContentLoaded",c),T2=1,F3.map(function(a){return a()})},T2=!1;B&&(T2=(d.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(d.readyState),T2||d.addEventListener("DOMContentLoaded",I4));function O4(c){B&&(T2?setTimeout(c,0):F3.push(c))}function V2(c){var a=c.tag,r=c.attributes,e=r===void 0?{}:r,i=c.children,s=i===void 0?[]:i;return typeof c=="string"?D3(c):"<".concat(a," ").concat(T4(e),">").concat(s.map(V2).join(""),"</").concat(a,">")}function i3(c,a,r){if(c&&c[a]&&c[a][r])return{prefix:a,iconName:r,icon:c[a][r]}}var U4=function(a,r){return function(e,i,s,n){return a.call(r,e,i,s,n)}},J2=function(a,r,e,i){var s=Object.keys(a),n=s.length,t=i!==void 0?U4(r,i):r,o,m,l;for(e===void 0?(o=1,l=a[s[0]]):(o=0,l=e);o<n;o++)m=s[o],l=t(l,a[m],m,a);return l};function G4(c){for(var a=[],r=0,e=c.length;r<e;){var i=c.charCodeAt(r++);if(i>=55296&&i<=56319&&r<e){var s=c.charCodeAt(r++);(s&64512)==56320?a.push(((i&1023)<<10)+(s&1023)+65536):(a.push(i),r--)}else a.push(i)}return a}function i1(c){var a=G4(c);return a.length===1?a[0].toString(16):null}function W4(c,a){var r=c.length,e=c.charCodeAt(a),i;return e>=55296&&e<=56319&&r>a+1&&(i=c.charCodeAt(a+1),i>=56320&&i<=57343)?(e-55296)*1024+i-56320+65536:e}function s3(c){return Object.keys(c).reduce(function(a,r){var e=c[r],i=!!e.icon;return i?a[e.iconName]=e.icon:a[r]=e,a},{})}function s1(c,a){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=r.skipHooks,i=e===void 0?!1:e,s=s3(a);typeof y.hooks.addPack=="function"&&!i?y.hooks.addPack(c,s3(a)):y.styles[c]=f(f({},y.styles[c]||{}),s),c==="fas"&&s1("fa",a)}var w2,k2,A2,a2=y.styles,q4=y.shims,j4=(w2={},V(w2,z,Object.values(u2[z])),V(w2,p,Object.values(u2[p])),w2),V1=null,T3={},_3={},B3={},E3={},R3={},$4=(k2={},V(k2,z,Object.keys(h2[z])),V(k2,p,Object.keys(h2[p])),k2);function X4(c){return~w4.indexOf(c)}function Y4(c,a){var r=a.split("-"),e=r[0],i=r.slice(1).join("-");return e===c&&i!==""&&!X4(i)?i:null}var I3=function(){var a=function(s){return J2(a2,function(n,t,o){return n[o]=J2(t,s,{}),n},{})};T3=a(function(i,s,n){if(s[3]&&(i[s[3]]=n),s[2]){var t=s[2].filter(function(o){return typeof o=="number"});t.forEach(function(o){i[o.toString(16)]=n})}return i}),_3=a(function(i,s,n){if(i[n]=n,s[2]){var t=s[2].filter(function(o){return typeof o=="string"});t.forEach(function(o){i[o]=n})}return i}),R3=a(function(i,s,n){var t=s[2];return i[n]=n,t.forEach(function(o){i[o]=n}),i});var r="far"in a2||h.autoFetchSvg,e=J2(q4,function(i,s){var n=s[0],t=s[1],o=s[2];return t==="far"&&!r&&(t="fas"),typeof n=="string"&&(i.names[n]={prefix:t,iconName:o}),typeof n=="number"&&(i.unicodes[n.toString(16)]={prefix:t,iconName:o}),i},{names:{},unicodes:{}});B3=e.names,E3=e.unicodes,V1=E2(h.styleDefault,{family:h.familyDefault})};D4(function(c){V1=E2(c.styleDefault,{family:h.familyDefault})});I3();function M1(c,a){return(T3[c]||{})[a]}function Q4(c,a){return(_3[c]||{})[a]}function Q(c,a){return(R3[c]||{})[a]}function O3(c){return B3[c]||{prefix:null,iconName:null}}function K4(c){var a=E3[c],r=M1("fas",c);return a||(r?{prefix:"fas",iconName:r}:null)||{prefix:null,iconName:null}}function O(){return V1}var C1=function(){return{prefix:null,iconName:null,rest:[]}};function E2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.family,e=r===void 0?z:r,i=h2[e][c],s=v2[e][c]||v2[e][i],n=c in y.styles?c:null;return s||n||null}var n3=(A2={},V(A2,z,Object.keys(u2[z])),V(A2,p,Object.keys(u2[p])),A2);function R2(c){var a,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=r.skipLookups,i=e===void 0?!1:e,s=(a={},V(a,z,"".concat(h.cssPrefix,"-").concat(z)),V(a,p,"".concat(h.cssPrefix,"-").concat(p)),a),n=null,t=z;(c.includes(s[z])||c.some(function(m){return n3[z].includes(m)}))&&(t=z),(c.includes(s[p])||c.some(function(m){return n3[p].includes(m)}))&&(t=p);var o=c.reduce(function(m,l){var v=Y4(h.cssPrefix,l);if(a2[l]?(l=j4[t].includes(l)?L4[t][l]:l,n=l,m.prefix=l):$4[t].indexOf(l)>-1?(n=l,m.prefix=E2(l,{family:t})):v?m.iconName=v:l!==h.replacementClass&&l!==s[z]&&l!==s[p]&&m.rest.push(l),!i&&m.prefix&&m.iconName){var u=n==="fa"?O3(m.iconName):{},H=Q(m.prefix,m.iconName);u.prefix&&(n=null),m.iconName=u.iconName||H||m.iconName,m.prefix=u.prefix||m.prefix,m.prefix==="far"&&!a2.far&&a2.fas&&!h.autoFetchSvg&&(m.prefix="fas")}return m},C1());return(c.includes("fa-brands")||c.includes("fab"))&&(o.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(o.prefix="fad"),!o.prefix&&t===p&&(a2.fass||h.autoFetchSvg)&&(o.prefix="fass",o.iconName=Q(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||n==="fa")&&(o.prefix=O()||"fas"),o}var J4=function(){function c(){m4(this,c),this.definitions={}}return h4(c,[{key:"add",value:function(){for(var r=this,e=arguments.length,i=new Array(e),s=0;s<e;s++)i[s]=arguments[s];var n=i.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(t){r.definitions[t]=f(f({},r.definitions[t]||{}),n[t]),s1(t,n[t]);var o=u2[z][t];o&&s1(o,n[t]),I3()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(r,e){var i=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(i).map(function(s){var n=i[s],t=n.prefix,o=n.iconName,m=n.icon,l=m[2];r[t]||(r[t]={}),l.length>0&&l.forEach(function(v){typeof v=="string"&&(r[t][v]=m)}),r[t][o]=m}),r}}]),c}(),t3=[],e2={},r2={},Z4=Object.keys(r2);function c6(c,a){var r=a.mixoutsTo;return t3=c,e2={},Object.keys(r2).forEach(function(e){Z4.indexOf(e)===-1&&delete r2[e]}),t3.forEach(function(e){var i=e.mixout?e.mixout():{};if(Object.keys(i).forEach(function(n){typeof i[n]=="function"&&(r[n]=i[n]),F2(i[n])==="object"&&Object.keys(i[n]).forEach(function(t){r[n]||(r[n]={}),r[n][t]=i[n][t]})}),e.hooks){var s=e.hooks();Object.keys(s).forEach(function(n){e2[n]||(e2[n]=[]),e2[n].push(s[n])})}e.provides&&e.provides(r2)}),r}function n1(c,a){for(var r=arguments.length,e=new Array(r>2?r-2:0),i=2;i<r;i++)e[i-2]=arguments[i];var s=e2[c]||[];return s.forEach(function(n){a=n.apply(null,[a].concat(e))}),a}function J(c){for(var a=arguments.length,r=new Array(a>1?a-1:0),e=1;e<a;e++)r[e-1]=arguments[e];var i=e2[c]||[];i.forEach(function(s){s.apply(null,r)})}function _(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return r2[c]?r2[c].apply(null,a):void 0}function t1(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,r=c.prefix||O();if(a)return a=Q(r,a)||a,i3(U3.definitions,r,a)||i3(y.styles,r,a)}var U3=new J4,a6=function(){h.autoReplaceSvg=!1,h.observeMutations=!1,J("noAuto")},e6={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return B?(J("beforeI2svg",a),_("pseudoElements2svg",a),_("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=a.autoReplaceSvgRoot;h.autoReplaceSvg===!1&&(h.autoReplaceSvg=!0),h.observeMutations=!0,O4(function(){i6({autoReplaceSvgRoot:r}),J("watch",a)})}},r6={icon:function(a){if(a===null)return null;if(F2(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:Q(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var r=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],e=E2(a[0]);return{prefix:e,iconName:Q(e,r)||r}}if(typeof a=="string"&&(a.indexOf("".concat(h.cssPrefix,"-"))>-1||a.match(x4))){var i=R2(a.split(" "),{skipLookups:!0});return{prefix:i.prefix||O(),iconName:Q(i.prefix,i.iconName)||i.iconName}}if(typeof a=="string"){var s=O();return{prefix:s,iconName:Q(s,a)||a}}}},x={noAuto:a6,config:h,dom:e6,parse:r6,library:U3,findIconDefinition:t1,toHtml:V2},i6=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=a.autoReplaceSvgRoot,e=r===void 0?d:r;(Object.keys(y.styles).length>0||h.autoFetchSvg)&&B&&h.autoReplaceSvg&&x.dom.i2svg({node:e})};function I2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(e){return V2(e)})}}),Object.defineProperty(c,"node",{get:function(){if(B){var e=d.createElement("div");return e.innerHTML=c.html,e.children}}}),c}function s6(c){var a=c.children,r=c.main,e=c.mask,i=c.attributes,s=c.styles,n=c.transform;if(p1(n)&&r.found&&!e.found){var t=r.width,o=r.height,m={x:t/o/2,y:.5};i.style=B2(f(f({},s),{},{"transform-origin":"".concat(m.x+n.x/16,"em ").concat(m.y+n.y/16,"em")}))}return[{tag:"svg",attributes:i,children:a}]}function n6(c){var a=c.prefix,r=c.iconName,e=c.children,i=c.attributes,s=c.symbol,n=s===!0?"".concat(a,"-").concat(h.cssPrefix,"-").concat(r):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},i),{},{id:n}),children:e}]}]}function g1(c){var a=c.icons,r=a.main,e=a.mask,i=c.prefix,s=c.iconName,n=c.transform,t=c.symbol,o=c.title,m=c.maskId,l=c.titleId,v=c.extra,u=c.watchable,H=u===void 0?!1:u,C=e.found?e:r,b=C.width,N=C.height,S=i==="fak",M=[h.replacementClass,s?"".concat(h.cssPrefix,"-").concat(s):""].filter(function(E){return v.classes.indexOf(E)===-1}).filter(function(E){return E!==""||!!E}).concat(v.classes).join(" "),g={children:[],attributes:f(f({},v.attributes),{},{"data-prefix":i,"data-icon":s,class:M,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(b," ").concat(N)})},w=S&&!~v.classes.indexOf("fa-fw")?{width:"".concat(b/N*16*.0625,"em")}:{};H&&(g.attributes[K]=""),o&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(l||z2())},children:[o]}),delete g.attributes.title);var L=f(f({},g),{},{prefix:i,iconName:s,main:r,mask:e,maskId:m,transform:n,symbol:t,styles:f(f({},w),v.styles)}),G=e.found&&r.found?_("generateAbstractMask",L)||{children:[],attributes:{}}:_("generateAbstractIcon",L)||{children:[],attributes:{}},W=G.children,O2=G.attributes;return L.children=W,L.attributes=O2,t?n6(L):s6(L)}function o3(c){var a=c.content,r=c.width,e=c.height,i=c.transform,s=c.title,n=c.extra,t=c.watchable,o=t===void 0?!1:t,m=f(f(f({},n.attributes),s?{title:s}:{}),{},{class:n.classes.join(" ")});o&&(m[K]="");var l=f({},n.styles);p1(i)&&(l.transform=B4({transform:i,startCentered:!0,width:r,height:e}),l["-webkit-transform"]=l.transform);var v=B2(l);v.length>0&&(m.style=v);var u=[];return u.push({tag:"span",attributes:m,children:[a]}),s&&u.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),u}function t6(c){var a=c.content,r=c.title,e=c.extra,i=f(f(f({},e.attributes),r?{title:r}:{}),{},{class:e.classes.join(" ")}),s=B2(e.styles);s.length>0&&(i.style=s);var n=[];return n.push({tag:"span",attributes:i,children:[a]}),r&&n.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),n}var Z2=y.styles;function o1(c){var a=c[0],r=c[1],e=c.slice(4),i=h1(e,1),s=i[0],n=null;return Array.isArray(s)?n={tag:"g",attributes:{class:"".concat(h.cssPrefix,"-").concat(Y.GROUP)},children:[{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(Y.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(Y.PRIMARY),fill:"currentColor",d:s[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:a,height:r,icon:n}}var o6={found:!1,width:512,height:512};function l6(c,a){!S3&&!h.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function l1(c,a){var r=a;return a==="fa"&&h.styleDefault!==null&&(a=O()),new Promise(function(e,i){var s={found:!1,width:512,height:512,icon:_("missingIconAbstract")||{}};if(r==="fa"){var n=O3(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&Z2[a]&&Z2[a][c]){var t=Z2[a][c];return e(o1(t))}l6(c,a),e(f(f({},o6),{},{icon:h.showMissingIcons&&c?_("missingIconAbstract")||{}:{}}))})}var l3=function(){},f1=h.measurePerformance&&L2&&L2.mark&&L2.measure?L2:{mark:l3,measure:l3},l2='FA "6.5.2"',f6=function(a){return f1.mark("".concat(l2," ").concat(a," begins")),function(){return G3(a)}},G3=function(a){f1.mark("".concat(l2," ").concat(a," ends")),f1.measure("".concat(l2," ").concat(a),"".concat(l2," ").concat(a," begins"),"".concat(l2," ").concat(a," ends"))},L1={begin:f6,end:G3},D2=function(){};function f3(c){var a=c.getAttribute?c.getAttribute(K):null;return typeof a=="string"}function m6(c){var a=c.getAttribute?c.getAttribute(u1):null,r=c.getAttribute?c.getAttribute(H1):null;return a&&r}function h6(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(h.replacementClass)}function v6(){if(h.autoReplaceSvg===!0)return P2.replace;var c=P2[h.autoReplaceSvg];return c||P2.replace}function u6(c){return d.createElementNS("http://www.w3.org/2000/svg",c)}function H6(c){return d.createElement(c)}function W3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.ceFn,e=r===void 0?c.tag==="svg"?u6:H6:r;if(typeof c=="string")return d.createTextNode(c);var i=e(c.tag);Object.keys(c.attributes||[]).forEach(function(n){i.setAttribute(n,c.attributes[n])});var s=c.children||[];return s.forEach(function(n){i.appendChild(W3(n,{ceFn:e}))}),i}function z6(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var P2={replace:function(a){var r=a[0];if(r.parentNode)if(a[1].forEach(function(i){r.parentNode.insertBefore(W3(i),r)}),r.getAttribute(K)===null&&h.keepOriginalSource){var e=d.createComment(z6(r));r.parentNode.replaceChild(e,r)}else r.remove()},nest:function(a){var r=a[0],e=a[1];if(~d1(r).indexOf(h.replacementClass))return P2.replace(a);var i=new RegExp("".concat(h.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var s=e[0].attributes.class.split(" ").reduce(function(t,o){return o===h.replacementClass||o.match(i)?t.toSvg.push(o):t.toNode.push(o),t},{toNode:[],toSvg:[]});e[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?r.removeAttribute("class"):r.setAttribute("class",s.toNode.join(" "))}var n=e.map(function(t){return V2(t)}).join(`
`);r.setAttribute(K,""),r.innerHTML=n}};function m3(c){c()}function q3(c,a){var r=typeof a=="function"?a:D2;if(c.length===0)r();else{var e=m3;h.mutateApproach===C4&&(e=I.requestAnimationFrame||m3),e(function(){var i=v6(),s=L1.begin("mutate");c.map(i),s(),r()})}}var x1=!1;function j3(){x1=!0}function m1(){x1=!1}var _2=null;function h3(c){if(c3&&h.observeMutations){var a=c.treeCallback,r=a===void 0?D2:a,e=c.nodeCallback,i=e===void 0?D2:e,s=c.pseudoElementsCallback,n=s===void 0?D2:s,t=c.observeMutationsRoot,o=t===void 0?d:t;_2=new c3(function(m){if(!x1){var l=O();s2(m).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!f3(v.addedNodes[0])&&(h.searchPseudoElements&&n(v.target),r(v.target)),v.type==="attributes"&&v.target.parentNode&&h.searchPseudoElements&&n(v.target.parentNode),v.type==="attributes"&&f3(v.target)&&~S4.indexOf(v.attributeName))if(v.attributeName==="class"&&m6(v.target)){var u=R2(d1(v.target)),H=u.prefix,C=u.iconName;v.target.setAttribute(u1,H||l),C&&v.target.setAttribute(H1,C)}else h6(v.target)&&i(v.target)})}}),B&&_2.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function d6(){_2&&_2.disconnect()}function p6(c){var a=c.getAttribute("style"),r=[];return a&&(r=a.split(";").reduce(function(e,i){var s=i.split(":"),n=s[0],t=s.slice(1);return n&&t.length>0&&(e[n]=t.join(":").trim()),e},{})),r}function V6(c){var a=c.getAttribute("data-prefix"),r=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",i=R2(d1(c));return i.prefix||(i.prefix=O()),a&&r&&(i.prefix=a,i.iconName=r),i.iconName&&i.prefix||(i.prefix&&e.length>0&&(i.iconName=Q4(i.prefix,c.innerText)||M1(i.prefix,i1(c.innerText))),!i.iconName&&h.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=c.firstChild.data)),i}function M6(c){var a=s2(c.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),r=c.getAttribute("title"),e=c.getAttribute("data-fa-title-id");return h.autoA11y&&(r?a["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(e||z2()):(a["aria-hidden"]="true",a.focusable="false")),a}function C6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:A,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function v3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},r=V6(c),e=r.iconName,i=r.prefix,s=r.rest,n=M6(c),t=n1("parseNodeAttributes",{},c),o=a.styleParser?p6(c):[];return f({iconName:e,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:i,transform:A,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:o,attributes:n}},t)}var g6=y.styles;function $3(c){var a=h.autoReplaceSvg==="nest"?v3(c,{styleParser:!1}):v3(c);return~a.extra.classes.indexOf(w3)?_("generateLayersText",c,a):_("generateSvgReplacementMutation",c,a)}var U=new Set;z1.map(function(c){U.add("fa-".concat(c))});Object.keys(h2[z]).map(U.add.bind(U));Object.keys(h2[p]).map(U.add.bind(U));U=d2(U);function u3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!B)return Promise.resolve();var r=d.documentElement.classList,e=function(v){return r.add("".concat(a3,"-").concat(v))},i=function(v){return r.remove("".concat(a3,"-").concat(v))},s=h.autoFetchSvg?U:z1.map(function(l){return"fa-".concat(l)}).concat(Object.keys(g6));s.includes("fa")||s.push("fa");var n=[".".concat(w3,":not([").concat(K,"])")].concat(s.map(function(l){return".".concat(l,":not([").concat(K,"])")})).join(", ");if(n.length===0)return Promise.resolve();var t=[];try{t=s2(c.querySelectorAll(n))}catch{}if(t.length>0)e("pending"),i("complete");else return Promise.resolve();var o=L1.begin("onTree"),m=t.reduce(function(l,v){try{var u=$3(v);u&&l.push(u)}catch(H){S3||H.name==="MissingIcon"&&console.error(H)}return l},[]);return new Promise(function(l,v){Promise.all(m).then(function(u){q3(u,function(){e("active"),e("complete"),i("pending"),typeof a=="function"&&a(),o(),l()})}).catch(function(u){o(),v(u)})})}function L6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;$3(c).then(function(r){r&&q3([r],a)})}function x6(c){return function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(a||{}).icon?a:t1(a||{}),i=r.mask;return i&&(i=(i||{}).icon?i:t1(i||{})),c(e,f(f({},r),{},{mask:i}))}}var b6=function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=r.transform,i=e===void 0?A:e,s=r.symbol,n=s===void 0?!1:s,t=r.mask,o=t===void 0?null:t,m=r.maskId,l=m===void 0?null:m,v=r.title,u=v===void 0?null:v,H=r.titleId,C=H===void 0?null:H,b=r.classes,N=b===void 0?[]:b,S=r.attributes,M=S===void 0?{}:S,g=r.styles,w=g===void 0?{}:g;if(a){var L=a.prefix,G=a.iconName,W=a.icon;return I2(f({type:"icon"},a),function(){return J("beforeDOMElementCreation",{iconDefinition:a,params:r}),h.autoA11y&&(u?M["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(C||z2()):(M["aria-hidden"]="true",M.focusable="false")),g1({icons:{main:o1(W),mask:o?o1(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:L,iconName:G,transform:f(f({},A),i),symbol:n,title:u,maskId:l,titleId:C,extra:{attributes:M,styles:w,classes:N}})})}},N6={mixout:function(){return{icon:x6(b6)}},hooks:function(){return{mutationObserverCallbacks:function(r){return r.treeCallback=u3,r.nodeCallback=L6,r}}},provides:function(a){a.i2svg=function(r){var e=r.node,i=e===void 0?d:e,s=r.callback,n=s===void 0?function(){}:s;return u3(i,n)},a.generateSvgReplacementMutation=function(r,e){var i=e.iconName,s=e.title,n=e.titleId,t=e.prefix,o=e.transform,m=e.symbol,l=e.mask,v=e.maskId,u=e.extra;return new Promise(function(H,C){Promise.all([l1(i,t),l.iconName?l1(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(b){var N=h1(b,2),S=N[0],M=N[1];H([r,g1({icons:{main:S,mask:M},prefix:t,iconName:i,transform:o,symbol:m,maskId:v,title:s,titleId:n,extra:u,watchable:!0})])}).catch(C)})},a.generateAbstractIcon=function(r){var e=r.children,i=r.attributes,s=r.main,n=r.transform,t=r.styles,o=B2(t);o.length>0&&(i.style=o);var m;return p1(n)&&(m=_("generateAbstractTransformGrouping",{main:s,transform:n,containerWidth:s.width,iconWidth:s.width})),e.push(m||s.icon),{children:e,attributes:i}}}},y6={mixout:function(){return{layer:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.classes,s=i===void 0?[]:i;return I2({type:"layer"},function(){J("beforeDOMElementCreation",{assembler:r,params:e});var n=[];return r(function(t){Array.isArray(t)?t.map(function(o){n=n.concat(o.abstract)}):n=n.concat(t.abstract)}),[{tag:"span",attributes:{class:["".concat(h.cssPrefix,"-layers")].concat(d2(s)).join(" ")},children:n}]})}}}},S6={mixout:function(){return{counter:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.title,s=i===void 0?null:i,n=e.classes,t=n===void 0?[]:n,o=e.attributes,m=o===void 0?{}:o,l=e.styles,v=l===void 0?{}:l;return I2({type:"counter",content:r},function(){return J("beforeDOMElementCreation",{content:r,params:e}),t6({content:r.toString(),title:s,extra:{attributes:m,styles:v,classes:["".concat(h.cssPrefix,"-layers-counter")].concat(d2(t))}})})}}}},w6={mixout:function(){return{text:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.transform,s=i===void 0?A:i,n=e.title,t=n===void 0?null:n,o=e.classes,m=o===void 0?[]:o,l=e.attributes,v=l===void 0?{}:l,u=e.styles,H=u===void 0?{}:u;return I2({type:"text",content:r},function(){return J("beforeDOMElementCreation",{content:r,params:e}),o3({content:r,transform:f(f({},A),s),title:t,extra:{attributes:v,styles:H,classes:["".concat(h.cssPrefix,"-layers-text")].concat(d2(m))}})})}}},provides:function(a){a.generateLayersText=function(r,e){var i=e.title,s=e.transform,n=e.extra,t=null,o=null;if(b3){var m=parseInt(getComputedStyle(r).fontSize,10),l=r.getBoundingClientRect();t=l.width/m,o=l.height/m}return h.autoA11y&&!i&&(n.attributes["aria-hidden"]="true"),Promise.resolve([r,o3({content:r.innerHTML,width:t,height:o,transform:s,title:i,extra:n,watchable:!0})])}}},k6=new RegExp('"',"ug"),H3=[1105920,1112319];function A6(c){var a=c.replace(k6,""),r=W4(a,0),e=r>=H3[0]&&r<=H3[1],i=a.length===2?a[0]===a[1]:!1;return{value:i1(i?a[0]:a),isSecondary:e||i}}function z3(c,a){var r="".concat(M4).concat(a.replace(":","-"));return new Promise(function(e,i){if(c.getAttribute(r)!==null)return e();var s=s2(c.children),n=s.filter(function(W){return W.getAttribute(r1)===a})[0],t=I.getComputedStyle(c,a),o=t.getPropertyValue("font-family").match(b4),m=t.getPropertyValue("font-weight"),l=t.getPropertyValue("content");if(n&&!o)return c.removeChild(n),e();if(o&&l!=="none"&&l!==""){var v=t.getPropertyValue("content"),u=~["Sharp"].indexOf(o[2])?p:z,H=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?v2[u][o[2].toLowerCase()]:N4[u][m],C=A6(v),b=C.value,N=C.isSecondary,S=o[0].startsWith("FontAwesome"),M=M1(H,b),g=M;if(S){var w=K4(b);w.iconName&&w.prefix&&(M=w.iconName,H=w.prefix)}if(M&&!N&&(!n||n.getAttribute(u1)!==H||n.getAttribute(H1)!==g)){c.setAttribute(r,g),n&&c.removeChild(n);var L=C6(),G=L.extra;G.attributes[r1]=a,l1(M,H).then(function(W){var O2=g1(f(f({},L),{},{icons:{main:W,mask:C1()},prefix:H,iconName:g,extra:G,watchable:!0})),E=d.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(E,c.firstChild):c.appendChild(E),E.outerHTML=O2.map(function(s4){return V2(s4)}).join(`
`),c.removeAttribute(r),e()}).catch(i)}else e()}else e()})}function D6(c){return Promise.all([z3(c,"::before"),z3(c,"::after")])}function P6(c){return c.parentNode!==document.head&&!~g4.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(r1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function d3(c){if(B)return new Promise(function(a,r){var e=s2(c.querySelectorAll("*")).filter(P6).map(D6),i=L1.begin("searchPseudoElements");j3(),Promise.all(e).then(function(){i(),m1(),a()}).catch(function(){i(),m1(),r()})})}var F6={hooks:function(){return{mutationObserverCallbacks:function(r){return r.pseudoElementsCallback=d3,r}}},provides:function(a){a.pseudoElements2svg=function(r){var e=r.node,i=e===void 0?d:e;h.searchPseudoElements&&d3(i)}}},p3=!1,T6={mixout:function(){return{dom:{unwatch:function(){j3(),p3=!0}}}},hooks:function(){return{bootstrap:function(){h3(n1("mutationObserverCallbacks",{}))},noAuto:function(){d6()},watch:function(r){var e=r.observeMutationsRoot;p3?m1():h3(n1("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},V3=function(a){var r={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(e,i){var s=i.toLowerCase().split("-"),n=s[0],t=s.slice(1).join("-");if(n&&t==="h")return e.flipX=!0,e;if(n&&t==="v")return e.flipY=!0,e;if(t=parseFloat(t),isNaN(t))return e;switch(n){case"grow":e.size=e.size+t;break;case"shrink":e.size=e.size-t;break;case"left":e.x=e.x-t;break;case"right":e.x=e.x+t;break;case"up":e.y=e.y-t;break;case"down":e.y=e.y+t;break;case"rotate":e.rotate=e.rotate+t;break}return e},r)},_6={mixout:function(){return{parse:{transform:function(r){return V3(r)}}}},hooks:function(){return{parseNodeAttributes:function(r,e){var i=e.getAttribute("data-fa-transform");return i&&(r.transform=V3(i)),r}}},provides:function(a){a.generateAbstractTransformGrouping=function(r){var e=r.main,i=r.transform,s=r.containerWidth,n=r.iconWidth,t={transform:"translate(".concat(s/2," 256)")},o="translate(".concat(i.x*32,", ").concat(i.y*32,") "),m="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),l="rotate(".concat(i.rotate," 0 0)"),v={transform:"".concat(o," ").concat(m," ").concat(l)},u={transform:"translate(".concat(n/2*-1," -256)")},H={outer:t,inner:v,path:u};return{tag:"g",attributes:f({},H.outer),children:[{tag:"g",attributes:f({},H.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:f(f({},e.icon.attributes),H.path)}]}]}}}},c1={x:0,y:0,width:"100%",height:"100%"};function M3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function B6(c){return c.tag==="g"?c.children:[c]}var E6={hooks:function(){return{parseNodeAttributes:function(r,e){var i=e.getAttribute("data-fa-mask"),s=i?R2(i.split(" ").map(function(n){return n.trim()})):C1();return s.prefix||(s.prefix=O()),r.mask=s,r.maskId=e.getAttribute("data-fa-mask-id"),r}}},provides:function(a){a.generateAbstractMask=function(r){var e=r.children,i=r.attributes,s=r.main,n=r.mask,t=r.maskId,o=r.transform,m=s.width,l=s.icon,v=n.width,u=n.icon,H=_4({transform:o,containerWidth:v,iconWidth:m}),C={tag:"rect",attributes:f(f({},c1),{},{fill:"white"})},b=l.children?{children:l.children.map(M3)}:{},N={tag:"g",attributes:f({},H.inner),children:[M3(f({tag:l.tag,attributes:f(f({},l.attributes),H.path)},b))]},S={tag:"g",attributes:f({},H.outer),children:[N]},M="mask-".concat(t||z2()),g="clip-".concat(t||z2()),w={tag:"mask",attributes:f(f({},c1),{},{id:M,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[C,S]},L={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:B6(u)},w]};return e.push(L,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(M,")")},c1)}),{children:e,attributes:i}}}},R6={provides:function(a){var r=!1;I.matchMedia&&(r=I.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var e=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:f(f({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=f(f({},s),{},{attributeName:"opacity"}),t={tag:"circle",attributes:f(f({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return r||t.children.push({tag:"animate",attributes:f(f({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},n),{},{values:"1;0;1;1;0;1;"})}),e.push(t),e.push({tag:"path",attributes:f(f({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:r?[]:[{tag:"animate",attributes:f(f({},n),{},{values:"1;0;0;0;0;1;"})}]}),r||e.push({tag:"path",attributes:f(f({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},I6={hooks:function(){return{parseNodeAttributes:function(r,e){var i=e.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return r.symbol=s,r}}}},O6=[R4,N6,y6,S6,w6,F6,T6,_6,E6,R6,I6];c6(O6,{mixoutsTo:x});var P0=x.noAuto,F0=x.config,T0=x.library,_0=x.dom,X3=x.parse,B0=x.findIconDefinition,E0=x.toHtml,Y3=x.icon,R0=x.layer,U6=x.text,G6=x.counter;var W6=["*"],q6=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},j6=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},$6=c=>{let a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(r=>a[r]?r:null).filter(r=>r)},X6=c=>c.prefix!==void 0&&c.iconName!==void 0,Y6=(c,a)=>X6(c)?c:typeof c=="string"?{prefix:a,iconName:c}:{prefix:c[0],iconName:c[1]},Q6=(()=>{let a=class a{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};a.\u0275fac=function(i){return new(i||a)},a.\u0275prov=M2({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),K6=(()=>{let a=class a{constructor(){this.definitions={}}addIcons(...e){for(let i of e){i.prefix in this.definitions||(this.definitions[i.prefix]={}),this.definitions[i.prefix][i.iconName]=i;for(let s of i.icon[2])typeof s=="string"&&(this.definitions[i.prefix][s]=i)}}addIconPacks(...e){for(let i of e){let s=Object.keys(i).map(n=>i[n]);this.addIcons(...s)}}getIconDefinition(e,i){return e in this.definitions&&i in this.definitions[e]?this.definitions[e][i]:null}};a.\u0275fac=function(i){return new(i||a)},a.\u0275prov=M2({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),J6=(()=>{let a=class a{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};a.\u0275fac=function(i){return new(i||a)},a.\u0275dir=G2({type:a,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[n2]});let c=a;return c})(),Z6=(()=>{let a=class a{constructor(e,i){this.renderer=e,this.elementRef=i}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}};a.\u0275fac=function(i){return new(i||a)(D(q2),D(W2))},a.\u0275cmp=q({type:a,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[n2,X],ngContentSelectors:W6,decls:1,vars:0,template:function(i,s){i&1&&(T1(),_1(0))},encapsulation:2});let c=a;return c})(),Q3=(()=>{let a=class a{set spin(e){this.animation=e?"spin":void 0}set pulse(e){this.animation=e?"spin-pulse":void 0}constructor(e,i,s,n,t){this.sanitizer=e,this.config=i,this.iconLibrary=s,this.stackItem=n,this.classes=[],t!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){j6();return}if(e){let i=this.icon!=null?this.icon:this.config.fallbackIcon,s=this.findIconDefinition(i);if(s!=null){let n=this.buildParams();this.renderIcon(s,n)}}}render(){this.ngOnChanges({})}findIconDefinition(e){let i=Y6(e,this.config.defaultPrefix);if("icon"in i)return i;let s=this.iconLibrary.getIconDefinition(i.prefix,i.iconName);return s??(q6(i),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},i=typeof this.transform=="string"?X3.transform(this.transform):this.transform;return{title:this.title,transform:i,classes:[...$6(e),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(e,i){let s=Y3(e,i);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(s.html.join(`
`))}};a.\u0275fac=function(i){return new(i||a)(D(O1),D(Q6),D(K6),D(J6,8),D(Z6,8))},a.\u0275cmp=q({type:a,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(i,s){i&2&&(F1("innerHTML",s.renderedIconHTML,w1),j2("title",s.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[n2,X],decls:0,vars:0,template:function(i,s){},encapsulation:2});let c=a;return c})();var K3=(()=>{let a=class a{};a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=c2({type:a}),a.\u0275inj=Z({});let c=a;return c})();var J3={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]};var Z3={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]};var a0=c=>({"background-image":c}),e0=c=>({active:c});function r0(c,a){if(c&1){let r=P1();k(0,"div",7),o2("click",function(){let i=y1(r).$index,s=$2();return S1(s.jumpToSlide(i))}),P()}if(c&2){let r=a.$index,e=$2();$("ngClass",X2(1,e0,r===e.currentSlide))}}var c4=(()=>{let a=class a{constructor(){this.slides=[],this.currentSlide=0,this.faChevronRight=Z3,this.faChevronLeft=J3}next(){this.currentSlide=(this.currentSlide+1)%this.slides.length}previous(){this.currentSlide=(this.currentSlide-1+this.currentSlide)%this.slides.length}jumpToSlide(e){this.currentSlide=e}};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=q({type:a,selectors:[["app-image-slider"]],inputs:{slides:"slides"},standalone:!0,features:[X],decls:9,vars:5,consts:[[1,"slides"],[1,"slide",3,"ngStyle"],["id","indicators"],[1,"indicator",3,"ngClass"],[1,"nextButton",3,"click"],[3,"icon"],[1,"prevButton",3,"click"],[1,"indicator",3,"click","ngClass"]],template:function(i,s){i&1&&(k(0,"div",0)(1,"div",1)(2,"div",2),A1(3,r0,1,3,"div",3,k1),P(),k(5,"button",4),o2("click",function(){return s.next()}),t2(6,"fa-icon",5),P(),k(7,"button",6),o2("click",function(){return s.previous()}),t2(8,"fa-icon",5),P()()()),i&2&&(j(),$("ngStyle",X2(3,a0,"url("+s.slides[s.currentSlide].url+")")),j(2),D1(s.slides),j(3),$("icon",s.faChevronRight),j(2),$("icon",s.faChevronLeft))},dependencies:[g2,E1,R1,K3,Q3],styles:["[_nghost-%COMP%]{display:flex;width:100%;justify-content:center;align-items:center}.slides[_ngcontent-%COMP%]{width:1450px;height:953px;padding:20px;overflow:hidden}.slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]{width:100%;height:100%;background-size:cover;background-position:center;background-repeat:no-repeat;position:relative;border-radius:10px;transition:opacity .5s ease-in-out}.slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:is(.nextButton, .prevButton)[_ngcontent-%COMP%]{position:absolute;top:50%;border:0px;background-color:transparent;color:#ffffffb9;font-size:40px;cursor:pointer}.slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .nextButton[_ngcontent-%COMP%]{right:20px}.slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .prevButton[_ngcontent-%COMP%]{left:20px}.slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   #indicators[_ngcontent-%COMP%]{position:absolute;left:0;right:0;margin:auto;bottom:20px;width:310px}.slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   #indicators[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]{width:12px;height:12px;border-radius:50px;background-color:#fff4;display:inline-block;margin:0 5px;cursor:pointer;transform:background-color .5s ease-in-out}.slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   #indicators[_ngcontent-%COMP%]   .indicator.active[_ngcontent-%COMP%]{background-color:#ffffff9a}"]});let c=a;return c})();var a4=(()=>{let a=class a{constructor(){this.slides=[{url:"assets/9.jpg",title:"h",description:"This is"},{url:"assets/4.jpg",title:"first",description:"This is"},{url:"assets/3.jpg",title:"b",description:"This is"},{url:"assets/10.jpg",title:"c",description:"This is"},{url:"assets/5.jpg",title:"d",description:"This is"},{url:"assets/6.jpg",title:"e",description:"This is"},{url:"assets/7.jpg",title:"f",description:"This is"},{url:"assets/8.jpg",title:"g",description:"This is"},{url:"assets/2.jpg",title:"i",description:"This is"},{url:"assets/11.jpg",title:"l",description:"This is"},{url:"assets/13.jpg",title:"n",description:"This is"},{url:"assets/14.jpg",title:"o",description:"This is"},{url:"assets/gif.gif",title:"p",description:"This is"}]}};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=q({type:a,selectors:[["app-root"]],standalone:!0,features:[X],decls:10,vars:1,consts:[[2,"background-color","black"],[2,"display","flex","align-items","center","justify-content","center","background-color","rgba(0, 0, 0, 0.966)","height","100vh"],[3,"slides"],[2,"color","white","text-align","center","font-family","'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif","padding","5px"],[2,"font-size","22px","margin-bottom","0px"],[2,"font-size","12px","margin-top","2px","color","rgba(255, 255, 255, 0.527)"],["href","https://www.linkedin.com/in/antonietta-martino/",2,"color","rgb(236, 123, 78)"]],template:function(i,s){i&1&&(k(0,"div",0)(1,"div",1),t2(2,"app-image-slider",2),P(),k(3,"div",3)(4,"p",4),C2(5,"SAN MARCO IN LAMIS"),P(),k(6,"p",5),C2(7,"Photo made by "),k(8,"a",6),C2(9,"AntoMar"),P()()()()),i&2&&(j(2),$("slides",s.slides))},dependencies:[g2,$1,X1,c4],styles:[".hidden[_ngcontent-%COMP%]{display:none}"]});let c=a;return c})();var e4=[];var r4={providers:[W1(e4),U1()]};var i0={providers:[G1()]},i4=B1(r4,i0);var s0=()=>I1(a4,i4),m8=s0;export{m8 as a};
