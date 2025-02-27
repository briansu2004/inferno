!function(){"use strict";function n(e,t){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,e){return n.__proto__=e,n},n(e,t)}function e(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}var t=Array.isArray;function l(n){var e=typeof n;return"string"===e||"number"===e}function r(n){return void 0===n||null===n}function o(n){return null===n||!1===n||!0===n||void 0===n}function i(n){return"function"===typeof n}function u(n){return"string"===typeof n}function a(n){return null===n}function c(n,e){var t={};if(n)for(var l in n)t[l]=n[l];if(e)for(var r in e)t[r]=e[r];return t}function f(n){return!a(n)&&"object"===typeof n}var s={},p=function(){this.componentDidAppear=[],this.componentWillDisappear=[],this.componentWillMove=[]};function d(n){return n.substring(2).toLowerCase()}function v(n,e){n.appendChild(e)}function h(n,e,t){a(t)?v(n,e):n.insertBefore(e,t)}function m(n,e){if(e)return document.createElementNS("http://www.w3.org/2000/svg",n);return document.createElement(n)}function g(n,e,t){n.replaceChild(e,t)}function y(n,e){n.removeChild(e)}function $(n){for(var e=0;e<n.length;e++)n[e]()}function b(n,e,t){var l=n.children;if(4&t)return l.$LI;if(8192&t)return 2===n.childFlags?l:l[e?0:l.length-1];return l}function k(n,e){for(var t;n;){if(1521&(t=n.flags))return n.dom;n=b(n,e,t)}return null}function w(n,e){for(var t,l=n.length;void 0!==(t=n.pop());)t((function(){--l<=0&&i(e)&&e()}))}function C(n){for(var e=0;e<n.length;e++)n[e].fn();for(var t=0;t<n.length;t++){var l=n[t];h(l.parent,l.dom,l.next)}n.splice(0,n.length)}function P(n,e,t){do{var l=n.flags;if(1521&l)return void(t&&n.dom.parentNode!==e||y(e,n.dom));var r=n.children;if(4&l&&(n=r.$LI),8&l&&(n=r),8192&l){if(2!==n.childFlags){for(var o=0,i=r.length;o<i;++o)P(r[o],e,!1);return}n=r}}while(n)}function F(n,e){return function(){P(n,e,!0)}}function S(n,e,t){t.componentWillDisappear.length>0?w(t.componentWillDisappear,F(n,e)):P(n,e,!1)}function D(n,e,t,l,r,o,i,u){n.componentWillMove.push({dom:l,fn:function(){4&i?t.componentWillMove(e,r,l):8&i&&t.onComponentWillMove(e,r,l,u)},next:o,parent:r})}function x(n,e,t,l,o){var u,a,c=e.flags;do{var f=e.flags;if(1521&f)return void(r(u)||!i(u.componentWillMove)&&!i(u.onComponentWillMove)?h(t,e.dom,l):D(o,n,u,e.dom,t,l,c,a));var s=e.children;if(4&f)u=e.children,a=e.props,e=s.$LI;else if(8&f)u=e.ref,a=e.props,e=s;else if(8192&f){if(2!==e.childFlags){for(var p=0,d=s.length;p<d;++p)x(n,s[p],t,l,o);return}e=s}}while(e)}function U(n,e,t){if(n.constructor.getDerivedStateFromProps)return c(t,n.constructor.getDerivedStateFromProps(e,t));return t}var W={v:!1},L={componentComparator:null,createVNode:null,renderComplete:null};function N(n,e){n.textContent=e}function M(n,e){return f(n)&&n.event===e.event&&n.data===e.data}function V(n,e){for(var t in e)void 0===n[t]&&(n[t]=e[t]);return n}function A(n,e){return!!i(n)&&(n(e),!0)}var I="$";function B(n,e,t,l,r,o,i,u){this.childFlags=n,this.children=e,this.className=t,this.dom=null,this.flags=l,this.key=void 0===r?null:r,this.props=void 0===o?null:o,this.ref=void 0===i?null:i,this.type=u}function E(n,e,t,l,r,o,i,u){var a=void 0===r?1:r,c=new B(a,l,t,n,i,o,u,e);return 0===a&&Q(c,c.children),c}function O(n,e){return new B(1,r(n)||!0===n||!1===n?"":n,null,16,e,null,null,null)}function T(n,e,t){var l=E(8192,8192,null,n,e,null,t,null);switch(l.childFlags){case 1:l.children=_(),l.childFlags=2;break;case 16:l.children=[O(n)],l.childFlags=4}return l}function R(n){var e=n.children,t=n.childFlags;return T(2===t?j(e):e.map(j),t,n.key)}function j(n){var e=-16385&n.flags,t=n.props;if(14&e&&!a(t)){var l=t;for(var r in t={},l)t[r]=l[r]}if(0===(8192&e))return new B(n.childFlags,n.children,n.className,e,n.key,t,n.ref,n.type);return R(n)}function _(){return O("",null)}function H(n,e,r,i){for(var c=n.length;r<c;r++){var f=n[r];if(!o(f)){var s=i+I+r;if(t(f))H(f,e,0,s);else{if(l(f))f=O(f,s);else{var p=f.key,d=u(p)&&p[0]===I;(81920&f.flags||d)&&(f=j(f)),f.flags|=65536,d?p.substring(0,i.length)!==i&&(f.key=i+p):a(p)?f.key=s:f.key=i+p}e.push(f)}}}}function Q(n,e){var r,i=1;if(o(e))r=e;else if(l(e))i=16,r=e;else if(t(e)){for(var c=e.length,f=0;f<c;++f){var s=e[f];if(o(s)||t(s)){r=r||e.slice(0,f),H(e,r,f,"");break}if(l(s))(r=r||e.slice(0,f)).push(O(s,I+f));else{var p=s.key,d=(81920&s.flags)>0,v=a(p),h=u(p)&&p[0]===I;d||v||h?(r=r||e.slice(0,f),(d||h)&&(s=j(s)),(v||h)&&(s.key=I+f),r.push(s)):r&&r.push(s),s.flags|=65536}}i=0===(r=r||e).length?1:8}else(r=e).flags|=65536,81920&e.flags&&(r=j(e)),i=2;return n.children=r,n.childFlags=i,n}function X(n){if(o(n)||l(n))return O(n,null);if(t(n))return T(n,0,null);return 16384&n.flags?j(n):n}var G="http://www.w3.org/1999/xlink",K="http://www.w3.org/XML/1998/namespace",q={"xlink:actuate":G,"xlink:arcrole":G,"xlink:href":G,"xlink:role":G,"xlink:show":G,"xlink:title":G,"xlink:type":G,"xml:base":K,"xml:lang":K,"xml:space":K};function z(n){return{onClick:n,onDblClick:n,onFocusIn:n,onFocusOut:n,onKeyDown:n,onKeyPress:n,onKeyUp:n,onMouseDown:n,onMouseMove:n,onMouseUp:n,onTouchEnd:n,onTouchMove:n,onTouchStart:n}}var J=z(0),Y=z(null),Z=z(!0);function nn(n,e){var t=e.$EV;return t||(t=e.$EV=z(null)),t[n]||1===++J[n]&&(Y[n]=pn(n)),t}function en(n,e){var t=e.$EV;t&&t[n]&&(0===--J[n]&&(document.removeEventListener(d(n),Y[n]),Y[n]=null),t[n]=null)}function tn(n,e,t,l){if(i(t))nn(n,l)[n]=t;else if(f(t)){if(M(e,t))return;nn(n,l)[n]=t}else en(n,l)}function ln(n){return i(n.composedPath)?n.composedPath()[0]:n.target}function rn(n,e,t,l){var r=ln(n);do{if(e&&r.disabled)return;var o=r.$EV;if(o){var i=o[t];if(i&&(l.dom=r,i.event?i.event(i.data,n):i(n),n.cancelBubble))return}r=r.parentNode}while(!a(r))}function on(){this.cancelBubble=!0,this.immediatePropagationStopped||this.stopImmediatePropagation()}function un(){return this.defaultPrevented}function an(){return this.cancelBubble}function cn(n){var e={dom:document};return n.isDefaultPrevented=un,n.isPropagationStopped=an,n.stopPropagation=on,Object.defineProperty(n,"currentTarget",{configurable:!0,get:function(){return e.dom}}),e}function fn(n){return function(e){if(0!==e.button)return void e.stopPropagation();rn(e,!0,n,cn(e))}}function sn(n){return function(e){rn(e,!1,n,cn(e))}}function pn(n){var e="onClick"===n||"onDblClick"===n?fn(n):sn(n);return document.addEventListener(d(n),e),e}function dn(n,e){var t=document.createElement("i");return t.innerHTML=e,t.innerHTML===n.innerHTML}function vn(n,e,t){if(n[e]){var l=n[e];l.event?l.event(l.data,t):l(t)}else{var r=e.toLowerCase();n[r]&&n[r](t)}}function hn(n,e){var t=function(t){var l=this.$V;if(!l)return;var r=l.props||s,o=l.dom;if(u(n))vn(r,n,t);else for(var a=0;a<n.length;++a)vn(r,n[a],t);if(i(e)){var c=this.$V,f=c.props||s;e(f,o,!1,c)}};return Object.defineProperty(t,"wrapped",{configurable:!1,enumerable:!1,value:!0,writable:!1}),t}function mn(n,e,t){var l="$"+e,r=n[l];if(r){if(r[1].wrapped)return;n.removeEventListener(r[0],r[1]),n[l]=null}i(t)&&(n.addEventListener(e,t),n[l]=[e,t])}function gn(n){return"checkbox"===n||"radio"===n}var yn=hn("onInput",wn),$n=hn(["onClick","onChange"],wn);function bn(n){n.stopPropagation()}function kn(n,e){gn(e.type)?(mn(n,"change",$n),mn(n,"click",bn)):mn(n,"input",yn)}function wn(n,e){var t=n.type,l=n.value,o=n.checked,i=n.multiple,u=n.defaultValue,a=!r(l);t&&t!==e.type&&e.setAttribute("type",t),r(i)||i===e.multiple||(e.multiple=i),r(u)||a||(e.defaultValue=u+""),gn(t)?(a&&(e.value=l),r(o)||(e.checked=o)):a&&e.value!==l?(e.defaultValue=l,e.value=l):r(o)||(e.checked=o)}function Cn(n,e){if("option"===n.type)Pn(n,e);else{var t=n.children,l=n.flags;if(4&l)Cn(t.$LI,e);else if(8&l)Cn(t,e);else if(2===n.childFlags)Cn(t,e);else if(12&n.childFlags)for(var r=0,o=t.length;r<o;++r)Cn(t[r],e)}}function Pn(n,e){var l=n.props||s,o=n.dom;o.value=l.value,l.value===e||t(e)&&-1!==e.indexOf(l.value)?o.selected=!0:r(e)&&r(l.selected)||(o.selected=l.selected||!1)}bn.wrapped=!0;var Fn=hn("onChange",Dn);function Sn(n){mn(n,"change",Fn)}function Dn(n,e,t,l){var o=Boolean(n.multiple);r(n.multiple)||o===e.multiple||(e.multiple=o);var i=n.selectedIndex;if(-1===i&&(e.selectedIndex=-1),1!==l.childFlags){var u=n.value;"number"===typeof i&&i>-1&&e.options[i]&&(u=e.options[i].value),t&&r(u)&&(u=n.defaultValue),Cn(l,u)}}var xn,Un,Wn=hn("onInput",Mn),Ln=hn("onChange");function Nn(n,e){mn(n,"input",Wn),e.onChange&&mn(n,"change",Ln)}function Mn(n,e,t){var l=n.value,o=e.value;if(r(l)){if(t){var i=n.defaultValue;r(i)||i===o||(e.defaultValue=i,e.value=i)}}else o!==l&&(e.defaultValue=l,e.value=l)}function Vn(n,e,t,l,r,o){64&n?wn(l,t):256&n?Dn(l,t,r,e):128&n&&Mn(l,t,r),o&&(t.$V=e)}function An(n,e,t){64&n?kn(e,t):256&n?Sn(e):128&n&&Nn(e,t)}function In(n){return n.type&&gn(n.type)?!r(n.checked):!r(n.value)}function Bn(n){n&&!A(n,null)&&n.current&&(n.current=null)}function En(n,e,t){n&&(i(n)||void 0!==n.current)&&t.push((function(){A(n,e)||void 0===n.current||(n.current=e)}))}function On(n,e,t){Tn(n,t),S(n,e,t)}function Tn(n,e){var t,l=n.flags,o=n.children;if(481&l){t=n.ref;var u=n.props;Bn(t);var c=n.childFlags;if(!a(u))for(var f=Object.keys(u),d=0,v=f.length;d<v;d++){var h=f[d];Z[h]&&en(h,n.dom)}12&c?Rn(o,e):2===c&&Tn(o,e)}else if(o)if(4&l){i(o.componentWillUnmount)&&o.componentWillUnmount();var m=e;i(o.componentWillDisappear)&&(m=new p,Qn(e,o,o.$LI.dom,l,void 0)),Bn(n.ref),o.$UN=!0,Tn(o.$LI,m)}else if(8&l){var g=e;if(!r(t=n.ref)){var y=null;i(t.onComponentWillUnmount)&&(y=k(n,!0),t.onComponentWillUnmount(y,n.props||s)),i(t.onComponentWillDisappear)&&(g=new p,Qn(e,t,y=y||k(n,!0),l,n.props))}Tn(o,g)}else 1024&l?On(o,n.ref,e):8192&l&&12&n.childFlags&&Rn(o,e)}function Rn(n,e){for(var t=0,l=n.length;t<l;++t)Tn(n[t],e)}function jn(n,e){return function(){if(e)for(var t=0;t<n.length;t++)P(n[t],e,!1)}}function _n(n,e,t){t.componentWillDisappear.length>0?w(t.componentWillDisappear,jn(e,n)):n.textContent=""}function Hn(n,e,t,l){Rn(t,l),8192&e.flags?S(e,n,l):_n(n,t,l)}function Qn(n,e,t,l,r){n.componentWillDisappear.push((function(n){4&l?e.componentWillDisappear(t,n):8&l&&e.onComponentWillDisappear(t,r,n)}))}function Xn(n){var e=n.event;return function(t){e(n.data,t)}}function Gn(n,e,t,l){if(f(t)){if(M(e,t))return;t=Xn(t)}mn(l,d(n),t)}function Kn(n,e,t){if(r(e))return void t.removeAttribute("style");var l,o,i=t.style;if(u(e))return void(i.cssText=e);if(r(n)||u(n))for(l in e)o=e[l],i.setProperty(l,o);else{for(l in e)(o=e[l])!==n[l]&&i.setProperty(l,o);for(l in n)r(e[l])&&i.removeProperty(l)}}function qn(n,e,t,l,o){var i=n&&n.__html||"",u=e&&e.__html||"";i!==u&&(r(u)||dn(l,u)||(a(t)||(12&t.childFlags?Rn(t.children,o):2===t.childFlags&&Tn(t.children,o),t.children=null,t.childFlags=1),l.innerHTML=u))}function zn(n,e,t,l,o,i,u,a){switch(n){case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":case"selectedIndex":break;case"autoFocus":l.autofocus=!!t;break;case"allowfullscreen":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":l[n]=!!t;break;case"defaultChecked":case"value":case"volume":if(i&&"value"===n)break;var c=r(t)?"":t;l[n]!==c&&(l[n]=c);break;case"style":Kn(e,t,l);break;case"dangerouslySetInnerHTML":qn(e,t,u,l,a);break;default:Z[n]?tn(n,e,t,l):111===n.charCodeAt(0)&&110===n.charCodeAt(1)?Gn(n,e,t,l):r(t)?l.removeAttribute(n):o&&q[n]?l.setAttributeNS(q[n],n,t):l.setAttribute(n,t)}}function Jn(n,e,t,l,r,o){var i=!1,u=(448&e)>0;for(var a in u&&(i=In(t))&&An(e,l,t),t)zn(a,null,t[a],l,r,i,null,o);u&&Vn(e,n,l,t,!0,i)}function Yn(n,e,t){var l=X(n.render(e,n.state,t)),r=t;return i(n.getChildContext)&&(r=c(t,n.getChildContext())),n.$CX=r,l}function Zn(n,e,t,l,r,o){var u=new e(t,l),c=u.$N=Boolean(e.getDerivedStateFromProps||u.getSnapshotBeforeUpdate);if(u.$SVG=r,u.$L=o,n.children=u,u.$BS=!1,u.context=l,u.props===s&&(u.props=t),c)u.state=U(u,t,u.state);else if(i(u.componentWillMount)){u.$BR=!0,u.componentWillMount();var f=u.$PS;if(!a(f)){var p=u.state;if(a(p))u.state=f;else for(var d in f)p[d]=f[d];u.$PS=null}u.$BR=!1}return u.$LI=Yn(u,t,l),u}function ne(n,e){var t=n.props||s;return 32768&n.flags?n.type.render(t,n.ref,e):n.type(t,e)}function ee(n,e,t,l,r,o,i){var u=n.flags|=16384;481&u?oe(n,e,t,l,r,o,i):4&u?ue(n,e,t,l,r,o,i):8&u?ae(n,e,t,l,r,o,i):16&u?re(n,e,r):8192&u?le(n,t,e,l,r,o,i):1024&u&&te(n,t,e,r,o,i)}function te(n,e,t,l,r,o){ee(n.children,n.ref,e,!1,null,r,o);var i=_();re(i,t,l),n.dom=i.dom}function le(n,e,t,l,r,o,i){var u=n.children,a=n.childFlags;12&a&&0===u.length&&(a=n.childFlags=2,u=n.children=_()),2===a?ee(u,t,e,l,r,o,i):ie(u,t,e,l,r,o,i)}function re(n,e,t){var l=n.dom=document.createTextNode(n.children);a(e)||h(e,l,t)}function oe(n,e,t,l,o,i,u){var c=n.flags,f=n.props,s=n.className,p=n.childFlags,d=n.dom=m(n.type,l=l||(32&c)>0),v=n.children;if(r(s)||""===s||(l?d.setAttribute("class",s):d.className=s),16===p)N(d,v);else if(1!==p){var g=l&&"foreignObject"!==n.type;2===p?(16384&v.flags&&(n.children=v=j(v)),ee(v,d,t,g,null,i,u)):8!==p&&4!==p||ie(v,d,t,g,null,i,u)}a(e)||h(e,d,o),a(f)||Jn(n,c,f,d,l,u),En(n.ref,d,i)}function ie(n,e,t,l,r,o,i){for(var u=0;u<n.length;++u){var a=n[u];16384&a.flags&&(n[u]=a=j(a)),ee(a,e,t,l,r,o,i)}}function ue(n,e,t,l,r,o,u){var a=Zn(n,n.type,n.props||s,t,l,o),c=u;i(a.componentDidAppear)&&(c=new p),ee(a.$LI,e,a.$CX,l,r,o,c),se(n.ref,a,o,u)}function ae(n,e,t,l,o,u,a){var c=n.ref,f=a;!r(c)&&i(c.onComponentDidAppear)&&(f=new p),ee(n.children=X(ne(n,t)),e,t,l,o,u,f),de(n,u,a)}function ce(n){return function(){n.componentDidMount()}}function fe(n,e,t,l,r){n.componentDidAppear.push((function(){4&l?e.componentDidAppear(t):8&l&&e.onComponentDidAppear(t,r)}))}function se(n,e,t,l){En(n,e,t),i(e.componentDidMount)&&t.push(ce(e)),i(e.componentDidAppear)&&fe(l,e,e.$LI.dom,4,void 0)}function pe(n,e){return function(){n.onComponentDidMount(k(e,!0),e.props||s)}}function de(n,e,t){var l=n.ref;r(l)||(A(l.onComponentWillMount,n.props||s),i(l.onComponentDidMount)&&e.push(pe(l,n)),i(l.onComponentDidAppear)&&fe(t,l,k(n,!0),8,n.props))}function ve(n,e,t,l,r,o,i){Tn(n,i),0!==(e.flags&n.flags&1521)?(ee(e,null,l,r,null,o,i),g(t,e.dom,n.dom)):(ee(e,t,l,r,k(n,!0),o,i),S(n,t,i))}function he(n,e,t,l,r,o,i,u){var a=e.flags|=16384;n.flags!==a||n.type!==e.type||n.key!==e.key||2048&a?16384&n.flags?ve(n,e,t,l,r,i,u):ee(e,t,l,r,o,i,u):481&a?be(n,e,l,r,a,i,u):4&a?Fe(n,e,t,l,r,o,i,u):8&a?Se(n,e,t,l,r,o,i,u):16&a?De(n,e):8192&a?ye(n,e,t,l,r,i,u):$e(n,e,l,i,u)}function me(n,e,t){n!==e&&(""!==n?t.firstChild.nodeValue=e:N(t,e))}function ge(n,e){n.textContent!==e&&(n.textContent=e)}function ye(n,e,t,l,r,o,i){var u=n.children,a=e.children,c=n.childFlags,f=e.childFlags,s=null;12&f&&0===a.length&&(f=e.childFlags=2,a=e.children=_());var p=0!==(2&f);if(12&c){var d=u.length;(8&c&&8&f||p||!p&&a.length>d)&&(s=k(u[d-1],!1).nextSibling)}we(c,f,u,a,t,l,r,s,n,o,i)}function $e(n,e,t,l,r){var i=n.ref,u=e.ref,a=e.children;if(we(n.childFlags,e.childFlags,n.children,a,i,t,!1,null,n,l,r),e.dom=n.dom,i!==u&&!o(a)){var c=a.dom;y(i,c),v(u,c)}}function be(n,e,t,l,o,i,u){var a,c=e.dom=n.dom,f=n.props,p=e.props,d=!1,v=!1;if(l=l||(32&o)>0,f!==p){var h=f||s;if((a=p||s)!==s)for(var m in(d=(448&o)>0)&&(v=In(a)),a){var g=h[m],y=a[m];g!==y&&zn(m,g,y,c,l,v,n,u)}if(h!==s)for(var $ in h)r(a[$])&&!r(h[$])&&zn($,h[$],null,c,l,v,n,u)}var b=e.children,k=e.className;n.className!==k&&(r(k)?c.removeAttribute("class"):l?c.setAttribute("class",k):c.className=k),4096&o?ge(c,b):we(n.childFlags,e.childFlags,n.children,b,c,t,l&&"foreignObject"!==e.type,null,n,i,u),d&&Vn(o,e,c,a,!1,v);var w=e.ref,C=n.ref;C!==w&&(Bn(C),En(w,c,i))}function ke(n,e,t,l,r,o,i){Tn(n,i),ie(e,t,l,r,k(n,!0),o,i),S(n,t,i)}function we(n,e,t,l,r,o,i,u,a,c,f){switch(n){case 2:switch(e){case 2:he(t,l,r,o,i,u,c,f);break;case 1:On(t,r,f);break;case 16:Tn(t,f),N(r,l);break;default:ke(t,l,r,o,i,c,f)}break;case 1:switch(e){case 2:ee(l,r,o,i,u,c,f);break;case 1:break;case 16:N(r,l);break;default:ie(l,r,o,i,u,c,f)}break;case 16:switch(e){case 16:me(t,l,r);break;case 2:_n(r,t,f),ee(l,r,o,i,u,c,f);break;case 1:_n(r,t,f);break;default:_n(r,t,f),ie(l,r,o,i,u,c,f)}break;default:switch(e){case 16:Rn(t,f),N(r,l);break;case 2:Hn(r,a,t,f),ee(l,r,o,i,u,c,f);break;case 1:Hn(r,a,t,f);break;default:var s=0|t.length,p=0|l.length;0===s?p>0&&ie(l,r,o,i,u,c,f):0===p?Hn(r,a,t,f):8===e&&8===n?Ue(t,l,r,o,i,s,p,u,a,c,f):xe(t,l,r,o,i,s,p,u,c,f)}}}function Ce(n,e,t,l,r){r.push((function(){n.componentDidUpdate(e,t,l)}))}function Pe(n,e,t,l,r,o,u,a,f,s){var p=n.state,d=n.props,v=Boolean(n.$N),h=i(n.shouldComponentUpdate);if(v&&(e=U(n,t,e!==p?c(p,e):e)),u||!h||h&&n.shouldComponentUpdate(t,e,r)){!v&&i(n.componentWillUpdate)&&n.componentWillUpdate(t,e,r),n.props=t,n.state=e,n.context=r;var m=null,g=Yn(n,t,r);v&&i(n.getSnapshotBeforeUpdate)&&(m=n.getSnapshotBeforeUpdate(d,p)),he(n.$LI,g,l,n.$CX,o,a,f,s),n.$LI=g,i(n.componentDidUpdate)&&Ce(n,d,p,m,f)}else n.props=t,n.state=e,n.context=r}function Fe(n,e,t,l,r,o,u,f){var p=e.children=n.children;if(a(p))return;p.$L=u;var d=e.props||s,v=e.ref,h=n.ref,m=p.state;if(!p.$N){if(i(p.componentWillReceiveProps)){if(p.$BR=!0,p.componentWillReceiveProps(d,l),p.$UN)return;p.$BR=!1}a(p.$PS)||(m=c(m,p.$PS),p.$PS=null)}Pe(p,m,d,t,l,r,!1,o,u,f),h!==v&&(Bn(h),En(v,p,u))}function Se(n,e,t,l,o,u,a,c){var f=!0,p=e.props||s,d=e.ref,v=n.props,h=!r(d),m=n.children;if(h&&i(d.onComponentShouldUpdate)&&(f=d.onComponentShouldUpdate(v,p)),!1!==f){h&&i(d.onComponentWillUpdate)&&d.onComponentWillUpdate(v,p);var g=X(ne(e,l));he(m,g,t,l,o,u,a,c),e.children=g,h&&i(d.onComponentDidUpdate)&&d.onComponentDidUpdate(v,p)}else e.children=m}function De(n,e){var t=e.children,l=e.dom=n.dom;t!==n.children&&(l.nodeValue=t)}function xe(n,e,t,l,r,o,i,u,a,c){for(var f,s,p=o>i?i:o,d=0;d<p;++d)f=e[d],s=n[d],16384&f.flags&&(f=e[d]=j(f)),he(s,f,t,l,r,u,a,c),n[d]=f;if(o<i)for(d=p;d<i;++d)16384&(f=e[d]).flags&&(f=e[d]=j(f)),ee(f,t,l,r,u,a,c);else if(o>i)for(d=p;d<o;++d)On(n[d],t,c)}function Ue(n,e,t,l,r,o,i,u,a,c,f){var s,p,d=o-1,v=i-1,h=0,m=n[h],g=e[h];n:{for(;m.key===g.key;){if(16384&g.flags&&(e[h]=g=j(g)),he(m,g,t,l,r,u,c,f),n[h]=g,++h>d||h>v)break n;m=n[h],g=e[h]}for(m=n[d],g=e[v];m.key===g.key;){if(16384&g.flags&&(e[v]=g=j(g)),he(m,g,t,l,r,u,c,f),n[d]=g,v--,h>--d||h>v)break n;m=n[d],g=e[v]}}if(h>d){if(h<=v)for(p=(s=v+1)<i?k(e[s],!0):u;h<=v;)16384&(g=e[h]).flags&&(e[h]=g=j(g)),++h,ee(g,t,l,r,p,c,f)}else if(h>v)for(;h<=d;)On(n[h++],t,f);else We(n,e,l,o,i,d,v,h,t,r,u,a,c,f)}function We(n,e,t,l,r,o,i,u,a,c,f,s,p,d){var v,h,m=0,g=0,y=u,$=u,b=o-u+1,w=i-u+1,P=new Int32Array(w+1),F=b===l,S=!1,D=0,U=0;if(r<4||(b|w)<32)for(g=y;g<=o;++g)if(v=n[g],U<w){for(u=$;u<=i;u++)if(h=e[u],v.key===h.key){if(P[u-$]=g+1,F)for(F=!1;y<g;)On(n[y++],a,d);D>u?S=!0:D=u,16384&h.flags&&(e[u]=h=j(h)),he(v,h,a,t,c,f,p,d),++U;break}!F&&u>i&&On(v,a,d)}else F||On(v,a,d);else{var W={};for(g=$;g<=i;++g)W[e[g].key]=g;for(g=y;g<=o;++g)if(v=n[g],U<w)if(void 0!==(u=W[v.key])){if(F)for(F=!1;g>y;)On(n[y++],a,d);P[u-$]=g+1,D>u?S=!0:D=u,16384&(h=e[u]).flags&&(e[u]=h=j(h)),he(v,h,a,t,c,f,p,d),++U}else F||On(v,a,d);else F||On(v,a,d)}if(F)Hn(a,s,n,d),ie(e,a,t,c,f,p,d);else if(S){var L=Ne(P);for(u=L.length-1,g=w-1;g>=0;g--)0===P[g]?(16384&(h=e[D=g+$]).flags&&(e[D]=h=j(h)),ee(h,a,t,c,(m=D+1)<r?k(e[m],!0):f,p,d)):u<0||g!==L[u]?x(s,h=e[D=g+$],a,(m=D+1)<r?k(e[m],!0):f,d):u--;d.componentWillMove.length>0&&C(d.componentWillMove)}else if(U!==w)for(g=w-1;g>=0;g--)0===P[g]&&(16384&(h=e[D=g+$]).flags&&(e[D]=h=j(h)),ee(h,a,t,c,(m=D+1)<r?k(e[m],!0):f,p,d))}var Le=0;function Ne(n){var e=0,t=0,l=0,r=0,o=0,i=0,u=0,a=n.length;for(a>Le&&(Le=a,xn=new Int32Array(a),Un=new Int32Array(a));t<a;++t)if(0!==(e=n[t])){if(n[l=xn[r]]<e){Un[t]=l,xn[++r]=t;continue}for(o=0,i=r;o<i;)n[xn[u=o+i>>1]]<e?o=u+1:i=u;e<n[xn[o]]&&(o>0&&(Un[t]=xn[o-1]),xn[o]=t)}o=r+1;var c=new Int32Array(o);for(i=xn[o-1];o-- >0;)c[o]=i,i=Un[i],xn[o]=0;return c}"undefined"!==typeof document&&window.Node&&(Node.prototype.$EV=null,Node.prototype.$V=null);var Me=[],Ve="undefined"!==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):function(n){window.setTimeout(n,0)},Ae=!1;function Ie(n,e,t,l){var o=n.$PS;if(i(e)&&(e=e(o?c(n.state,o):n.state,n.props,n.context)),r(o))n.$PS=e;else for(var u in e)o[u]=e[u];if(n.$BR)i(t)&&n.$L.push(t.bind(n));else{if(!W.v&&0===Me.length)return Oe(n,l),void(i(t)&&t.call(n));if(-1===Me.indexOf(n)&&Me.push(n),l&&(n.$F=!0),Ae||(Ae=!0,Ve(Ee)),i(t)){var a=n.$QU;a||(a=n.$QU=[]),a.push(t)}}}function Be(n){for(var e=n.$QU,t=0;t<e.length;++t)e[t].call(n);n.$QU=null}function Ee(){var n;for(Ae=!1;n=Me.shift();)if(!n.$UN){var e=n.$F;n.$F=!1,Oe(n,e),n.$QU&&Be(n)}}function Oe(n,e){if(e||!n.$BR){var t=n.$PS;n.$PS=null;var l=[],r=new p;W.v=!0,Pe(n,c(n.state,t),n.props,k(n.$LI,!0).parentNode,n.context,n.$SVG,e,null,l,r),$(l),w(r.componentDidAppear),W.v=!1}else n.state=n.$PS,n.$PS=null}var Te=function(){function n(n,e){this.state=null,this.props=void 0,this.context=void 0,this.displayName=void 0,this.$BR=!1,this.$BS=!0,this.$PS=null,this.$LI=null,this.$UN=!1,this.$CX=null,this.$QU=null,this.$N=!1,this.$SSR=void 0,this.$L=null,this.$SVG=!1,this.$F=!1,this.props=n||s,this.context=e||s}var e=n.prototype;return e.forceUpdate=function(n){if(this.$UN)return;Ie(this,{},n,!0)},e.setState=function(n,e){if(this.$UN)return;this.$BS||Ie(this,n,e,!1)},e.render=function(n,e,t){return null},n}();Te.defaultProps=null;var Re,je,_e,He,Qe,Xe,Ge=function(t){var l,r;function o(n,l){var r;return(r=t.call(this,n,l)||this).state={numPoints:0},r.updateCount=r.updateCount.bind(e(r)),r}r=t,(l=o).prototype=Object.create(r.prototype),l.prototype.constructor=l,n(l,r);var i=o.prototype;return i.updateCount=function(n){this.setState({numPoints:n.target.value})},i.componentDidMount=function(){this.setState({numPoints:1e3})},i.render=function(n,e){return E(1,"div","app-wrapper",E(1,"p",null,[O("The infinite sum"),E(1,"math",null,E(1,"mrow",null,[E(1,"munderover",null,[E(1,"mo",null,"∑",16,null,null,null),E(1,"mrow",null,[E(1,"mi",null,"n",16,null,null,null),E(1,"mo",null,"=",16,null,null,null),E(1,"mn",null,"1",16,null,null,null)],4,null,null,null),E(1,"mrow",null,[E(1,"mo",null,"+",16,null,null,null),E(1,"mn",null,"∞",16,null,null,null)],4,null,null,null)],4,null,null,null),E(1,"mfrac",null,[E(1,"mn",null,"1",16,null,null,null),E(1,"msup",null,[E(1,"mi",null,"n",16,null,null,null),E(1,"mn",null,"2",16,null,null,null)],4,null,null,null)],4,null,null,null)],4,null,null,null),2,{display:"block"},null,null),O("is equal to the real number"),E(1,"math",null,E(1,"mfrac",null,[E(1,"msup",null,[E(1,"mi",null,"π",16,null,null,null),E(1,"mn",null,"2",16,null,null,null)],4,null,null,null),E(1,"mn",null,"6",16,null,null,null)],4,null,null,null),2,{display:"inline"},null,null),O(".")],4,null,null,null),2,null,null,null)},o}(Te);Re=new B(1,null,null,Qe=function(n,e){if(12&n)return n;if(e.prototype&&e.prototype.render)return 4;if(e.render)return 32776;return 8}(Qe=2,Xe=Ge),null,function(n,e,t){var l=(32768&n?e.render:e).defaultProps;if(r(l))return t;if(r(t))return c(l,null);return V(t,l)}(Qe,Xe,null),function(n,e,t){if(4&n)return t;var l=(32768&n?e.render:e).defaultHooks;if(r(l))return t;if(r(t))return l;return V(t,l)}(Qe,Xe,null),Xe),je=document.getElementById("app"),void 0===_e&&(_e=null),void 0===He&&(He=s),function(n,e,t,l){var o=[],u=new p,a=e.$V;W.v=!0,r(a)?r(n)||(16384&n.flags&&(n=j(n)),ee(n,e,l,!1,null,o,u),e.$V=n,a=n):r(n)?(On(a,e,u),e.$V=null):(16384&n.flags&&(n=j(n)),he(a,n,e,l,!1,null,o,u),a=e.$V=n),$(o),w(u.componentDidAppear),W.v=!1,i(t)&&t(),i(L.renderComplete)&&L.renderComplete(a,e)}(Re,je,_e,He)}();
