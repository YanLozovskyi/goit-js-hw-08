!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,p=Math.min,g=function(){return s.Date.now()};function y(e,t,n){var o,i,u,a,f,l,c=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=o,r=i;return o=i=void 0,c=t,a=e.apply(r,n)}function j(e){return c=e,f=setTimeout(h,t),d?y(e):a}function S(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function h(){var e=g();if(S(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return s?p(n,u-(e-c)):n}(e))}function w(e){return f=void 0,m&&o?y(e):(o=i=void 0,a)}function O(){var e=g(),n=S(e);if(o=arguments,i=this,l=e,n){if(void 0===f)return j(l);if(s)return f=setTimeout(h,t),y(l)}return void 0===f&&(f=setTimeout(h,t)),a}return t=E(t)||0,b(n)&&(d=!!n.leading,u=(s="maxWait"in n)?v(E(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=i=f=void 0},O.flush=function(){return void 0===f?a:w(g())},O}function b(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function E(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=a.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:o,maxWait:t,trailing:i})};var j={formEl:document.querySelector(".feedback-form"),inputEl:document.querySelector('input[name="email"]'),textAreaEl:document.querySelector('textarea[name="message"]')},S="feedback-form-state";!function(){var e=localStorage.getItem(S),t=JSON.parse(e);if(!e)return;j.inputEl.value=t.email||"",j.textAreaEl.value=t.message||""}(),j.formEl.addEventListener("input",e(t)((function(e){var t=e.target,n=t.name,o=t.value;h[n]!==o&&(h[n]=o,console.log(h));localStorage.setItem(S,JSON.stringify(h))}),500)),j.formEl.addEventListener("submit",(function(e){e.preventDefault();var t={},n=new FormData(j.formEl),o=e;console.log(o),n.forEach((function(e,n){console.log(n,e),t[n]=e})),console.log("Дані з форми:",t),j.formEl.reset(),localStorage.removeItem(S)}));var h={}}();
//# sourceMappingURL=03-feedback.2242f4e9.js.map
