!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="../",n(n.s=21)}({0:function(e,t){e.exports=jQuery},1:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return u}));var r=n(0),a=n.n(r);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info",n=a()(document.createElement("div")),r=a()(document.createElement("p")),o=a()(document.createElement("button"));n.addClass("notice notice-"+t+" is-dismissible").hide(),o.addClass("notice-dismiss"),r.html(e),n.append(r).append(o),o.on("click",(function(e){e.preventDefault(),n.fadeOut(200,(function(){n.remove()}))})),a()("hr.wp-header-end").after(n),n.fadeIn(200)}function s(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=e.length,a=!0,o=!1,i=void 0;try{for(var s,c=e.clone().models[Symbol.iterator]();!(a=(s=c.next()).done);a=!0){var f=s.value;(!u(f)||f.get("usedAsWatermark")||!0===t&&!f.get("hasBackup"))&&(!0===n&&e.remove(f),r--)}}catch(e){o=!0,i=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw i}}return r}function c(e){var t,n=e.indexOf("?"),r="t=".concat(Date.now());if(-1!==n){t=e.substr(n),e=e.substr(0,n);var a=/([^\s])t=[0-9]+/;t.match(a)?t=t.replace(a,"$1".concat(r)):t+="&".concat(r)}else t="?".concat(r);return e+t}function u(e){return"object"===o(e)&&e.get&&(e=e.get("mime")),Object.keys(ew.mime).includes(e)}},21:function(e,t,n){"use strict";n.r(t);n(28);var r=n(0),a=n.n(r),o=n(1);function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.handleClick=this.handleClick.bind(this),this.metabox=a()("#watermarks"),this.metaboxContent=this.metabox.find(".watermarks-metabox"),this.errorMessage=this.metabox.find(".error-message"),this.spinners=this.metabox.find(".spinner"),this.buttons=this.metabox.find("button"),this.form=a()("form#post"),this.postID=this.form.find("#post_ID").val(),this.headerEnd=a()("hr.wp-header-end"),this.image=a()(".wp_attachment_image img.thumbnail"),this.metabox.on("click","button",this.handleClick)}var t,n,r;return t=e,(n=[{key:"handleClick",value:function(e){var t=this;e.preventDefault();var n=a()(e.target),r=n.data("action");this.buttons.prop("disabled",!0),n.next(".spinner").css("visibility","visible"),this.errorMessage.hide();var i={action:"easy-watermark/"+r,nonce:n.data("nonce"),attachment_id:this.postID};"apply_single"===r&&(i.watermark=n.data("watermark")),a.a.ajax(ajaxurl,{data:i}).done((function(e){if(!0===e.success){if(t.metaboxContent.replaceWith(e.data.metaboxContent),t.metaboxContent=t.metabox.find(".watermarks-metabox"),t.errorMessage=t.metabox.find(".error-message"),t.spinners=t.metabox.find(".spinner"),t.buttons=t.metabox.find("button"),e.data.attachmentVersion){var n=Object(o.c)(t.image.attr("src"),e.data.attachmentVersion);t.image.attr("src",n),"string"==typeof e.data.message&&Object(o.a)(e.data.message,"success")}}else{var r="string"==typeof e.data.message?e.data.message:ew.genericErrorMessage;Object(o.a)(r,"error")}})).fail((function(){Object(o.a)(ew.genericErrorMessage,"error")})).complete((function(){t.spinners.css("visibility","hidden"),t.buttons.prop("disabled",!1)}))}}])&&i(t.prototype,n),r&&i(t,r),e}())},28:function(e,t){}});