/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e,n){function i(t){u.env()&&(p(t.design)&&d.on("__wf_design",t.design),p(t.preview)&&d.on("__wf_preview",t.preview)),p(t.destroy)&&d.on("__wf_destroy",t.destroy),t.ready&&p(t.ready)&&function(t){if(w)return void t.ready();if(m.contains(l,t.ready))return;l.push(t.ready)}(t)}function r(t){p(t.design)&&d.off("__wf_design",t.design),p(t.preview)&&d.off("__wf_preview",t.preview),p(t.destroy)&&d.off("__wf_destroy",t.destroy),t.ready&&p(t.ready)&&function(t){l=m.filter(l,function(e){return e!==t.ready})}(t)}function o(t,e){var n=[],i={};return i.up=m.throttle(function(t){m.each(n,function(e){e(t)})}),t&&e&&t.on(e,i.up),i.on=function(t){"function"==typeof t&&(m.contains(n,t)||n.push(t))},i.off=function(t){n=arguments.length?m.filter(n,function(e){return e!==t}):[]},i}function a(t){p(t)&&t()}function s(){E&&(E.reject(),d.off("load",E.resolve)),E=new h.Deferred,d.on("load",E.resolve)}var u={},c={},l=[],f=window.Webflow||[],h=window.jQuery,d=h(window),v=h(document),p=h.isFunction,m=u._=n(5),g=n(1)&&h.tram,w=!1,b=!1;g.config.hideBackface=!1,g.config.keepInherited=!0,u.define=function(t,e,n){c[t]&&r(c[t]);var o=c[t]=e(h,m,n)||{};return i(o),o},u.require=function(t){return c[t]},u.push=function(t){w?p(t)&&t():f.push(t)},u.env=function(t){var e=window.__wf_design,n=void 0!==e;return t?"design"===t?n&&e:"preview"===t?n&&!e:"slug"===t?n&&window.__wf_slug:"editor"===t?window.WebflowEditor:"test"===t?window.__wf_test:"frame"===t?window!==window.top:void 0:n};var y=navigator.userAgent.toLowerCase(),x=u.env.touch="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,_=u.env.chrome=/chrome/.test(y)&&/Google/.test(navigator.vendor)&&parseInt(y.match(/chrome\/(\d+)\./)[1],10),k=u.env.ios=/(ipod|iphone|ipad)/.test(y);u.env.safari=/safari/.test(y)&&!_&&!k;var z;x&&v.on("touchstart mousedown",function(t){z=t.target}),u.validClick=x?function(t){return t===z||h.contains(t,z)}:function(){return!0};var O="resize.webflow orientationchange.webflow load.webflow";u.resize=o(d,O),u.scroll=o(d,"scroll.webflow resize.webflow orientationchange.webflow load.webflow"),u.redraw=o(),u.location=function(t){window.location=t},u.env()&&(u.location=function(){}),u.ready=function(){w=!0,b?(b=!1,m.each(c,i)):m.each(l,a),m.each(f,a),u.resize.up()};var E;u.load=function(t){E.then(t)},u.destroy=function(t){t=t||{},b=!0,d.triggerHandler("__wf_destroy"),null!=t.domready&&(w=t.domready),m.each(c,r),u.resize.off(),u.scroll.off(),u.redraw.off(),l=[],f=[],"pending"===E.state()&&s()},h(u.ready),s(),t.exports=window.Webflow=u},function(t,e){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};window.tram=function(t){function e(t,e){return(new S.Bare).init(t,e)}function i(t){return t.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()})}function r(t){var e=parseInt(t.slice(1),16);return[e>>16&255,e>>8&255,255&e]}function o(t,e,n){return"#"+(1<<24|t<<16|e<<8|n).toString(16).slice(1)}function a(){}function s(t,e,n){if(void 0!==e&&(n=e),void 0===t)return n;var i=n;return Y.test(t)||!G.test(t)?i=parseInt(t,10):G.test(t)&&(i=1e3*parseFloat(t)),0>i&&(i=0),i==i?i:n}function u(t){B.debug&&window&&window.console.warn(t)}var c=function(t,e,i){function r(t){return"object"==(void 0===t?"undefined":n(t))}function o(t){return"function"==typeof t}function a(){}function s(n,u){function c(){var t=new l;return o(t.init)&&t.init.apply(t,arguments),t}function l(){}u===i&&(u=n,n=Object),c.Bare=l;var f,h=a[t]=n[t],d=l[t]=c[t]=new a;return d.constructor=c,c.mixin=function(e){return l[t]=c[t]=s(c,e)[t],c},c.open=function(t){if(f={},o(t)?f=t.call(c,d,h,c,n):r(t)&&(f=t),r(f))for(var i in f)e.call(f,i)&&(d[i]=f[i]);return o(d.init)||(d.init=n),c},c.open(u)}return s}("prototype",{}.hasOwnProperty),l={ease:["ease",function(t,e,n,i){var r=(t/=i)*t,o=r*t;return e+n*(-2.75*o*r+11*r*r+-15.5*o+8*r+.25*t)}],"ease-in":["ease-in",function(t,e,n,i){var r=(t/=i)*t,o=r*t;return e+n*(-1*o*r+3*r*r+-3*o+2*r)}],"ease-out":["ease-out",function(t,e,n,i){var r=(t/=i)*t,o=r*t;return e+n*(.3*o*r+-1.6*r*r+2.2*o+-1.8*r+1.9*t)}],"ease-in-out":["ease-in-out",function(t,e,n,i){var r=(t/=i)*t,o=r*t;return e+n*(2*o*r+-5*r*r+2*o+2*r)}],linear:["linear",function(t,e,n,i){return n*t/i+e}],"ease-in-quad":["cubic-bezier(0.550, 0.085, 0.680, 0.530)",function(t,e,n,i){return n*(t/=i)*t+e}],"ease-out-quad":["cubic-bezier(0.250, 0.460, 0.450, 0.940)",function(t,e,n,i){return-n*(t/=i)*(t-2)+e}],"ease-in-out-quad":["cubic-bezier(0.455, 0.030, 0.515, 0.955)",function(t,e,n,i){return(t/=i/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e}],"ease-in-cubic":["cubic-bezier(0.550, 0.055, 0.675, 0.190)",function(t,e,n,i){return n*(t/=i)*t*t+e}],"ease-out-cubic":["cubic-bezier(0.215, 0.610, 0.355, 1)",function(t,e,n,i){return n*((t=t/i-1)*t*t+1)+e}],"ease-in-out-cubic":["cubic-bezier(0.645, 0.045, 0.355, 1)",function(t,e,n,i){return(t/=i/2)<1?n/2*t*t*t+e:n/2*((t-=2)*t*t+2)+e}],"ease-in-quart":["cubic-bezier(0.895, 0.030, 0.685, 0.220)",function(t,e,n,i){return n*(t/=i)*t*t*t+e}],"ease-out-quart":["cubic-bezier(0.165, 0.840, 0.440, 1)",function(t,e,n,i){return-n*((t=t/i-1)*t*t*t-1)+e}],"ease-in-out-quart":["cubic-bezier(0.770, 0, 0.175, 1)",function(t,e,n,i){return(t/=i/2)<1?n/2*t*t*t*t+e:-n/2*((t-=2)*t*t*t-2)+e}],"ease-in-quint":["cubic-bezier(0.755, 0.050, 0.855, 0.060)",function(t,e,n,i){return n*(t/=i)*t*t*t*t+e}],"ease-out-quint":["cubic-bezier(0.230, 1, 0.320, 1)",function(t,e,n,i){return n*((t=t/i-1)*t*t*t*t+1)+e}],"ease-in-out-quint":["cubic-bezier(0.860, 0, 0.070, 1)",function(t,e,n,i){return(t/=i/2)<1?n/2*t*t*t*t*t+e:n/2*((t-=2)*t*t*t*t+2)+e}],"ease-in-sine":["cubic-bezier(0.470, 0, 0.745, 0.715)",function(t,e,n,i){return-n*Math.cos(t/i*(Math.PI/2))+n+e}],"ease-out-sine":["cubic-bezier(0.390, 0.575, 0.565, 1)",function(t,e,n,i){return n*Math.sin(t/i*(Math.PI/2))+e}],"ease-in-out-sine":["cubic-bezier(0.445, 0.050, 0.550, 0.950)",function(t,e,n,i){return-n/2*(Math.cos(Math.PI*t/i)-1)+e}],"ease-in-expo":["cubic-bezier(0.950, 0.050, 0.795, 0.035)",function(t,e,n,i){return 0===t?e:n*Math.pow(2,10*(t/i-1))+e}],"ease-out-expo":["cubic-bezier(0.190, 1, 0.220, 1)",function(t,e,n,i){return t===i?e+n:n*(1-Math.pow(2,-10*t/i))+e}],"ease-in-out-expo":["cubic-bezier(1, 0, 0, 1)",function(t,e,n,i){return 0===t?e:t===i?e+n:(t/=i/2)<1?n/2*Math.pow(2,10*(t-1))+e:n/2*(2-Math.pow(2,-10*--t))+e}],"ease-in-circ":["cubic-bezier(0.600, 0.040, 0.980, 0.335)",function(t,e,n,i){return-n*(Math.sqrt(1-(t/=i)*t)-1)+e}],"ease-out-circ":["cubic-bezier(0.075, 0.820, 0.165, 1)",function(t,e,n,i){return n*Math.sqrt(1-(t=t/i-1)*t)+e}],"ease-in-out-circ":["cubic-bezier(0.785, 0.135, 0.150, 0.860)",function(t,e,n,i){return(t/=i/2)<1?-n/2*(Math.sqrt(1-t*t)-1)+e:n/2*(Math.sqrt(1-(t-=2)*t)+1)+e}],"ease-in-back":["cubic-bezier(0.600, -0.280, 0.735, 0.045)",function(t,e,n,i,r){return void 0===r&&(r=1.70158),n*(t/=i)*t*((r+1)*t-r)+e}],"ease-out-back":["cubic-bezier(0.175, 0.885, 0.320, 1.275)",function(t,e,n,i,r){return void 0===r&&(r=1.70158),n*((t=t/i-1)*t*((r+1)*t+r)+1)+e}],"ease-in-out-back":["cubic-bezier(0.680, -0.550, 0.265, 1.550)",function(t,e,n,i,r){return void 0===r&&(r=1.70158),(t/=i/2)<1?n/2*t*t*((1+(r*=1.525))*t-r)+e:n/2*((t-=2)*t*((1+(r*=1.525))*t+r)+2)+e}]},f={"ease-in-back":"cubic-bezier(0.600, 0, 0.735, 0.045)","ease-out-back":"cubic-bezier(0.175, 0.885, 0.320, 1)","ease-in-out-back":"cubic-bezier(0.680, 0, 0.265, 1)"},h=document,d=window,v="bkwld-tram",p=/[\-\.0-9]/g,m=/[A-Z]/,g=/^(rgb|#)/,w=/(em|cm|mm|in|pt|pc|px)$/,b=/(em|cm|mm|in|pt|pc|px|%)$/,y=/(deg|rad|turn)$/,x=/(all|none) 0s ease 0s/,_=/^(width|height)$/,k=" ",z=h.createElement("a"),O=["Webkit","Moz","O","ms"],E=["-webkit-","-moz-","-o-","-ms-"],T=function(t){if(t in z.style)return{dom:t,css:t};var e,n,i="",r=t.split("-");for(e=0;e<r.length;e++)i+=r[e].charAt(0).toUpperCase()+r[e].slice(1);for(e=0;e<O.length;e++)if((n=O[e]+i)in z.style)return{dom:n,css:E[e]+t}},A=e.support={bind:Function.prototype.bind,transform:T("transform"),transition:T("transition"),backface:T("backface-visibility"),timing:T("transition-timing-function")};if(A.transition){var q=A.timing.dom;if(z.style[q]=l["ease-in-back"][0],!z.style[q])for(var $ in f)l[$][0]=f[$]}var j=e.frame=function(){var t=d.requestAnimationFrame||d.webkitRequestAnimationFrame||d.mozRequestAnimationFrame||d.oRequestAnimationFrame||d.msRequestAnimationFrame;return t&&A.bind?t.bind(d):function(t){d.setTimeout(t,16)}}(),C=e.now=function(){var t=d.performance,e=t&&(t.now||t.webkitNow||t.msNow||t.mozNow);return e&&A.bind?e.bind(t):Date.now||function(){return+new Date}}(),M=c(function(e){function r(t,e){var n=function(t){for(var e=-1,n=t?t.length:0,i=[];++e<n;){var r=t[e];r&&i.push(r)}return i}((""+t).split(k)),i=n[0];e=e||{};var r=W[i];if(!r)return u("Unsupported property: "+i);if(!e.weak||!this.props[i]){var o=r[0],a=this.props[i];return a||(a=this.props[i]=new o.Bare),a.init(this.$el,n,r,e),a}}function o(t,e,i){if(t){var o=void 0===t?"undefined":n(t);if(e||(this.timer&&this.timer.destroy(),this.queue=[],this.active=!1),"number"==o&&e)return this.timer=new N({duration:t,context:this,complete:a}),void(this.active=!0);if("string"==o&&e){switch(t){case"hide":l.call(this);break;case"stop":c.call(this);break;case"redraw":f.call(this);break;default:r.call(this,t,i&&i[1])}return a.call(this)}if("function"==o)return void t.call(this,this);if("object"==o){var u=0;d.call(this,t,function(t,e){t.span>u&&(u=t.span),t.stop(),t.animate(e)},function(t){"wait"in t&&(u=s(t.wait,0))}),h.call(this),u>0&&(this.timer=new N({duration:u,context:this}),this.active=!0,e&&(this.timer.complete=a));var v=this,p=!1,m={};j(function(){d.call(v,t,function(t){t.active&&(p=!0,m[t.name]=t.nextStyle)}),p&&v.$el.css(m)})}}}function a(){if(this.timer&&this.timer.destroy(),this.active=!1,this.queue.length){var t=this.queue.shift();o.call(this,t.options,!0,t.args)}}function c(t){this.timer&&this.timer.destroy(),this.queue=[],this.active=!1;var e;"string"==typeof t?(e={},e[t]=1):e="object"==(void 0===t?"undefined":n(t))&&null!=t?t:this.props,d.call(this,e,p),h.call(this)}function l(){c.call(this),this.el.style.display="none"}function f(){this.el.offsetHeight}function h(){var t,e,n=[];this.upstream&&n.push(this.upstream);for(t in this.props)(e=this.props[t]).active&&n.push(e.string);n=n.join(","),this.style!==n&&(this.style=n,this.el.style[A.transition.dom]=n)}function d(t,e,n){var o,a,s,u,c=e!==p,l={};for(o in t)s=t[o],o in X?(l.transform||(l.transform={}),l.transform[o]=s):(m.test(o)&&(o=i(o)),o in W?l[o]=s:(u||(u={}),u[o]=s));for(o in l){if(s=l[o],!(a=this.props[o])){if(!c)continue;a=r.call(this,o)}e.call(this,a,s)}n&&u&&n.call(this,u)}function p(t){t.stop()}function g(t,e){t.set(e)}function w(t){this.$el.css(t)}function b(t,n){e[t]=function(){return this.children?function(t,e){var n,i=this.children.length;for(n=0;i>n;n++)t.apply(this.children[n],e);return this}.call(this,n,arguments):(this.el&&n.apply(this,arguments),this)}}e.init=function(e){if(this.$el=t(e),this.el=this.$el[0],this.props={},this.queue=[],this.style="",this.active=!1,B.keepInherited&&!B.fallback){var n=U(this.el,"transition");n&&!x.test(n)&&(this.upstream=n)}A.backface&&B.hideBackface&&P(this.el,A.backface.css,"hidden")},b("add",r),b("start",o),b("wait",function(t){t=s(t,0),this.active?this.queue.push({options:t}):(this.timer=new N({duration:t,context:this,complete:a}),this.active=!0)}),b("then",function(t){return this.active?(this.queue.push({options:t,args:arguments}),void(this.timer.complete=a)):u("No active transition timer. Use start() or wait() before then().")}),b("next",a),b("stop",c),b("set",function(t){c.call(this,t),d.call(this,t,g,w)}),b("show",function(t){"string"!=typeof t&&(t="block"),this.el.style.display=t}),b("hide",l),b("redraw",f),b("destroy",function(){c.call(this),t.removeData(this.el,v),this.$el=this.el=null})}),S=c(M,function(e){function n(e,n){var i=t.data(e,v)||t.data(e,v,new M.Bare);return i.el||i.init(e),n?i.start(n):i}e.init=function(e,i){var r=t(e);if(!r.length)return this;if(1===r.length)return n(r[0],i);var o=[];return r.each(function(t,e){o.push(n(e,i))}),this.children=o,this}}),R=c(function(t){function e(){var t=this.get();this.update("auto");var e=this.get();return this.update(t),e}var i=500,r="ease",a=0;t.init=function(t,e,n,o){this.$el=t,this.el=t[0];var u=e[0];n[2]&&(u=n[2]),Z[u]&&(u=Z[u]),this.name=u,this.type=n[1],this.duration=s(e[1],this.duration,i),this.ease=function(t,e,n){return void 0!==e&&(n=e),t in l?t:n}(e[2],this.ease,r),this.delay=s(e[3],this.delay,a),this.span=this.duration+this.delay,this.active=!1,this.nextStyle=null,this.auto=_.test(this.name),this.unit=o.unit||this.unit||B.defaultUnit,this.angle=o.angle||this.angle||B.defaultAngle,B.fallback||o.fallback?this.animate=this.fallback:(this.animate=this.transition,this.string=this.name+k+this.duration+"ms"+("ease"!=this.ease?k+l[this.ease][0]:"")+(this.delay?k+this.delay+"ms":""))},t.set=function(t){t=this.convert(t,this.type),this.update(t),this.redraw()},t.transition=function(t){this.active=!0,t=this.convert(t,this.type),this.auto&&("auto"==this.el.style[this.name]&&(this.update(this.get()),this.redraw()),"auto"==t&&(t=e.call(this))),this.nextStyle=t},t.fallback=function(t){var n=this.el.style[this.name]||this.convert(this.get(),this.type);t=this.convert(t,this.type),this.auto&&("auto"==n&&(n=this.convert(this.get(),this.type)),"auto"==t&&(t=e.call(this))),this.tween=new H({from:n,to:t,duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},t.get=function(){return U(this.el,this.name)},t.update=function(t){P(this.el,this.name,t)},t.stop=function(){(this.active||this.nextStyle)&&(this.active=!1,this.nextStyle=null,P(this.el,this.name,this.get()));var t=this.tween;t&&t.context&&t.destroy()},t.convert=function(t,e){if("auto"==t&&this.auto)return t;var i,r="number"==typeof t,a="string"==typeof t;switch(e){case"number":if(r)return t;if(a&&""===t.replace(p,""))return+t;i="number(unitless)";break;case g:if(a){if(""===t&&this.original)return this.original;if(e.test(t))return"#"==t.charAt(0)&&7==t.length?t:function(t){var e=/rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);return(e?o(e[1],e[2],e[3]):t).replace(/#(\w)(\w)(\w)$/,"#$1$1$2$2$3$3")}(t)}i="hex or rgb string";break;case w:if(r)return t+this.unit;if(a&&e.test(t))return t;i="number(px) or string(unit)";break;case b:if(r)return t+this.unit;if(a&&e.test(t))return t;i="number(px) or string(unit or %)";break;case y:if(r)return t+this.angle;if(a&&e.test(t))return t;i="number(deg) or string(angle)";break;case"unitless":if(r)return t;if(a&&b.test(t))return t;i="number(unitless) or string(unit or %)"}return function(t,e){u("Type warning: Expected: ["+t+"] Got: ["+(void 0===e?"undefined":n(e))+"] "+e)}(i,t),t},t.redraw=function(){this.el.offsetHeight}}),D=c(R,function(t,e){t.init=function(){e.init.apply(this,arguments),this.original||(this.original=this.convert(this.get(),g))}}),I=c(R,function(t,e){t.init=function(){e.init.apply(this,arguments),this.animate=this.fallback},t.get=function(){return this.$el[this.name]()},t.update=function(t){this.$el[this.name](t)}}),L=c(R,function(t,e){function n(t,e){var n,i,r,o,a;for(n in t)r=(o=X[n])[0],i=o[1]||n,a=this.convert(t[n],r),e.call(this,i,a,r)}t.init=function(){e.init.apply(this,arguments),this.current||(this.current={},X.perspective&&B.perspective&&(this.current.perspective=B.perspective,P(this.el,this.name,this.style(this.current)),this.redraw()))},t.set=function(t){n.call(this,t,function(t,e){this.current[t]=e}),P(this.el,this.name,this.style(this.current)),this.redraw()},t.transition=function(t){var e=this.values(t);this.tween=new F({current:this.current,values:e,duration:this.duration,delay:this.delay,ease:this.ease});var n,i={};for(n in this.current)i[n]=n in e?e[n]:this.current[n];this.active=!0,this.nextStyle=this.style(i)},t.fallback=function(t){var e=this.values(t);this.tween=new F({current:this.current,values:e,duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},t.update=function(){P(this.el,this.name,this.style(this.current))},t.style=function(t){var e,n="";for(e in t)n+=e+"("+t[e]+") ";return n},t.values=function(t){var e,i={};return n.call(this,t,function(t,n,r){i[t]=n,void 0===this.current[t]&&(e=0,~t.indexOf("scale")&&(e=1),this.current[t]=this.convert(e,r))}),i}}),H=c(function(e){function n(){var t,e,i,r=s.length;if(r)for(j(n),e=C(),t=r;t--;)(i=s[t])&&i.render(e)}var i={ease:l.ease[1],from:0,to:1};e.init=function(t){this.duration=t.duration||0,this.delay=t.delay||0;var e=t.ease||i.ease;l[e]&&(e=l[e][1]),"function"!=typeof e&&(e=i.ease),this.ease=e,this.update=t.update||a,this.complete=t.complete||a,this.context=t.context||this,this.name=t.name;var n=t.from,r=t.to;void 0===n&&(n=i.from),void 0===r&&(r=i.to),this.unit=t.unit||"","number"==typeof n&&"number"==typeof r?(this.begin=n,this.change=r-n):this.format(r,n),this.value=this.begin+this.unit,this.start=C(),!1!==t.autoplay&&this.play()},e.play=function(){this.active||(this.start||(this.start=C()),this.active=!0,function(t){1===s.push(t)&&j(n)}(this))},e.stop=function(){this.active&&(this.active=!1,function(e){var n,i=t.inArray(e,s);i>=0&&(n=s.slice(i+1),s.length=i,n.length&&(s=s.concat(n)))}(this))},e.render=function(t){var e,n=t-this.start;if(this.delay){if(n<=this.delay)return;n-=this.delay}if(n<this.duration){var i=this.ease(n,0,1,this.duration);return e=this.startRGB?function(t,e,n){return o(t[0]+n*(e[0]-t[0]),t[1]+n*(e[1]-t[1]),t[2]+n*(e[2]-t[2]))}(this.startRGB,this.endRGB,i):function(t){return Math.round(t*c)/c}(this.begin+i*this.change),this.value=e+this.unit,void this.update.call(this.context,this.value)}e=this.endHex||this.begin+this.change,this.value=e+this.unit,this.update.call(this.context,this.value),this.complete.call(this.context),this.destroy()},e.format=function(t,e){if(e+="","#"==(t+="").charAt(0))return this.startRGB=r(e),this.endRGB=r(t),this.endHex=t,this.begin=0,void(this.change=1);if(!this.unit){var n=e.replace(p,"");n!==t.replace(p,"")&&function(t,e,n){u("Units do not match ["+t+"]: "+e+", "+n)}("tween",e,t),this.unit=n}e=parseFloat(e),t=parseFloat(t),this.begin=this.value=e,this.change=t-e},e.destroy=function(){this.stop(),this.context=null,this.ease=this.update=this.complete=a};var s=[],c=1e3}),N=c(H,function(t){t.init=function(t){this.duration=t.duration||0,this.complete=t.complete||a,this.context=t.context,this.play()},t.render=function(t){t-this.start<this.duration||(this.complete.call(this.context),this.destroy())}}),F=c(H,function(t,e){t.init=function(t){this.context=t.context,this.update=t.update,this.tweens=[],this.current=t.current;var e,n;for(e in t.values)n=t.values[e],this.current[e]!==n&&this.tweens.push(new H({name:e,from:this.current[e],to:n,duration:t.duration,delay:t.delay,ease:t.ease,autoplay:!1}));this.play()},t.render=function(t){var e,n,i=!1;for(e=this.tweens.length;e--;)(n=this.tweens[e]).context&&(n.render(t),this.current[n.name]=n.value,i=!0);return i?void(this.update&&this.update.call(this.context)):this.destroy()},t.destroy=function(){if(e.destroy.call(this),this.tweens){var t;for(t=this.tweens.length;t--;)this.tweens[t].destroy();this.tweens=null,this.current=null}}}),B=e.config={debug:!1,defaultUnit:"px",defaultAngle:"deg",keepInherited:!1,hideBackface:!1,perspective:"",fallback:!A.transition,agentTests:[]};e.fallback=function(t){if(!A.transition)return B.fallback=!0;B.agentTests.push("("+t+")");var e=new RegExp(B.agentTests.join("|"),"i");B.fallback=e.test(navigator.userAgent)},e.fallback("6.0.[2-5] Safari"),e.tween=function(t){return new H(t)},e.delay=function(t,e,n){return new N({complete:e,duration:t,context:n})},t.fn.tram=function(t){return e.call(null,this,t)};var P=t.style,U=t.css,Z={transform:A.transform&&A.transform.css},W={color:[D,g],background:[D,g,"background-color"],"outline-color":[D,g],"border-color":[D,g],"border-top-color":[D,g],"border-right-color":[D,g],"border-bottom-color":[D,g],"border-left-color":[D,g],"border-width":[R,w],"border-top-width":[R,w],"border-right-width":[R,w],"border-bottom-width":[R,w],"border-left-width":[R,w],"border-spacing":[R,w],"letter-spacing":[R,w],margin:[R,w],"margin-top":[R,w],"margin-right":[R,w],"margin-bottom":[R,w],"margin-left":[R,w],padding:[R,w],"padding-top":[R,w],"padding-right":[R,w],"padding-bottom":[R,w],"padding-left":[R,w],"outline-width":[R,w],opacity:[R,"number"],top:[R,b],right:[R,b],bottom:[R,b],left:[R,b],"font-size":[R,b],"text-indent":[R,b],"word-spacing":[R,b],width:[R,b],"min-width":[R,b],"max-width":[R,b],height:[R,b],"min-height":[R,b],"max-height":[R,b],"line-height":[R,"unitless"],"scroll-top":[I,"number","scrollTop"],"scroll-left":[I,"number","scrollLeft"]},X={};A.transform&&(W.transform=[L],X={x:[b,"translateX"],y:[b,"translateY"],rotate:[y],rotateX:[y],rotateY:[y],scale:["number"],scaleX:["number"],scaleY:["number"],skew:[y],skewX:[y],skewY:[y]}),A.transform&&A.backface&&(X.z=[b,"translateZ"],X.rotateZ=[y],X.scaleZ=["number"],X.perspective=[w]);var Y=/ms/,G=/s|\./;return t.tram=e}(window.jQuery)},function(t,e,n){"use strict";function i(t,e){var n=document.createEvent("CustomEvent");n.initCustomEvent(e,!0,!0,null),t.dispatchEvent(n)}var r=n(7),o=window.jQuery,a={},s={reset:function(t,e){r.triggers.reset(t,e)},intro:function(t,e){r.triggers.intro(t,e),i(e,"COMPONENT_ACTIVE")},outro:function(t,e){r.triggers.outro(t,e),i(e,"COMPONENT_INACTIVE")}};a.triggers={},a.types={INTRO:"w-ix-intro.w-ix",OUTRO:"w-ix-outro.w-ix"},o.extend(a.triggers,s),t.exports=a},function(t,e,n){n(4),n(6),n(8),n(9),n(10),t.exports=n(11)},function(t,e,n){var i=n(0);i.define("brand",t.exports=function(t){function e(){var t=a.children(s),e=t.length&&t.get(0)===n,r=i.env("editor");e?r&&t.remove():(t.length&&t.remove(),r||a.append(n))}var n,r={},o=t("html"),a=t("body"),s=".w-webflow-badge",u=window.location,c=/PhantomJS/i.test(navigator.userAgent);return r.ready=function(){var i=o.attr("data-wf-status"),r=o.attr("data-wf-domain")||"";/\.webflow\.io$/i.test(r)&&u.hostname!==r&&(i=!0),i&&!c&&(n=n||function(){var e=t('<a class="w-webflow-badge"></a>').attr("href","https://webflow.com?utm_campaign=brandjs"),n=t("<img>").attr("src","https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-icon.60efbf6ec9.svg").css({marginRight:"8px",width:"16px"}),i=t("<img>").attr("src","https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg");return e.append(n,i),e[0]}(),e(),setTimeout(e,500))},r})},function(t,e,n){var i=window.$,r=n(1)&&i.tram;/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
t.exports=function(){var t={};t.VERSION="1.6.0-Webflow";var e={},n=Array.prototype,i=Object.prototype,o=Function.prototype,a=(n.push,n.slice),s=(n.concat,i.toString,i.hasOwnProperty),u=n.forEach,c=n.map,l=(n.reduce,n.reduceRight,n.filter),f=(n.every,n.some),h=n.indexOf,d=(n.lastIndexOf,Array.isArray,Object.keys),v=(o.bind,t.each=t.forEach=function(n,i,r){if(null==n)return n;if(u&&n.forEach===u)n.forEach(i,r);else if(n.length===+n.length){for(var o=0,a=n.length;o<a;o++)if(i.call(r,n[o],o,n)===e)return}else{var s=t.keys(n);for(o=0,a=s.length;o<a;o++)if(i.call(r,n[s[o]],s[o],n)===e)return}return n});t.map=t.collect=function(t,e,n){var i=[];return null==t?i:c&&t.map===c?t.map(e,n):(v(t,function(t,r,o){i.push(e.call(n,t,r,o))}),i)},t.find=t.detect=function(t,e,n){var i;return p(t,function(t,r,o){if(e.call(n,t,r,o))return i=t,!0}),i},t.filter=t.select=function(t,e,n){var i=[];return null==t?i:l&&t.filter===l?t.filter(e,n):(v(t,function(t,r,o){e.call(n,t,r,o)&&i.push(t)}),i)};var p=t.some=t.any=function(n,i,r){i||(i=t.identity);var o=!1;return null==n?o:f&&n.some===f?n.some(i,r):(v(n,function(t,n,a){if(o||(o=i.call(r,t,n,a)))return e}),!!o)};t.contains=t.include=function(t,e){return null!=t&&(h&&t.indexOf===h?-1!=t.indexOf(e):p(t,function(t){return t===e}))},t.delay=function(t,e){var n=a.call(arguments,2);return setTimeout(function(){return t.apply(null,n)},e)},t.defer=function(e){return t.delay.apply(t,[e,1].concat(a.call(arguments,1)))},t.throttle=function(t){var e,n,i;return function(){e||(e=!0,n=arguments,i=this,r.frame(function(){e=!1,t.apply(i,n)}))}},t.debounce=function(e,n,i){var r,o,a,s,u,c=function c(){var l=t.now()-s;l<n?r=setTimeout(c,n-l):(r=null,i||(u=e.apply(a,o),a=o=null))};return function(){a=this,o=arguments,s=t.now();var l=i&&!r;return r||(r=setTimeout(c,n)),l&&(u=e.apply(a,o),a=o=null),u}},t.defaults=function(e){if(!t.isObject(e))return e;for(var n=1,i=arguments.length;n<i;n++){var r=arguments[n];for(var o in r)void 0===e[o]&&(e[o]=r[o])}return e},t.keys=function(e){if(!t.isObject(e))return[];if(d)return d(e);var n=[];for(var i in e)t.has(e,i)&&n.push(i);return n},t.has=function(t,e){return s.call(t,e)},t.isObject=function(t){return t===Object(t)},t.now=Date.now||function(){return(new Date).getTime()},t.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var m=/(.)^/,g={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},w=/\\|'|\r|\n|\u2028|\u2029/g,b=function(t){return"\\"+g[t]};return t.template=function(e,n,i){!n&&i&&(n=i),n=t.defaults({},n,t.templateSettings);var r=RegExp([(n.escape||m).source,(n.interpolate||m).source,(n.evaluate||m).source].join("|")+"|$","g"),o=0,a="__p+='";e.replace(r,function(t,n,i,r,s){return a+=e.slice(o,s).replace(w,b),o=s+t.length,n?a+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":i?a+="'+\n((__t=("+i+"))==null?'':__t)+\n'":r&&(a+="';\n"+r+"\n__p+='"),t}),a+="';\n",n.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{var s=new Function(n.variable||"obj","_",a)}catch(t){throw t.source=a,t}var u=function(e){return s.call(this,e,t)},c=n.variable||"obj";return u.source="function("+c+"){\n"+a+"}",u},t}()},function(t,e,n){var i=n(0),r=n(2);i.define("dropdown",t.exports=function(t,e){function n(){h=p&&i.env("design"),(f=v.find(g)).each(o)}function o(n,r){var o=t(r),f=t.data(r,g);f||(f=t.data(r,g,{open:!1,el:o,config:{}})),f.list=o.children(".w-dropdown-list"),f.toggle=o.children(".w-dropdown-toggle"),f.links=f.list.children(".w-dropdown-link"),f.outside=function(n){n.outside&&v.off(l()+g,n.outside);return e.debounce(function(e){if(n.open){var r=t(e.target);if(!r.closest(".w-dropdown-toggle").length){var o=-1===t.inArray(n.el[0],r.parents(g)),a=i.env("editor");if(o){if(a){var s=1===r.parents().length&&1===r.parents("svg").length,u=r.parents(".w-editor-bem-EditorHoverControls").length;if(s||u)return}c(n)}}}})}(f),f.complete=function(t){return function(){t.list.removeClass(w),t.toggle.removeClass(w),t.manageZ&&t.el.css("z-index","")}}(f),f.leave=function(t){return function(){t.hovering=!1,c(t)}}(f),f.moveOutside=function(n){return e.debounce(function(e){if(n.open){var i=t(e.target),r=-1===t.inArray(n.el[0],i.parents(g));if(r){var o=i.parents(".w-editor-bem-EditorHoverControls").length,a=i.parents(".w-editor-bem-RTToolbar").length,s=t(".w-editor-bem-EditorOverlay"),u=s.find(".w-editor-edit-outline").length||s.find(".w-editor-bem-RTToolbar").length;if(o||a||u)return;n.hovering=!1,c(n)}}})}(f),o.off(g),f.toggle.off(g),a(f),f.nav&&f.nav.off(g),f.nav=o.closest(".w-nav"),f.nav.on(b,s(f)),h?o.on("setting"+g,s(f)):(f.toggle.on(l()+g,function(t){return e.debounce(function(){t.open?c(t):u(t)})}(f)),f.config.hover&&f.toggle.on("mouseenter"+g,function(t){return function(){t.hovering=!0,u(t)}}(f)),o.on(b,s(f)),p&&(f.hovering=!1,c(f)))}function a(t){var e=Number(t.el.css("z-index"));t.manageZ=e===x||e===x+1,t.config={hover:Boolean(t.el.attr("data-hover"))&&!m,delay:Number(t.el.attr("data-delay"))||0}}function s(t){return function(e,n){return n=n||{},"w-close"===e.type?c(t):"setting"===e.type?(a(t),!0===n.open&&u(t),void(!1===n.open&&c(t,!0))):void 0}}function u(e){if(!e.open){!function(e){var n=e.el[0];f.each(function(e,i){var r=t(i);r.is(n)||r.has(n).length||r.triggerHandler(b)})}(e),e.open=!0,e.list.addClass(w),e.toggle.addClass(w),y.intro(0,e.el[0]),i.redraw.up(),e.manageZ&&e.el.css("z-index",x+1);var n=i.env("editor");h||v.on(l()+g,e.outside),e.hovering&&!n&&e.el.on("mouseleave"+g,e.leave),e.hovering&&n&&v.on("mousemove"+g,e.moveOutside),window.clearTimeout(e.delayId)}}function c(t,e){if(t.open&&(!t.config.hover||!t.hovering)){t.open=!1;var n=t.config;if(y.outro(0,t.el[0]),v.off(l()+g,t.outside),t.el.off("mouseleave"+g,t.leave),v.off("mousemove"+g,t.moveOutside),window.clearTimeout(t.delayId),!n.delay||e)return t.complete();t.delayId=window.setTimeout(t.complete,n.delay)}}function l(){return m?"tap":"mouseup"}var f,h,d={},v=t(document),p=i.env(),m=i.env.touch,g=".w-dropdown",w="w--open",b="w-close"+g,y=r.triggers,x=900,_=!1;return d.ready=n,d.design=function(){_&&v.find(g).each(function(e,n){t(n).triggerHandler(b)}),_=!1,n()},d.preview=function(){_=!0,n()},d})},function(t,e,n){"use strict";var i=window.jQuery,r={},o=[],a={reset:function(t,e){e.__wf_intro=null},intro:function(t,e){e.__wf_intro||(e.__wf_intro=!0,i(e).triggerHandler(r.types.INTRO))},outro:function(t,e){e.__wf_intro&&(e.__wf_intro=null,i(e).triggerHandler(r.types.OUTRO))}};r.triggers={},r.types={INTRO:"w-ix-intro.w-ix",OUTRO:"w-ix-outro.w-ix"},r.init=function(){for(var t=o.length,e=0;e<t;e++){var n=o[e];n[0](0,n[1])}o=[],i.extend(r.triggers,a)},r.async=function(){for(var t in a){var e=a[t];a.hasOwnProperty(t)&&(r.triggers[t]=function(t,n){o.push([e,n])})}},r.async(),t.exports=r},function(t,e,n){var i=n(0);i.define("links",t.exports=function(t,e){function n(){var t=c.scrollTop(),n=c.height();e.each(a,function(e){var i=e.link,o=e.sec,a=o.offset().top,s=o.outerHeight(),u=.5*n,c=o.is(":visible")&&a+s-u>=t&&a+u<=t+n;e.active!==c&&(e.active=c,r(i,d,c))})}function r(t,e,n){var i=t.hasClass(e);n&&i||(n||i)&&(n?t.addClass(e):t.removeClass(e))}var o,a,s,u={},c=t(window),l=i.env(),f=window.location,h=document.createElement("a"),d="w--current",v=/^#[\w:.-]+$/,p=/index\.(html|php)$/,m=/\/$/;return u.ready=u.design=u.preview=function(){o=l&&i.env("design"),s=i.env("slug")||f.pathname||"",i.scroll.off(n),a=[];for(var e=document.links,u=0;u<e.length;++u)!function(e){var n=o&&e.getAttribute("href-disabled")||e.getAttribute("href");if(h.href=n,!(n.indexOf(":")>=0)){var i=t(e);if(0===n.indexOf("#")&&v.test(n)){var u=t(n);u.length&&a.push({link:i,sec:u,active:!1})}else if("#"!==n&&""!==n){var c=h.href===f.href||n===s||p.test(n)&&m.test(s);r(i,d,c)}}}(e[u]);a.length&&(i.scroll.on(n),n())},u})},function(t,e,n){var i=n(0),r=n(2);i.define("navbar",t.exports=function(t,e){function n(){i.resize.off(o)}function o(){m.each(f)}function a(n,r){var o=t(r),a=t.data(r,z);a||(a=t.data(r,z,{open:!1,el:o,config:{}})),a.menu=o.find(".w-nav-menu"),a.links=a.menu.find(".w-nav-link"),a.dropdowns=a.menu.find(".w-dropdown"),a.button=o.find(".w-nav-button"),a.container=o.find(".w-container"),a.outside=function(n){n.outside&&x.off("tap"+z,n.outside);return e.debounce(function(e){if(n.open){var i=t(e.target).closest(".w-nav-menu");n.menu.is(i)||v(n)}})}(a),a.el.off(z),a.button.off(z),a.menu.off(z),c(a),g?(u(a),a.el.on("setting"+z,function(t){return function(n,i){i=i||{};var r=y.width();c(t),!0===i.open&&h(t,!0),!1===i.open&&v(t,!0),t.open&&e.defer(function(){r!==y.width()&&l(t)})}}(a))):(!function(e){if(e.overlay)return;e.overlay=t(k).appendTo(e.el),e.parent=e.menu.parent(),v(e,!0)}(a),a.button.on("tap"+z,function(t){return e.debounce(function(){t.open?v(t):h(t)})}(a)),a.menu.on("click"+z,"a",function(e){return function(n){var r=t(this),o=r.attr("href");i.validClick(n.currentTarget)?o&&0===o.indexOf("#")&&e.open&&v(e):n.preventDefault()}}(a))),f(n,r)}function s(e,n){var i=t.data(n,z);i&&(u(i),t.removeData(n,z))}function u(t){t.overlay&&(v(t,!0),t.overlay.remove(),t.overlay=null)}function c(t){var n={},i=t.config||{},r=n.animation=t.el.attr("data-animation")||"default";n.animOver=/^over/.test(r),n.animDirect=/left$/.test(r)?-1:1,i.animation!==r&&t.open&&e.defer(l,t),n.easing=t.el.attr("data-easing")||"ease",n.easing2=t.el.attr("data-easing2")||"ease";var o=t.el.attr("data-duration");n.duration=null!=o?Number(o):400,n.docHeight=t.el.attr("data-doc-height"),t.config=n}function l(t){t.open&&(v(t,!0),h(t,!0))}function f(e,n){var i=t.data(n,z),r=i.collapsed="none"!==i.button.css("display");if(!i.open||r||g||v(i,!0),i.container.length){var o=function(e){var n=e.container.css($);"none"===n&&(n="");return function(e,i){(i=t(i)).css($,""),"none"===i.css($)&&i.css($,n)}}(i);i.links.each(o),i.dropdowns.each(o)}i.open&&d(i)}function h(t,e){if(!t.open){t.open=!0,t.menu.addClass(E),t.links.addClass(T),t.button.addClass(O);var n=t.config;"none"!==n.animation&&b.support.transform||(e=!0);var r=d(t),o=t.menu.outerHeight(!0),a=t.menu.outerWidth(!0),s=t.el.height(),u=t.el[0];if(f(0,u),A.intro(0,u),i.redraw.up(),g||x.on("tap"+z,t.outside),!e){var c="transform "+n.duration+"ms "+n.easing;if(t.overlay&&(q=t.menu.prev(),t.overlay.show().append(t.menu)),n.animOver)return b(t.menu).add(c).set({x:n.animDirect*a,height:r}).start({x:0}),void(t.overlay&&t.overlay.width(a));var l=s+o;b(t.menu).add(c).set({y:-l}).start({y:0})}}}function d(t){var e=t.config,n=e.docHeight?x.height():p.height();return e.animOver?t.menu.height(n):"fixed"!==t.el.css("position")&&(n-=t.el.height()),t.overlay&&t.overlay.height(n),n}function v(t,e){function n(){t.menu.height(""),b(t.menu).set({x:0,y:0}),t.menu.removeClass(E),t.links.removeClass(T),t.overlay&&t.overlay.children().length&&(q.length?t.menu.insertAfter(q):t.menu.prependTo(t.parent),t.overlay.attr("style","").hide()),t.el.triggerHandler("w-close")}if(t.open){t.open=!1,t.button.removeClass(O);var i=t.config;if(("none"===i.animation||!b.support.transform||i.duration<=0)&&(e=!0),A.outro(0,t.el[0]),x.off("tap"+z,t.outside),e)return b(t.menu).stop(),void n();var r="transform "+i.duration+"ms "+i.easing2,o=t.menu.outerHeight(!0),a=t.menu.outerWidth(!0),s=t.el.height();if(i.animOver)b(t.menu).add(r).start({x:a*i.animDirect}).then(n);else{var u=s+o;b(t.menu).add(r).start({y:-u}).then(n)}}}var p,m,g,w={},b=t.tram,y=t(window),x=t(document),_=i.env(),k='<div class="w-nav-overlay" data-wf-ignore />',z=".w-nav",O="w--open",E="w--nav-menu-open",T="w--nav-link-open",A=r.triggers,q=t();w.ready=w.design=w.preview=function(){g=_&&i.env("design"),p=t(document.body),(m=x.find(z)).length&&(m.each(a),n(),i.resize.on(o))},w.destroy=function(){q=t(),n(),m&&m.length&&m.each(s)};var $="max-width";return w})},function(t,e,n){var i=n(0);i.define("scroll",t.exports=function(t){function e(e,n){if(s.test(e)){var u=t("#"+e);if(u.length){if(n&&(n.preventDefault(),n.stopPropagation()),o.hash!==e&&a&&a.pushState&&(!i.env.chrome||"file:"!==o.protocol)){(a.state&&a.state.hash)!==e&&a.pushState({hash:e},"","#"+e)}var c=i.env("editor")?".w-editor-body":"body",l=t("header, "+c+" > .header, "+c+" > .w-nav:not([data-no-scroll])"),f="fixed"===l.css("position")?l.outerHeight():0;r.setTimeout(function(){!function(e,n){var i=t(r).scrollTop(),o=e.offset().top-n;if("mid"===e.data("scroll")){var a=t(r).height()-n,s=e.outerHeight();s<a&&(o-=Math.round((a-s)/2))}var u=1;t("body").add(e).each(function(){var e=parseFloat(t(this).attr("data-scroll-time"),10);!isNaN(e)&&(0===e||e>0)&&(u=e)}),Date.now||(Date.now=function(){return(new Date).getTime()});var c=Date.now(),l=r.requestAnimationFrame||r.mozRequestAnimationFrame||r.webkitRequestAnimationFrame||function(t){r.setTimeout(t,15)},f=(472.143*Math.log(Math.abs(i-o)+125)-2e3)*u;!function t(){var e=Date.now()-c;r.scroll(0,function(t,e,n,i){if(n>i)return e;return t+(e-t)*function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1}(n/i)}(i,o,e,f)),e<=f&&l(t)}()}(u,f)},n?0:300)}}}var n=t(document),r=window,o=r.location,a=function(){try{return Boolean(r.frameElement)}catch(t){return!0}}()?null:r.history,s=/^[a-zA-Z0-9][\w:.-]*$/;return{ready:function(){o.hash&&e(o.hash.substring(1));var r=o.href.split("#")[0];n.on("click","a",function(n){if(!(i.env("design")||window.$.mobile&&t(n.currentTarget).hasClass("ui-link")))if("#"!==this.getAttribute("href")){var o=this.href.split("#"),a=o[0]===r?o[1]:null;a&&e(a,n)}else n.preventDefault()})}}})},function(t,e,n){n(0).define("touch",t.exports=function(t){function e(e,n,i){var r=t.Event(e,{originalEvent:n});t(n.target).trigger(r,i)}var n={},i=!document.addEventListener,r=window.getSelection;return i&&(t.event.special.tap={bindType:"click",delegateType:"click"}),n.init=function(n){return i?null:(n="string"==typeof n?t(n).get(0):n)?new function(t){function n(t){var e=t.touches;e&&e.length>1||(l=!0,f=!1,e?(h=!0,s=e[0].clientX,u=e[0].clientY):(s=t.clientX,u=t.clientY),c=s)}function i(t){if(l){if(h&&"mousemove"===t.type)return t.preventDefault(),void t.stopPropagation();var n=t.touches,i=n?n[0].clientX:t.clientX,o=n?n[0].clientY:t.clientY,v=i-c;c=i,Math.abs(v)>d&&r&&""===String(r())&&(e("swipe",t,{direction:v>0?"right":"left"}),a()),(Math.abs(i-s)>10||Math.abs(o-u)>10)&&(f=!0)}}function o(t){if(l){if(l=!1,h&&"mouseup"===t.type)return t.preventDefault(),t.stopPropagation(),void(h=!1);f||e("tap",t)}}function a(){l=!1}var s,u,c,l=!1,f=!1,h=!1,d=Math.min(Math.round(.04*window.innerWidth),40);t.addEventListener("touchstart",n,!1),t.addEventListener("touchmove",i,!1),t.addEventListener("touchend",o,!1),t.addEventListener("touchcancel",a,!1),t.addEventListener("mousedown",n,!1),t.addEventListener("mousemove",i,!1),t.addEventListener("mouseup",o,!1),t.addEventListener("mouseout",a,!1),this.destroy=function(){t.removeEventListener("touchstart",n,!1),t.removeEventListener("touchmove",i,!1),t.removeEventListener("touchend",o,!1),t.removeEventListener("touchcancel",a,!1),t.removeEventListener("mousedown",n,!1),t.removeEventListener("mousemove",i,!1),t.removeEventListener("mouseup",o,!1),t.removeEventListener("mouseout",a,!1),t=null}}(n):null},n.instance=n.init(document),n})}]);