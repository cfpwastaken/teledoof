!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=14)}([function(e,t,r){"use strict";var n=r(1);t.a={trapFocus:function(e){var t=this;e.addEventListener("keydown",(function(r){if(!r||!n.a.is("Tab",r))return!1;var a=t.getAll(e),i=Array.from(a),o=i.indexOf(document.activeElement),u=i.length-1,l=n.a.isShift(r);return l&&0===o?(a[u].focus(),r.preventDefault()):l||o!==u||(a[0].focus(),r.preventDefault()),!0}))},getAll:function(e){return e?e.querySelectorAll(this.query):null},getFirst:function(e){return e?e.querySelector(this.query):null},getLast:function(e){var t=this.getAll(e);return t?t[t.length-1]:null},setFocusBack:function(){window.chfFocusBack=document.activeElement},getFocusBack:function(){return window.chfFocusBack},focusBack:function(){return!!window.chfFocusBack&&(window.chfFocusBack.focus(),!0)},focusTo:function(e){if(!e)return!1;e.focus()},isFocusable:function(e){return e.matches(this.query)},isParentFocusable:function(e){return!!e.closest(this.query)},query:'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'}},function(e,t,r){"use strict";t.a={codes:[{key:"Escape",keyCode:27},{key:"Tab",keyCode:9},{key:"Return",keyCode:19}],is:function(e,t){return t.key===e||this.codes.some((function(r){return r.key===e&&r.keyCode===t.keyCode}))},isShift:function(e){return e.shiftKey}}},function(e,t,r){"use strict";t.a={tealiumText:function(e){return e=e.toLowerCase().replace(/ä/gi,"ae").replace(/ö/gi,"oe").replace(/ü/gi,"ue").replace(/ß/gi,"ss").replace(/_/g,"-").replace(/ /g,"-").replace(/[^0-9a-z-.]/g,"")},overlayManualUtagLink:function(e){if("undefined"!=typeof utag)try{utag.link(e)}catch(e){console.log("utag.link-error: "+e)}return!0}}},function(e,t,r){"use strict";var n=r(0),a=function(){return document.querySelector("[data-chf-modal]")},i=function(e){return e?e.querySelector("[data-chf-modal-bg]"):null},o=function(e){return e?e.querySelectorAll("[data-chf-modal-close]"):null},u=function(e){if(!e)return!1;var t=n.a.getAll(e);return!!t&&(n.a.getFocusBack()||n.a.setFocusBack(),t[0].focus(),n.a.trapFocus(e),!0)},l=function(e,t){var r=e.querySelector(t);return!!r&&(r.remove(),!0)},c=r(1),s={close:function(){var e=new CustomEvent("chfModalClose");return document.dispatchEvent(e),!0},keyClose:function(e){return!(!e||!c.a.is("Escape",e))&&(this.close(),!0)},removeModal:function(){var e=a();return!!e&&(e.classList.remove("chf-modal--visible"),n.a.focusBack(),setTimeout((function(){e.remove()}),400),!0)},remove:function(){var e=a();return!!e&&(e.classList.remove("chf-modal--visible"),setTimeout((function(){e.remove()}),400),!0)},addCloseEvents:function(e){return!!e&&(this.addCloseButtonEvent(e),this.addClickOutsideEvent(e),this.addKeyCloseEvent(e),!0)},addCloseButtonEvent:function(e){var t=this;return!!e&&(o(e).forEach((function(e){e.addEventListener("click",t.close)})),!0)},addClickOutsideEvent:function(e){if(!e)return!1;var t=i(e);return!!t&&(t.addEventListener("click",this.close),!0)},addKeyCloseEvent:function(e){var t=this;return!!e&&(e.addEventListener("keyup",(function(e){return t.keyClose(e)})),!0)}},d=r(5),f=r.n(d),v={open:function(e,t){if(!e&&!t)return!1;this.checkAlreadyOpen();var r=new CustomEvent("chfModalOpen",{detail:{headline:e,content:t}});return document.dispatchEvent(r),!0},insertModal:function(e){if(!e&&!e.detail)return!1;var t=e.detail,r=t.headline,n=t.content,i=f.a.replace(/###HEADLINE###/gm,r||"").replace(/###CONTENT###/gm,n||"");document.body.insertAdjacentHTML("beforeend",i);var o=a();return r||l(o,"[data-chf-modal-headline]"),s.addCloseEvents(o),u(o),setTimeout((function(){o.classList.add("chf-modal--visible")}),0),!0},checkAlreadyOpen:function(){var e=a();return!!e&&(e.remove(),!0)}};t.a={addEvents:function(){document.addEventListener("chfModalOpen",(function(e){e.preventDefault(),e.stopImmediatePropagation(),v.insertModal(e)})),document.addEventListener("chfModalClose",(function(e){e.preventDefault(),e.stopImmediatePropagation(),s.removeModal(e)}))},open:function(e,t){return v.open(e,t)},close:function(){return s.close()}}},,function(e,t){e.exports='<div class=chf-modal role=dialog aria-modal=true aria-labelledby=chf-modal-headline aria-describedby=chf-modal-content data-chf-modal> <div class="chf-modal__bg chf-bg-dark" data-chf-modal-bg></div> <div class=chf-modal__container> <div class=chf-modal__inner> <h2 class="chf-heading--secondary chf-text-align--center chf-space--2" data-chf-modal-headline> ###HEADLINE### </h2> <div class=chf-modal__content data-chf-modal-content> ###CONTENT### </div> <button type=button class="chf-modal__close chf-cta-icon" data-chf-modal-close> <svg class="chf-icon chf-icon--medium" xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink viewBox="0 0 64 64"> <path fill=#262626 d="M51.822 49.728l-17.7-17.7 17.698-17.7a1.5 1.5 0 10-2.121-2.121l-17.698 17.7-17.7-17.7a1.5 1.5 0 10-2.121 2.121l17.7 17.7-17.698 17.7a1.5 1.5 0 102.122 2.121l17.698-17.7 17.7 17.7c.293.293.677.439 1.06.439a1.5 1.5 0 001.06-2.56z"/> </svg> </button> </div> </div> </div> '},function(e,t,r){"use strict";var n=r(2);t.a=function(e){var t=e.querySelectorAll("[data-chf-image-link]"),r=e.querySelectorAll("[data-chf-link]");if(!t||!r)return!1;t.forEach((function(e){var t=e.getAttribute("data-tealium-rel");e.setAttribute("data-tealium-rel",n.a.tealiumText(t))})),r.forEach((function(e){var t=e.getAttribute("data-tealium-rel");e.setAttribute("data-tealium-rel",n.a.tealiumText(t))}))}},function(e,t,r){"use strict";var n={addFieldEvents:function(e){var t=this;return!!e&&(this.getAllRequired(e).forEach((function(r){t.getFieldInput(r).addEventListener("change",(function(){return t.validateField(r,e)}))})),!0)},validateField:function(e,t){if(!e||!t)return null;if(!e.hasAttribute("data-chf-validation-required"))return null;var r=this.getFieldInput(e),n=r.name,a=r.id,i=this.getInputValue(r),o=this.getFieldRule(e),u=e.dataset.chfValidationErrorMessage,l=o?this.validateRule(i,o):this.validateRequired(i),c=this.validateRelated(r,l,t),s=c?this.setFieldSuccessStatus(n,a,i):this.setFieldErrorStatus(n,a,i,u);c?(this.removeErrorClass(e),this.removeAriaAttributes(r)):(this.addErrorClass(e),this.addAriaAttributes(r));var d=new CustomEvent("chf-validation-field-status",{detail:s,bubbles:!0});return e.dispatchEvent(d),s},validateRelated:function(e,t,r){var n=this;return e&&r?(this.getRelatedInputs(e,r).forEach((function(e){var r=n.getFieldFromInput(e),a=n.getInputValue(e),i=n.getFieldRule(r),o=i?n.validateRule(a,i):n.validateRequired(a);t||o?(t=!0,n.removeErrorClass(r),n.removeAriaAttributes(e)):(t=!1,n.addErrorClass(r),n.addAriaAttributes(e))})),t):null},validateRequired:function(e){return!!e},validateRule:function(e,t){return!!t&&new RegExp(t).test(e)},addErrorClass:function(e){if(!e)return null;var t=e.dataset.chfValidationErrorClass;return t?e.classList.add(t):null},removeErrorClass:function(e){if(!e)return null;var t=e.dataset.chfValidationErrorClass;return t?e.classList.remove(t):null},addAriaAttributes:function(e){if(!e)return!1;e.setAttribute("aria-describedby","".concat(e.id,"-error")),e.setAttribute("aria-invalid",!0)},removeAriaAttributes:function(e){if(!e)return!1;e.removeAttribute("aria-describedby"),e.removeAttribute("aria-invalid")},setFieldErrorStatus:function(e,t,r,n){return{name:e,id:t,value:r,valid:!1,errorMessage:n||""}},setFieldSuccessStatus:function(e,t,r){return{name:e,id:t,value:r,valid:!0,errorMessage:""}},getAllRequired:function(e){return e?e.querySelectorAll("[data-chf-validation-required]"):null},getFieldInput:function(e){return e?e.querySelector("input, select, textarea"):null},getInputValue:function(e){return e&&("checkbox"!==e.type||e.checked)?e.value:null},getFieldRule:function(e){return e&&e.dataset?e.dataset.chfValidationRule:null},getRelatedInputs:function(e,t){return!(!e||!t)&&Array.from(t.querySelectorAll("input[name='".concat(e.name,"']"))).filter((function(t){return t!==e}))},getFieldFromInput:function(e){return e?e.closest("[data-chf-validation-required]"):null}},a={addError:function(e,t){if(!e||!t)return null;var r=this.getErrors(e),n=this.getErrorItem(r,t);return!r||n?null:(this.showErrors(r),r.insertAdjacentHTML("beforeend",'<li id="'.concat(t.id,'-error" data-chf-validation-form-error="').concat(t.name,'">').concat(t.errorMessage,"</li>")),!0)},removeError:function(e,t){if(!e||!t)return null;var r=this.getErrors(e),n=this.getErrorItem(r,t);return n?(r.removeChild(n),this.hideErrors(r),!0):null},getErrors:function(e){return e?e.querySelector("[data-chf-validation-form-errors]"):null},getErrorItem:function(e,t){return e&&t?e.querySelector('[data-chf-validation-form-error="'.concat(t.name,'"]')):null},hasErrorItems:function(e){return!!e&&!!e.querySelector("[data-chf-validation-form-error")},showErrors:function(e){return!e||this.hasErrorItems(e)?null:e.style.display="block"},hideErrors:function(e){return!e||this.hasErrorItems(e)?null:e.style.removeProperty("display")}},i={addFormEvents:function(e){var t=this;return!!e&&(e.addEventListener("submit",(function(e){return t.handleSubmit(e)})),e.addEventListener("chf-validation-field-status",this.handleFieldStatus),!0)},validateForm:function(e){new FormData(e);var t=n.getAllRequired(e),r=[];t.forEach((function(t){var a=n.validateField(t,e);r.push(a)}));var a=!r.find((function(e){return!e.valid})),i=new CustomEvent("chf-validation-success",{detail:r}),o=new CustomEvent("chf-validation-error",{detail:r}),u={valid:a,fields:r};return e.dispatchEvent(a?i:o),u},handleSubmit:function(e){e.preventDefault();var t=e.target;this.validateForm(t)},handleFieldStatus:function(e){e.cancelBubble=!0;var t=e.currentTarget,r=e.detail;return r?r.valid?a.removeError(t,r):a.addError(t,r):null}};t.a=function(e){var t=e.querySelectorAll("[data-chf-validation]");return t?(t.forEach((function(e){i.addFormEvents(e),n.addFieldEvents(e)})),!0):null}},,,,,,,function(e,t,r){r(17),e.exports=r(15)},function(e,t,r){},,function(e,t,r){"use strict";r.r(t);var n=r(3),a=r(6),i=r(7),o={slider:null,scrollPos:0,mousePos:0,dragged:!1,init:function(e){return this.slider=e.querySelector("[data-chf-element-slider]"),!!this.slider&&(this.addEvents(),this.preventLinkDrag(),!0)},addEvents:function(){var e=this;return!!this.slider&&(this.slider.addEventListener("mousedown",(function(t){e.scrollPos=e.slider.scrollLeft,e.mousePos=t.clientX,e.slider.addEventListener("mousemove",e.handleMove)})),this.slider.addEventListener("mouseup",this.handleEnd),this.slider.addEventListener("mouseleave",this.handleEnd),!0)},handleMove:function(e){o.slider.scrollLeft=o.mousePos-e.clientX+o.scrollPos,o.dragged=!0},handleEnd:function(e){o.scrollPos=o.slider.scrollLeft,o.slider.removeEventListener("mousemove",o.handleMove),e.target.matches("a")||(o.dragged=!1)},preventLinkDrag:function(){var e=this;this.slider.querySelectorAll("a").forEach((function(t){t.setAttribute("draggable","false"),t.addEventListener("click",(function(t){e.dragged&&(t.preventDefault(),e.dragged=!1)}))}))}},u=r(2),l=r(0),c=function(e){var t=e.querySelector("[data-chf-newsletter-disclaimer-container]"),r=e.querySelector(".js-chf-newsletter-disclaimer");if(!t||!r)return!1;var n=t.querySelector("[data-chf-newsletter-disclaimer-input]");if(!n)return!1;function a(e,t){return!(!e||!t)&&(t.style.display="block",function(e,t){if(!e||!t)return!1;return e.setAttribute("aria-describedby","".concat(e.id,"-disclaimer")),!0}(e.currentTarget,t))}function i(e,t,r){if(!e||!t||!r)return!1;var n=e.relatedTarget,a=!!n&&t.contains(n),i=!!n&&r.contains(n);return n&&(a||i)?void 0:function(e,t){if(!t)return!1;return t.style.removeProperty("display"),function(e,t){if(!e||!t)return!1;return e.removeAttribute("aria-describedby"),!0}(e.currentTarget,t)}(e,t)}return function(e,t,r){if(!e||!t||!r)return!1;e.addEventListener("focus",(function(e){return a(e,r)})),e.addEventListener("focusout",(function(e){return i(e,r,t)})),r.addEventListener("focus",(function(e){return a(e,r)}),!0),r.addEventListener("focusout",(function(e){return i(e,r,t)}),!0)}(n,t,r),function(e,t){if(!e||!t)return!1;t.setAttribute("id","".concat(e.id,"-disclaimer"))}(n,r),!0};document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("[data-chf-footer]");return!!e&&(Object(a.a)(e),Object(i.a)(e),n.a.addEvents(),o.init(e),function(e){var t=e.querySelector("[data-chf-newsletter]");if(!t)return!1;var r=t.querySelector("[data-chf-newsletter-cta]"),a=t.querySelectorAll("[data-chf-newsletter-checkbox]"),i=[];if(!r||!a)return!1;function o(e){return!!r&&(r.disabled=e)}t.addEventListener("chf-validation-success",(function(e){e.preventDefault();var a=new FormData(t),c=t.action,s={wt_link_id:u.a.tealiumText(r.getAttribute("data-tealium-rel"))+"."+u.a.tealiumText(i.join("-"))};if(!c)return!1;l.a.setFocusBack(),o(!0),u.a.overlayManualUtagLink(s),i=[],fetch(c,{method:"POST",body:a}).then((function(e){var t=e.json();return t||null})).then((function(e){try{n.a.open(e.headline,e.message),o(!1)}catch(e){console.log("ERROR JSONparse:"+content),console.log(e)}}))})),r.addEventListener("click",(function(){r.setAttribute("data-tealium-rel",u.a.tealiumText(this.getAttribute("data-tealium-rel"))),a.forEach((function(e){if(e.checked){var t=e.labels[0].innerText.replace(/Telekom/gi,"").replace(" ","");i.includes(t)||i.push(t)}}))}))}(e),c(e),!0)}))}]);
