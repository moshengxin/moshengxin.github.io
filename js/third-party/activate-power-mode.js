"use strict";function _typeof3(e){return(_typeof3="function"==typeof Symbol&&"symbol"===_typeof3(Symbol.iterator)?function(e){return void 0===e?"undefined":_typeof3(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":_typeof3(e)})(e)}!function(e,t){"object"==("undefined"==typeof exports?"undefined":_typeof3(exports))&&"object"==("undefined"==typeof module?"undefined":_typeof3(module))?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==("undefined"==typeof exports?"undefined":_typeof3(exports))?exports.POWERMODE=t():e.POWERMODE=t()}(void 0,function(){return r={},o.m=n=[function(e,t,a){var r=document.createElement("canvas");r.width=window.innerWidth,r.height=window.innerHeight,r.style.cssText="position:fixed;top:0;left:0;pointer-events:none;z-index:999999",window.addEventListener("resize",function(){r.width=window.innerWidth,r.height=window.innerHeight}),document.body.appendChild(r);var i=r.getContext("2d"),l=[],u=0,p=!1;function o(e,t){return Math.random()*(t-e)+e}function f(e){if(c.colorful){var t=o(0,360);return"hsla("+o(t-10,t+10)+", 100%, "+o(50,80)+"%, 1)"}return window.getComputedStyle(e).color}function c(){for(var e,t,o,n,r,i=function(){var e=document.activeElement;if("TEXTAREA"===e.tagName||"INPUT"===e.tagName&&"text"===e.getAttribute("type")){var t=a(1)(e,e.selectionEnd),o=e.getBoundingClientRect();return{x:t.left+o.left,y:t.top+o.top,color:f(e)}}t=window.getSelection();if(t.rangeCount){e=t.getRangeAt(0),t=e.startContainer;return t.nodeType===document.TEXT_NODE&&(t=t.parentNode),{x:(o=e.getBoundingClientRect()).left,y:o.top,color:f(t)}}return{x:0,y:0,color:"transparent"}}(),d=5+Math.round(10*Math.random());d--;)l[u]=(e=i.x,t=i.y,o=i.color,{x:e,y:t,alpha:1,color:o,velocity:{x:2*Math.random()-1,y:2*Math.random()-3.5}}),u=(u+1)%500;c.shake&&(n=(r=1+2*Math.random())*(.5<Math.random()?-1:1),r=r*(.5<Math.random()?-1:1),document.body.style.marginLeft=n+"px",document.body.style.marginTop=r+"px",setTimeout(function(){document.body.style.marginLeft="",document.body.style.marginTop=""},75)),p||requestAnimationFrame(s)}function s(){p=!0,i.clearRect(0,0,r.width,r.height);for(var e=!1,t=r.getBoundingClientRect(),o=0;o<l.length;++o){var n=l[o];n.alpha<=.1||(n.velocity.y+=.075,n.x+=n.velocity.x,n.y+=n.velocity.y,n.alpha*=.96,i.globalAlpha=n.alpha,i.fillStyle=n.color,i.fillRect(Math.round(n.x-1.5)-t.left,Math.round(n.y-1.5)-t.top,3,3),e=!0)}e?requestAnimationFrame(s):p=!1}c.shake=!0,c.colorful=!1,e.exports=c},function(e,t){function o(e,t,o){var n=o&&o.debug||!1;!n||(d=document.querySelector("#input-textarea-caret-position-mirror-div"))&&d.parentNode.removeChild(d);o=document.createElement("div");o.id="input-textarea-caret-position-mirror-div",document.body.appendChild(o);var r=o.style,i=window.getComputedStyle?getComputedStyle(e):e.currentStyle;r.whiteSpace="pre-wrap","INPUT"!==e.nodeName&&(r.wordWrap="break-word"),r.position="absolute",n||(r.visibility="hidden"),a.forEach(function(e){r[e]=i[e]}),l?e.scrollHeight>parseInt(i.height)&&(r.overflowY="scroll"):r.overflow="hidden",o.textContent=e.value.substring(0,t),"INPUT"===e.nodeName&&(o.textContent=o.textContent.replace(/\s/g," "));var d=document.createElement("span");d.textContent=e.value.substring(t)||".",o.appendChild(d);t={top:d.offsetTop+parseInt(i.borderTopWidth),left:d.offsetLeft+parseInt(i.borderLeftWidth)};return n?d.style.backgroundColor="#aaa":document.body.removeChild(o),t}var a,l;a=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],l=null!=window.mozInnerScreenX,void 0!==e&&void 0!==e.exports?e.exports=o:window.getCaretCoordinates=o}],o.c=r,o.p="",o(0);function o(e){if(r[e])return r[e].exports;var t=r[e]={exports:{},id:e,loaded:!1};return n[e].call(t.exports,t,t.exports,o),t.loaded=!0,t.exports}var n,r});