(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[351],{3099:function(t){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},9670:function(t,n,e){var r=e(111);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},1318:function(t,n,e){var r=e(5656),o=e(7466),i=e(1400),u=function(t){return function(n,e,u){var c,a=r(n),f=o(a.length),s=i(u,f);if(t&&e!=e){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},4326:function(t){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},9920:function(t,n,e){var r=e(6656),o=e(3887),i=e(1236),u=e(3070);t.exports=function(t,n){for(var e=o(n),c=u.f,a=i.f,f=0;f<e.length;f++){var s=e[f];r(t,s)||c(t,s,a(n,s))}}},8880:function(t,n,e){var r=e(9781),o=e(3070),i=e(9114);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},9114:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},9781:function(t,n,e){var r=e(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,n,e){var r=e(7854),o=e(111),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},8113:function(t,n,e){var r=e(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,n,e){var r,o,i=e(7854),u=e(8113),c=i.process,a=c&&c.versions,f=a&&a.v8;f?o=(r=f.split("."))[0]<4?1:r[0]+r[1]:u&&(!(r=u.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=u.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,n,e){var r=e(7854),o=e(1236).f,i=e(8880),u=e(1320),c=e(3505),a=e(9920),f=e(4705);t.exports=function(t,n){var e,s,l,p,v,h=t.target,y=t.global,d=t.stat;if(e=y?r:d?r[h]||c(h,{}):(r[h]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!f(y?s:h+(d?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(e,s,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(n){return!0}}},5005:function(t,n,e){var r=e(857),o=e(7854),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},7854:function(t,n,e){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},6656:function(t,n,e){var r=e(7908),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,n){return o.call(r(t),n)}},3501:function(t){t.exports={}},4664:function(t,n,e){var r=e(9781),o=e(7293),i=e(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,n,e){var r=e(7293),o=e(4326),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},2788:function(t,n,e){var r=e(5465),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},9909:function(t,n,e){var r,o,i,u=e(8536),c=e(7854),a=e(111),f=e(8880),s=e(6656),l=e(5465),p=e(6200),v=e(3501),h="Object already initialized",y=c.WeakMap;if(u||l.state){var d=l.state||(l.state=new y),g=d.get,m=d.has,b=d.set;r=function(t,n){if(m.call(d,t))throw new TypeError(h);return n.facade=t,b.call(d,t,n),n},o=function(t){return g.call(d,t)||{}},i=function(t){return m.call(d,t)}}else{var x=p("state");v[x]=!0,r=function(t,n){if(s(t,x))throw new TypeError(h);return n.facade=t,f(t,x,n),n},o=function(t){return s(t,x)?t[x]:{}},i=function(t){return s(t,x)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!a(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},4705:function(t,n,e){var r=e(7293),o=/#|\.prototype\./,i=function(t,n){var e=c[u(t)];return e==f||e!=a&&("function"==typeof n?r(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},111:function(t){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:function(t){t.exports=!1},3366:function(t,n,e){var r=e(7854);t.exports=r.Promise},133:function(t,n,e){var r=e(7392),o=e(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(t,n,e){var r=e(7854),o=e(2788),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},8523:function(t,n,e){"use strict";var r=e(3099),o=function(t){var n,e;this.promise=new t((function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r})),this.resolve=r(n),this.reject=r(e)};t.exports.f=function(t){return new o(t)}},3070:function(t,n,e){var r=e(9781),o=e(4664),i=e(9670),u=e(7593),c=Object.defineProperty;n.f=r?c:function(t,n,e){if(i(t),n=u(n,!0),i(e),o)try{return c(t,n,e)}catch(r){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},1236:function(t,n,e){var r=e(9781),o=e(5296),i=e(9114),u=e(5656),c=e(7593),a=e(6656),f=e(4664),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=u(t),n=c(n,!0),f)try{return s(t,n)}catch(e){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},8006:function(t,n,e){var r=e(6324),o=e(748).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:function(t,n){n.f=Object.getOwnPropertySymbols},6324:function(t,n,e){var r=e(6656),o=e(5656),i=e(1318).indexOf,u=e(3501);t.exports=function(t,n){var e,c=o(t),a=0,f=[];for(e in c)!r(u,e)&&r(c,e)&&f.push(e);for(;n.length>a;)r(c,e=n[a++])&&(~i(f,e)||f.push(e));return f}},5296:function(t,n){"use strict";var e={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!e.call({1:2},1);n.f=o?function(t){var n=r(this,t);return!!n&&n.enumerable}:e},3887:function(t,n,e){var r=e(5005),o=e(8006),i=e(5181),u=e(9670);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(u(t)),e=i.f;return e?n.concat(e(t)):n}},857:function(t,n,e){var r=e(7854);t.exports=r},9478:function(t,n,e){var r=e(9670),o=e(111),i=e(8523);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},1320:function(t,n,e){var r=e(7854),o=e(8880),i=e(6656),u=e(3505),c=e(2788),a=e(9909),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,n,e,c){var a,f=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,v=!!c&&!!c.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),(a=s(e)).source||(a.source=l.join("string"==typeof n?n:""))),t!==r?(f?!v&&t[n]&&(p=!0):delete t[n],p?t[n]=e:o(t,n,e)):p?t[n]=e:u(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||c(this)}))},4488:function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:function(t,n,e){var r=e(7854),o=e(8880);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},6200:function(t,n,e){var r=e(2309),o=e(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,n,e){var r=e(7854),o=e(3505),i="__core-js_shared__",u=r[i]||o(i,{});t.exports=u},2309:function(t,n,e){var r=e(1913),o=e(5465);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.13.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},6707:function(t,n,e){var r=e(9670),o=e(3099),i=e(5112)("species");t.exports=function(t,n){var e,u=r(t).constructor;return void 0===u||null==(e=r(u)[i])?n:o(e)}},1400:function(t,n,e){var r=e(9958),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},5656:function(t,n,e){var r=e(8361),o=e(4488);t.exports=function(t){return r(o(t))}},9958:function(t){var n=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:n)(t)}},7466:function(t,n,e){var r=e(9958),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,n,e){var r=e(4488);t.exports=function(t){return Object(r(t))}},7593:function(t,n,e){var r=e(111);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},9711:function(t){var n=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+e).toString(36)}},3307:function(t,n,e){var r=e(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(t,n,e){var r=e(7854),o=e(2309),i=e(6656),u=e(9711),c=e(133),a=e(3307),f=o("wks"),s=r.Symbol,l=a?s:s&&s.withoutSetter||u;t.exports=function(t){return i(f,t)&&(c||"string"==typeof f[t])||(c&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},5438:function(t,n,e){var r=e(2109),o=Math.hypot,i=Math.abs,u=Math.sqrt;r({target:"Math",stat:!0,forced:!!o&&o(1/0,NaN)!==1/0},{hypot:function(t,n){for(var e,r,o=0,c=0,a=arguments.length,f=0;c<a;)f<(e=i(arguments[c++]))?(o=o*(r=f/e)*r+1,f=e):o+=e>0?(r=e/f)*r:e;return f===1/0?1/0:f*u(o)}})},7727:function(t,n,e){"use strict";var r=e(2109),o=e(1913),i=e(3366),u=e(7293),c=e(5005),a=e(6707),f=e(9478),s=e(1320);if(r({target:"Promise",proto:!0,real:!0,forced:!!i&&u((function(){i.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(t){var n=a(this,c("Promise")),e="function"==typeof t;return this.then(e?function(e){return f(n,t()).then((function(){return e}))}:t,e?function(e){return f(n,t()).then((function(){throw e}))}:t)}}),!o&&"function"==typeof i){var l=c("Promise").prototype.finally;i.prototype.finally!==l&&s(i.prototype,"finally",l,{unsafe:!0})}},7438:function(t,n,e){"use strict";e.d(n,{Lj:function(){return i},M_:function(){return u},ZP:function(){return a}});var r=e(7294),o={x:0,y:0,z:0,w:0,data:{},sketch:null},i=(0,r.createContext)((function(){})),u=(0,r.createContext)(o);function c(t,n){switch(n.type){case"USE_SKETCH":return Object.assign({},t,{sketch:n.payload});case"SET_DATA":return Object.assign({},t,{data:n.payload});case"SET_X":return Object.assign({},t,{x:n.payload});case"SET_Y":return Object.assign({},t,{y:n.payload});case"SET_Z":return Object.assign({},t,{z:n.payload});case"SET_W":return Object.assign({},t,{w:n.payload});default:throw new Error("Unhandled action type: "+n.type)}}function a(t){var n=t.children,e=(0,r.useReducer)(c,o),a=e[0],f=e[1];return r.createElement(i.Provider,{value:f},r.createElement(u.Provider,{value:a},n))}},2134:function(t,n,e){"use strict";e.d(n,{Z:function(){return u}});var r=e(7294),o=e(2318),i=e.n(o);e(7438),e(2134);function u(t){void 0===t&&(t="abc...xyz");var n=null;function e(t){var e=t.sketch,o=void 0===e?function(){}:e,u=t.data,c=void 0===u?{}:u,a=t.dispatch,f=void 0===a?function(){}:a,s=(0,r.useRef)(null);return(0,r.useEffect)((function(){return(n=new(i())(o,s.current)).data=c,n.dispatch=f,function(){n.remove()}}),[f,o,c]),r.createElement("div",{ref:s})}return e.defaultProps={data:{},dispatch:function(){},sketch:function(){}},(0,r.memo)(e,(function(t,e){return!!n&&(n.data=Object.assign({},e.data),!0)}))}},3259:function(t,n,e){"use strict";e.d(n,{v:function(){return s}});var r=e(7294),o=e(7438),i=e(2134),u=e(2090),c=(0,i.Z)("bouton a"),a=(0,i.Z)("bouton b"),f=(0,i.Z)("bouton c");function s(t){return r.createElement("div",null,r.createElement(o.ZP,null,r.createElement("div",{style:(n=100,{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax("+n+"px, 1fr))"})},r.createElement(u.j,{comp:c,label:"HOME",what:"/"}),r.createElement(u.j,{comp:a,label:"ABOUT",what:"/about"}),r.createElement(u.j,{comp:f,label:"ARTWORK",what:"/artwork"}))));var n}},2090:function(t,n,e){"use strict";e.d(n,{j:function(){return u}});var r=e(7294),o=e(5444),i=e(7438);function u(t){var n=(0,r.useContext)(i.Lj),e=(0,r.useContext)(i.M_),u=(e.x,e.y,e.z,(0,r.useState)(0)),a=u[0],f=u[1],s={title:t.label};return r.createElement("div",{onClick:function(e){if(e.preventDefault(),"string"==typeof t.what||t.what instanceof String)if(t.what.startsWith("/"))"/back"===t.what?(0,o.navigate)(-1):(0,o.navigate)(t.what);else if(t.what.startsWith("add")){if("add_x"===t.what){var r=a+1;f(r),n({type:"SET_X",payload:r})}}else if(t.what.startsWith("sub")&&"sub_x"===t.what){var i=a-1;f(i),n({type:"SET_X",payload:i})}}},r.createElement(t.comp,{sketch:c,data:s}))}function c(t){var n=t.createVector(0,0),e=t.createVector(0,0),r=0,o=!1;t.setup=function(){t.createCanvas(150,100),e.set(t.width/2,t.height/2),n.set(e.x/2,e.y/2),r=t.height/2},t.draw=function(){var i,u,c,f,s,l,p,v=t.createVector(t.mouseX,t.mouseY);o=a(v,n,e),t.clear(),o?(f=t.abs(t.sin(.05*t.frameCount)),s=t.map(f,0,1,t.height/5,t.height/2),l=t.width/2,p=t.height/2,t.noStroke(),t.fill("cyan"),t.ellipse(l,p,s,s)):(i=n,u=e,c=r,t.noStroke(),t.fill("magenta"),t.rect(i.x,i.y,u.x,u.y,c)),t.noStroke(),t.fill(0),t.textAlign(t.CENTER,t.CENTER),t.text(t.data.title,t.width/2,t.height/2)}}var a=function(t,n,e){var r=t.x,o=t.y,i=n.x,u=n.y,c=!1;r<i+e.x&&r>i&&(c=!0);var a=!1;return o<u+e.y&&o>u&&(a=!0),!(!c||!a)}}}]);
//# sourceMappingURL=commons-dae62c6ca06f69e0a6e1.js.map