(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2888],{8417:function(e,t,r){"use strict";r.d(t,{Z:function(){return q}});var n=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)==0){var t;this._insertTag(((t=document.createElement("style")).setAttribute("data-emotion",this.key),void 0!==this.nonce&&t.setAttribute("nonce",this.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t))}var r=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(r);try{n.insertRule(e,n.cssRules.length)}catch(e){}}else r.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),this.tags=[],this.ctr=0},e}(),i=Math.abs,s=String.fromCharCode,a=Object.assign;function o(e,t,r){return e.replace(t,r)}function l(e,t){return e.indexOf(t)}function u(e,t){return 0|e.charCodeAt(t)}function c(e,t,r){return e.slice(t,r)}function h(e){return e.length}function d(e,t){return t.push(e),e}var f=1,p=1,m=0,g=0,y=0,v="";function w(e,t,r,n,i,s,a){return{value:e,root:t,parent:r,type:n,props:i,children:s,line:f,column:p,length:a,return:""}}function b(e,t){return a(w("",null,null,"",null,null,0),e,{length:-e.length},t)}function _(){return y=g<m?u(v,g++):0,p++,10===y&&(p=1,f++),y}function E(){return u(v,g)}function I(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function T(e){return f=p=1,m=h(v=e),g=0,[]}function S(e){var t,r;return(t=g-1,r=function e(t){for(;_();)switch(y){case t:return g;case 34:case 39:34!==t&&39!==t&&e(y);break;case 40:41===t&&e(t);break;case 92:_()}return g}(91===e?e+2:40===e?e+1:e),c(v,t,r)).trim()}var k="-ms-",C="-moz-",A="-webkit-",N="comm",x="rule",R="decl",O="@keyframes";function P(e,t){for(var r="",n=e.length,i=0;i<n;i++)r+=t(e[i],i,e,t)||"";return r}function D(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case R:return e.return=e.return||e.value;case N:return"";case O:return e.return=e.value+"{"+P(e.children,n)+"}";case x:e.value=e.props.join(",")}return h(r=P(e.children,n))?e.return=e.value+"{"+r+"}":""}function L(e,t,r,n,s,a,l,u,h,d,f){for(var p=s-1,m=0===s?a:[""],g=m.length,y=0,v=0,b=0;y<n;++y)for(var _=0,E=c(e,p+1,p=i(v=l[y])),I=e;_<g;++_)(I=(v>0?m[_]+" "+E:o(E,/&\f/g,m[_])).trim())&&(h[b++]=I);return w(e,t,r,0===s?x:u,h,d,f)}function M(e,t,r,n){return w(e,t,r,R,c(e,0,n),c(e,n+1,-1),n)}var U=function(e,t,r){for(var n=0,i=0;n=i,i=E(),38===n&&12===i&&(t[r]=1),!I(i);)_();return c(v,e,g)},F=function(e,t){var r=-1,n=44;do switch(I(n)){case 0:38===n&&12===E()&&(t[r]=1),e[r]+=U(g-1,t,r);break;case 2:e[r]+=S(n);break;case 4:if(44===n){e[++r]=58===E()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=s(n)}while(n=_());return e},V=function(e,t){var r;return r=F(T(e),t),v="",r},j=new WeakMap,$=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||j.get(r))&&!n){j.set(e,!0);for(var i=[],s=V(t,i),a=r.props,o=0,l=0;o<s.length;o++)for(var u=0;u<a.length;u++,l++)e.props[l]=i[o]?s[o].replace(/&\f/g,a[u]):a[u]+" "+s[o]}}},B=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},z=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case R:e.return=function e(t,r){switch(45^u(t,0)?(((r<<2^u(t,0))<<2^u(t,1))<<2^u(t,2))<<2^u(t,3):0){case 5103:return A+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return A+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return A+t+C+t+k+t+t;case 6828:case 4268:return A+t+k+t+t;case 6165:return A+t+k+"flex-"+t+t;case 5187:return A+t+o(t,/(\w+).+(:[^]+)/,A+"box-$1$2"+k+"flex-$1$2")+t;case 5443:return A+t+k+"flex-item-"+o(t,/flex-|-self/,"")+t;case 4675:return A+t+k+"flex-line-pack"+o(t,/align-content|flex-|-self/,"")+t;case 5548:return A+t+k+o(t,"shrink","negative")+t;case 5292:return A+t+k+o(t,"basis","preferred-size")+t;case 6060:return A+"box-"+o(t,"-grow","")+A+t+k+o(t,"grow","positive")+t;case 4554:return A+o(t,/([^-])(transform)/g,"$1"+A+"$2")+t;case 6187:return o(o(o(t,/(zoom-|grab)/,A+"$1"),/(image-set)/,A+"$1"),t,"")+t;case 5495:case 3959:return o(t,/(image-set\([^]*)/,A+"$1$`$1");case 4968:return o(o(t,/(.+:)(flex-)?(.*)/,A+"box-pack:$3"+k+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+A+t+t;case 4095:case 3583:case 4068:case 2532:return o(t,/(.+)-inline(.+)/,A+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(h(t)-1-r>6)switch(u(t,r+1)){case 109:if(45!==u(t,r+4))break;case 102:return o(t,/(.+:)(.+)-([^]+)/,"$1"+A+"$2-$3$1"+C+(108==u(t,r+3)?"$3":"$2-$3"))+t;case 115:return~l(t,"stretch")?e(o(t,"stretch","fill-available"),r)+t:t}break;case 4949:if(115!==u(t,r+1))break;case 6444:switch(u(t,h(t)-3-(~l(t,"!important")&&10))){case 107:return o(t,":",":"+A)+t;case 101:return o(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+A+(45===u(t,14)?"inline-":"")+"box$3$1"+A+"$2$3$1"+k+"$2box$3")+t}break;case 5936:switch(u(t,r+11)){case 114:return A+t+k+o(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return A+t+k+o(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return A+t+k+o(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return A+t+k+t+t}return t}(e.value,e.length);break;case O:return P([b(e,{value:o(e.value,"@","@"+A)})],n);case x:if(e.length)return e.props.map(function(t){var r;switch(r=t,(r=/(::plac\w+|:read-\w+)/.exec(r))?r[0]:r){case":read-only":case":read-write":return P([b(e,{props:[o(t,/:(read-\w+)/,":"+C+"$1")]})],n);case"::placeholder":return P([b(e,{props:[o(t,/:(plac\w+)/,":"+A+"input-$1")]}),b(e,{props:[o(t,/:(plac\w+)/,":"+C+"$1")]}),b(e,{props:[o(t,/:(plac\w+)/,k+"input-$1")]})],n)}return""}).join("")}}],q=function(e){var t,r,i,a,m,b=e.key;if("css"===b){var k=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(k,function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))})}var C=e.stylisPlugins||z,A={},x=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+b+' "]'),function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)A[t[r]]=!0;x.push(e)});var R=(r=(t=[$,B].concat(C,[D,(i=function(e){m.insert(e)},function(e){!e.root&&(e=e.return)&&i(e)})])).length,function(e,n,i,s){for(var a="",o=0;o<r;o++)a+=t[o](e,n,i,s)||"";return a}),O=function(e){var t,r;return P((r=function e(t,r,n,i,a,m,b,T,k){for(var C,A=0,x=0,R=b,O=0,P=0,D=0,U=1,F=1,V=1,j=0,$="",B=a,z=m,q=i,K=$;F;)switch(D=j,j=_()){case 40:if(108!=D&&58==u(K,R-1)){-1!=l(K+=o(S(j),"&","&\f"),"&\f")&&(V=-1);break}case 34:case 39:case 91:K+=S(j);break;case 9:case 10:case 13:case 32:K+=function(e){for(;y=E();)if(y<33)_();else break;return I(e)>2||I(y)>3?"":" "}(D);break;case 92:K+=function(e,t){for(var r;--t&&_()&&!(y<48)&&!(y>102)&&(!(y>57)||!(y<65))&&(!(y>70)||!(y<97)););return r=g+(t<6&&32==E()&&32==_()),c(v,e,r)}(g-1,7);continue;case 47:switch(E()){case 42:case 47:d(w(C=function(e,t){for(;_();)if(e+y===57)break;else if(e+y===84&&47===E())break;return"/*"+c(v,t,g-1)+"*"+s(47===e?e:_())}(_(),g),r,n,N,s(y),c(C,2,-2),0),k);break;default:K+="/"}break;case 123*U:T[A++]=h(K)*V;case 125*U:case 59:case 0:switch(j){case 0:case 125:F=0;case 59+x:-1==V&&(K=o(K,/\f/g,"")),P>0&&h(K)-R&&d(P>32?M(K+";",i,n,R-1):M(o(K," ","")+";",i,n,R-2),k);break;case 59:K+=";";default:if(d(q=L(K,r,n,A,x,a,T,$,B=[],z=[],R),m),123===j){if(0===x)e(K,r,q,q,B,m,R,T,z);else switch(99===O&&110===u(K,3)?100:O){case 100:case 108:case 109:case 115:e(t,q,q,i&&d(L(t,q,q,0,0,a,T,$,a,B=[],R),z),a,z,R,T,i?B:z);break;default:e(K,q,q,q,[""],z,0,T,z)}}}A=x=P=0,U=V=1,$=K="",R=b;break;case 58:R=1+h(K),P=D;default:if(U<1){if(123==j)--U;else if(125==j&&0==U++&&125==(y=g>0?u(v,--g):0,p--,10===y&&(p=1,f--),y))continue}switch(K+=s(j),j*U){case 38:V=x>0?1:(K+="\f",-1);break;case 44:T[A++]=(h(K)-1)*V,V=1;break;case 64:45===E()&&(K+=S(_())),O=E(),x=R=h($=K+=function(e){for(;!I(E());)_();return c(v,e,g)}(g)),j++;break;case 45:45===D&&2==h(K)&&(U=0)}}return m}("",null,null,null,[""],t=T(t=e),0,[0],t),v="",r),R)},U={key:b,sheet:new n({key:b,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:A,registered:{},insert:function(e,t,r,n){m=r,O(e?e+"{"+t.styles+"}":t.styles),n&&(U.inserted[t.name]=!0)}};return U.sheet.hydrate(x),U}},45042:function(e,t,r){"use strict";function n(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}r.d(t,{Z:function(){return n}})},11463:function(e,t,r){"use strict";r.d(t,{T:function(){return c},a:function(){return d},i:function(){return o},w:function(){return u}});var n=r(67294),i=r(8417),s=r(87462),a=function(e){var t=new WeakMap;return function(r){if(t.has(r))return t.get(r);var n=e(r);return t.set(r,n),n}};r(48137),r(27278);var o=!0,l=n.createContext("undefined"!=typeof HTMLElement?(0,i.Z)({key:"css"}):null);l.Provider;var u=function(e){return(0,n.forwardRef)(function(t,r){return e(t,(0,n.useContext)(l),r)})};o||(u=function(e){return function(t){var r=(0,n.useContext)(l);return null===r?(r=(0,i.Z)({key:"css"}),n.createElement(l.Provider,{value:r},e(t,r))):e(t,r)}});var c=n.createContext({}),h=a(function(e){return a(function(t){return"function"==typeof t?t(e):(0,s.Z)({},e,t)})}),d=function(e){var t=n.useContext(c);return e.theme!==t&&(t=h(t)(e.theme)),n.createElement(c.Provider,{value:t},e.children)}},70917:function(e,t,r){"use strict";r.d(t,{F4:function(){return c},iv:function(){return u},xB:function(){return l}});var n=r(11463),i=r(67294),s=r(70444),a=r(27278),o=r(48137);r(8417),r(8679);var l=(0,n.w)(function(e,t){var r=e.styles,l=(0,o.O)([r],void 0,i.useContext(n.T));if(!n.i){for(var u,c=l.name,h=l.styles,d=l.next;void 0!==d;)c+=" "+d.name,h+=d.styles,d=d.next;var f=!0===t.compat,p=t.insert("",{name:c,styles:h},t.sheet,f);return f?null:i.createElement("style",((u={})["data-emotion"]=t.key+"-global "+c,u.dangerouslySetInnerHTML={__html:p},u.nonce=t.sheet.nonce,u))}var m=i.useRef();return(0,a.j)(function(){var e=t.key+"-global",r=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),n=!1,i=document.querySelector('style[data-emotion="'+e+" "+l.name+'"]');return t.sheet.tags.length&&(r.before=t.sheet.tags[0]),null!==i&&(n=!0,i.setAttribute("data-emotion",e),r.hydrate([i])),m.current=[r,n],function(){r.flush()}},[t]),(0,a.j)(function(){var e=m.current,r=e[0];if(e[1]){e[1]=!1;return}if(void 0!==l.next&&(0,s.My)(t,l.next,!0),r.tags.length){var n=r.tags[r.tags.length-1].nextElementSibling;r.before=n,r.flush()}t.insert("",l,r,!1)},[t,l.name]),null});function u(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,o.O)(t)}var c=function(){var e=u.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},48137:function(e,t,r){"use strict";r.d(t,{O:function(){return p}});var n,i={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},s=r(45042),a=/[A-Z]|^ms/g,o=/_EMO_([^_]+?)_([^]*?)_EMO_/g,l=function(e){return 45===e.charCodeAt(1)},u=function(e){return null!=e&&"boolean"!=typeof e},c=(0,s.Z)(function(e){return l(e)?e:e.replace(a,"-$&").toLowerCase()}),h=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(o,function(e,t,r){return n={name:t,styles:r,next:n},t})}return 1===i[e]||l(e)||"number"!=typeof t||0===t?t:t+"px"};function d(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return n={name:r.name,styles:r.styles,next:n},r.name;if(void 0!==r.styles){var i=r.next;if(void 0!==i)for(;void 0!==i;)n={name:i.name,styles:i.styles,next:n},i=i.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var i=0;i<r.length;i++)n+=d(e,t,r[i])+";";else for(var s in r){var a=r[s];if("object"!=typeof a)null!=t&&void 0!==t[a]?n+=s+"{"+t[a]+"}":u(a)&&(n+=c(s)+":"+h(s,a)+";");else if(Array.isArray(a)&&"string"==typeof a[0]&&(null==t||void 0===t[a[0]]))for(var o=0;o<a.length;o++)u(a[o])&&(n+=c(s)+":"+h(s,a[o])+";");else{var l=d(e,t,a);switch(s){case"animation":case"animationName":n+=c(s)+":"+l+";";break;default:n+=s+"{"+l+"}"}}}return n}(e,t,r);case"function":if(void 0!==e){var s=n,a=r(e);return n=s,d(e,t,a)}}if(null==t)return r;var o=t[r];return void 0!==o?o:r}var f=/label:\s*([^\s;\n{]+)\s*(;|$)/g,p=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var i,s=!0,a="";n=void 0;var o=e[0];null==o||void 0===o.raw?(s=!1,a+=d(r,t,o)):a+=o[0];for(var l=1;l<e.length;l++)a+=d(r,t,e[l]),s&&(a+=o[l]);f.lastIndex=0;for(var u="";null!==(i=f.exec(a));)u+="-"+i[1];return{name:function(e){for(var t,r=0,n=0,i=e.length;i>=4;++n,i-=4)t=(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(65535&t)*1540483477+((t>>>16)*59797<<16)^(65535&r)*1540483477+((r>>>16)*59797<<16);switch(i){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r^=255&e.charCodeAt(n),r=(65535&r)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,(((r=(65535&r)*1540483477+((r>>>16)*59797<<16))^r>>>15)>>>0).toString(36)}(a)+u,styles:a,next:n}}},16829:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var n=r(87462),i=r(67294),s=r(45042),a=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,o=(0,s.Z)(function(e){return a.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&91>e.charCodeAt(2)}),l=r(11463),u=r(70444),c=r(48137),h=r(27278),d=function(e){return"theme"!==e},f=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?o:d},p=function(e,t,r){var n;if(t){var i=t.shouldForwardProp;n=e.__emotion_forwardProp&&i?function(t){return e.__emotion_forwardProp(t)&&i(t)}:i}return"function"!=typeof n&&r&&(n=e.__emotion_forwardProp),n},m=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;return(0,u.hC)(t,r,n),(0,h.L)(function(){return(0,u.My)(t,r,n)}),null},g=(function e(t,r){var s,a,o=t.__emotion_real===t,h=o&&t.__emotion_base||t;void 0!==r&&(s=r.label,a=r.target);var d=p(t,r,o),g=d||f(h),y=!g("as");return function(){var v=arguments,w=o&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==s&&w.push("label:"+s+";"),null==v[0]||void 0===v[0].raw)w.push.apply(w,v);else{w.push(v[0][0]);for(var b=v.length,_=1;_<b;_++)w.push(v[_],v[0][_])}var E=(0,l.w)(function(e,t,r){var n=y&&e.as||h,s="",o=[],p=e;if(null==e.theme){for(var v in p={},e)p[v]=e[v];p.theme=i.useContext(l.T)}"string"==typeof e.className?s=(0,u.fp)(t.registered,o,e.className):null!=e.className&&(s=e.className+" ");var b=(0,c.O)(w.concat(o),t.registered,p);s+=t.key+"-"+b.name,void 0!==a&&(s+=" "+a);var _=y&&void 0===d?f(n):g,E={};for(var I in e)(!y||"as"!==I)&&_(I)&&(E[I]=e[I]);return E.className=s,E.ref=r,i.createElement(i.Fragment,null,i.createElement(m,{cache:t,serialized:b,isStringTag:"string"==typeof n}),i.createElement(n,E))});return E.displayName=void 0!==s?s:"Styled("+("string"==typeof h?h:h.displayName||h.name||"Component")+")",E.defaultProps=t.defaultProps,E.__emotion_real=E,E.__emotion_base=h,E.__emotion_styles=w,E.__emotion_forwardProp=d,Object.defineProperty(E,"toString",{value:function(){return"."+a}}),E.withComponent=function(t,i){return e(t,(0,n.Z)({},r,i,{shouldForwardProp:p(E,i,!0)})).apply(void 0,w)},E}}).bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach(function(e){g[e]=g(e)})},27278:function(e,t,r){"use strict";r.d(t,{L:function(){return a},j:function(){return o}});var n,i=r(67294),s=!!(n||(n=r.t(i,2))).useInsertionEffect&&(n||(n=r.t(i,2))).useInsertionEffect,a=s||function(e){return e()},o=s||i.useLayoutEffect},70444:function(e,t,r){"use strict";function n(e,t,r){var n="";return r.split(" ").forEach(function(r){void 0!==e[r]?t.push(e[r]+";"):n+=r+" "}),n}r.d(t,{My:function(){return s},fp:function(){return n},hC:function(){return i}});var i=function(e,t,r){var n=e.key+"-"+t.name;!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},s=function(e,t,r){i(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var s=t;do e.insert(t===s?"."+n:"",s,e.sheet,!0),s=s.next;while(void 0!==s)}}},74444:function(e,t,r){"use strict";r.d(t,{BH:function(){return w},L:function(){return u},LL:function(){return N},P0:function(){return g},Pz:function(){return v},Sg:function(){return b},ZR:function(){return A},aH:function(){return y},b$:function(){return T},eu:function(){return C},hl:function(){return k},m9:function(){return V},ne:function(){return M},pd:function(){return L},q4:function(){return m},ru:function(){return I},tV:function(){return c},uI:function(){return E},vZ:function(){return function e(t,r){if(t===r)return!0;let n=Object.keys(t),i=Object.keys(r);for(let s of n){if(!i.includes(s))return!1;let n=t[s],a=r[s];if(O(n)&&O(a)){if(!e(n,a))return!1}else if(n!==a)return!1}for(let e of i)if(!n.includes(e))return!1;return!0}},w1:function(){return S},xO:function(){return P},xb:function(){return R},z$:function(){return _},zd:function(){return D}});var n=r(83454);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=63&i|128):(64512&i)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=63&i|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=63&i|128)}return t},s=function(e){let t=[],r=0,n=0;for(;r<e.length;){let i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let s=e[r++],a=e[r++],o=e[r++],l=((7&i)<<18|(63&s)<<12|(63&a)<<6|63&o)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(1023&l))}else{let s=e[r++],a=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")},a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let i=e[t],s=t+1<e.length,a=s?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,u=i>>2,c=(3&i)<<4|a>>4,h=(15&a)<<2|l>>6,d=63&l;o||(d=64,s||(h=64)),n.push(r[u],r[c],r[h],r[d])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):s(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let i=r[e.charAt(t++)],s=t<e.length,a=s?r[e.charAt(t)]:0;++t;let l=t<e.length,u=l?r[e.charAt(t)]:64;++t;let c=t<e.length,h=c?r[e.charAt(t)]:64;if(++t,null==i||null==a||null==u||null==h)throw new o;let d=i<<2|a>>4;if(n.push(d),64!==u){let e=a<<4&240|u>>2;if(n.push(e),64!==h){let e=u<<6&192|h;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let l=function(e){let t=i(e);return a.encodeByteArray(t,!0)},u=function(e){return l(e).replace(/\./g,"")},c=function(e){try{return a.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},h=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r.g)return r.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,d=()=>{if(void 0===n||void 0===n.env)return;let e=n.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},f=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&c(e[1]);return t&&JSON.parse(t)},p=()=>{try{return h()||d()||f()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},m=e=>{var t,r;return null===(r=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},g=e=>{let t=m(e);if(!t)return;let r=t.lastIndexOf(":");if(r<=0||r+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let n=parseInt(t.substring(r+1),10);return"["===t[0]?[t.substring(1,r-1),n]:[t.substring(0,r),n]},y=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},v=e=>{var t;return null===(t=p())||void 0===t?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let r=t||"demo-project",n=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:n,exp:n+3600,auth_time:n,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[u(JSON.stringify({alg:"none",type:"JWT"})),u(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function E(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_())}function I(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function T(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function S(){let e=_();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function k(){try{return"object"==typeof indexedDB}catch(e){return!1}}function C(){return new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class A extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,A.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,N.prototype.create)}}class N{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],s=i?i.replace(x,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`}):"Error",a=`${this.serviceName}: ${s} (${n}).`,o=new A(n,a,r);return o}}let x=/\{\$([^}]+)}/g;function R(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function O(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e){let t=[];for(let[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function D(e){let t={},r=e.replace(/^\?/,"").split("&");return r.forEach(e=>{if(e){let[r,n]=e.split("=");t[decodeURIComponent(r)]=decodeURIComponent(n)}}),t}function L(e){let t=e.indexOf("?");if(!t)return"";let r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}function M(e,t){let r=new U(e,t);return r.subscribe.bind(r)}class U{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw Error("Missing Observer.");void 0===(n=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:r}:e).next&&(n.next=F),void 0===n.error&&(n.error=F),void 0===n.complete&&(n.complete=F);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}}),this.observers.push(n),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function F(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e){return e&&e._delegate?e._delegate:e}},84808:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var n=r(63366),i=r(87462),s=r(67294),a=r(86010),o=r(94780),l=r(90948),u=r(71657),c=r(16628),h=r(1588),d=r(34867);function f(e){return(0,d.Z)("MuiBackdrop",e)}(0,h.Z)("MuiBackdrop",["root","invisible"]);var p=r(85893);let m=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],g=e=>{let{classes:t,invisible:r}=e;return(0,o.Z)({root:["root",r&&"invisible"]},f,t)},y=(0,l.ZP)("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.invisible&&t.invisible]}})(({ownerState:e})=>(0,i.Z)({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),v=s.forwardRef(function(e,t){var r,s,o;let l=(0,u.Z)({props:e,name:"MuiBackdrop"}),{children:h,className:d,component:f="div",components:v={},componentsProps:w={},invisible:b=!1,open:_,slotProps:E={},slots:I={},TransitionComponent:T=c.Z,transitionDuration:S}=l,k=(0,n.Z)(l,m),C=(0,i.Z)({},l,{component:f,invisible:b}),A=g(C),N=null!=(r=E.root)?r:w.root;return(0,p.jsx)(T,(0,i.Z)({in:_,timeout:S},k,{children:(0,p.jsx)(y,(0,i.Z)({"aria-hidden":!0},N,{as:null!=(s=null!=(o=I.root)?o:v.Root)?s:f,className:(0,a.Z)(A.root,d,null==N?void 0:N.className),ownerState:(0,i.Z)({},C,null==N?void 0:N.ownerState),classes:A,ref:t,children:h}))}))});var w=v},16628:function(e,t,r){"use strict";var n=r(87462),i=r(63366),s=r(67294),a=r(8662),o=r(2734),l=r(30577),u=r(51705),c=r(85893);let h=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],d={entering:{opacity:1},entered:{opacity:1}},f=s.forwardRef(function(e,t){let r=(0,o.Z)(),f={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:p,appear:m=!0,children:g,easing:y,in:v,onEnter:w,onEntered:b,onEntering:_,onExit:E,onExited:I,onExiting:T,style:S,timeout:k=f,TransitionComponent:C=a.ZP}=e,A=(0,i.Z)(e,h),N=s.useRef(null),x=(0,u.Z)(N,g.ref,t),R=e=>t=>{if(e){let r=N.current;void 0===t?e(r):e(r,t)}},O=R(_),P=R((e,t)=>{(0,l.n)(e);let n=(0,l.C)({style:S,timeout:k,easing:y},{mode:"enter"});e.style.webkitTransition=r.transitions.create("opacity",n),e.style.transition=r.transitions.create("opacity",n),w&&w(e,t)}),D=R(b),L=R(T),M=R(e=>{let t=(0,l.C)({style:S,timeout:k,easing:y},{mode:"exit"});e.style.webkitTransition=r.transitions.create("opacity",t),e.style.transition=r.transitions.create("opacity",t),E&&E(e)}),U=R(I);return(0,c.jsx)(C,(0,n.Z)({appear:m,in:v,nodeRef:N,onEnter:P,onEntered:D,onEntering:O,onExit:M,onExited:U,onExiting:L,addEndListener:e=>{p&&p(N.current,e)},timeout:k},A,{children:(e,t)=>s.cloneElement(g,(0,n.Z)({style:(0,n.Z)({opacity:0,visibility:"exited"!==e||v?void 0:"hidden"},d[e],S,g.props.style),ref:x},t))}))});t.Z=f},15861:function(e,t,r){"use strict";r.d(t,{Z:function(){return I}});var n=r(63366),i=r(87462),s=r(67294),a=r(86010),o=r(39707),l=r(94780),u=r(90948),c=r(71657),h=r(98216),d=r(1588),f=r(34867);function p(e){return(0,f.Z)("MuiTypography",e)}(0,d.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var m=r(85893);let g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],y=e=>{let{align:t,gutterBottom:r,noWrap:n,paragraph:i,variant:s,classes:a}=e,o={root:["root",s,"inherit"!==e.align&&`align${(0,h.Z)(t)}`,r&&"gutterBottom",n&&"noWrap",i&&"paragraph"]};return(0,l.Z)(o,p,a)},v=(0,u.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t[`align${(0,h.Z)(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>(0,i.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),w={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},_=e=>b[e]||e,E=s.forwardRef(function(e,t){let r=(0,c.Z)({props:e,name:"MuiTypography"}),s=_(r.color),l=(0,o.Z)((0,i.Z)({},r,{color:s})),{align:u="inherit",className:h,component:d,gutterBottom:f=!1,noWrap:p=!1,paragraph:b=!1,variant:E="body1",variantMapping:I=w}=l,T=(0,n.Z)(l,g),S=(0,i.Z)({},l,{align:u,color:s,className:h,component:d,gutterBottom:f,noWrap:p,paragraph:b,variant:E,variantMapping:I}),k=d||(b?"p":I[E]||w[E])||"span",C=y(S);return(0,m.jsx)(v,(0,i.Z)({as:k,ref:t,ownerState:S,className:(0,a.Z)(C.root,h)},T))});var I=E},68239:function(e,t,r){"use strict";r.d(t,{Z:function(){return R}});var n=r(87462),i=r(63366),s=r(71387),a=r(59766),o=r(66500),l=r(44920),u=r(86523),c=r(41796),h={black:"#000",white:"#fff"},d={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},f={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},p={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},m={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},g={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},y={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},v={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};let w=["mode","contrastThreshold","tonalOffset"],b={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:h.white,default:h.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},_={text:{primary:h.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:h.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function E(e,t,r,n){let i=n.light||n,s=n.dark||1.5*n;e[t]||(e.hasOwnProperty(r)?e[t]=e[r]:"light"===t?e.light=(0,c.$n)(e.main,i):"dark"===t&&(e.dark=(0,c._j)(e.main,s)))}let I=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"],T={textTransform:"uppercase"},S='"Roboto", "Helvetica", "Arial", sans-serif';function k(...e){return`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,0.2),${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,0.14),${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,0.12)`}let C=["none",k(0,2,1,-1,0,1,1,0,0,1,3,0),k(0,3,1,-2,0,2,2,0,0,1,5,0),k(0,3,3,-2,0,3,4,0,0,1,8,0),k(0,2,4,-1,0,4,5,0,0,1,10,0),k(0,3,5,-1,0,5,8,0,0,1,14,0),k(0,3,5,-1,0,6,10,0,0,1,18,0),k(0,4,5,-2,0,7,10,1,0,2,16,1),k(0,5,5,-3,0,8,10,1,0,3,14,2),k(0,5,6,-3,0,9,12,1,0,3,16,2),k(0,6,6,-3,0,10,14,1,0,4,18,3),k(0,6,7,-4,0,11,15,1,0,4,20,3),k(0,7,8,-4,0,12,17,2,0,5,22,4),k(0,7,8,-4,0,13,19,2,0,5,24,4),k(0,7,9,-4,0,14,21,2,0,5,26,4),k(0,8,9,-5,0,15,22,2,0,6,28,5),k(0,8,10,-5,0,16,24,2,0,6,30,5),k(0,8,11,-5,0,17,26,2,0,6,32,5),k(0,9,11,-5,0,18,28,2,0,7,34,6),k(0,9,12,-6,0,19,29,2,0,7,36,6),k(0,10,13,-6,0,20,31,3,0,8,38,7),k(0,10,13,-6,0,21,33,3,0,8,40,7),k(0,10,14,-6,0,22,35,3,0,8,42,7),k(0,11,14,-7,0,23,36,3,0,9,44,8),k(0,11,15,-7,0,24,38,3,0,9,46,8)];var A=r(96067),N={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};let x=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];var R=function(e={},...t){var r;let{mixins:k={},palette:R={},transitions:O={},typography:P={}}=e,D=(0,i.Z)(e,x);if(e.vars)throw Error((0,s.Z)(18));let L=function(e){let{mode:t="light",contrastThreshold:r=3,tonalOffset:o=.2}=e,l=(0,i.Z)(e,w),u=e.primary||function(e="light"){return"dark"===e?{main:g[200],light:g[50],dark:g[400]}:{main:g[700],light:g[400],dark:g[800]}}(t),I=e.secondary||function(e="light"){return"dark"===e?{main:f[200],light:f[50],dark:f[400]}:{main:f[500],light:f[300],dark:f[700]}}(t),T=e.error||function(e="light"){return"dark"===e?{main:p[500],light:p[300],dark:p[700]}:{main:p[700],light:p[400],dark:p[800]}}(t),S=e.info||function(e="light"){return"dark"===e?{main:y[400],light:y[300],dark:y[700]}:{main:y[700],light:y[500],dark:y[900]}}(t),k=e.success||function(e="light"){return"dark"===e?{main:v[400],light:v[300],dark:v[700]}:{main:v[800],light:v[500],dark:v[900]}}(t),C=e.warning||function(e="light"){return"dark"===e?{main:m[400],light:m[300],dark:m[700]}:{main:"#ed6c02",light:m[500],dark:m[900]}}(t);function A(e){let t=(0,c.mi)(e,_.text.primary)>=r?_.text.primary:b.text.primary;return t}let N=({color:e,name:t,mainShade:r=500,lightShade:i=300,darkShade:a=700})=>{if(!(e=(0,n.Z)({},e)).main&&e[r]&&(e.main=e[r]),!e.hasOwnProperty("main"))throw Error((0,s.Z)(11,t?` (${t})`:"",r));if("string"!=typeof e.main)throw Error((0,s.Z)(12,t?` (${t})`:"",JSON.stringify(e.main)));return E(e,"light",i,o),E(e,"dark",a,o),e.contrastText||(e.contrastText=A(e.main)),e},x=(0,a.Z)((0,n.Z)({common:(0,n.Z)({},h),mode:t,primary:N({color:u,name:"primary"}),secondary:N({color:I,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:N({color:T,name:"error"}),warning:N({color:C,name:"warning"}),info:N({color:S,name:"info"}),success:N({color:k,name:"success"}),grey:d,contrastThreshold:r,getContrastText:A,augmentColor:N,tonalOffset:o},{dark:_,light:b}[t]),l);return x}(R),M=(0,o.Z)(e),U=(0,a.Z)(M,{mixins:(r=M.breakpoints,(0,n.Z)({toolbar:{minHeight:56,[r.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[r.up("sm")]:{minHeight:64}}},k)),palette:L,shadows:C.slice(),typography:function(e,t){let r="function"==typeof t?t(e):t,{fontFamily:s=S,fontSize:o=14,fontWeightLight:l=300,fontWeightRegular:u=400,fontWeightMedium:c=500,fontWeightBold:h=700,htmlFontSize:d=16,allVariants:f,pxToRem:p}=r,m=(0,i.Z)(r,I),g=o/14,y=p||(e=>`${e/d*g}rem`),v=(e,t,r,i,a)=>(0,n.Z)({fontFamily:s,fontWeight:e,fontSize:y(t),lineHeight:r},s===S?{letterSpacing:`${Math.round(1e5*(i/t))/1e5}em`}:{},a,f),w={h1:v(l,96,1.167,-1.5),h2:v(l,60,1.2,-.5),h3:v(u,48,1.167,0),h4:v(u,34,1.235,.25),h5:v(u,24,1.334,0),h6:v(c,20,1.6,.15),subtitle1:v(u,16,1.75,.15),subtitle2:v(c,14,1.57,.1),body1:v(u,16,1.5,.15),body2:v(u,14,1.43,.15),button:v(c,14,1.75,.4,T),caption:v(u,12,1.66,.4),overline:v(u,12,2.66,1,T),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return(0,a.Z)((0,n.Z)({htmlFontSize:d,pxToRem:y,fontFamily:s,fontSize:o,fontWeightLight:l,fontWeightRegular:u,fontWeightMedium:c,fontWeightBold:h},w),m,{clone:!1})}(L,P),transitions:(0,A.ZP)(O),zIndex:(0,n.Z)({},N)});return U=(0,a.Z)(U,D),(U=t.reduce((e,t)=>(0,a.Z)(e,t),U)).unstable_sxConfig=(0,n.Z)({},l.Z,null==D?void 0:D.unstable_sxConfig),U.unstable_sx=function(e){return(0,u.Z)({sx:e,theme:this})},U}},96067:function(e,t,r){"use strict";r.d(t,{ZP:function(){return c},x9:function(){return o}});var n=r(63366),i=r(87462);let s=["duration","easing","delay"],a={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},o={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function l(e){return`${Math.round(e)}ms`}function u(e){if(!e)return 0;let t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function c(e){let t=(0,i.Z)({},a,e.easing),r=(0,i.Z)({},o,e.duration);return(0,i.Z)({getAutoHeightDuration:u,create:(e=["all"],i={})=>{let{duration:a=r.standard,easing:o=t.easeInOut,delay:u=0}=i;return(0,n.Z)(i,s),(Array.isArray(e)?e:[e]).map(e=>`${e} ${"string"==typeof a?a:l(a)} ${o} ${"string"==typeof u?u:l(u)}`).join(",")}},e,{easing:t,duration:r})}},90247:function(e,t,r){"use strict";var n=r(68239);let i=(0,n.Z)();t.Z=i},10606:function(e,t){"use strict";t.Z="$$material"},90948:function(e,t,r){"use strict";r.d(t,{Dz:function(){return o},FO:function(){return a}});var n=r(70182),i=r(90247),s=r(10606);let a=e=>(0,n.x9)(e)&&"classes"!==e,o=n.x9,l=(0,n.ZP)({themeId:s.Z,defaultTheme:i.Z,rootShouldForwardProp:a});t.ZP=l},2734:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}}),r(67294);var n=r(96682),i=r(90247),s=r(10606);function a(){let e=(0,n.Z)(i.Z);return e[s.Z]||e}},71657:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(29628),i=r(90247),s=r(10606);function a({props:e,name:t}){return(0,n.Z)({props:e,name:t,defaultTheme:i.Z,themeId:s.Z})}},30577:function(e,t,r){"use strict";r.d(t,{C:function(){return i},n:function(){return n}});let n=e=>e.scrollTop;function i(e,t){var r,n;let{timeout:i,easing:s,style:a={}}=e;return{duration:null!=(r=a.transitionDuration)?r:"number"==typeof i?i:i[t.mode]||0,easing:null!=(n=a.transitionTimingFunction)?n:"object"==typeof s?s[t.mode]:s,delay:a.transitionDelay}}},98216:function(e,t,r){"use strict";var n=r(14142);t.Z=n.Z},51705:function(e,t,r){"use strict";var n=r(33703);t.Z=n.Z},78883:function(e,t,r){"use strict";r.d(t,{Co:function(){return s},ZP:function(){return i}});var n=r(16829);/**
 * @mui/styled-engine v5.13.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function i(e,t){let r=(0,n.Z)(e,t);return r}let s=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))}},95408:function(e,t,r){"use strict";r.d(t,{L7:function(){return l},P$:function(){return c},VO:function(){return i},W8:function(){return o},dt:function(){return u},k9:function(){return a}});var n=r(59766);let i={xs:0,sm:600,md:900,lg:1200,xl:1536},s={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${i[e]}px)`};function a(e,t,r){let n=e.theme||{};if(Array.isArray(t)){let e=n.breakpoints||s;return t.reduce((n,i,s)=>(n[e.up(e.keys[s])]=r(t[s]),n),{})}if("object"==typeof t){let e=n.breakpoints||s;return Object.keys(t).reduce((n,s)=>{if(-1!==Object.keys(e.values||i).indexOf(s)){let i=e.up(s);n[i]=r(t[s],s)}else n[s]=t[s];return n},{})}let a=r(t);return a}function o(e={}){var t;let r=null==(t=e.keys)?void 0:t.reduce((t,r)=>{let n=e.up(r);return t[n]={},t},{});return r||{}}function l(e,t){return e.reduce((e,t)=>{let r=e[t],n=!r||0===Object.keys(r).length;return n&&delete e[t],e},t)}function u(e,...t){let r=o(e),i=[r,...t].reduce((e,t)=>(0,n.Z)(e,t),{});return l(Object.keys(r),i)}function c({values:e,breakpoints:t,base:r}){let n;let i=r||function(e,t){if("object"!=typeof e)return{};let r={},n=Object.keys(t);return Array.isArray(e)?n.forEach((t,n)=>{n<e.length&&(r[t]=!0)}):n.forEach(t=>{null!=e[t]&&(r[t]=!0)}),r}(e,t),s=Object.keys(i);return 0===s.length?e:s.reduce((t,r,i)=>(Array.isArray(e)?(t[r]=null!=e[i]?e[i]:e[n],n=i):"object"==typeof e?(t[r]=null!=e[r]?e[r]:e[n],n=r):t[r]=e,t),{})}},41796:function(e,t,r){"use strict";r.d(t,{$n:function(){return h},Fq:function(){return u},_4:function(){return d},_j:function(){return c},mi:function(){return l}});var n=r(71387);function i(e,t=0,r=1){return Math.min(Math.max(t,e),r)}function s(e){let t;if(e.type)return e;if("#"===e.charAt(0))return s(function(e){e=e.slice(1);let t=RegExp(`.{1,${e.length>=6?2:1}}`,"g"),r=e.match(t);return r&&1===r[0].length&&(r=r.map(e=>e+e)),r?`rgb${4===r.length?"a":""}(${r.map((e,t)=>t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3).join(", ")})`:""}(e));let r=e.indexOf("("),i=e.substring(0,r);if(-1===["rgb","rgba","hsl","hsla","color"].indexOf(i))throw Error((0,n.Z)(9,e));let a=e.substring(r+1,e.length-1);if("color"===i){if(t=(a=a.split(" ")).shift(),4===a.length&&"/"===a[3].charAt(0)&&(a[3]=a[3].slice(1)),-1===["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(t))throw Error((0,n.Z)(10,t))}else a=a.split(",");return{type:i,values:a=a.map(e=>parseFloat(e)),colorSpace:t}}function a(e){let{type:t,colorSpace:r}=e,{values:n}=e;return -1!==t.indexOf("rgb")?n=n.map((e,t)=>t<3?parseInt(e,10):e):-1!==t.indexOf("hsl")&&(n[1]=`${n[1]}%`,n[2]=`${n[2]}%`),`${t}(${n=-1!==t.indexOf("color")?`${r} ${n.join(" ")}`:`${n.join(", ")}`})`}function o(e){let t="hsl"===(e=s(e)).type||"hsla"===e.type?s(function(e){e=s(e);let{values:t}=e,r=t[0],n=t[1]/100,i=t[2]/100,o=n*Math.min(i,1-i),l=(e,t=(e+r/30)%12)=>i-o*Math.max(Math.min(t-3,9-t,1),-1),u="rgb",c=[Math.round(255*l(0)),Math.round(255*l(8)),Math.round(255*l(4))];return"hsla"===e.type&&(u+="a",c.push(t[3])),a({type:u,values:c})}(e)).values:e.values;return Number((.2126*(t=t.map(t=>("color"!==e.type&&(t/=255),t<=.03928?t/12.92:((t+.055)/1.055)**2.4)))[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function l(e,t){let r=o(e),n=o(t);return(Math.max(r,n)+.05)/(Math.min(r,n)+.05)}function u(e,t){return e=s(e),t=i(t),("rgb"===e.type||"hsl"===e.type)&&(e.type+="a"),"color"===e.type?e.values[3]=`/${t}`:e.values[3]=t,a(e)}function c(e,t){if(e=s(e),t=i(t),-1!==e.type.indexOf("hsl"))e.values[2]*=1-t;else if(-1!==e.type.indexOf("rgb")||-1!==e.type.indexOf("color"))for(let r=0;r<3;r+=1)e.values[r]*=1-t;return a(e)}function h(e,t){if(e=s(e),t=i(t),-1!==e.type.indexOf("hsl"))e.values[2]+=(100-e.values[2])*t;else if(-1!==e.type.indexOf("rgb"))for(let r=0;r<3;r+=1)e.values[r]+=(255-e.values[r])*t;else if(-1!==e.type.indexOf("color"))for(let r=0;r<3;r+=1)e.values[r]+=(1-e.values[r])*t;return a(e)}function d(e,t=.15){return o(e)>.5?c(e,t):h(e,t)}},70182:function(e,t,r){"use strict";r.d(t,{ZP:function(){return w},x9:function(){return g}});var n=r(63366),i=r(87462),s=r(78883),a=r(66500),o=r(14142);let l=["variant"];function u(e){return 0===e.length}function c(e){let{variant:t}=e,r=(0,n.Z)(e,l),i=t||"";return Object.keys(r).sort().forEach(t=>{"color"===t?i+=u(i)?e[t]:(0,o.Z)(e[t]):i+=`${u(i)?t:(0,o.Z)(t)}${(0,o.Z)(e[t].toString())}`}),i}var h=r(86523);let d=["name","slot","skipVariantsResolver","skipSx","overridesResolver"],f=(e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null,p=(e,t)=>{let r=[];t&&t.components&&t.components[e]&&t.components[e].variants&&(r=t.components[e].variants);let n={};return r.forEach(e=>{let t=c(e.props);n[t]=e.style}),n},m=(e,t,r,n)=>{var i,s;let{ownerState:a={}}=e,o=[],l=null==r?void 0:null==(i=r.components)?void 0:null==(s=i[n])?void 0:s.variants;return l&&l.forEach(r=>{let n=!0;Object.keys(r.props).forEach(t=>{a[t]!==r.props[t]&&e[t]!==r.props[t]&&(n=!1)}),n&&o.push(t[c(r.props)])}),o};function g(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}let y=(0,a.Z)();function v({defaultTheme:e,theme:t,themeId:r}){return 0===Object.keys(t).length?e:t[r]||t}function w(e={}){let{themeId:t,defaultTheme:r=y,rootShouldForwardProp:a=g,slotShouldForwardProp:o=g}=e,l=e=>(0,h.Z)((0,i.Z)({},e,{theme:v((0,i.Z)({},e,{defaultTheme:r,themeId:t}))}));return l.__mui_systemSx=!0,(e,u={})=>{let c;(0,s.Co)(e,e=>e.filter(e=>!(null!=e&&e.__mui_systemSx)));let{name:h,slot:y,skipVariantsResolver:w,skipSx:b,overridesResolver:_}=u,E=(0,n.Z)(u,d),I=void 0!==w?w:y&&"Root"!==y||!1,T=b||!1,S=g;"Root"===y?S=a:y?S=o:"string"==typeof e&&e.charCodeAt(0)>96&&(S=void 0);let k=(0,s.ZP)(e,(0,i.Z)({shouldForwardProp:S,label:c},E)),C=(n,...s)=>{let a=s?s.map(e=>"function"==typeof e&&e.__emotion_real!==e?n=>e((0,i.Z)({},n,{theme:v((0,i.Z)({},n,{defaultTheme:r,themeId:t}))})):e):[],o=n;h&&_&&a.push(e=>{let n=v((0,i.Z)({},e,{defaultTheme:r,themeId:t})),s=f(h,n);if(s){let t={};return Object.entries(s).forEach(([r,s])=>{t[r]="function"==typeof s?s((0,i.Z)({},e,{theme:n})):s}),_(e,t)}return null}),h&&!I&&a.push(e=>{let n=v((0,i.Z)({},e,{defaultTheme:r,themeId:t}));return m(e,p(h,n),n,h)}),T||a.push(l);let u=a.length-s.length;if(Array.isArray(n)&&u>0){let e=Array(u).fill("");(o=[...n,...e]).raw=[...n.raw,...e]}else"function"==typeof n&&n.__emotion_real!==n&&(o=e=>n((0,i.Z)({},e,{theme:v((0,i.Z)({},e,{defaultTheme:r,themeId:t}))})));let c=k(o,...a);return e.muiName&&(c.muiName=e.muiName),c};return k.withConfig&&(C.withConfig=k.withConfig),C}}},66500:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(87462),i=r(63366),s=r(59766);let a=["values","unit","step"],o=e=>{let t=Object.keys(e).map(t=>({key:t,val:e[t]}))||[];return t.sort((e,t)=>e.val-t.val),t.reduce((e,t)=>(0,n.Z)({},e,{[t.key]:t.val}),{})};var l={borderRadius:4},u=r(98700),c=r(86523),h=r(44920);let d=["breakpoints","palette","spacing","shape"];var f=function(e={},...t){let{breakpoints:r={},palette:f={},spacing:p,shape:m={}}=e,g=(0,i.Z)(e,d),y=function(e){let{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:r="px",step:s=5}=e,l=(0,i.Z)(e,a),u=o(t),c=Object.keys(u);function h(e){let n="number"==typeof t[e]?t[e]:e;return`@media (min-width:${n}${r})`}function d(e){let n="number"==typeof t[e]?t[e]:e;return`@media (max-width:${n-s/100}${r})`}function f(e,n){let i=c.indexOf(n);return`@media (min-width:${"number"==typeof t[e]?t[e]:e}${r}) and (max-width:${(-1!==i&&"number"==typeof t[c[i]]?t[c[i]]:n)-s/100}${r})`}return(0,n.Z)({keys:c,values:u,up:h,down:d,between:f,only:function(e){return c.indexOf(e)+1<c.length?f(e,c[c.indexOf(e)+1]):h(e)},not:function(e){let t=c.indexOf(e);return 0===t?h(c[1]):t===c.length-1?d(c[t]):f(e,c[c.indexOf(e)+1]).replace("@media","@media not all and")},unit:r},l)}(r),v=function(e=8){if(e.mui)return e;let t=(0,u.hB)({spacing:e}),r=(...e)=>{let r=0===e.length?[1]:e;return r.map(e=>{let r=t(e);return"number"==typeof r?`${r}px`:r}).join(" ")};return r.mui=!0,r}(p),w=(0,s.Z)({breakpoints:y,direction:"ltr",components:{},palette:(0,n.Z)({mode:"light"},f),spacing:v,shape:(0,n.Z)({},l,m)},g);return(w=t.reduce((e,t)=>(0,s.Z)(e,t),w)).unstable_sxConfig=(0,n.Z)({},h.Z,null==g?void 0:g.unstable_sxConfig),w.unstable_sx=function(e){return(0,c.Z)({sx:e,theme:this})},w}},47730:function(e,t,r){"use strict";var n=r(59766);t.Z=function(e,t){return t?(0,n.Z)(e,t,{clone:!1}):e}},98700:function(e,t,r){"use strict";r.d(t,{hB:function(){return p},eI:function(){return f},NA:function(){return m},e6:function(){return y},o3:function(){return v}});var n=r(95408),i=r(54844),s=r(47730);let a={m:"margin",p:"padding"},o={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},l={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},u=function(e){let t={};return r=>(void 0===t[r]&&(t[r]=e(r)),t[r])}(e=>{if(e.length>2){if(!l[e])return[e];e=l[e]}let[t,r]=e.split(""),n=a[t],i=o[r]||"";return Array.isArray(i)?i.map(e=>n+e):[n+i]}),c=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],h=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"],d=[...c,...h];function f(e,t,r,n){var s;let a=null!=(s=(0,i.DW)(e,t,!1))?s:r;return"number"==typeof a?e=>"string"==typeof e?e:a*e:Array.isArray(a)?e=>"string"==typeof e?e:a[e]:"function"==typeof a?a:()=>void 0}function p(e){return f(e,"spacing",8,"spacing")}function m(e,t){if("string"==typeof t||null==t)return t;let r=Math.abs(t),n=e(r);return t>=0?n:"number"==typeof n?-n:`-${n}`}function g(e,t){let r=p(e.theme);return Object.keys(e).map(i=>(function(e,t,r,i){if(-1===t.indexOf(r))return null;let s=u(r),a=e[r];return(0,n.k9)(e,a,e=>s.reduce((t,r)=>(t[r]=m(i,e),t),{}))})(e,t,i,r)).reduce(s.Z,{})}function y(e){return g(e,c)}function v(e){return g(e,h)}function w(e){return g(e,d)}y.propTypes={},y.filterProps=c,v.propTypes={},v.filterProps=h,w.propTypes={},w.filterProps=d},54844:function(e,t,r){"use strict";r.d(t,{DW:function(){return s},Jq:function(){return a}});var n=r(14142),i=r(95408);function s(e,t,r=!0){if(!t||"string"!=typeof t)return null;if(e&&e.vars&&r){let r=`vars.${t}`.split(".").reduce((e,t)=>e&&e[t]?e[t]:null,e);if(null!=r)return r}return t.split(".").reduce((e,t)=>e&&null!=e[t]?e[t]:null,e)}function a(e,t,r,n=r){let i;return i="function"==typeof e?e(r):Array.isArray(e)?e[r]||n:s(e,r)||n,t&&(i=t(i,n,e)),i}t.ZP=function(e){let{prop:t,cssProperty:r=e.prop,themeKey:o,transform:l}=e,u=e=>{if(null==e[t])return null;let u=e[t],c=e.theme,h=s(c,o)||{};return(0,i.k9)(e,u,e=>{let i=a(h,l,e);return(e===i&&"string"==typeof e&&(i=a(h,l,`${t}${"default"===e?"":(0,n.Z)(e)}`,e)),!1===r)?i:{[r]:i}})};return u.propTypes={},u.filterProps=[t],u}},44920:function(e,t,r){"use strict";r.d(t,{Z:function(){return K}});var n=r(98700),i=r(54844),s=r(47730),a=function(...e){let t=e.reduce((e,t)=>(t.filterProps.forEach(r=>{e[r]=t}),e),{}),r=e=>Object.keys(e).reduce((r,n)=>t[n]?(0,s.Z)(r,t[n](e)):r,{});return r.propTypes={},r.filterProps=e.reduce((e,t)=>e.concat(t.filterProps),[]),r},o=r(95408);function l(e){return"number"!=typeof e?e:`${e}px solid`}let u=(0,i.ZP)({prop:"border",themeKey:"borders",transform:l}),c=(0,i.ZP)({prop:"borderTop",themeKey:"borders",transform:l}),h=(0,i.ZP)({prop:"borderRight",themeKey:"borders",transform:l}),d=(0,i.ZP)({prop:"borderBottom",themeKey:"borders",transform:l}),f=(0,i.ZP)({prop:"borderLeft",themeKey:"borders",transform:l}),p=(0,i.ZP)({prop:"borderColor",themeKey:"palette"}),m=(0,i.ZP)({prop:"borderTopColor",themeKey:"palette"}),g=(0,i.ZP)({prop:"borderRightColor",themeKey:"palette"}),y=(0,i.ZP)({prop:"borderBottomColor",themeKey:"palette"}),v=(0,i.ZP)({prop:"borderLeftColor",themeKey:"palette"}),w=e=>{if(void 0!==e.borderRadius&&null!==e.borderRadius){let t=(0,n.eI)(e.theme,"shape.borderRadius",4,"borderRadius");return(0,o.k9)(e,e.borderRadius,e=>({borderRadius:(0,n.NA)(t,e)}))}return null};w.propTypes={},w.filterProps=["borderRadius"],a(u,c,h,d,f,p,m,g,y,v,w);let b=e=>{if(void 0!==e.gap&&null!==e.gap){let t=(0,n.eI)(e.theme,"spacing",8,"gap");return(0,o.k9)(e,e.gap,e=>({gap:(0,n.NA)(t,e)}))}return null};b.propTypes={},b.filterProps=["gap"];let _=e=>{if(void 0!==e.columnGap&&null!==e.columnGap){let t=(0,n.eI)(e.theme,"spacing",8,"columnGap");return(0,o.k9)(e,e.columnGap,e=>({columnGap:(0,n.NA)(t,e)}))}return null};_.propTypes={},_.filterProps=["columnGap"];let E=e=>{if(void 0!==e.rowGap&&null!==e.rowGap){let t=(0,n.eI)(e.theme,"spacing",8,"rowGap");return(0,o.k9)(e,e.rowGap,e=>({rowGap:(0,n.NA)(t,e)}))}return null};E.propTypes={},E.filterProps=["rowGap"];let I=(0,i.ZP)({prop:"gridColumn"}),T=(0,i.ZP)({prop:"gridRow"}),S=(0,i.ZP)({prop:"gridAutoFlow"}),k=(0,i.ZP)({prop:"gridAutoColumns"}),C=(0,i.ZP)({prop:"gridAutoRows"}),A=(0,i.ZP)({prop:"gridTemplateColumns"}),N=(0,i.ZP)({prop:"gridTemplateRows"}),x=(0,i.ZP)({prop:"gridTemplateAreas"}),R=(0,i.ZP)({prop:"gridArea"});function O(e,t){return"grey"===t?t:e}a(b,_,E,I,T,S,k,C,A,N,x,R);let P=(0,i.ZP)({prop:"color",themeKey:"palette",transform:O}),D=(0,i.ZP)({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:O}),L=(0,i.ZP)({prop:"backgroundColor",themeKey:"palette",transform:O});function M(e){return e<=1&&0!==e?`${100*e}%`:e}a(P,D,L);let U=(0,i.ZP)({prop:"width",transform:M}),F=e=>void 0!==e.maxWidth&&null!==e.maxWidth?(0,o.k9)(e,e.maxWidth,t=>{var r,n,i;let s=(null==(r=e.theme)?void 0:null==(n=r.breakpoints)?void 0:null==(i=n.values)?void 0:i[t])||o.VO[t];return{maxWidth:s||M(t)}}):null;F.filterProps=["maxWidth"];let V=(0,i.ZP)({prop:"minWidth",transform:M}),j=(0,i.ZP)({prop:"height",transform:M}),$=(0,i.ZP)({prop:"maxHeight",transform:M}),B=(0,i.ZP)({prop:"minHeight",transform:M});(0,i.ZP)({prop:"size",cssProperty:"width",transform:M}),(0,i.ZP)({prop:"size",cssProperty:"height",transform:M});let z=(0,i.ZP)({prop:"boxSizing"});a(U,F,V,j,$,B,z);let q={border:{themeKey:"borders",transform:l},borderTop:{themeKey:"borders",transform:l},borderRight:{themeKey:"borders",transform:l},borderBottom:{themeKey:"borders",transform:l},borderLeft:{themeKey:"borders",transform:l},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:w},color:{themeKey:"palette",transform:O},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:O},backgroundColor:{themeKey:"palette",transform:O},p:{style:n.o3},pt:{style:n.o3},pr:{style:n.o3},pb:{style:n.o3},pl:{style:n.o3},px:{style:n.o3},py:{style:n.o3},padding:{style:n.o3},paddingTop:{style:n.o3},paddingRight:{style:n.o3},paddingBottom:{style:n.o3},paddingLeft:{style:n.o3},paddingX:{style:n.o3},paddingY:{style:n.o3},paddingInline:{style:n.o3},paddingInlineStart:{style:n.o3},paddingInlineEnd:{style:n.o3},paddingBlock:{style:n.o3},paddingBlockStart:{style:n.o3},paddingBlockEnd:{style:n.o3},m:{style:n.e6},mt:{style:n.e6},mr:{style:n.e6},mb:{style:n.e6},ml:{style:n.e6},mx:{style:n.e6},my:{style:n.e6},margin:{style:n.e6},marginTop:{style:n.e6},marginRight:{style:n.e6},marginBottom:{style:n.e6},marginLeft:{style:n.e6},marginX:{style:n.e6},marginY:{style:n.e6},marginInline:{style:n.e6},marginInlineStart:{style:n.e6},marginInlineEnd:{style:n.e6},marginBlock:{style:n.e6},marginBlockStart:{style:n.e6},marginBlockEnd:{style:n.e6},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:b},rowGap:{style:E},columnGap:{style:_},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:M},maxWidth:{style:F},minWidth:{transform:M},height:{transform:M},maxHeight:{transform:M},minHeight:{transform:M},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};var K=q},39707:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(87462),i=r(63366),s=r(59766),a=r(44920);let o=["sx"],l=e=>{var t,r;let n={systemProps:{},otherProps:{}},i=null!=(t=null==e?void 0:null==(r=e.theme)?void 0:r.unstable_sxConfig)?t:a.Z;return Object.keys(e).forEach(t=>{i[t]?n.systemProps[t]=e[t]:n.otherProps[t]=e[t]}),n};function u(e){let t;let{sx:r}=e,a=(0,i.Z)(e,o),{systemProps:u,otherProps:c}=l(a);return t=Array.isArray(r)?[u,...r]:"function"==typeof r?(...e)=>{let t=r(...e);return(0,s.P)(t)?(0,n.Z)({},u,t):u}:(0,n.Z)({},u,r),(0,n.Z)({},c,{sx:t})}},86523:function(e,t,r){"use strict";var n=r(14142),i=r(47730),s=r(54844),a=r(95408),o=r(44920);let l=function(){function e(e,t,r,i){let o={[e]:t,theme:r},l=i[e];if(!l)return{[e]:t};let{cssProperty:u=e,themeKey:c,transform:h,style:d}=l;if(null==t)return null;if("typography"===c&&"inherit"===t)return{[e]:t};let f=(0,s.DW)(r,c)||{};return d?d(o):(0,a.k9)(o,t,t=>{let r=(0,s.Jq)(f,h,t);return(t===r&&"string"==typeof t&&(r=(0,s.Jq)(f,h,`${e}${"default"===t?"":(0,n.Z)(t)}`,t)),!1===u)?r:{[u]:r}})}return function t(r){var n;let{sx:s,theme:l={}}=r||{};if(!s)return null;let u=null!=(n=l.unstable_sxConfig)?n:o.Z;function c(r){let n=r;if("function"==typeof r)n=r(l);else if("object"!=typeof r)return r;if(!n)return null;let s=(0,a.W8)(l.breakpoints),o=Object.keys(s),c=s;return Object.keys(n).forEach(r=>{var s;let o="function"==typeof(s=n[r])?s(l):s;if(null!=o){if("object"==typeof o){if(u[r])c=(0,i.Z)(c,e(r,o,l,u));else{let e=(0,a.k9)({theme:l},o,e=>({[r]:e}));(function(...e){let t=e.reduce((e,t)=>e.concat(Object.keys(t)),[]),r=new Set(t);return e.every(e=>r.size===Object.keys(e).length)})(e,o)?c[r]=t({sx:o,theme:l}):c=(0,i.Z)(c,e)}}else c=(0,i.Z)(c,e(r,o,l,u))}}),(0,a.L7)(o,c)}return Array.isArray(s)?s.map(c):c(s)}}();l.filterProps=["sx"],t.Z=l},96682:function(e,t,r){"use strict";var n=r(66500),i=r(34168);let s=(0,n.Z)();t.Z=function(e=s){return(0,i.Z)(e)}},20539:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(47925);function i(e){let{theme:t,name:r,props:i}=e;return t&&t.components&&t.components[r]&&t.components[r].defaultProps?(0,n.Z)(t.components[r].defaultProps,i):i}},29628:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(20539),i=r(96682);function s({props:e,name:t,defaultTheme:r,themeId:s}){let a=(0,i.Z)(r);s&&(a=a[s]||a);let o=(0,n.Z)({theme:a,name:t,props:e});return o}},34168:function(e,t,r){"use strict";var n=r(67294),i=r(11463);t.Z=function(e=null){let t=n.useContext(i.T);return t&&0!==Object.keys(t).length?t:e}},37078:function(e,t){"use strict";let r;let n=e=>e,i=(r=n,{configure(e){r=e},generate:e=>r(e),reset(){r=n}});t.Z=i},14142:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(71387);function i(e){if("string"!=typeof e)throw Error((0,n.Z)(7));return e.charAt(0).toUpperCase()+e.slice(1)}},94780:function(e,t,r){"use strict";function n(e,t,r){let n={};return Object.keys(e).forEach(i=>{n[i]=e[i].reduce((e,n)=>{if(n){let i=t(n);""!==i&&e.push(i),r&&r[n]&&e.push(r[n])}return e},[]).join(" ")}),n}r.d(t,{Z:function(){return n}})},59766:function(e,t,r){"use strict";r.d(t,{P:function(){return i},Z:function(){return function e(t,r,s={clone:!0}){let a=s.clone?(0,n.Z)({},t):t;return i(t)&&i(r)&&Object.keys(r).forEach(n=>{"__proto__"!==n&&(i(r[n])&&n in t&&i(t[n])?a[n]=e(t[n],r[n],s):s.clone?a[n]=i(r[n])?function e(t){if(!i(t))return t;let r={};return Object.keys(t).forEach(n=>{r[n]=e(t[n])}),r}(r[n]):r[n]:a[n]=r[n])}),a}}});var n=r(87462);function i(e){return null!==e&&"object"==typeof e&&e.constructor===Object}},71387:function(e,t,r){"use strict";function n(e){let t="https://mui.com/production-error/?code="+e;for(let e=1;e<arguments.length;e+=1)t+="&args[]="+encodeURIComponent(arguments[e]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}r.d(t,{Z:function(){return n}})},34867:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(37078);let i={active:"active",checked:"checked",completed:"completed",disabled:"disabled",readOnly:"readOnly",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function s(e,t,r="Mui"){let s=i[t];return s?`${r}-${s}`:`${n.Z.generate(e)}-${t}`}},1588:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(34867);function i(e,t,r="Mui"){let i={};return t.forEach(t=>{i[t]=(0,n.Z)(e,t,r)}),i}},47925:function(e,t,r){"use strict";r.d(t,{Z:function(){return function e(t,r){let i=(0,n.Z)({},r);return Object.keys(t).forEach(s=>{if(s.toString().match(/^(components|slots)$/))i[s]=(0,n.Z)({},t[s],i[s]);else if(s.toString().match(/^(componentsProps|slotProps)$/)){let a=t[s]||{},o=r[s];i[s]={},o&&Object.keys(o)?a&&Object.keys(a)?(i[s]=(0,n.Z)({},o),Object.keys(a).forEach(t=>{i[s][t]=e(a[t],o[t])})):i[s]=o:i[s]=a}else void 0===i[s]&&(i[s]=t[s])}),i}}});var n=r(87462)},7960:function(e,t,r){"use strict";function n(e,t){"function"==typeof e?e(t):e&&(e.current=t)}r.d(t,{Z:function(){return n}})},33703:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(67294),i=r(7960);function s(...e){return n.useMemo(()=>e.every(e=>null==e)?null:t=>{e.forEach(e=>{(0,i.Z)(e,t)})},e)}},86010:function(e,t,r){"use strict";t.Z=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(i&&(i+=" "),i+=n);else for(r in t)t[r]&&(i&&(i+=" "),i+=r)}return i}(e))&&(n&&(n+=" "),n+=t);return n}},8679:function(e,t,r){"use strict";var n=r(21296),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};function l(e){return n.isMemo(e)?a:o[e.$$typeof]||i}o[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o[n.Memo]=a;var u=Object.defineProperty,c=Object.getOwnPropertyNames,h=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(p){var i=f(r);i&&i!==p&&e(t,i,n)}var a=c(r);h&&(a=a.concat(h(r)));for(var o=l(t),m=l(r),g=0;g<a.length;++g){var y=a[g];if(!s[y]&&!(n&&n[y])&&!(m&&m[y])&&!(o&&o[y])){var v=d(r,y);try{u(t,y,v)}catch(e){}}}}return t}},96103:function(e,t){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,s=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,o=r?Symbol.for("react.profiler"):60114,l=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,c=r?Symbol.for("react.async_mode"):60111,h=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,f=r?Symbol.for("react.suspense"):60113,p=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,g=r?Symbol.for("react.lazy"):60116,y=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,w=r?Symbol.for("react.responder"):60118,b=r?Symbol.for("react.scope"):60119;function _(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case c:case h:case s:case o:case a:case f:return e;default:switch(e=e&&e.$$typeof){case u:case d:case g:case m:case l:return e;default:return t}}case i:return t}}}function E(e){return _(e)===h}t.AsyncMode=c,t.ConcurrentMode=h,t.ContextConsumer=u,t.ContextProvider=l,t.Element=n,t.ForwardRef=d,t.Fragment=s,t.Lazy=g,t.Memo=m,t.Portal=i,t.Profiler=o,t.StrictMode=a,t.Suspense=f,t.isAsyncMode=function(e){return E(e)||_(e)===c},t.isConcurrentMode=E,t.isContextConsumer=function(e){return _(e)===u},t.isContextProvider=function(e){return _(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return _(e)===d},t.isFragment=function(e){return _(e)===s},t.isLazy=function(e){return _(e)===g},t.isMemo=function(e){return _(e)===m},t.isPortal=function(e){return _(e)===i},t.isProfiler=function(e){return _(e)===o},t.isStrictMode=function(e){return _(e)===a},t.isSuspense=function(e){return _(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===s||e===h||e===o||e===a||e===f||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===m||e.$$typeof===l||e.$$typeof===u||e.$$typeof===d||e.$$typeof===v||e.$$typeof===w||e.$$typeof===b||e.$$typeof===y)},t.typeOf=_},21296:function(e,t,r){"use strict";e.exports=r(96103)},83454:function(e,t,r){"use strict";var n,i;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(77663)},91118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(28375)}])},50838:function(e,t,r){"use strict";r.d(t,{HD:function(){return F},Eu:function(){return U}});var n=r(85893),i=r(67294),s=r(9669),a=r(11802),o=r(36100),l=r(84808),u=r(63366),c=r(87462),h=r(86010),d=r(94780),f=r(70917),p=r(98216),m=r(71657),g=r(90948),y=r(1588),v=r(34867);function w(e){return(0,v.Z)("MuiCircularProgress",e)}(0,y.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);let b=["className","color","disableShrink","size","style","thickness","value","variant"],_=e=>e,E,I,T,S,k=(0,f.F4)(E||(E=_`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),C=(0,f.F4)(I||(I=_`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),A=e=>{let{classes:t,variant:r,color:n,disableShrink:i}=e,s={root:["root",r,`color${(0,p.Z)(n)}`],svg:["svg"],circle:["circle",`circle${(0,p.Z)(r)}`,i&&"circleDisableShrink"]};return(0,d.Z)(s,w,t)},N=(0,g.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],t[`color${(0,p.Z)(r.color)}`]]}})(({ownerState:e,theme:t})=>(0,c.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:t.transitions.create("transform")},"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].main}),({ownerState:e})=>"indeterminate"===e.variant&&(0,f.iv)(T||(T=_`
      animation: ${0} 1.4s linear infinite;
    `),k)),x=(0,g.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),R=(0,g.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.circle,t[`circle${(0,p.Z)(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})(({ownerState:e,theme:t})=>(0,c.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,f.iv)(S||(S=_`
      animation: ${0} 1.4s ease-in-out infinite;
    `),C)),O=i.forwardRef(function(e,t){let r=(0,m.Z)({props:e,name:"MuiCircularProgress"}),{className:i,color:s="primary",disableShrink:a=!1,size:o=40,style:l,thickness:d=3.6,value:f=0,variant:p="indeterminate"}=r,g=(0,u.Z)(r,b),y=(0,c.Z)({},r,{color:s,disableShrink:a,size:o,thickness:d,value:f,variant:p}),v=A(y),w={},_={},E={};if("determinate"===p){let e=2*Math.PI*((44-d)/2);w.strokeDasharray=e.toFixed(3),E["aria-valuenow"]=Math.round(f),w.strokeDashoffset=`${((100-f)/100*e).toFixed(3)}px`,_.transform="rotate(-90deg)"}return(0,n.jsx)(N,(0,c.Z)({className:(0,h.Z)(v.root,i),style:(0,c.Z)({width:o,height:o},_,l),ownerState:y,ref:t,role:"progressbar"},E,g,{children:(0,n.jsx)(x,{className:v.svg,ownerState:y,viewBox:"22 22 44 44",children:(0,n.jsx)(R,{className:v.circle,style:w,ownerState:y,cx:44,cy:44,r:(44-d)/2,fill:"none",strokeWidth:d})})}))});var P=r(15861);let D=(0,s.v0)(a.Z),L=(0,o.ad)(a.Z),M=i.createContext({}),U=()=>i.useContext(M),F=e=>{let{children:t}=e,[r,a]=i.useState(null),[u,c]=i.useState(!1),[h,d]=i.useState(!0);return i.useEffect(()=>{let e=(0,s.Aj)(D,async e=>{if(e){a(e);let t=(0,o.JU)(L,"users",e.uid),r=await (0,o.QT)(t);r.exists()&&"admin"==r.data().role?(c("admin"),console.log("ADMIN")):r.exists()&&"employee"==r.data().role?(c("employee"),console.log("employee")):(c("user"),console.log("user"))}else a(null),c("");d(!1)});return()=>e()},[]),(0,n.jsx)(M.Provider,{value:{user:r,role:u},children:h?(0,n.jsx)("div",{children:(0,n.jsxs)(l.Z,{sx:{color:"#fff",zIndex:e=>e.zIndex.drawer+1,backgroundColor:"#018294"},open:!0,children:[(0,n.jsx)(O,{color:"inherit"}),(0,n.jsx)(P.Z,{sx:{m:2},children:"กำลังตรวจสอบผู้ใช้งาน..."})]})}):t})}},60533:function(e,t,r){"use strict";r.d(t,{Z:function(){return o},h:function(){return a}});var n=r(85893),i=r(49925),s=r(67294);let a=(0,s.createContext)();function o(e){let{children:t}=e,[r,o]=(0,s.useState)([]),[l,u]=(0,s.useState)(!0);(0,s.useEffect)(()=>{c()},[]);let c=async()=>{let{result:e,error:t}=await (0,i._N)("buy");if(t)console.error("Error fetching document:",t);else if(e){let t=e.docs.map(e=>({id:e.id,...e.data()})),r=t.sort((e,t)=>t.createAt.toMillis()-e.createAt.toMillis());o(r),u(!1)}};return(0,n.jsx)(a.Provider,{value:{buyData:r,setBuyData:o,fetchBuyData:c},children:t})}},23736:function(e,t,r){"use strict";r.d(t,{G:function(){return a},Z:function(){return o}});var n=r(85893),i=r(49925),s=r(67294);let a=(0,s.createContext)();function o(e){let{children:t}=e,[r,o]=(0,s.useState)([]),[l,u]=(0,s.useState)(!0);(0,s.useEffect)(()=>{c()},[]);let c=async()=>{let{result:e,error:t}=await (0,i._N)("catalog");if(t)console.error("Error fetching document:",t);else if(e){let t=e.docs.map(e=>({id:e.id,...e.data()}));o(t),u(!1)}};return(0,n.jsx)(a.Provider,{value:{catalogData:r,setCatalogData:o,fetchcatalogData:c},children:t})}},54574:function(e,t,r){"use strict";r.d(t,{Z:function(){return o},y:function(){return a}});var n=r(85893),i=r(49925),s=r(67294);let a=(0,s.createContext)();function o(e){let{children:t}=e,[r,o]=(0,s.useState)([]),[l,u]=(0,s.useState)(!0);(0,s.useEffect)(()=>{c()},[]);let c=async()=>{let{result:e,error:t}=await (0,i._N)("orders");if(t)console.error("Error fetching document:",t);else if(e){let t=e.docs.map(e=>({id:e.id,...e.data()})),r=t.sort((e,t)=>t.createAt.toMillis()-e.createAt.toMillis());o(r),u(!1)}};return(0,n.jsx)(a.Provider,{value:{orderData:r,setOrderData:o,fetchOrderData:c},children:t})}},99061:function(e,t,r){"use strict";r.d(t,{H:function(){return a},Z:function(){return o}});var n=r(85893),i=r(49925),s=r(67294);let a=(0,s.createContext)();function o(e){let{children:t}=e,[r,o]=(0,s.useState)([]),[l,u]=(0,s.useState)(!0);(0,s.useEffect)(()=>{c()},[]);let c=async()=>{let{result:e,error:t}=await (0,i._N)("products");if(t)console.error("Error fetching document:",t);else if(e){let t=e.docs.filter(e=>!e.data().delete).map(e=>({id:e.id,...e.data()})),r=t.sort((e,t)=>t.create.createAt.toMillis()-e.create.createAt.toMillis());o(r),u(!1)}};return(0,n.jsx)(a.Provider,{value:{productData:r,setProductData:o,fetchProductData:c},children:t})}},79944:function(e,t,r){"use strict";r.d(t,{S:function(){return a},Z:function(){return o}});var n=r(85893),i=r(49925),s=r(67294);let a=(0,s.createContext)();function o(e){let{children:t}=e,[r,o]=(0,s.useState)([]),[l,u]=(0,s.useState)(!0);(0,s.useEffect)(()=>{c()},[]);let c=async()=>{let{result:e,error:t}=await (0,i._N)("users");if(t)console.error("Error fetching document:",t);else if(e){let t=e.docs.map(e=>({id:e.id,...e.data()}));o(t),u(!1)}};return(0,n.jsx)(a.Provider,{value:{userData:r,setUserData:o,fetchUserData:c},children:t})}},11802:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(47456);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,n.KN)("firebase","10.4.0","app");var i=0===(0,n.C6)().length?(0,n.ZF)({apiKey:"AIzaSyDktE41um44zca2yQR_ztQMGOXTVj1Ifm0",authDomain:"paintshop-105ee.firebaseapp.com",projectId:"paintshop-105ee",storageBucket:"paintshop-105ee.appspot.com",messagingSenderId:"861792350462",appId:"1:861792350462:web:0fe69092730434d934b5af",measurementId:"G-KJRCYXSJ6F"}):(0,n.C6)()[0]},49925:function(e,t,r){"use strict";r.d(t,{EC:function(){return l},Eq:function(){return c},KL:function(){return u},PR:function(){return h},ZP:function(){return a},_N:function(){return o},wv:function(){return d}});var n=r(11802),i=r(36100);let s=(0,i.ad)(n.Z);async function a(e,t){let r=(0,i.JU)(s,e,t);try{let e=await (0,i.QT)(r);return{result:e,error:null}}catch(e){return{result:null,error:e}}}let o=async e=>{let t=await (0,i.PL)((0,i.hJ)(s,e));return{result:t,error:null}},l=async(e,t)=>{let r=(0,i.JU)(s,"catalog",t),n=(0,i.IO)((0,i.hJ)(s,e),(0,i.ar)("catalog_id","==",r)),a=await (0,i.PL)(n);return{result:a,error:null}},u=async e=>{let t=[];for(let r of e){let e=await (0,i.QT)((0,i.JU)(s,"products",r));if(e.exists()){let n=e.data(),i={id:r,...n};t.push(i)}}return t},c=async e=>{let t=[];for(let r of e){let e=await (0,i.QT)((0,i.JU)(s,"colors",r));if(e.exists()){let n=e.data(),i={id:r,...n};t.push(i)}}return t},h=async(e,t)=>{let r=(0,i.IO)((0,i.hJ)(s,e),(0,i.ar)("uid","==",String(t))),n=await (0,i.PL)(r);return n.forEach(e=>{console.log(e.id," => ",e.data())}),{result:n,error:null}},d=async(e,t)=>{let r=(0,i.JU)(s,"catalog",t),n=await (0,i.QT)(r);if(!n.exists())return console.error("Catalog document not found"),{result:null,error:"Catalog document not found"};let a=(0,i.IO)((0,i.hJ)(s,e),(0,i.ar)("catalog_id","==",r));try{let e=await (0,i.PL)(a);return e.forEach(e=>{console.log(e.id," => ",e.data())}),{result:e,error:null}}catch(e){return console.error("Error getting products: ",e),{result:null,error:e}}}},28375:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(85893),i=r(50838),s=r(99061),a=r(23736),o=r(79944);r(7952);var l=r(60533),u=r(54574);function c(e){let{Component:t,pageProps:r}=e;return(0,n.jsx)(i.HD,{children:(0,n.jsx)(s.Z,{children:(0,n.jsx)(a.Z,{children:(0,n.jsx)(o.Z,{children:(0,n.jsx)(l.Z,{children:(0,n.jsx)(u.Z,{children:(0,n.jsx)(t,{...r})})})})})})})}},7952:function(){},77663:function(e){!function(){var t={229:function(e){var t,r,n,i=e.exports={};function s(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var l=[],u=!1,c=-1;function h(){u&&n&&(u=!1,n.length?l=n.concat(l):c=-1,l.length&&d())}function d(){if(!u){var e=o(h);u=!0;for(var t=l.length;t;){for(n=l,l=[];++c<t;)n&&n[c].run();c=-1,t=l.length}n=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new f(e,t)),1!==l.length||u||o(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var s=r[e]={exports:{}},a=!0;try{t[e](s,s.exports,n),a=!1}finally{a&&delete r[e]}return s.exports}n.ab="//";var i=n(229);e.exports=i}()},8662:function(e,t,r){"use strict";r.d(t,{ZP:function(){return g}});var n=r(63366),i=r(94578),s=r(67294),a=r(73935),o={disabled:!1},l=r(220),u="unmounted",c="exited",h="entering",d="entered",f="exiting",p=function(e){function t(t,r){n=e.call(this,t,r)||this;var n,i,s=r&&!r.isMounting?t.enter:t.appear;return n.appearStatus=null,t.in?s?(i=c,n.appearStatus=h):i=d:i=t.unmountOnExit||t.mountOnEnter?u:c,n.state={status:i},n.nextCallback=null,n}(0,i.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===u?{status:c}:null};var r=t.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(e){var t=null;if(e!==this.props){var r=this.state.status;this.props.in?r!==h&&r!==d&&(t=h):(r===h||r===d)&&(t=f)}this.updateStatus(!1,t)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var e,t,r,n=this.props.timeout;return e=t=r=n,null!=n&&"number"!=typeof n&&(e=n.exit,t=n.enter,r=void 0!==n.appear?n.appear:t),{exit:e,enter:t,appear:r}},r.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){if(this.cancelNextCallback(),t===h){if(this.props.unmountOnExit||this.props.mountOnEnter){var r=this.props.nodeRef?this.props.nodeRef.current:a.findDOMNode(this);r&&r.scrollTop}this.performEnter(e)}else this.performExit()}else this.props.unmountOnExit&&this.state.status===c&&this.setState({status:u})},r.performEnter=function(e){var t=this,r=this.props.enter,n=this.context?this.context.isMounting:e,i=this.props.nodeRef?[n]:[a.findDOMNode(this),n],s=i[0],l=i[1],u=this.getTimeouts(),c=n?u.appear:u.enter;if(!e&&!r||o.disabled){this.safeSetState({status:d},function(){t.props.onEntered(s)});return}this.props.onEnter(s,l),this.safeSetState({status:h},function(){t.props.onEntering(s,l),t.onTransitionEnd(c,function(){t.safeSetState({status:d},function(){t.props.onEntered(s,l)})})})},r.performExit=function(){var e=this,t=this.props.exit,r=this.getTimeouts(),n=this.props.nodeRef?void 0:a.findDOMNode(this);if(!t||o.disabled){this.safeSetState({status:c},function(){e.props.onExited(n)});return}this.props.onExit(n),this.safeSetState({status:f},function(){e.props.onExiting(n),e.onTransitionEnd(r.exit,function(){e.safeSetState({status:c},function(){e.props.onExited(n)})})})},r.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},r.setNextCallback=function(e){var t=this,r=!0;return this.nextCallback=function(n){r&&(r=!1,t.nextCallback=null,e(n))},this.nextCallback.cancel=function(){r=!1},this.nextCallback},r.onTransitionEnd=function(e,t){this.setNextCallback(t);var r=this.props.nodeRef?this.props.nodeRef.current:a.findDOMNode(this),n=null==e&&!this.props.addEndListener;if(!r||n){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[r,this.nextCallback],s=i[0],o=i[1];this.props.addEndListener(s,o)}null!=e&&setTimeout(this.nextCallback,e)},r.render=function(){var e=this.state.status;if(e===u)return null;var t=this.props,r=t.children,i=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,(0,n.Z)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return s.createElement(l.Z.Provider,{value:null},"function"==typeof r?r(e,i):s.cloneElement(s.Children.only(r),i))},t}(s.Component);function m(){}p.contextType=l.Z,p.propTypes={},p.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:m,onEntering:m,onEntered:m,onExit:m,onExiting:m,onExited:m},p.UNMOUNTED=u,p.EXITED=c,p.ENTERING=h,p.ENTERED=d,p.EXITING=f;var g=p},220:function(e,t,r){"use strict";var n=r(67294);t.Z=n.createContext(null)},87462:function(e,t,r){"use strict";function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},94578:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(89611);function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,(0,n.Z)(e,t)}},63366:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}r.d(t,{Z:function(){return n}})},89611:function(e,t,r){"use strict";function n(e,t){return(n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}r.d(t,{Z:function(){return n}})},47456:function(e,t,r){"use strict";let n,i;r.d(t,{Jn:function(){return D},qX:function(){return R},Xd:function(){return x},Mq:function(){return M},C6:function(){return U},ZF:function(){return L},KN:function(){return F}});var s,a=r(8463),o=r(53333),l=r(74444);let u=(e,t)=>t.some(t=>e instanceof t),c=new WeakMap,h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return h.get(e);if("objectStoreNames"===t)return e.objectStoreNames||d.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return g(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function g(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(g(e.result)),n()},s=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&c.set(t,e)}).catch(()=>{}),p.set(t,e),t}(e);if(f.has(e))return f.get(e);let r="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(y(this),e),g(c.get(this))}:function(...e){return g(t.apply(y(this),e))}:function(e,...r){let n=t.call(y(this),e,...r);return d.set(n,e.sort?e.sort():[e]),g(n)}:(t instanceof IDBTransaction&&function(e){if(h.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),n()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});h.set(e,t)}(t),u(t,n||(n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,m):t;return r!==e&&(f.set(e,r),p.set(r,e)),r}let y=e=>p.get(e),v=["get","getKey","getAll","getAllKeys","count"],w=["put","add","delete","clear"],b=new Map;function _(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(b.get(t))return b.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=w.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||v.includes(r)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),a=s.store;return n&&(a=a.index(t.shift())),(await Promise.all([a[r](...t),i&&s.done]))[0]};return b.set(t,s),s}m={...s=m,get:(e,t,r)=>_(e,t)||s.get(e,t,r),has:(e,t)=>!!_(e,t)||s.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let I="@firebase/app",T="0.9.19",S=new o.Yd("@firebase/app"),k="[DEFAULT]",C={[I]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},A=new Map,N=new Map;function x(e){let t=e.name;if(N.has(t))return S.debug(`There were multiple attempts to register component ${t}.`),!1;for(let r of(N.set(t,e),A.values()))!function(e,t){try{e.container.addComponent(t)}catch(r){S.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}(r,e);return!0}function R(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}let O=new l.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new a.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw O.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let D="10.4.0";function L(e,t={}){let r=e;if("object"!=typeof t){let e=t;t={name:e}}let n=Object.assign({name:k,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw O.create("bad-app-name",{appName:String(i)});if(r||(r=(0,l.aH)()),!r)throw O.create("no-options");let s=A.get(i);if(s){if((0,l.vZ)(r,s.options)&&(0,l.vZ)(n,s.config))return s;throw O.create("duplicate-app",{appName:i})}let o=new a.H0(i);for(let e of N.values())o.addComponent(e);let u=new P(r,n,o);return A.set(i,u),u}function M(e=k){let t=A.get(e);if(!t&&e===k&&(0,l.aH)())return L();if(!t)throw O.create("no-app",{appName:e});return t}function U(){return Array.from(A.values())}function F(e,t,r){var n;let i=null!==(n=C[e])&&void 0!==n?n:e;r&&(i+=`-${r}`);let s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){let e=[`Unable to register library "${i}" with version "${t}":`];s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),S.warn(e.join(" "));return}x(new a.wA(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}let V="firebase-heartbeat-store",j=null;function $(){return j||(j=(function(e,t,{blocked:r,upgrade:n,blocking:i,terminated:s}={}){let a=indexedDB.open(e,1),o=g(a);return n&&a.addEventListener("upgradeneeded",e=>{n(g(a.result),e.oldVersion,e.newVersion,g(a.transaction),e)}),r&&a.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),o.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore(V)}}).catch(e=>{throw O.create("idb-open",{originalErrorMessage:e.message})})),j}async function B(e){try{let t=await $(),r=await t.transaction(V).objectStore(V).get(q(e));return r}catch(e){if(e instanceof l.ZR)S.warn(e.message);else{let t=O.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});S.warn(t.message)}}}async function z(e,t){try{let r=await $(),n=r.transaction(V,"readwrite"),i=n.objectStore(V);await i.put(t,q(e)),await n.done}catch(e){if(e instanceof l.ZR)S.warn(e.message);else{let t=O.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});S.warn(t.message)}}}function q(e){return`${e.name}!${e.options.appId}`}class K{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new H(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),r=Z();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r))?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),r=Date.now();return r-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=Z(),{heartbeatsToSend:t,unsentEntries:r}=function(e,t=1024){let r=[],n=e.slice();for(let i of e){let e=r.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),G(r)>t){e.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),G(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=(0,l.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function Z(){let e=new Date;return e.toISOString().substring(0,10)}class H{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,l.hl)()&&(0,l.eu)().then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await B(this.app);return e||{heartbeats:[]}}}async overwrite(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let r=await this.read();return z(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let r=await this.read();return z(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function G(e){return(0,l.L)(JSON.stringify({version:2,heartbeats:e})).length}x(new a.wA("platform-logger",e=>new E(e),"PRIVATE")),x(new a.wA("heartbeat",e=>new K(e),"PRIVATE")),F(I,T,""),F(I,T,"esm2017"),F("fire-js","")},8463:function(e,t,r){"use strict";r.d(t,{H0:function(){return o},wA:function(){return i}});var n=r(74444);class i{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new n.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[e,t]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(e);r===i&&t.resolve(n)}return n}onInit(e,t){var r;let n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);let s=this.instances.get(n);return s&&e(s,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e===s?void 0:e,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}return r||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},53333:function(e,t,r){"use strict";var n,i;r.d(t,{Yd:function(){return c},in:function(){return n}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s=[];(i=n||(n={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";let a={debug:n.DEBUG,verbose:n.VERBOSE,info:n.INFO,warn:n.WARN,error:n.ERROR,silent:n.SILENT},o=n.INFO,l={[n.DEBUG]:"log",[n.VERBOSE]:"log",[n.INFO]:"info",[n.WARN]:"warn",[n.ERROR]:"error"},u=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),i=l[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class c{constructor(e){this.name=e,this._logLevel=o,this._logHandler=u,this._userLogHandler=null,s.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in n))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?a[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,n.DEBUG,...e),this._logHandler(this,n.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,n.VERBOSE,...e),this._logHandler(this,n.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,n.INFO,...e),this._logHandler(this,n.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,n.WARN,...e),this._logHandler(this,n.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,n.ERROR,...e),this._logHandler(this,n.ERROR,...e)}}},9669:function(e,t,r){"use strict";r.d(t,{Xb:function(){return e2},v0:function(){return t3},Aj:function(){return e9},e5:function(){return e4},w7:function(){return e5}});var n,i=r(74444),s=r(47456),a=r(53333);function o(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}"function"==typeof SuppressedError&&SuppressedError;var l=r(8463);function u(e){return void 0!==e&&void 0!==e.enterprise}class c{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState)}}function h(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let d=new i.LL("auth","Firebase",h()),f=new a.Yd("@firebase/auth");function p(e,...t){f.logLevel<=a.in.ERROR&&f.error(`Auth (${s.Jn}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(e,...t){throw y(e,...t)}function g(e,...t){return y(e,...t)}function y(e,...t){if("string"!=typeof e){let r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return d.create(e,...t)}function v(e,t,...r){if(!e)throw y(t,...r)}function w(e){let t="INTERNAL ASSERTION FAILED: "+e;throw p(t),Error(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function _(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e,t){this.shortDelay=e,this.longDelay=t,t>e||w("Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===_()||"https:"===_()||(0,i.ru)()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e,t){e.emulator||w("Emulator should always be set here");let{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let S={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},k=new E(3e4,6e4);function C(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function A(e,t,r,n,s={}){return N(e,s,async()=>{let s={},a={};n&&("GET"===t?a=n:s={body:JSON.stringify(n)});let o=(0,i.xO)(Object.assign({key:e.config.apiKey},a)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),T.fetch()(R(e,e.config.apiHost,r,o),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function N(e,t,r){e._canInitEmulator=!1;let n=Object.assign(Object.assign({},S),t);try{let t=new O(e),s=await Promise.race([r(),t.promise]);t.clearNetworkTimeout();let a=await s.json();if("needConfirmation"in a)throw P(e,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{let t=s.ok?a.errorMessage:a.error.message,[r,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===r)throw P(e,"credential-already-in-use",a);if("EMAIL_EXISTS"===r)throw P(e,"email-already-in-use",a);if("USER_DISABLED"===r)throw P(e,"user-disabled",a);let l=n[r]||r.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw function(e,t,r){let n=Object.assign(Object.assign({},h()),{[t]:r}),s=new i.LL("auth","Firebase",n);return s.create(t,{appName:e.name})}(e,l,o);m(e,l)}}catch(t){if(t instanceof i.ZR)throw t;m(e,"network-request-failed",{message:String(t)})}}async function x(e,t,r,n,i={}){let s=await A(e,t,r,n,i);return"mfaPendingCredential"in s&&m(e,"multi-factor-auth-required",{_serverResponse:s}),s}function R(e,t,r,n){let i=`${t}${r}?${n}`;return e.config.emulator?I(e.config,i):`${e.config.apiScheme}://${i}`}class O{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(g(this.auth,"network-request-failed")),k.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function P(e,t,r){let n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);let i=g(e,t,n);return i.customData._tokenResponse=r,i}async function D(e,t){return A(e,"GET","/v2/recaptchaConfig",C(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L(e,t){return A(e,"POST","/v1/accounts:delete",t)}async function M(e,t){return A(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}async function F(e,t=!1){let r=(0,i.m9)(e),n=await r.getIdToken(t),s=j(n);v(s&&s.exp&&s.auth_time&&s.iat,r.auth,"internal-error");let a="object"==typeof s.firebase?s.firebase:void 0,o=null==a?void 0:a.sign_in_provider;return{claims:s,token:n,authTime:U(V(s.auth_time)),issuedAtTime:U(V(s.iat)),expirationTime:U(V(s.exp)),signInProvider:o||null,signInSecondFactor:(null==a?void 0:a.sign_in_second_factor)||null}}function V(e){return 1e3*Number(e)}function j(e){let[t,r,n]=e.split(".");if(void 0===t||void 0===r||void 0===n)return p("JWT malformed, contained fewer than 3 sections"),null;try{let e=(0,i.tV)(r);if(!e)return p("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return p("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e,t,r=!1){if(r)return t;try{return await t}catch(t){throw t instanceof i.ZR&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;let e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,r=e-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=U(this.lastLoginAt),this.creationTime=U(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(e){var t;let r=e.auth,n=await e.getIdToken(),i=await $(e,M(r,{idToken:n}));v(null==i?void 0:i.users.length,r,"internal-error");let s=i.users[0];e._notifyReloadListener(s);let a=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map(e=>{var{providerId:t}=e,r=o(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}):[],l=function(e,t){let r=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...r,...t]}(e.providerData,a),u=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!(null==l?void 0:l.length),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new z(s.createdAt,s.lastLoginAt),isAnonymous:!!u&&c};Object.assign(e,h)}async function K(e){let t=(0,i.m9)(e);await q(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(e,t){let r=await N(e,{},async()=>{let r=(0,i.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:s}=e.config,a=R(e,n,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",T.fetch()(a,{method:"POST",headers:o,body:r})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v(void 0!==e.idToken,"internal-error"),v(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){let t=j(e);return v(t,"internal-error"),v(void 0!==t.exp,"internal-error"),v(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(v(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:n,expiresIn:i}=await Z(e,t);this.updateTokensAndExpiration(r,n,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(e,t){let{refreshToken:r,accessToken:n,expirationTime:i}=t,s=new H;return r&&(v("string"==typeof r,"internal-error",{appName:e}),s.refreshToken=r),n&&(v("string"==typeof n,"internal-error",{appName:e}),s.accessToken=n),i&&(v("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new H,this.toJSON())}_performRefresh(){return w("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e,t){v("string"==typeof e||void 0===e,"internal-error",{appName:t})}class W{constructor(e){var{uid:t,auth:r,stsTokenManager:n}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new B(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new z(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let t=await $(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return F(this,e)}reload(){return K(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new W(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await q(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();return await $(this,L(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,n,i,s,a,o,l,u;let c=null!==(r=t.displayName)&&void 0!==r?r:void 0,h=null!==(n=t.email)&&void 0!==n?n:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,m=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:w,emailVerified:b,isAnonymous:_,providerData:E,stsTokenManager:I}=t;v(w&&I,e,"internal-error");let T=H.fromJSON(this.name,I);v("string"==typeof w,e,"internal-error"),G(c,e.name),G(h,e.name),v("boolean"==typeof b,e,"internal-error"),v("boolean"==typeof _,e,"internal-error"),G(d,e.name),G(f,e.name),G(p,e.name),G(m,e.name),G(g,e.name),G(y,e.name);let S=new W({uid:w,auth:e,email:h,emailVerified:b,displayName:c,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:y});return E&&Array.isArray(E)&&(S.providerData=E.map(e=>Object.assign({},e))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,r=!1){let n=new H;n.updateFromServerResponse(t);let i=new W({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:r});return await q(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Q=new Map;function X(e){e instanceof Function||w("Expected a class definition");let t=Q.get(e);return t?(t instanceof e||w("Instance stored in cache mismatched with class"),t):(t=new e,Q.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(e,t,r){return`firebase:${e}:${t}:${r}`}Y.type="NONE";class ee{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:n,name:i}=this.auth;this.fullUserKey=J(this.userKey,n.apiKey,i),this.fullPersistenceKey=J("persistence",n.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?W._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ee(X(Y),e,r);let n=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),i=n[0]||X(Y),s=J(r,e.config.apiKey,e.name),a=null;for(let r of t)try{let t=await r._get(s);if(t){let n=W._fromJSON(e,t);r!==i&&(a=n),i=r;break}}catch(e){}let o=n.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&o.length&&(i=o[0],a&&await i._set(s,a.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new ee(i,e,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(es(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";{if(t.includes("edge/"))return"Edge";if(er(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(eo(t))return"Blackberry";if(el(t))return"Webos";if(en(t))return"Safari";if((t.includes("chrome/")||ei(t))&&!t.includes("edge/"))return"Chrome";if(ea(t))return"Android";let r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==r?void 0:r.length)===2)return r[1]}return"Other"}function er(e=(0,i.z$)()){return/firefox\//i.test(e)}function en(e=(0,i.z$)()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ei(e=(0,i.z$)()){return/crios\//i.test(e)}function es(e=(0,i.z$)()){return/iemobile/i.test(e)}function ea(e=(0,i.z$)()){return/android/i.test(e)}function eo(e=(0,i.z$)()){return/blackberry/i.test(e)}function el(e=(0,i.z$)()){return/webos/i.test(e)}function eu(e=(0,i.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ec(e=(0,i.z$)()){return eu(e)||ea(e)||el(e)||eo(e)||/windows phone/i.test(e)||es(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(e,t=[]){let r;switch(e){case"Browser":r=et((0,i.z$)());break;case"Worker":r=`${et((0,i.z$)())}-${e}`;break;default:r=e}let n=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${s.Jn}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=t=>new Promise((r,n)=>{try{let n=e(t);r(n)}catch(e){n(e)}});r.onAbort=t,this.queue.push(r);let n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(e){for(let e of(t.reverse(),t))try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ef(e,t={}){return A(e,"GET","/v2/passwordPolicy",C(e,t))}class ep{constructor(e){var t,r,n,i;let s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(n=null===(r=e.allowedNonAlphanumericCharacters)||void 0===r?void 0:r.join(""))&&void 0!==n?n:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,n,i,s,a;let o={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),o.isValid&&(o.isValid=null===(t=o.meetsMinPasswordLength)||void 0===t||t),o.isValid&&(o.isValid=null===(r=o.meetsMaxPasswordLength)||void 0===r||r),o.isValid&&(o.isValid=null===(n=o.containsLowercaseLetter)||void 0===n||n),o.isValid&&(o.isValid=null===(i=o.containsUppercaseLetter)||void 0===i||i),o.isValid&&(o.isValid=null===(s=o.containsNumericCharacter)||void 0===s||s),o.isValid&&(o.isValid=null===(a=o.containsNonAlphanumericCharacter)||void 0===a||a),o}validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),n&&(t.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,t){let r;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let n=0;n<e.length;n++)r=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,n,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e,t,r,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ey(this),this.idTokenSubscription=new ey(this),this.beforeStateQueue=new ed(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=d,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=X(t)),this._initializationPromise=this.queue(async()=>{var r,n;if(!this._deleted&&(this.persistenceManager=await ee.create(this,e),!this._deleted)){if(null===(r=this._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;let r=await this.assertedPersistence.getCurrentUser(),n=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==n?void 0:n._redirectEventId,a=await this.tryRedirectSignIn(e);(!r||r===s)&&(null==a?void 0:a.user)&&(n=a.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return(v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId)?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await q(e)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){let t=e?(0,i.m9)(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(X(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await ef(this),t=new ep(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.LL("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return null===e?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&X(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await ee.create(this,[X(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(r=this.redirectUser)||void 0===r?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,n){if(this._deleted)return()=>{};let i="function"==typeof t?t:t.next.bind(t),s=!1,a=this._isInitialized?Promise.resolve():this._initializationPromise;if(v(a,this,"internal-error"),a.then(()=>{s||i(this.currentUser)}),"function"==typeof t){let i=e.addObserver(t,r,n);return()=>{s=!0,i()}}{let r=e.addObserver(t);return()=>{s=!0,r()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=eh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);let n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"]=n),t}async _getAppCheckToken(){var e;let t=await (null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){f.logLevel<=a.in.WARN&&f.warn(`Auth (${s.Jn}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function eg(e){return(0,i.m9)(e)}class ey{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.ne)(e=>this.observer=e)}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ev(e){return new Promise((t,r)=>{var n,i;let s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=e=>{let t=g("internal-error");t.customData=e,r(t)},s.type="text/javascript",s.charset="UTF-8",(null!==(i=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==i?i:document).appendChild(s)})}function ew(e){return`__${e}${Math.floor(1e6*Math.random())}`}class eb{constructor(e){this.type="recaptcha-enterprise",this.auth=eg(e)}async verify(e="verify",t=!1){async function r(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,r)=>{D(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(n=>{if(void 0===n.recaptchaKey)r(Error("recaptcha Enterprise site key undefined"));else{let r=new c(n);return null==e.tenantId?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,t(r.siteKey)}}).catch(e=>{r(e)})})}function n(t,r,n){let i=window.grecaptcha;u(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{r(e)}).catch(()=>{r("NO_RECAPTCHA")})}):n(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((e,i)=>{r(this.auth).then(r=>{if(!t&&u(window.grecaptcha))n(r,e,i);else{if("undefined"==typeof window){i(Error("RecaptchaVerifier is only supported in browser"));return}ev("https://www.google.com/recaptcha/enterprise.js?render="+r).then(()=>{n(r,e,i)}).catch(e=>{i(e)})}}).catch(e=>{i(e)})})}}async function e_(e,t,r,n=!1){let i;let s=new eb(e);try{i=await s.verify(r)}catch(e){i=await s.verify(r,!0)}let a=Object.assign({},t);return n?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}function eE(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function eI(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return w("not implemented")}_getIdTokenResponse(e){return w("not implemented")}_linkToIdToken(e,t){return w("not implemented")}_getReauthenticationResolver(e){return w("not implemented")}}async function eS(e,t){return A(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ek(e,t){return x(e,"POST","/v1/accounts:signInWithPassword",C(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eC(e,t){return x(e,"POST","/v1/accounts:signInWithEmailLink",C(e,t))}async function eA(e,t){return x(e,"POST","/v1/accounts:signInWithEmailLink",C(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN extends eT{constructor(e,t,r,n=null){super("password",r),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new eN(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new eN(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":let r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t||!t.emailPasswordEnabled)return ek(e,r).catch(async t=>{if("auth/missing-recaptcha-token"!==t.code)return Promise.reject(t);{console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");let t=await e_(e,r,"signInWithPassword");return ek(e,t)}});{let t=await e_(e,r,"signInWithPassword");return ek(e,t)}case"emailLink":return eC(e,{email:this._email,oobCode:this._password});default:m(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return eS(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return eA(e,{idToken:t,email:this._email,oobCode:this._password});default:m(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ex(e,t){return x(e,"POST","/v1/accounts:signInWithIdp",C(e,t))}class eR extends eT{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new eR(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):m("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:r,signInMethod:n}=t,i=o(t,["providerId","signInMethod"]);if(!r||!n)return null;let s=new eR(r,n);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){let t=this.buildRequest();return ex(e,t)}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,ex(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,ex(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,i.xO)(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eO(e,t){return A(e,"POST","/v1/accounts:sendVerificationCode",C(e,t))}async function eP(e,t){return x(e,"POST","/v1/accounts:signInWithPhoneNumber",C(e,t))}async function eD(e,t){let r=await x(e,"POST","/v1/accounts:signInWithPhoneNumber",C(e,t));if(r.temporaryProof)throw P(e,"account-exists-with-different-credential",r);return r}let eL={USER_NOT_FOUND:"user-not-found"};async function eM(e,t){let r=Object.assign(Object.assign({},t),{operation:"REAUTH"});return x(e,"POST","/v1/accounts:signInWithPhoneNumber",C(e,r),eL)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eU extends eT{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new eU({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new eU({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return eP(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return eD(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return eM(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:n}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}=e;return r||t||n||i?new eU({verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}):null}}class eF{constructor(e){var t,r,n,s,a,o;let l=(0,i.zd)((0,i.pd)(e)),u=null!==(t=l.apiKey)&&void 0!==t?t:null,c=null!==(r=l.oobCode)&&void 0!==r?r:null,h=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(n=l.mode)&&void 0!==n?n:null);v(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=null!==(s=l.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(a=l.languageCode)&&void 0!==a?a:null,this.tenantId=null!==(o=l.tenantId)&&void 0!==o?o:null}static parseLink(e){let t=function(e){let t=(0,i.zd)((0,i.pd)(e)).link,r=t?(0,i.zd)((0,i.pd)(t)).deep_link_id:null,n=(0,i.zd)((0,i.pd)(e)).deep_link_id,s=n?(0,i.zd)((0,i.pd)(n)).link:null;return s||n||r||t||e}(e);try{return new eF(t)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV{constructor(){this.providerId=eV.PROVIDER_ID}static credential(e,t){return eN._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=eF.parseLink(t);return v(r,"argument-error"),eN._fromEmailAndCode(e,r.code,r.tenantId)}}eV.PROVIDER_ID="password",eV.EMAIL_PASSWORD_SIGN_IN_METHOD="password",eV.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ej{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e$ extends ej{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eB extends e${constructor(){super("facebook.com")}static credential(e){return eR._fromParams({providerId:eB.PROVIDER_ID,signInMethod:eB.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return eB.credentialFromTaggedObject(e)}static credentialFromError(e){return eB.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return eB.credential(e.oauthAccessToken)}catch(e){return null}}}eB.FACEBOOK_SIGN_IN_METHOD="facebook.com",eB.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ez extends e${constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return eR._fromParams({providerId:ez.PROVIDER_ID,signInMethod:ez.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ez.credentialFromTaggedObject(e)}static credentialFromError(e){return ez.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ez.credential(t,r)}catch(e){return null}}}ez.GOOGLE_SIGN_IN_METHOD="google.com",ez.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eq extends e${constructor(){super("github.com")}static credential(e){return eR._fromParams({providerId:eq.PROVIDER_ID,signInMethod:eq.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return eq.credentialFromTaggedObject(e)}static credentialFromError(e){return eq.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return eq.credential(e.oauthAccessToken)}catch(e){return null}}}eq.GITHUB_SIGN_IN_METHOD="github.com",eq.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eK extends e${constructor(){super("twitter.com")}static credential(e,t){return eR._fromParams({providerId:eK.PROVIDER_ID,signInMethod:eK.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return eK.credentialFromTaggedObject(e)}static credentialFromError(e){return eK.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return eK.credential(t,r)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eZ(e,t){return x(e,"POST","/v1/accounts:signUp",C(e,t))}eK.TWITTER_SIGN_IN_METHOD="twitter.com",eK.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eH{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,n=!1){let i=await W._fromIdTokenResponse(e,r,n),s=eG(r),a=new eH({user:i,providerId:s,_tokenResponse:r,operationType:t});return a}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);let n=eG(r);return new eH({user:e,providerId:n,_tokenResponse:r,operationType:t})}}function eG(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eW extends i.ZR{constructor(e,t,r,n){var i;super(t.code,t.message),this.operationType=r,this.user=n,Object.setPrototypeOf(this,eW.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,n){return new eW(e,t,r,n)}}function eQ(e,t,r,n){let i="reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e);return i.catch(r=>{if("auth/multi-factor-auth-required"===r.code)throw eW._fromErrorAndOperation(e,r,t,n);throw r})}async function eX(e,t,r=!1){let n=await $(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return eH._forOperation(e,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eY(e,t,r=!1){let{auth:n}=e,i="reauthenticate";try{let s=await $(e,eQ(n,i,t,e),r);v(s.idToken,n,"internal-error");let a=j(s.idToken);v(a,n,"internal-error");let{sub:o}=a;return v(e.uid===o,n,"user-mismatch"),eH._forOperation(e,i,s)}catch(e){throw(null==e?void 0:e.code)==="auth/user-not-found"&&m(n,"user-mismatch"),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eJ(e,t,r=!1){let n="signIn",i=await eQ(e,n,t),s=await eH._fromIdTokenResponse(e,n,i);return r||await e._updateCurrentUser(s.user),s}async function e0(e,t){return eJ(eg(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e1(e){let t=eg(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function e2(e,t,r){var n;let i;let s=eg(e),a={returnSecureToken:!0,email:t,password:r,clientType:"CLIENT_TYPE_WEB"};if(null===(n=s._getRecaptchaConfig())||void 0===n?void 0:n.emailPasswordEnabled){let e=await e_(s,a,"signUpPassword");i=eZ(s,e)}else i=eZ(s,a).catch(async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");let e=await e_(s,a,"signUpPassword");return eZ(s,e)}throw e});let o=await i.catch(t=>{throw"auth/password-does-not-meet-requirements"===t.code&&e1(e),t}),l=await eH._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(l.user),l}function e4(e,t,r){return e0((0,i.m9)(e),eV.credential(t,r)).catch(async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&e1(e),t})}function e9(e,t,r,n){return(0,i.m9)(e).onAuthStateChanged(t,r,n)}function e5(e){return(0,i.m9)(e).signOut()}new WeakMap;let e6="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e3{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(e6,"1"),this.storage.removeItem(e6),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class e7 extends e3{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(){let e=(0,i.z$)();return en(e)||eu(e)}()&&function(){try{return!!(window&&window!==window.top)}catch(e){return!1}}(),this.fallbackToPolling=ec(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),n=this.localCache[t];r!==n&&e(t,n,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,r)=>{this.notifyListeners(e,r)});return}let r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let n=this.storage.getItem(r);if(e.newValue!==n)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}let n=()=>{let e=this.storage.getItem(r);(t||this.localCache[r]!==e)&&this.notifyListeners(r,e)},s=this.storage.getItem(r);(0,i.w1)()&&10===document.documentMode&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,10):n()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let e of Array.from(r))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}e7.type="LOCAL";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e8 extends e3{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}e8.type="SESSION";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let r=new te(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let{eventId:t,eventType:r,data:n}=e.data,i=this.handlersMap[r];if(!(null==i?void 0:i.size))return;e.ports[0].postMessage({status:"ack",eventId:t,eventType:r});let s=Array.from(i).map(async t=>t(e.origin,n)),a=await Promise.all(s.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done",eventId:t,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(e="",t=10){let r="";for(let e=0;e<t;e++)r+=Math.floor(10*Math.random());return e+r}te.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let n,i;let s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw Error("connection_unavailable");return new Promise((a,o)=>{let l=tt("",20);s.port1.start();let u=setTimeout(()=>{o(Error("unsupported_event"))},r);i={messageChannel:s,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(u),n=setTimeout(()=>{o(Error("timeout"))},3e3);break;case"done":clearTimeout(n),a(e.data.response);break;default:clearTimeout(u),clearTimeout(n),o(Error("invalid_response"))}}},this.handlers.add(i),s.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(){return void 0!==tn().WorkerGlobalScope&&"function"==typeof tn().importScripts}async function ts(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ta="firebaseLocalStorageDb",to="firebaseLocalStorage",tl="fbase_key";class tu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function tc(e,t){return e.transaction([to],t?"readwrite":"readonly").objectStore(to)}function th(){let e=indexedDB.open(ta,1);return new Promise((t,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(to,{keyPath:tl})}catch(e){r(e)}}),e.addEventListener("success",async()=>{let r=e.result;r.objectStoreNames.contains(to)?t(r):(r.close(),await function(){let e=indexedDB.deleteDatabase(ta);return new tu(e).toPromise()}(),t(await th()))})})}async function td(e,t,r){let n=tc(e,!0).put({[tl]:t,value:r});return new tu(n).toPromise()}async function tf(e,t){let r=tc(e,!1).get(t),n=await new tu(r).toPromise();return void 0===n?null:n.value}function tp(e,t){let r=tc(e,!0).delete(t);return new tu(r).toPromise()}class tm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await th()),this.db}async _withRetries(e){let t=0;for(;;)try{let t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ti()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=te._getInstance(ti()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>{let r=await this._poll();return{keyProcessed:r.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ts(),!this.activeServiceWorker)return;this.sender=new tr(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&(null===(e=r[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=r[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await th();return await td(e,e6,"1"),await tp(e,e6),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>td(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>tf(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>tp(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>{let t=tc(e,!1).getAll();return new tu(t).toPromise()});if(!e||0!==this.pendingWrites)return[];let t=[],r=new Set;for(let{fbase_key:n,value:i}of e)r.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(i)&&(this.notifyListeners(n,i),t.push(n));for(let e of Object.keys(this.localCache))this.localCache[e]&&!r.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let e of Array.from(r))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}async function tg(e,t,r){var n,i,s;let a=await r.verify();try{let o;if(v("string"==typeof a,e,"argument-error"),v("recaptcha"===r.type,e,"argument-error"),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){let t=o.session;if("phoneNumber"in o){v("enroll"===t.type,e,"internal-error");let r=await (i={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:a}},A(e,"POST","/v2/accounts/mfaEnrollment:start",C(e,i)));return r.phoneSessionInfo.sessionInfo}{v("signin"===t.type,e,"internal-error");let r=(null===(n=o.multiFactorHint)||void 0===n?void 0:n.uid)||o.multiFactorUid;v(r,e,"missing-multi-factor-info");let i=await (s={mfaPendingCredential:t.credential,mfaEnrollmentId:r,phoneSignInInfo:{recaptchaToken:a}},A(e,"POST","/v2/accounts/mfaSignIn:start",C(e,s)));return i.phoneResponseInfo.sessionInfo}}{let{sessionInfo:t}=await eO(e,{phoneNumber:o.phoneNumber,recaptchaToken:a});return t}}finally{r._reset()}}tm.type="LOCAL",ew("rcb"),new E(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e){this.providerId=ty.PROVIDER_ID,this.auth=eg(e)}verifyPhoneNumber(e,t){return tg(this.auth,e,(0,i.m9)(t))}static credential(e,t){return eU._fromVerification(e,t)}static credentialFromResult(e){return ty.credentialFromTaggedObject(e)}static credentialFromError(e){return ty.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?eU._fromTokenResponse(t,r):null}}ty.PROVIDER_ID="phone",ty.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv extends eT{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ex(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ex(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ex(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function tw(e){return eJ(e.auth,new tv(e),e.bypassAuthState)}function tb(e){let{auth:t,user:r}=e;return v(r,t,"internal-error"),eY(r,new tv(e),e.bypassAuthState)}async function t_(e){let{auth:t,user:r}=e;return v(r,t,"internal-error"),eX(r,new tv(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e,t,r,n,i=!1){this.auth=e,this.resolver=r,this.user=n,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:n,tenantId:i,error:s,type:a}=e;if(s){this.reject(s);return}let o={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tw;case"linkViaPopup":case"linkViaRedirect":return t_;case"reauthViaPopup":case"reauthViaRedirect":return tb;default:m(this.auth,"internal-error")}}resolve(e){this.pendingPromise||w("Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){this.pendingPromise||w("Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tI=new E(2e3,1e4);class tT extends tE{constructor(e,t,r,n,i){super(e,t,n,i),this.provider=r,this.authWindow=null,this.pollId=null,tT.currentPopupAction&&tT.currentPopupAction.cancel(),tT.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){1===this.filter.length||w("Popup operations only handle one event");let e=tt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(g(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tT.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(null===(r=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===r?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tI.get())};e()}}tT.currentPopupAction=null;let tS=new Map;class tk extends tE{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=tS.get(this.auth._key());if(!e){try{let t=await tC(this.resolver,this.auth),r=t?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}tS.set(this.auth._key(),e)}return this.bypassAuthState||tS.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tC(e,t){let r=J("pendingRedirect",t.config.apiKey,t.name),n=X(e._redirectPersistence);if(!await n._isAvailable())return!1;let i=await n._get(r)==="true";return await n._remove(r),i}function tA(e,t){tS.set(e._key(),t)}async function tN(e,t,r=!1){let n=eg(e),i=t?X(t):(v(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver),s=new tk(n,i,r),a=await s.execute();return a&&!r&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,t)),a}class tx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tO(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!tO(e)){let n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(g(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(tR(e))}saveEventToCache(e){this.cachedEventUids.add(tR(e)),this.lastProcessedEventTime=Date.now()}}function tR(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function tO({type:e,error:t}){return"unknown"===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tP(e,t={}){return A(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tL=/^https?/;async function tM(e){if(e.config.emulator)return;let{authorizedDomains:t}=await tP(e);for(let e of t)try{if(function(e){let t=b(),{protocol:r,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){let i=new URL(e);return""===i.hostname&&""===n?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&i.hostname===n}if(!tL.test(r))return!1;if(tD.test(e))return n===e;let i=e.replace(/\./g,"\\."),s=RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(n)}(e))return}catch(e){}m(e,"unauthorized-domain")}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tU=new E(3e4,6e4);function tF(){let e=tn().___jsl;if(null==e?void 0:e.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}let tV=null,tj=new E(5e3,15e3),t$={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tB=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function tz(e){let t=await (tV=tV||new Promise((t,r)=>{var n,i,s;function a(){tF(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{tF(),r(g(e,"network-request-failed"))},timeout:tU.get()})}if(null===(i=null===(n=tn().gapi)||void 0===n?void 0:n.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else if(null===(s=tn().gapi)||void 0===s?void 0:s.load)a();else{let t=ew("iframefcb");return tn()[t]=()=>{gapi.load?a():r(g(e,"network-request-failed"))},ev(`https://apis.google.com/js/api.js?onload=${t}`).catch(e=>r(e))}}).catch(e=>{throw tV=null,e})),r=tn().gapi;return v(r,e,"internal-error"),t.open({where:document.body,url:function(e){let t=e.config;v(t.authDomain,e,"auth-domain-config-required");let r=t.emulator?I(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:s.Jn},a=tB.get(e.config.apiHost);a&&(n.eid=a);let o=e._getFrameworks();return o.length&&(n.fw=o.join(",")),`${r}?${(0,i.xO)(n).slice(1)}`}(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:t$,dontclear:!0},t=>new Promise(async(r,n)=>{await t.restyle({setHideOnLeave:!1});let i=g(e,"network-request-failed"),s=tn().setTimeout(()=>{n(i)},tj.get());function a(){tn().clearTimeout(s),r(t)}t.ping(a).then(a,()=>{n(i)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tq={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class tK{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}let tZ=encodeURIComponent("fac");async function tH(e,t,r,n,a,o){v(e.config.authDomain,e,"auth-domain-config-required"),v(e.config.apiKey,e,"invalid-api-key");let l={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:n,v:s.Jn,eventId:a};if(t instanceof ej)for(let[r,n]of(t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,i.xb)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(o||{})))l[r]=n;if(t instanceof e$){let e=t.getScopes().filter(e=>""!==e);e.length>0&&(l.scopes=e.join(","))}for(let t of(e.tenantId&&(l.tid=e.tenantId),Object.keys(l)))void 0===l[t]&&delete l[t];let u=await e._getAppCheckToken(),c=u?`#${tZ}=${encodeURIComponent(u)}`:"";return`${function({config:e}){return e.emulator?I(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${(0,i.xO)(l).slice(1)}${c}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tG="webStorageSupport",tW=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=e8,this._completeRedirectFn=tN,this._overrideRedirectResult=tA}async _openPopup(e,t,r,n){var s;(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager)||w("_initialize() not called before _openPopup()");let a=await tH(e,t,r,b(),n);return function(e,t,r,n=500,s=600){let a=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString(),l="",u=Object.assign(Object.assign({},tq),{width:n.toString(),height:s.toString(),top:a,left:o}),c=(0,i.z$)().toLowerCase();r&&(l=ei(c)?"_blank":r),er(c)&&(t=t||"http://localhost",u.scrollbars="yes");let h=Object.entries(u).reduce((e,[t,r])=>`${e}${t}=${r},`,"");if(function(e=(0,i.z$)()){var t;return eu(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==l)return function(e,t){let r=document.createElement("a");r.href=e,r.target=t;let n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}(t||"",l),new tK(null);let d=window.open(t||"",l,h);v(d,e,"popup-blocked");try{d.focus()}catch(e){}return new tK(d)}(e,a,tt())}async _openRedirect(e,t,r,n){await this._originValidation(e);let i=await tH(e,t,r,b(),n);return tn().location.href=i,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:e,promise:r}=this.eventManagers[t];return e?Promise.resolve(e):(r||w("If manager is not set, promise should be"),r)}let r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){let t=await tz(e),r=new tx(e);return t.register("authEvent",t=>{v(null==t?void 0:t.authEvent,e,"invalid-auth-event");let n=r.onEvent(t.authEvent);return{status:n?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){let r=this.iframes[e._key()];r.send(tG,{type:tG},r=>{var n;let i=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n[tG];void 0!==i&&t(!!i),m(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tM(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ec()||en()||eu()}};class tQ{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return w("unexpected MultiFactorSessionType")}}}class tX extends tQ{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new tX(e)}_finalizeEnroll(e,t,r){return A(e,"POST","/v2/accounts/mfaEnrollment:finalize",C(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(e,t){return A(e,"POST","/v2/accounts/mfaSignIn:finalize",C(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class tY extends tQ{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new tY(t,void 0,e)}static _fromEnrollmentId(e,t){return new tY(t,e)}async _finalizeEnroll(e,t,r){return v(void 0!==this.secret,e,"argument-error"),A(e,"POST","/v2/accounts/mfaEnrollment:finalize",C(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}async _finalizeSignIn(e,t){v(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");let r={verificationCode:this.otp};return A(e,"POST","/v2/accounts/mfaSignIn:finalize",C(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r}))}}class tJ{constructor(e,t,r,n,i,s,a){this.sessionInfo=s,this.auth=a,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=n,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new tJ(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let n=!1;return(t0(e)||t0(t))&&(n=!0),n&&(t0(e)&&(e=(null===(r=this.auth.currentUser)||void 0===r?void 0:r.email)||"unknownuser"),t0(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function t0(e){return void 0===e||(null==e?void 0:e.length)===0}var t1="@firebase/auth",t2="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}let t9=(0,i.Pz)("authIdTokenMaxAge")||300,t5=null,t6=e=>async t=>{let r=t&&await t.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>t9)return;let i=null==r?void 0:r.token;t5!==i&&(t5=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function t3(e=(0,s.Mq)()){let t=(0,s.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){let r=(0,s.qX)(e,"auth");if(r.isInitialized()){let e=r.getImmediate(),n=r.getOptions();if((0,i.vZ)(n,null!=t?t:{}))return e;m(e,"already-initialized")}let n=r.initialize({options:t});return n}(e,{popupRedirectResolver:tW,persistence:[tm,e7,e8]}),n=(0,i.Pz)("authTokenSyncURL");if(n){let e=t6(n);(0,i.m9)(r).beforeAuthStateChanged(e,()=>e(r.currentUser)),(0,i.m9)(r).onIdTokenChanged(t=>e(t),void 0,void 0)}let a=(0,i.q4)("auth");return a&&function(e,t,r){let n=eg(e);v(n._canInitEmulator,n,"emulator-config-failed"),v(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");let i=!!(null==r?void 0:r.disableWarnings),s=eE(t),{host:a,port:o}=function(e){let t=eE(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};let n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){let e=i[1];return{host:e,port:eI(n.substr(e.length+1))}}{let[e,t]=n.split(":");return{host:e,port:eI(t)}}}(t),l=null===o?"":`:${o}`;n.config.emulator={url:`${s}//${a}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(r,`http://${a}`),r}n="Browser",(0,s.Xd)(new l.wA("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=r.options;v(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});let l={apiKey:a,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:eh(n)},u=new em(r,i,s,l);return function(e,t){let r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(X);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{let n=e.getProvider("auth-internal");n.initialize()})),(0,s.Xd)(new l.wA("auth-internal",e=>{let t=eg(e.getProvider("auth").getImmediate());return new t4(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.KN)(t1,t2,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(n)),(0,s.KN)(t1,t2,"esm2017")},36100:function(e,t,r){"use strict";r.d(t,{EK:function(){return nh},ET:function(){return lq},vr:function(){return lH},hJ:function(){return oQ},oe:function(){return lz},JU:function(){return oX},QT:function(){return lF},PL:function(){return lj},ad:function(){return o0},Xo:function(){return lC},IO:function(){return lE},Bt:function(){return lZ},pl:function(){return l$},r7:function(){return lB},ar:function(){return lT}});var n,i,s,a,o,l,u,c=r(47456),h=r(8463),d=r(53333),f=r(74444),p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},m={},g=g||{},y=p||self;function v(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function w(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function b(e,t,r){return e.call.apply(e.bind,arguments)}function _(e,t,r){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,n),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function E(e,t,r){return(E=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?b:_).apply(null,arguments)}function I(e,t){var r=Array.prototype.slice.call(arguments,1);return function(){var t=r.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function T(e,t){function r(){}r.prototype=t.prototype,e.$=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.ac=function(e,r,n){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[r].apply(e,i)}}function S(){this.s=this.s,this.o=this.o}S.prototype.s=!1,S.prototype.sa=function(){this.s||(this.s=!0,this.N())},S.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};let k=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let r=0;r<e.length;r++)if(r in e&&e[r]===t)return r;return -1};function C(e){let t=e.length;if(0<t){let r=Array(t);for(let n=0;n<t;n++)r[n]=e[n];return r}return[]}function A(e,t){for(let t=1;t<arguments.length;t++){let r=arguments[t];if(v(r)){let t=e.length||0,n=r.length||0;e.length=t+n;for(let i=0;i<n;i++)e[t+i]=r[i]}else e.push(r)}}function N(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var x=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{y.addEventListener("test",()=>{},t),y.removeEventListener("test",()=>{},t)}catch(e){}return e}();function R(e){return/^[\s\xa0]*$/.test(e)}function O(){var e=y.navigator;return e&&(e=e.userAgent)?e:""}function P(e){return -1!=O().indexOf(e)}function D(e){return D[" "](e),e}D[" "]=function(){};var L=P("Opera"),M=P("Trident")||P("MSIE"),U=P("Edge"),F=U||M,V=P("Gecko")&&!(-1!=O().toLowerCase().indexOf("webkit")&&!P("Edge"))&&!(P("Trident")||P("MSIE"))&&!P("Edge"),j=-1!=O().toLowerCase().indexOf("webkit")&&!P("Edge");function $(){var e=y.document;return e?e.documentMode:void 0}e:{var B,z="",q=(B=O(),V?/rv:([^\);]+)(\)|;)/.exec(B):U?/Edge\/([\d\.]+)/.exec(B):M?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(B):j?/WebKit\/(\S+)/.exec(B):L?/(?:Version)[ \/]?(\S+)/.exec(B):void 0);if(q&&(z=q?q[1]:""),M){var K=$();if(null!=K&&K>parseFloat(z)){i=String(K);break e}}i=z}var Z=y.document&&M&&($()||parseInt(i,10))||void 0;function H(e,t){if(N.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var r=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(V){e:{try{D(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==r?t=e.fromElement:"mouseout"==r&&(t=e.toElement);this.relatedTarget=t,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:G[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&H.$.h.call(this)}}T(H,N);var G={2:"touch",3:"pen",4:"mouse"};H.prototype.h=function(){H.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var W="closure_listenable_"+(1e6*Math.random()|0),Q=0;function X(e,t,r,n,i){this.listener=e,this.proxy=null,this.src=t,this.type=r,this.capture=!!n,this.la=i,this.key=++Q,this.fa=this.ia=!1}function Y(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function J(e,t,r){for(let n in e)t.call(r,e[n],n,e)}function ee(e){let t={};for(let r in e)t[r]=e[r];return t}let et="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function er(e,t){let r,n;for(let t=1;t<arguments.length;t++){for(r in n=arguments[t])e[r]=n[r];for(let t=0;t<et.length;t++)r=et[t],Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}}function en(e){this.src=e,this.g={},this.h=0}function ei(e,t){var r=t.type;if(r in e.g){var n,i=e.g[r],s=k(i,t);(n=0<=s)&&Array.prototype.splice.call(i,s,1),n&&(Y(t),0==e.g[r].length&&(delete e.g[r],e.h--))}}function es(e,t,r,n){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&!!r==s.capture&&s.la==n)return i}return -1}en.prototype.add=function(e,t,r,n,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var a=es(e,t,n,i);return -1<a?(t=e[a],r||(t.ia=!1)):((t=new X(t,this.src,s,!!n,i)).ia=r,e.push(t)),t};var ea="closure_lm_"+(1e6*Math.random()|0),eo={};function el(e,t,r,n,i,s){if(!t)throw Error("Invalid event type");var a=w(i)?!!i.capture:!!i,o=ed(e);if(o||(e[ea]=o=new en(e)),(r=o.add(t,r,n,a,s)).proxy)return r;if(n=function e(t){return eh.call(e.src,e.listener,t)},r.proxy=n,n.src=e,n.listener=r,e.addEventListener)x||(i=a),void 0===i&&(i=!1),e.addEventListener(t.toString(),n,i);else if(e.attachEvent)e.attachEvent(ec(t.toString()),n);else if(e.addListener&&e.removeListener)e.addListener(n);else throw Error("addEventListener and attachEvent are unavailable.");return r}function eu(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[W])ei(t.i,e);else{var r=e.type,n=e.proxy;t.removeEventListener?t.removeEventListener(r,n,e.capture):t.detachEvent?t.detachEvent(ec(r),n):t.addListener&&t.removeListener&&t.removeListener(n),(r=ed(t))?(ei(r,e),0==r.h&&(r.src=null,t[ea]=null)):Y(e)}}}function ec(e){return e in eo?eo[e]:eo[e]="on"+e}function eh(e,t){if(e.fa)e=!0;else{t=new H(t,this);var r=e.listener,n=e.la||e.src;e.ia&&eu(e),e=r.call(n,t)}return e}function ed(e){return(e=e[ea])instanceof en?e:null}var ef="__closure_events_fn_"+(1e9*Math.random()>>>0);function ep(e){return"function"==typeof e?e:(e[ef]||(e[ef]=function(t){return e.handleEvent(t)}),e[ef])}function em(){S.call(this),this.i=new en(this),this.S=this,this.J=null}function eg(e,t){var r,n=e.J;if(n)for(r=[];n;n=n.J)r.push(n);if(e=e.S,n=t.type||t,"string"==typeof t)t=new N(t,e);else if(t instanceof N)t.target=t.target||e;else{var i=t;er(t=new N(n,e),i)}if(i=!0,r)for(var s=r.length-1;0<=s;s--){var a=t.g=r[s];i=ey(a,n,!0,t)&&i}if(i=ey(a=t.g=e,n,!0,t)&&i,i=ey(a,n,!1,t)&&i,r)for(s=0;s<r.length;s++)i=ey(a=t.g=r[s],n,!1,t)&&i}function ey(e,t,r,n){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var a=t[s];if(a&&!a.fa&&a.capture==r){var o=a.listener,l=a.la||a.src;a.ia&&ei(e.i,a),i=!1!==o.call(l,n)&&i}}return i&&!n.defaultPrevented}T(em,S),em.prototype[W]=!0,em.prototype.removeEventListener=function(e,t,r,n){!function e(t,r,n,i,s){if(Array.isArray(r))for(var a=0;a<r.length;a++)e(t,r[a],n,i,s);else(i=w(i)?!!i.capture:!!i,n=ep(n),t&&t[W])?(t=t.i,(r=String(r).toString())in t.g&&-1<(n=es(a=t.g[r],n,i,s))&&(Y(a[n]),Array.prototype.splice.call(a,n,1),0==a.length&&(delete t.g[r],t.h--))):t&&(t=ed(t))&&(r=t.g[r.toString()],t=-1,r&&(t=es(r,n,i,s)),(n=-1<t?r[t]:null)&&eu(n))}(this,e,t,r,n)},em.prototype.N=function(){if(em.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var r=t.g[e],n=0;n<r.length;n++)Y(r[n]);delete t.g[e],t.h--}}this.J=null},em.prototype.O=function(e,t,r,n){return this.i.add(String(e),t,!1,r,n)},em.prototype.P=function(e,t,r,n){return this.i.add(String(e),t,!0,r,n)};var ev=y.JSON.stringify,ew=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new eb,e=>e.reset());class eb{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let e_,eE=!1,eI=new class{constructor(){this.h=this.g=null}add(e,t){let r=ew.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}},eT=()=>{let e=y.Promise.resolve(void 0);e_=()=>{e.then(eS)}};var eS=()=>{let e;for(var t;e=null,eI.g&&(e=eI.g,eI.g=eI.g.next,eI.g||(eI.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){y.setTimeout(()=>{throw e},0)}(e)}ew.j(t),100>ew.h&&(ew.h++,t.next=ew.g,ew.g=t)}eE=!1};function ek(e,t){em.call(this),this.h=e||1,this.g=t||y,this.j=E(this.qb,this),this.l=Date.now()}function eC(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function eA(e,t,r){if("function"==typeof e)r&&(e=E(e,r));else if(e&&"function"==typeof e.handleEvent)e=E(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:y.setTimeout(e,t||0)}T(ek,em),(u=ek.prototype).ga=!1,u.T=null,u.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),eg(this,"tick"),this.ga&&(eC(this),this.start()))}},u.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},u.N=function(){ek.$.N.call(this),eC(this),delete this.g};class eN extends S{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=eA(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);let r=t.h;t.h=null,t.m.apply(null,r)}(this)}N(){super.N(),this.g&&(y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ex(e){S.call(this),this.h=e,this.g={}}T(ex,S);var eR=[];function eO(e,t,r,n){Array.isArray(r)||(r&&(eR[0]=r.toString()),r=eR);for(var i=0;i<r.length;i++){var s=function e(t,r,n,i,s){if(i&&i.once)return function e(t,r,n,i,s){if(Array.isArray(r)){for(var a=0;a<r.length;a++)e(t,r[a],n,i,s);return null}return n=ep(n),t&&t[W]?t.P(r,n,w(i)?!!i.capture:!!i,s):el(t,r,n,!0,i,s)}(t,r,n,i,s);if(Array.isArray(r)){for(var a=0;a<r.length;a++)e(t,r[a],n,i,s);return null}return n=ep(n),t&&t[W]?t.O(r,n,w(i)?!!i.capture:!!i,s):el(t,r,n,!1,i,s)}(t,r[i],n||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function eP(e){J(e.g,function(e,t){this.g.hasOwnProperty(t)&&eu(e)},e),e.g={}}function eD(){this.g=!0}function eL(e,t,r,n){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var r=JSON.parse(t);if(r){for(e=0;e<r.length;e++)if(Array.isArray(r[e])){var n=r[e];if(!(2>n.length)){var i=n[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<i.length;a++)i[a]=""}}}}return ev(r)}catch(e){return t}}(e,r)+(n?" "+n:"")})}ex.prototype.N=function(){ex.$.N.call(this),eP(this)},ex.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},eD.prototype.Ea=function(){this.g=!1},eD.prototype.info=function(){};var eM={},eU=null;function eF(){return eU=eU||new em}function eV(e){N.call(this,eM.Ta,e)}function ej(e){let t=eF();eg(t,new eV(t))}function e$(e,t){N.call(this,eM.STAT_EVENT,e),this.stat=t}function eB(e){let t=eF();eg(t,new e$(t,e))}function ez(e,t){N.call(this,eM.Ua,e),this.size=t}function eq(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return y.setTimeout(function(){e()},t)}eM.Ta="serverreachability",T(eV,N),eM.STAT_EVENT="statevent",T(e$,N),eM.Ua="timingevent",T(ez,N);var eK={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},eZ={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function eH(){}function eG(e){return e.h||(e.h=e.i())}function eW(){}eH.prototype.h=null;var eQ={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function eX(){N.call(this,"d")}function eY(){N.call(this,"c")}function eJ(){}function e0(e,t,r,n){this.l=e,this.j=t,this.m=r,this.W=n||1,this.U=new ex(this),this.P=e2,e=F?125:void 0,this.V=new ek(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new e1}function e1(){this.i=null,this.g="",this.h=!1}T(eX,N),T(eY,N),T(eJ,eH),eJ.prototype.g=function(){return new XMLHttpRequest},eJ.prototype.i=function(){return{}},a=new eJ;var e2=45e3,e4={},e9={};function e5(e,t,r){e.L=1,e.v=tf(tl(t)),e.s=r,e.S=!0,e6(e,null)}function e6(e,t){e.G=Date.now(),e8(e),e.A=tl(e.v);var r=e.A,n=e.W;Array.isArray(n)||(n=[String(n)]),tk(r.i,"t",n),e.C=0,r=e.l.J,e.h=new e1,e.g=rm(e.l,r?t:null,!e.s),0<e.O&&(e.M=new eN(E(e.Pa,e,e.g),e.O)),eO(e.U,e.g,"readystatechange",e.nb),t=e.I?ee(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),ej(),function(e,t,r,n,i,s){e.info(function(){if(e.g){if(s)for(var a="",o=s.split("&"),l=0;l<o.length;l++){var u=o[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");a=2<=h.length&&"type"==h[1]?a+(c+"=")+u+"&":a+(c+"=redacted&")}}else a=null}else a=s;return"XMLHTTP REQ ("+n+") [attempt "+i+"]: "+t+"\n"+r+"\n"+a})}(e.j,e.u,e.A,e.m,e.W,e.s)}function e3(e){return!!e.g&&"GET"==e.u&&2!=e.L&&e.l.Ha}function e7(e,t,r){let n=!0,i;for(;!e.J&&e.C<r.length;)if((i=function(e,t){var r=e.C,n=t.indexOf("\n",r);return -1==n?e9:isNaN(r=Number(t.substring(r,n)))?e4:(n+=1)+r>t.length?e9:(t=t.slice(n,n+r),e.C=n+r,t)}(e,r))==e9){4==t&&(e.o=4,eB(14),n=!1),eL(e.j,e.m,null,"[Incomplete Response]");break}else if(i==e4){e.o=4,eB(15),eL(e.j,e.m,r,"[Invalid Chunk]"),n=!1;break}else eL(e.j,e.m,i,null),ti(e,i);e3(e)&&i!=e9&&i!=e4&&(e.h.g="",e.C=0),4!=t||0!=r.length||e.h.h||(e.o=1,eB(16),n=!1),e.i=e.i&&n,n?0<r.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+r.length),ro(t),t.M=!0,eB(11))):(eL(e.j,e.m,r,"[Invalid Chunked Response]"),tn(e),tr(e))}function e8(e){e.Y=Date.now()+e.P,te(e,e.P)}function te(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=eq(E(e.lb,e),t)}function tt(e){e.B&&(y.clearTimeout(e.B),e.B=null)}function tr(e){0==e.l.H||e.J||rc(e.l,e)}function tn(e){tt(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,eC(e.V),eP(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function ti(e,t){try{var r=e.l;if(0!=r.H&&(r.g==e||tP(r.i,e))){if(!e.K&&tP(r.i,e)&&3==r.H){try{var n=r.Ja.g.parse(t)}catch(e){n=null}if(Array.isArray(n)&&3==n.length){var i=n;if(0==i[0]){e:if(!r.u){if(r.g){if(r.g.G+3e3<e.G)ru(r),t8(r);else break e}ra(r),eB(18)}}else r.Fa=i[1],0<r.Fa-r.V&&37500>i[2]&&r.G&&0==r.A&&!r.v&&(r.v=eq(E(r.ib,r),6e3));if(1>=tO(r.i)&&r.oa){try{r.oa()}catch(e){}r.oa=void 0}}else rd(r,11)}else if((e.K||r.g==e)&&ru(r),!R(t))for(i=r.Ja.g.parse(t),t=0;t<i.length;t++){let o=i[t];if(r.V=o[0],o=o[1],2==r.H){if("c"==o[0]){r.K=o[1],r.pa=o[2];let t=o[3];null!=t&&(r.ra=t,r.l.info("VER="+r.ra));let i=o[4];null!=i&&(r.Ga=i,r.l.info("SVER="+r.Ga));let l=o[5];null!=l&&"number"==typeof l&&0<l&&(n=1.5*l,r.L=n,r.l.info("backChannelRequestTimeoutMs_="+n)),n=r;let u=e.g;if(u){let e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=n.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(tD(s,s.h),s.h=null))}if(n.F){let e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(n.Da=e,td(n.I,n.F,e))}}if(r.H=3,r.h&&r.h.Ba(),r.ca&&(r.S=Date.now()-e.G,r.l.info("Handshake RTT: "+r.S+"ms")),(n=r).wa=rp(n,n.J?n.pa:null,n.Y),e.K){tL(n.i,e);var a=n.L;a&&e.setTimeout(a),e.B&&(tt(e),e8(e)),n.g=e}else rs(n);0<r.j.length&&rt(r)}else"stop"!=o[0]&&"close"!=o[0]||rd(r,7)}else 3==r.H&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?rd(r,7):t7(r):"noop"!=o[0]&&r.h&&r.h.Aa(o),r.A=0)}}ej(4)}catch(e){}}function ts(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(v(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var r=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(v(e)||"string"==typeof e){var t=[];e=e.length;for(var r=0;r<e;r++)t.push(r);return t}for(let n in t=[],r=0,e)t[r++]=n;return t}}}(e),n=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(v(e)){for(var t=[],r=e.length,n=0;n<r;n++)t.push(e[n]);return t}for(n in t=[],r=0,e)t[r++]=e[n];return t}(e),i=n.length,s=0;s<i;s++)t.call(void 0,n[s],r&&r[s],e)}(u=e0.prototype).setTimeout=function(e){this.P=e},u.nb=function(e){e=e.target;let t=this.M;t&&3==t2(e)?t.l():this.Pa(e)},u.Pa=function(e){try{if(e==this.g)e:{let c=t2(this.g);var t=this.g.Ia();let h=this.g.da();if(!(3>c)&&(3!=c||F||this.g&&(this.h.h||this.g.ja()||t4(this.g)))){this.J||4!=c||7==t||(8==t||0>=h?ej(3):ej(2)),tt(this);var r=this.g.da();this.ca=r;t:if(e3(this)){var n=t4(this.g);e="";var i=n.length,s=4==t2(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){tn(this),tr(this);var a="";break t}this.h.i=new y.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(n[t],{stream:s&&t==i-1});n.splice(0,i),this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.ja();if(this.i=200==r,function(e,t,r,n,i,s,a){e.info(function(){return"XMLHTTP RESP ("+n+") [ attempt "+i+"]: "+t+"\n"+r+"\n"+s+" "+a})}(this.j,this.u,this.A,this.m,this.W,c,r),this.i){if(this.aa&&!this.K){t:{if(this.g){var o,l=this.g;if((o=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(o)){var u=o;break t}}u=null}if(r=u)eL(this.j,this.m,r,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ti(this,r);else{this.i=!1,this.o=3,eB(12),tn(this),tr(this);break e}}this.S?(e7(this,c,a),F&&this.i&&3==c&&(eO(this.U,this.V,"tick",this.mb),this.V.start())):(eL(this.j,this.m,a,null),ti(this,a)),4==c&&tn(this),this.i&&!this.J&&(4==c?rc(this.l,this):(this.i=!1,e8(this)))}else(function(e){let t={};e=(e.g&&2<=t2(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let n=0;n<e.length;n++){if(R(e[n]))continue;var r=function(e){var t=1;e=e.split(":");let r=[];for(;0<t&&e.length;)r.push(e.shift()),t--;return e.length&&r.push(e.join(":")),r}(e[n]);let i=r[0];if("string"!=typeof(r=r[1]))continue;r=r.trim();let s=t[i]||[];t[i]=s,s.push(r)}!function(e,t){for(let r in e)t.call(void 0,e[r],r,e)}(t,function(e){return e.join(", ")})})(this.g),400==r&&0<a.indexOf("Unknown SID")?(this.o=3,eB(12)):(this.o=0,eB(13)),tn(this),tr(this)}}}catch(e){}finally{}},u.mb=function(){if(this.g){var e=t2(this.g),t=this.g.ja();this.C<t.length&&(tt(this),e7(this,e,t),this.i&&4!=e&&e8(this))}},u.cancel=function(){this.J=!0,tn(this)},u.lb=function(){this.B=null;let e=Date.now();0<=e-this.Y?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.j,this.A),2!=this.L&&(ej(),eB(17)),tn(this),this.o=2,tr(this)):te(this,this.Y-e)};var ta=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function to(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof to){this.h=e.h,tu(this,e.j),this.s=e.s,this.g=e.g,tc(this,e.m),this.l=e.l;var t=e.i,r=new tE;r.i=t.i,t.g&&(r.g=new Map(t.g),r.h=t.h),th(this,r),this.o=e.o}else e&&(t=String(e).match(ta))?(this.h=!1,tu(this,t[1]||"",!0),this.s=tp(t[2]||""),this.g=tp(t[3]||"",!0),tc(this,t[4]),this.l=tp(t[5]||"",!0),th(this,t[6]||"",!0),this.o=tp(t[7]||"")):(this.h=!1,this.i=new tE(null,this.h))}function tl(e){return new to(e)}function tu(e,t,r){e.j=r?tp(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function tc(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function th(e,t,r){var n,i;t instanceof tE?(e.i=t,n=e.i,(i=e.h)&&!n.j&&(tI(n),n.i=null,n.g.forEach(function(e,t){var r=t.toLowerCase();t!=r&&(tT(this,t),tk(this,r,e))},n)),n.j=i):(r||(t=tm(t,tb)),e.i=new tE(t,e.h))}function td(e,t,r){e.i.set(t,r)}function tf(e){return td(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function tp(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function tm(e,t,r){return"string"==typeof e?(e=encodeURI(e).replace(t,tg),r&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function tg(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}to.prototype.toString=function(){var e=[],t=this.j;t&&e.push(tm(t,ty,!0),":");var r=this.g;return(r||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(tm(t,ty,!0),"@"),e.push(encodeURIComponent(String(r)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(r=this.m)&&e.push(":",String(r))),(r=this.l)&&(this.g&&"/"!=r.charAt(0)&&e.push("/"),e.push(tm(r,"/"==r.charAt(0)?tw:tv,!0))),(r=this.i.toString())&&e.push("?",r),(r=this.o)&&e.push("#",tm(r,t_)),e.join("")};var ty=/[#\/\?@]/g,tv=/[#\?:]/g,tw=/[#\?]/g,tb=/[#\?@]/g,t_=/#/g;function tE(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function tI(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var r=0;r<e.length;r++){var n=e[r].indexOf("="),i=null;if(0<=n){var s=e[r].substring(0,n);i=e[r].substring(n+1)}else s=e[r];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,r){e.add(decodeURIComponent(t.replace(/\+/g," ")),r)}))}function tT(e,t){tI(e),t=tC(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function tS(e,t){return tI(e),t=tC(e,t),e.g.has(t)}function tk(e,t,r){tT(e,t),0<r.length&&(e.i=null,e.g.set(tC(e,t),C(r)),e.h+=r.length)}function tC(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(u=tE.prototype).add=function(e,t){tI(this),this.i=null,e=tC(this,e);var r=this.g.get(e);return r||this.g.set(e,r=[]),r.push(t),this.h+=1,this},u.forEach=function(e,t){tI(this),this.g.forEach(function(r,n){r.forEach(function(r){e.call(t,r,n,this)},this)},this)},u.ta=function(){tI(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),r=[];for(let n=0;n<t.length;n++){let i=e[n];for(let e=0;e<i.length;e++)r.push(t[n])}return r},u.Z=function(e){tI(this);let t=[];if("string"==typeof e)tS(this,e)&&(t=t.concat(this.g.get(tC(this,e))));else{e=Array.from(this.g.values());for(let r=0;r<e.length;r++)t=t.concat(e[r])}return t},u.set=function(e,t){return tI(this),this.i=null,tS(this,e=tC(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},u.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},u.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var r=0;r<t.length;r++){var n=t[r];let s=encodeURIComponent(String(n)),a=this.Z(n);for(n=0;n<a.length;n++){var i=s;""!==a[n]&&(i+="="+encodeURIComponent(String(a[n]))),e.push(i)}}return this.i=e.join("&")};var tA=class{constructor(e,t){this.g=e,this.map=t}};function tN(e){this.l=e||tx,e=y.PerformanceNavigationTiming?0<(e=y.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(y.g&&y.g.Ka&&y.g.Ka()&&y.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var tx=10;function tR(e){return!!e.h||!!e.g&&e.g.size>=e.j}function tO(e){return e.h?1:e.g?e.g.size:0}function tP(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function tD(e,t){e.g?e.g.add(t):e.h=t}function tL(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function tM(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let r of e.g.values())t=t.concat(r.F);return t}return C(e.i)}tN.prototype.cancel=function(){if(this.i=tM(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var tU=class{stringify(e){return y.JSON.stringify(e,void 0)}parse(e){return y.JSON.parse(e,void 0)}};function tF(){this.g=new tU}function tV(e,t,r,n,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(n)}catch(e){}}function tj(e){this.l=e.ec||null,this.j=e.ob||!1}function t$(e,t){em.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=tB,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}T(tj,eH),tj.prototype.g=function(){return new t$(this.l,this.j)},tj.prototype.i=(n={},function(){return n}),T(t$,em);var tB=0;function tz(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function tq(e){e.readyState=4,e.l=null,e.j=null,e.A=null,tK(e)}function tK(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(u=t$.prototype).open=function(e,t){if(this.readyState!=tB)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,tK(this)},u.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||y).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},u.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,tq(this)),this.readyState=tB},u.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,tK(this)),this.g&&(this.readyState=3,tK(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==y.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;tz(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))}},u.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?tq(this):tK(this),3==this.readyState&&tz(this)}},u.Za=function(e){this.g&&(this.response=this.responseText=e,tq(this))},u.Ya=function(e){this.g&&(this.response=e,tq(this))},u.ka=function(){this.g&&tq(this)},u.setRequestHeader=function(e,t){this.v.append(e,t)},u.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},u.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var r=t.next();!r.done;)e.push((r=r.value)[0]+": "+r[1]),r=t.next();return e.join("\r\n")},Object.defineProperty(t$.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var tZ=y.JSON.parse;function tH(e){em.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=tG,this.L=this.M=!1}T(tH,em);var tG="",tW=/^https?$/i,tQ=["POST","PUT"];function tX(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,tY(e),t0(e)}function tY(e){e.F||(e.F=!0,eg(e,"complete"),eg(e,"error"))}function tJ(e){if(e.h&&void 0!==g&&(!e.C[1]||4!=t2(e)||2!=e.da())){if(e.v&&4==t2(e))eA(e.La,0,e);else if(eg(e,"readystatechange"),4==t2(e)){e.h=!1;try{let a=e.da();switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,r,n=!0;break;default:n=!1}if(!(t=n)){if(r=0===a){var i=String(e.I).match(ta)[1]||null;!i&&y.self&&y.self.location&&(i=y.self.location.protocol.slice(0,-1)),r=!tW.test(i?i.toLowerCase():"")}t=r}if(t)eg(e,"complete"),eg(e,"success");else{e.m=6;try{var s=2<t2(e)?e.g.statusText:""}catch(e){s=""}e.j=s+" ["+e.da()+"]",tY(e)}}finally{t0(e)}}}}function t0(e,t){if(e.g){t1(e);let r=e.g,n=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||eg(e,"ready");try{r.onreadystatechange=n}catch(e){}}}function t1(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(y.clearTimeout(e.A),e.A=null)}function t2(e){return e.g?e.g.readyState:0}function t4(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case tG:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function t9(e){let t="";return J(e,function(e,r){t+=r+":"+e+"\r\n"}),t}function t5(e,t,r){e:{for(n in r){var n=!1;break e}n=!0}n||(r=t9(r),"string"==typeof e?null!=r&&encodeURIComponent(String(r)):td(e,t,r))}function t6(e,t,r){return r&&r.internalChannelParams&&r.internalChannelParams[e]||t}function t3(e){this.Ga=0,this.j=[],this.l=new eD,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=t6("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=t6("baseRetryDelayMs",5e3,e),this.hb=t6("retryDelaySeedMs",1e4,e),this.eb=t6("forwardChannelMaxRetries",2,e),this.xa=t6("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new tN(e&&e.concurrentRequestLimit),this.Ja=new tF,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function t7(e){if(re(e),3==e.H){var t=e.W++,r=tl(e.I);if(td(r,"SID",e.K),td(r,"RID",t),td(r,"TYPE","terminate"),rn(e,r),(t=new e0(e,e.l,t)).L=2,t.v=tf(tl(r)),r=!1,y.navigator&&y.navigator.sendBeacon)try{r=y.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!r&&y.Image&&((new Image).src=t.v,r=!0),r||(t.g=rm(t.l,null),t.g.ha(t.v)),t.G=Date.now(),e8(t)}rf(e)}function t8(e){e.g&&(ro(e),e.g.cancel(),e.g=null)}function re(e){t8(e),e.u&&(y.clearTimeout(e.u),e.u=null),ru(e),e.i.cancel(),e.m&&("number"==typeof e.m&&y.clearTimeout(e.m),e.m=null)}function rt(e){if(!tR(e.i)&&!e.m){e.m=!0;var t=e.Na;e_||eT(),eE||(e_(),eE=!0),eI.add(t,e),e.C=0}}function rr(e,t){var r;r=t?t.m:e.W++;let n=tl(e.I);td(n,"SID",e.K),td(n,"RID",r),td(n,"AID",e.V),rn(e,n),e.o&&e.s&&t5(n,e.o,e.s),r=new e0(e,e.l,r,e.C+1),null===e.o&&(r.I=e.s),t&&(e.j=t.F.concat(e.j)),t=ri(e,r,1e3),r.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),tD(e.i,r),e5(r,n,t)}function rn(e,t){e.na&&J(e.na,function(e,r){td(t,r,e)}),e.h&&ts({},function(e,r){td(t,r,e)})}function ri(e,t,r){r=Math.min(e.j.length,r);var n=e.h?E(e.h.Va,e.h,e):null;e:{var i=e.j;let t=-1;for(;;){let e=["count="+r];-1==t?0<r?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let a=0;a<r;a++){let r=i[a].g,o=i[a].map;if(0>(r-=t))t=Math.max(0,i[a].g-100),s=!1;else try{!function(e,t,r){let n=r||"";try{ts(e,function(e,r){let i=e;w(e)&&(i=ev(e)),t.push(n+r+"="+encodeURIComponent(i))})}catch(e){throw t.push(n+"type="+encodeURIComponent("_badmap")),e}}(o,e,"req"+r+"_")}catch(e){n&&n(o)}}if(s){n=e.join("&");break e}}}return e=e.j.splice(0,r),t.F=e,n}function rs(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;e_||eT(),eE||(e_(),eE=!0),eI.add(t,e),e.A=0}}function ra(e){return!e.g&&!e.u&&!(3<=e.A)&&(e.ba++,e.u=eq(E(e.Ma,e),rh(e,e.A)),e.A++,!0)}function ro(e){null!=e.B&&(y.clearTimeout(e.B),e.B=null)}function rl(e){e.g=new e0(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=tl(e.wa);td(t,"RID","rpc"),td(t,"SID",e.K),td(t,"AID",e.V),td(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&td(t,"TO",e.qa),td(t,"TYPE","xmlhttp"),rn(e,t),e.o&&e.s&&t5(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var r=e.g;e=e.pa,r.L=1,r.v=tf(tl(t)),r.s=null,r.S=!0,e6(r,e)}function ru(e){null!=e.v&&(y.clearTimeout(e.v),e.v=null)}function rc(e,t){var r=null;if(e.g==t){ru(e),ro(e),e.g=null;var n=2}else{if(!tP(e.i,t))return;r=t.F,tL(e.i,t),n=1}if(0!=e.H){if(t.i){if(1==n){r=t.s?t.s.length:0,t=Date.now()-t.G;var i,s=e.C;eg(n=eF(),new ez(n,r)),rt(e)}else rs(e)}else if(3==(s=t.o)||0==s&&0<t.ca||!(1==n&&(i=t,!(tO(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=i.F.concat(e.j),!0):1!=e.H&&2!=e.H&&!(e.C>=(e.cb?0:e.eb))&&(e.m=eq(E(e.Na,e,i),rh(e,e.C)),e.C++,!0)))||2==n&&ra(e)))switch(r&&0<r.length&&((t=e.i).i=t.i.concat(r)),s){case 1:rd(e,5);break;case 4:rd(e,10);break;case 3:rd(e,6);break;default:rd(e,2)}}}function rh(e,t){let r=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(r*=2),r*t}function rd(e,t){if(e.l.info("Error code "+t),2==t){var r=null;e.h&&(r=null);var n=E(e.pb,e);r||(r=new to("//www.google.com/images/cleardot.gif"),y.location&&"http"==y.location.protocol||tu(r,"https"),tf(r)),function(e,t){let r=new eD;if(y.Image){let n=new Image;n.onload=I(tV,r,n,"TestLoadImage: loaded",!0,t),n.onerror=I(tV,r,n,"TestLoadImage: error",!1,t),n.onabort=I(tV,r,n,"TestLoadImage: abort",!1,t),n.ontimeout=I(tV,r,n,"TestLoadImage: timeout",!1,t),y.setTimeout(function(){n.ontimeout&&n.ontimeout()},1e4),n.src=e}else t(!1)}(r.toString(),n)}else eB(2);e.H=0,e.h&&e.h.za(t),rf(e),re(e)}function rf(e){if(e.H=0,e.ma=[],e.h){let t=tM(e.i);(0!=t.length||0!=e.j.length)&&(A(e.ma,t),A(e.ma,e.j),e.i.i.length=0,C(e.j),e.j.length=0),e.h.ya()}}function rp(e,t,r){var n=r instanceof to?tl(r):new to(r);if(""!=n.g)t&&(n.g=t+"."+n.g),tc(n,n.m);else{var i=y.location;n=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new to(null);n&&tu(s,n),t&&(s.g=t),i&&tc(s,i),r&&(s.l=r),n=s}return r=e.F,t=e.Da,r&&t&&td(n,r,t),td(n,"VER",e.ra),rn(e,n),n}function rm(e,t,r){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new tH(r&&e.Ha&&!e.va?new tj({ob:!0}):e.va)).Oa(e.J),t}function rg(){}function ry(){if(M&&!(10<=Number(Z)))throw Error("Environmental error: no available transport.")}function rv(e,t){em.call(this),this.g=new t3(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!R(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!R(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new r_(this)}function rw(e){eX.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let r in t){e=r;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function rb(){eY.call(this),this.status=1}function r_(e){this.g=e}function rE(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function rI(e,t,r){r||(r=0);var n=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)n[i]=t.charCodeAt(r++)|t.charCodeAt(r++)<<8|t.charCodeAt(r++)<<16|t.charCodeAt(r++)<<24;else for(i=0;16>i;++i)n[i]=t[r++]|t[r++]<<8|t[r++]<<16|t[r++]<<24;t=e.g[0],r=e.g[1],i=e.g[2];var s=e.g[3],a=t+(s^r&(i^s))+n[0]+3614090360&4294967295;a=s+(i^(t=r+(a<<7&4294967295|a>>>25))&(r^i))+n[1]+3905402710&4294967295,a=i+(r^(s=t+(a<<12&4294967295|a>>>20))&(t^r))+n[2]+606105819&4294967295,a=r+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+n[3]+3250441966&4294967295,a=t+(s^(r=i+(a<<22&4294967295|a>>>10))&(i^s))+n[4]+4118548399&4294967295,a=s+(i^(t=r+(a<<7&4294967295|a>>>25))&(r^i))+n[5]+1200080426&4294967295,a=i+(r^(s=t+(a<<12&4294967295|a>>>20))&(t^r))+n[6]+2821735955&4294967295,a=r+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+n[7]+4249261313&4294967295,a=t+(s^(r=i+(a<<22&4294967295|a>>>10))&(i^s))+n[8]+1770035416&4294967295,a=s+(i^(t=r+(a<<7&4294967295|a>>>25))&(r^i))+n[9]+2336552879&4294967295,a=i+(r^(s=t+(a<<12&4294967295|a>>>20))&(t^r))+n[10]+4294925233&4294967295,a=r+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+n[11]+2304563134&4294967295,a=t+(s^(r=i+(a<<22&4294967295|a>>>10))&(i^s))+n[12]+1804603682&4294967295,a=s+(i^(t=r+(a<<7&4294967295|a>>>25))&(r^i))+n[13]+4254626195&4294967295,a=i+(r^(s=t+(a<<12&4294967295|a>>>20))&(t^r))+n[14]+2792965006&4294967295,a=r+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+n[15]+1236535329&4294967295,r=i+(a<<22&4294967295|a>>>10),a=t+(i^s&(r^i))+n[1]+4129170786&4294967295,t=r+(a<<5&4294967295|a>>>27),a=s+(r^i&(t^r))+n[6]+3225465664&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^r&(s^t))+n[11]+643717713&4294967295,i=s+(a<<14&4294967295|a>>>18),a=r+(s^t&(i^s))+n[0]+3921069994&4294967295,r=i+(a<<20&4294967295|a>>>12),a=t+(i^s&(r^i))+n[5]+3593408605&4294967295,t=r+(a<<5&4294967295|a>>>27),a=s+(r^i&(t^r))+n[10]+38016083&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^r&(s^t))+n[15]+3634488961&4294967295,i=s+(a<<14&4294967295|a>>>18),a=r+(s^t&(i^s))+n[4]+3889429448&4294967295,r=i+(a<<20&4294967295|a>>>12),a=t+(i^s&(r^i))+n[9]+568446438&4294967295,t=r+(a<<5&4294967295|a>>>27),a=s+(r^i&(t^r))+n[14]+3275163606&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^r&(s^t))+n[3]+4107603335&4294967295,i=s+(a<<14&4294967295|a>>>18),a=r+(s^t&(i^s))+n[8]+1163531501&4294967295,r=i+(a<<20&4294967295|a>>>12),a=t+(i^s&(r^i))+n[13]+2850285829&4294967295,t=r+(a<<5&4294967295|a>>>27),a=s+(r^i&(t^r))+n[2]+4243563512&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^r&(s^t))+n[7]+1735328473&4294967295,i=s+(a<<14&4294967295|a>>>18),a=r+(s^t&(i^s))+n[12]+2368359562&4294967295,a=t+((r=i+(a<<20&4294967295|a>>>12))^i^s)+n[5]+4294588738&4294967295,a=s+((t=r+(a<<4&4294967295|a>>>28))^r^i)+n[8]+2272392833&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^r)+n[11]+1839030562&4294967295,a=r+((i=s+(a<<16&4294967295|a>>>16))^s^t)+n[14]+4259657740&4294967295,a=t+((r=i+(a<<23&4294967295|a>>>9))^i^s)+n[1]+2763975236&4294967295,a=s+((t=r+(a<<4&4294967295|a>>>28))^r^i)+n[4]+1272893353&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^r)+n[7]+4139469664&4294967295,a=r+((i=s+(a<<16&4294967295|a>>>16))^s^t)+n[10]+3200236656&4294967295,a=t+((r=i+(a<<23&4294967295|a>>>9))^i^s)+n[13]+681279174&4294967295,a=s+((t=r+(a<<4&4294967295|a>>>28))^r^i)+n[0]+3936430074&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^r)+n[3]+3572445317&4294967295,a=r+((i=s+(a<<16&4294967295|a>>>16))^s^t)+n[6]+76029189&4294967295,a=t+((r=i+(a<<23&4294967295|a>>>9))^i^s)+n[9]+3654602809&4294967295,a=s+((t=r+(a<<4&4294967295|a>>>28))^r^i)+n[12]+3873151461&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^r)+n[15]+530742520&4294967295,a=r+((i=s+(a<<16&4294967295|a>>>16))^s^t)+n[2]+3299628645&4294967295,r=i+(a<<23&4294967295|a>>>9),a=t+(i^(r|~s))+n[0]+4096336452&4294967295,t=r+(a<<6&4294967295|a>>>26),a=s+(r^(t|~i))+n[7]+1126891415&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~r))+n[14]+2878612391&4294967295,i=s+(a<<15&4294967295|a>>>17),a=r+(s^(i|~t))+n[5]+4237533241&4294967295,r=i+(a<<21&4294967295|a>>>11),a=t+(i^(r|~s))+n[12]+1700485571&4294967295,t=r+(a<<6&4294967295|a>>>26),a=s+(r^(t|~i))+n[3]+2399980690&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~r))+n[10]+4293915773&4294967295,i=s+(a<<15&4294967295|a>>>17),a=r+(s^(i|~t))+n[1]+2240044497&4294967295,r=i+(a<<21&4294967295|a>>>11),a=t+(i^(r|~s))+n[8]+1873313359&4294967295,t=r+(a<<6&4294967295|a>>>26),a=s+(r^(t|~i))+n[15]+4264355552&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~r))+n[6]+2734768916&4294967295,i=s+(a<<15&4294967295|a>>>17),a=r+(s^(i|~t))+n[13]+1309151649&4294967295,r=i+(a<<21&4294967295|a>>>11),a=t+(i^(r|~s))+n[4]+4149444226&4294967295,t=r+(a<<6&4294967295|a>>>26),a=s+(r^(t|~i))+n[11]+3174756917&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~r))+n[2]+718787259&4294967295,i=s+(a<<15&4294967295|a>>>17),a=r+(s^(i|~t))+n[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(a<<21&4294967295|a>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function rT(e,t){this.h=t;for(var r=[],n=!0,i=e.length-1;0<=i;i--){var s=0|e[i];n&&s==t||(r[i]=s,n=!1)}this.g=r}(u=tH.prototype).Oa=function(e){this.M=e},u.ha=function(e,t,r,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():a.g(),this.C=this.u?eG(this.u):eG(a),this.g.onreadystatechange=E(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){tX(this,e);return}if(e=r||"",r=new Map(this.headers),n){if(Object.getPrototypeOf(n)===Object.prototype)for(var i in n)r.set(i,n[i]);else if("function"==typeof n.keys&&"function"==typeof n.get)for(let e of n.keys())r.set(e,n.get(e));else throw Error("Unknown input type for opt_headers: "+String(n))}for(let[s,a]of(n=Array.from(r.keys()).find(e=>"content-type"==e.toLowerCase()),i=y.FormData&&e instanceof y.FormData,!(0<=k(tQ,t))||n||i||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r))this.g.setRequestHeader(s,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{var s;t1(this),0<this.B&&((this.L=(s=this.g,M&&"number"==typeof s.timeout&&void 0!==s.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=E(this.ua,this)):this.A=eA(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){tX(this,e)}},u.ua=function(){void 0!==g&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,eg(this,"timeout"),this.abort(8))},u.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,eg(this,"complete"),eg(this,"abort"),t0(this))},u.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),t0(this,!0)),tH.$.N.call(this)},u.La=function(){this.s||(this.G||this.v||this.l?tJ(this):this.kb())},u.kb=function(){tJ(this)},u.isActive=function(){return!!this.g},u.da=function(){try{return 2<t2(this)?this.g.status:-1}catch(e){return -1}},u.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},u.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),tZ(t)}},u.Ia=function(){return this.m},u.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(u=t3.prototype).ra=8,u.H=1,u.Na=function(e){if(this.m){if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;let i=new e0(this,this.l,e),s=this.s;if(this.U&&(s?er(s=ee(s),this.U):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,r=0;r<this.j.length;r++){t:{var n=this.j[r];if("__data__"in n.map&&"string"==typeof(n=n.map.__data__)){n=n.length;break t}n=void 0}if(void 0===n)break;if(4096<(t+=n)){t=r;break e}if(4096===t||r===this.j.length-1){t=r+1;break e}}t=1e3}else t=1e3;t=ri(this,i,t),td(r=tl(this.I),"RID",e),td(r,"CVER",22),this.F&&td(r,"X-HTTP-Session-Id",this.F),rn(this,r),s&&(this.O?t="headers="+encodeURIComponent(String(t9(s)))+"&"+t:this.o&&t5(r,this.o,s)),tD(this.i,i),this.bb&&td(r,"TYPE","init"),this.P?(td(r,"$req",t),td(r,"SID","null"),i.aa=!0,e5(i,r,null)):e5(i,r,t),this.H=2}}else 3==this.H&&(e?rr(this,e):0==this.j.length||tR(this.i)||rr(this))}},u.Ma=function(){if(this.u=null,rl(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=eq(E(this.jb,this),e)}},u.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,eB(10),t8(this),rl(this))},u.ib=function(){null!=this.v&&(this.v=null,t8(this),ra(this),eB(19))},u.pb=function(e){e?(this.l.info("Successfully pinged google.com"),eB(2)):(this.l.info("Failed to ping google.com"),eB(1))},u.isActive=function(){return!!this.h&&this.h.isActive(this)},(u=rg.prototype).Ba=function(){},u.Aa=function(){},u.za=function(){},u.ya=function(){},u.isActive=function(){return!0},u.Va=function(){},ry.prototype.g=function(e,t){return new rv(e,t)},T(rv,em),rv.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,r=this.h||void 0;eB(0),e.Y=t,e.na=r||{},e.G=e.aa,e.I=rp(e,null,e.Y),rt(e)},rv.prototype.close=function(){t7(this.g)},rv.prototype.u=function(e){var t=this.g;if("string"==typeof e){var r={};r.__data__=e,e=r}else this.v&&((r={}).__data__=ev(e),e=r);t.j.push(new tA(t.fb++,e)),3==t.H&&rt(t)},rv.prototype.N=function(){this.g.h=null,delete this.j,t7(this.g),delete this.g,rv.$.N.call(this)},T(rw,eX),T(rb,eY),T(r_,rg),r_.prototype.Ba=function(){eg(this.g,"a")},r_.prototype.Aa=function(e){eg(this.g,new rw(e))},r_.prototype.za=function(e){eg(this.g,new rb)},r_.prototype.ya=function(){eg(this.g,"b")},T(rE,function(){this.blockSize=-1}),rE.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},rE.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var r=t-this.blockSize,n=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=r;)rI(this,e,s),s+=this.blockSize;if("string"==typeof e){for(;s<t;)if(n[i++]=e.charCodeAt(s++),i==this.blockSize){rI(this,n),i=0;break}}else for(;s<t;)if(n[i++]=e[s++],i==this.blockSize){rI(this,n),i=0;break}}this.h=i,this.i+=t},rE.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var r=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&r,r/=256;for(this.j(e),e=Array(16),t=r=0;4>t;++t)for(var n=0;32>n;n+=8)e[r++]=this.g[t]>>>n&255;return e};var rS={};function rk(e){return -128<=e&&128>e?Object.prototype.hasOwnProperty.call(rS,e)?rS[e]:rS[e]=new rT([0|e],0>e?-1:0):new rT([0|e],0>e?-1:0)}function rC(e){if(isNaN(e)||!isFinite(e))return rN;if(0>e)return rD(rC(-e));for(var t=[],r=1,n=0;e>=r;n++)t[n]=e/r|0,r*=rA;return new rT(t,0)}var rA=4294967296,rN=rk(0),rx=rk(1),rR=rk(16777216);function rO(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function rP(e){return -1==e.h}function rD(e){for(var t=e.g.length,r=[],n=0;n<t;n++)r[n]=~e.g[n];return new rT(r,~e.h).add(rx)}function rL(e,t){return e.add(rD(t))}function rM(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function rU(e,t){this.g=e,this.h=t}function rF(e,t){if(rO(t))throw Error("division by zero");if(rO(e))return new rU(rN,rN);if(rP(e))return t=rF(rD(e),t),new rU(rD(t.g),rD(t.h));if(rP(t))return t=rF(e,rD(t)),new rU(rD(t.g),t.h);if(30<e.g.length){if(rP(e)||rP(t))throw Error("slowDivide_ only works with positive integers.");for(var r=rx,n=t;0>=n.X(e);)r=rV(r),n=rV(n);var i=rj(r,1),s=rj(n,1);for(n=rj(n,2),r=rj(r,2);!rO(n);){var a=s.add(n);0>=a.X(e)&&(i=i.add(r),s=a),n=rj(n,1),r=rj(r,1)}return t=rL(e,i.R(t)),new rU(i,t)}for(i=rN;0<=e.X(t);){for(n=48>=(n=Math.ceil(Math.log(r=Math.max(1,Math.floor(e.ea()/t.ea())))/Math.LN2))?1:Math.pow(2,n-48),a=(s=rC(r)).R(t);rP(a)||0<a.X(e);)r-=n,a=(s=rC(r)).R(t);rO(s)&&(s=rx),i=i.add(s),e=rL(e,a)}return new rU(i,e)}function rV(e){for(var t=e.g.length+1,r=[],n=0;n<t;n++)r[n]=e.D(n)<<1|e.D(n-1)>>>31;return new rT(r,e.h)}function rj(e,t){var r=t>>5;t%=32;for(var n=e.g.length-r,i=[],s=0;s<n;s++)i[s]=0<t?e.D(s+r)>>>t|e.D(s+r+1)<<32-t:e.D(s+r);return new rT(i,e.h)}(u=rT.prototype).ea=function(){if(rP(this))return-rD(this).ea();for(var e=0,t=1,r=0;r<this.g.length;r++){var n=this.D(r);e+=(0<=n?n:rA+n)*t,t*=rA}return e},u.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(rO(this))return"0";if(rP(this))return"-"+rD(this).toString(e);for(var t=rC(Math.pow(e,6)),r=this,n="";;){var i=rF(r,t).g,s=((0<(r=rL(r,i.R(t))).g.length?r.g[0]:r.h)>>>0).toString(e);if(rO(r=i))return s+n;for(;6>s.length;)s="0"+s;n=s+n}},u.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},u.X=function(e){return rP(e=rL(this,e))?-1:rO(e)?0:1},u.abs=function(){return rP(this)?rD(this):this},u.add=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],n=0,i=0;i<=t;i++){var s=n+(65535&this.D(i))+(65535&e.D(i)),a=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);n=a>>>16,s&=65535,a&=65535,r[i]=a<<16|s}return new rT(r,-2147483648&r[r.length-1]?-1:0)},u.R=function(e){if(rO(this)||rO(e))return rN;if(rP(this))return rP(e)?rD(this).R(rD(e)):rD(rD(this).R(e));if(rP(e))return rD(this.R(rD(e)));if(0>this.X(rR)&&0>e.X(rR))return rC(this.ea()*e.ea());for(var t=this.g.length+e.g.length,r=[],n=0;n<2*t;n++)r[n]=0;for(n=0;n<this.g.length;n++)for(var i=0;i<e.g.length;i++){var s=this.D(n)>>>16,a=65535&this.D(n),o=e.D(i)>>>16,l=65535&e.D(i);r[2*n+2*i]+=a*l,rM(r,2*n+2*i),r[2*n+2*i+1]+=s*l,rM(r,2*n+2*i+1),r[2*n+2*i+1]+=a*o,rM(r,2*n+2*i+1),r[2*n+2*i+2]+=s*o,rM(r,2*n+2*i+2)}for(n=0;n<t;n++)r[n]=r[2*n+1]<<16|r[2*n];for(n=t;n<2*t;n++)r[n]=0;return new rT(r,0)},u.gb=function(e){return rF(this,e).h},u.and=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],n=0;n<t;n++)r[n]=this.D(n)&e.D(n);return new rT(r,this.h&e.h)},u.or=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],n=0;n<t;n++)r[n]=this.D(n)|e.D(n);return new rT(r,this.h|e.h)},u.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],n=0;n<t;n++)r[n]=this.D(n)^e.D(n);return new rT(r,this.h^e.h)},ry.prototype.createWebChannel=ry.prototype.g,rv.prototype.send=rv.prototype.u,rv.prototype.open=rv.prototype.m,rv.prototype.close=rv.prototype.close,eK.NO_ERROR=0,eK.TIMEOUT=8,eK.HTTP_ERROR=6,eZ.COMPLETE="complete",eW.EventType=eQ,eQ.OPEN="a",eQ.CLOSE="b",eQ.ERROR="c",eQ.MESSAGE="d",em.prototype.listen=em.prototype.O,tH.prototype.listenOnce=tH.prototype.P,tH.prototype.getLastError=tH.prototype.Sa,tH.prototype.getLastErrorCode=tH.prototype.Ia,tH.prototype.getStatus=tH.prototype.da,tH.prototype.getResponseJson=tH.prototype.Wa,tH.prototype.getResponseText=tH.prototype.ja,tH.prototype.send=tH.prototype.ha,tH.prototype.setWithCredentials=tH.prototype.Oa,rE.prototype.digest=rE.prototype.l,rE.prototype.reset=rE.prototype.reset,rE.prototype.update=rE.prototype.j,rT.prototype.add=rT.prototype.add,rT.prototype.multiply=rT.prototype.R,rT.prototype.modulo=rT.prototype.gb,rT.prototype.compare=rT.prototype.X,rT.prototype.toNumber=rT.prototype.ea,rT.prototype.toString=rT.prototype.toString,rT.prototype.getBits=rT.prototype.D,rT.fromNumber=rC,rT.fromString=function e(t,r){if(0==t.length)throw Error("number format error: empty string");if(2>(r=r||10)||36<r)throw Error("radix out of range: "+r);if("-"==t.charAt(0))return rD(e(t.substring(1),r));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=rC(Math.pow(r,8)),i=rN,s=0;s<t.length;s+=8){var a=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+a),r);8>a?(a=rC(Math.pow(r,a)),i=i.R(a).add(rC(o))):i=(i=i.R(n)).add(rC(o))}return i};var r$=m.createWebChannelTransport=function(){return new ry},rB=m.getStatEventTarget=function(){return eF()},rz=m.ErrorCode=eK,rq=m.EventType=eZ,rK=m.Event=eM,rZ=m.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20};m.FetchXmlHttpFactory=tj;var rH=m.WebChannel=eW,rG=m.XhrIo=tH,rW=m.Md5=rE,rQ=m.Integer=rT;r(83454);let rX="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rY{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rY.UNAUTHENTICATED=new rY(null),rY.GOOGLE_CREDENTIALS=new rY("google-credentials-uid"),rY.FIRST_PARTY=new rY("first-party-uid"),rY.MOCK_USER=new rY("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rJ="10.4.0",r0=new d.Yd("@firebase/firestore");function r1(){return r0.logLevel}function r2(e,...t){if(r0.logLevel<=d.in.DEBUG){let r=t.map(r5);r0.debug(`Firestore (${rJ}): ${e}`,...r)}}function r4(e,...t){if(r0.logLevel<=d.in.ERROR){let r=t.map(r5);r0.error(`Firestore (${rJ}): ${e}`,...r)}}function r9(e,...t){if(r0.logLevel<=d.in.WARN){let r=t.map(r5);r0.warn(`Firestore (${rJ}): ${e}`,...r)}}function r5(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r6(e="Unexpected state"){let t=`FIRESTORE (${rJ}) INTERNAL ASSERTION FAILED: `+e;throw r4(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let r3={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class r7 extends f.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r8{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nt{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(rY.UNAUTHENTICATED))}shutdown(){}}class nr{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class nn{constructor(e){this.t=e,this.currentUser=rY.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i,n=e=>this.i!==r?(r=this.i,t(e)):Promise.resolve(),i=new r8;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new r8,e.enqueueRetryable(()=>n(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},a=e=>{r2("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(r2("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new r8)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(r2("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||r6(),new ne(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||r6(),new rY(e)}}class ni{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=rY.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ns{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new ni(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(rY.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class na{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class no{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){let r=e=>{null!=e.error&&r2("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let r=e.token!==this.R;return this.R=e.token,r2("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>r(t))};let n=e=>{r2("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>n(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?n(e):r2("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||r6(),this.R=e.token,new na(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{static V(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let n=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),r=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(r);else for(let t=0;t<e;t++)r[t]=Math.floor(256*Math.random());return r}(40);for(let i=0;i<n.length;++i)r.length<20&&n[i]<t&&(r+=e.charAt(n[i]%e.length))}return r}}function nu(e,t){return e<t?-1:e>t?1:0}function nc(e,t,r){return e.length===t.length&&e.every((e,n)=>r(e,t[n]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new r7(r3.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new r7(r3.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return nh.fromMillis(Date.now())}static fromDate(e){return nh.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new nh(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?nu(this.nanoseconds,e.nanoseconds):nu(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e){this.timestamp=e}static fromTimestamp(e){return new nd(e)}static min(){return new nd(new nh(0,0))}static max(){return new nd(new nh(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,t,r){void 0===t?t=0:t>e.length&&r6(),void 0===r?r=e.length-t:r>e.length-t&&r6(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return 0===nf.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof nf?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let n=0;n<r;n++){let r=e.get(n),i=t.get(n);if(r<i)return -1;if(r>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class np extends nf{construct(e,t,r){return new np(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new r7(r3.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(e=>e.length>0))}return new np(t)}static emptyPath(){return new np([])}}let nm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ng extends nf{construct(e,t,r){return new ng(e,t,r)}static isValidIdentifier(e){return nm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ng.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ng(["__name__"])}static fromServerFormat(e){let t=[],r="",n=0,i=()=>{if(0===r.length)throw new r7(r3.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},s=!1;for(;n<e.length;){let t=e[n];if("\\"===t){if(n+1===e.length)throw new r7(r3.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[n+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new r7(r3.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=t,n+=2}else"`"===t?(s=!s,n++):"."!==t||s?(r+=t,n++):(i(),n++)}if(i(),s)throw new r7(r3.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ng(t)}static emptyPath(){return new ng([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e){this.path=e}static fromPath(e){return new ny(np.fromString(e))}static fromName(e){return new ny(np.fromString(e).popFirst(5))}static empty(){return new ny(np.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===np.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return np.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ny(new np(e.slice()))}}class nv{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new nv(nd.min(),ny.empty(),-1)}static max(){return new nv(nd.max(),ny.empty(),-1)}}class nw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nb(e){if(e.code!==r3.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;r2("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&r6(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new n_((r,n)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(r,n)},this.catchCallback=e=>{this.wrapFailure(t,e).next(r,n)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof n_?t:n_.resolve(t)}catch(e){return n_.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):n_.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):n_.reject(t)}static resolve(e){return new n_((t,r)=>{t(e)})}static reject(e){return new n_((t,r)=>{r(e)})}static waitFor(e){return new n_((t,r)=>{let n=0,i=0,s=!1;e.forEach(e=>{++n,e.next(()=>{++i,s&&i===n&&t()},e=>r(e))}),s=!0,i===n&&t()})}static or(e){let t=n_.resolve(!1);for(let r of e)t=t.next(e=>e?n_.resolve(e):r());return t}static forEach(e,t){let r=[];return e.forEach((e,n)=>{r.push(t.call(this,e,n))}),this.waitFor(r)}static mapArray(e,t){return new n_((r,n)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&r(s)},e=>n(e))}})}static doWhile(e,t){return new n_((r,n)=>{let i=()=>{!0===e()?t().next(()=>{i()},n):r()};i()})}}function nE(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.oe(e),this._e=e=>t.writeSequenceNumber(e))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this._e&&this._e(e),e}}function nT(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(e){let t=0;for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t++;return t}function nk(e,t){for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t(r,e[r])}function nC(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}nI.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e,t){this.comparator=e,this.root=t||nx.EMPTY}insert(e,t){return new nA(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,nx.BLACK,null,null))}remove(e){return new nA(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nx.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(0===r)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let n=this.comparator(e,r.key);if(0===n)return t+r.left.size;n<0?r=r.left:(t+=r.left.size+1,r=r.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new nN(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new nN(this.root,e,this.comparator,!1)}getReverseIterator(){return new nN(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new nN(this.root,e,this.comparator,!0)}}class nN{constructor(e,t,r,n){this.isReverse=n,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&n&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class nx{constructor(e,t,r,n,i){this.key=e,this.value=t,this.color=null!=r?r:nx.RED,this.left=null!=n?n:nx.EMPTY,this.right=null!=i?i:nx.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,n,i){return new nx(null!=e?e:this.key,null!=t?t:this.value,null!=r?r:this.color,null!=n?n:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let n=this,i=r(e,n.key);return(n=i<0?n.copy(null,null,null,n.left.insert(e,t,r),null):0===i?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,r))).fixUp()}removeMin(){if(this.left.isEmpty())return nx.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let r,n=this;if(0>t(e,n.key))n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return nx.EMPTY;r=n.right.min(),n=n.copy(r.key,r.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,nx.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,nx.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw r6();let e=this.left.check();if(e!==this.right.check())throw r6();return e+(this.isRed()?0:1)}}nx.EMPTY=null,nx.RED=!0,nx.BLACK=!1,nx.EMPTY=new class{constructor(){this.size=0}get key(){throw r6()}get value(){throw r6()}get color(){throw r6()}get left(){throw r6()}get right(){throw r6()}copy(e,t,r,n,i){return this}insert(e,t,r){return new nx(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e){this.comparator=e,this.data=new nA(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let n=r.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let r;for(r=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new nO(this.data.getIterator())}getIteratorFrom(e){return new nO(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof nR)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new nR(this.comparator);return t.data=e,t}}class nO{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e){this.fields=e,e.sort(ng.comparator)}static empty(){return new nP([])}unionWith(e){let t=new nR(ng.comparator);for(let e of this.fields)t=t.add(e);for(let r of e)t=t.add(r);return new nP(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return nc(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nL{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new nD("Invalid base64 string: "+e):e}}(e);return new nL(t)}static fromUint8Array(e){let t=function(e){let t="";for(let r=0;r<e.length;++r)t+=String.fromCharCode(e[r]);return t}(e);return new nL(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return nu(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nL.EMPTY_BYTE_STRING=new nL("");let nM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nU(e){if(e||r6(),"string"==typeof e){let t=0,r=nM.exec(e);if(r||r6(),r[1]){let e=r[1];t=Number(e=(e+"000000000").substr(0,9))}let n=new Date(e);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:nF(e.seconds),nanos:nF(e.nanos)}}function nF(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function nV(e){return"string"==typeof e?nL.fromBase64String(e):nL.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nj(e){var t,r;return"server_timestamp"===(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===r?void 0:r.stringValue)}function n$(e){let t=e.mapValue.fields.__previous_value__;return nj(t)?n$(t):t}function nB(e){let t=nU(e.mapValue.fields.__local_write_time__.timestampValue);return new nh(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nz{constructor(e,t,r,n,i,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=n,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}class nq{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new nq("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof nq&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nK={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function nZ(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?nj(e)?4:n5(e)?9007199254740991:10:r6()}function nH(e,t){if(e===t)return!0;let r=nZ(e);if(r!==nZ(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return nB(e).isEqual(nB(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let r=nU(e.timestampValue),n=nU(t.timestampValue);return r.seconds===n.seconds&&r.nanos===n.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return nV(e.bytesValue).isEqual(nV(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return nF(e.geoPointValue.latitude)===nF(t.geoPointValue.latitude)&&nF(e.geoPointValue.longitude)===nF(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return nF(e.integerValue)===nF(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let r=nF(e.doubleValue),n=nF(t.doubleValue);return r===n?nT(r)===nT(n):isNaN(r)&&isNaN(n)}return!1}(e,t);case 9:return nc(e.arrayValue.values||[],t.arrayValue.values||[],nH);case 10:return function(e,t){let r=e.mapValue.fields||{},n=t.mapValue.fields||{};if(nS(r)!==nS(n))return!1;for(let e in r)if(r.hasOwnProperty(e)&&(void 0===n[e]||!nH(r[e],n[e])))return!1;return!0}(e,t);default:return r6()}}function nG(e,t){return void 0!==(e.values||[]).find(e=>nH(e,t))}function nW(e,t){if(e===t)return 0;let r=nZ(e),n=nZ(t);if(r!==n)return nu(r,n);switch(r){case 0:case 9007199254740991:return 0;case 1:return nu(e.booleanValue,t.booleanValue);case 2:return function(e,t){let r=nF(e.integerValue||e.doubleValue),n=nF(t.integerValue||t.doubleValue);return r<n?-1:r>n?1:r===n?0:isNaN(r)?isNaN(n)?0:-1:1}(e,t);case 3:return nQ(e.timestampValue,t.timestampValue);case 4:return nQ(nB(e),nB(t));case 5:return nu(e.stringValue,t.stringValue);case 6:return function(e,t){let r=nV(e),n=nV(t);return r.compareTo(n)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let r=e.split("/"),n=t.split("/");for(let e=0;e<r.length&&e<n.length;e++){let t=nu(r[e],n[e]);if(0!==t)return t}return nu(r.length,n.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let r=nu(nF(e.latitude),nF(t.latitude));return 0!==r?r:nu(nF(e.longitude),nF(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let r=e.values||[],n=t.values||[];for(let e=0;e<r.length&&e<n.length;++e){let t=nW(r[e],n[e]);if(t)return t}return nu(r.length,n.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===nK.mapValue&&t===nK.mapValue)return 0;if(e===nK.mapValue)return 1;if(t===nK.mapValue)return -1;let r=e.fields||{},n=Object.keys(r),i=t.fields||{},s=Object.keys(i);n.sort(),s.sort();for(let e=0;e<n.length&&e<s.length;++e){let t=nu(n[e],s[e]);if(0!==t)return t;let a=nW(r[n[e]],i[s[e]]);if(0!==a)return a}return nu(n.length,s.length)}(e.mapValue,t.mapValue);default:throw r6()}}function nQ(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return nu(e,t);let r=nU(e),n=nU(t),i=nu(r.seconds,n.seconds);return 0!==i?i:nu(r.nanos,n.nanos)}function nX(e){var t,r;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=nU(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?nV(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,ny.fromName(t).toString()):"geoPointValue"in e?(r=e.geoPointValue,`geo(${r.latitude},${r.longitude})`):"arrayValue"in e?function(e){let t="[",r=!0;for(let n of e.values||[])r?r=!1:t+=",",t+=nX(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),r="{",n=!0;for(let i of t)n?n=!1:r+=",",r+=`${i}:${nX(e.fields[i])}`;return r+"}"}(e.mapValue):r6()}function nY(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function nJ(e){return!!e&&"integerValue"in e}function n0(e){return!!e&&"arrayValue"in e}function n1(e){return!!e&&"nullValue"in e}function n2(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function n4(e){return!!e&&"mapValue"in e}function n9(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return nk(e.mapValue.fields,(e,r)=>t.mapValue.fields[e]=n9(r)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)t.arrayValue.values[r]=n9(e.arrayValue.values[r]);return t}return Object.assign({},e)}function n5(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n6{constructor(e){this.value=e}static empty(){return new n6({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(!n4(t=(t.mapValue.fields||{})[e.get(r)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=n9(t)}setAll(e){let t=ng.emptyPath(),r={},n=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,r,n),r={},n=[],t=i.popLast()}e?r[i.lastSegment()]=n9(e):n.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,r,n)}delete(e){let t=this.field(e.popLast());n4(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return nH(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let n=t.mapValue.fields[e.get(r)];n4(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,r){for(let n of(nk(t,(t,r)=>e[t]=r),r))delete e[n]}clone(){return new n6(n9(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n3{constructor(e,t,r,n,i,s,a){this.key=e,this.documentType=t,this.version=r,this.readTime=n,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new n3(e,0,nd.min(),nd.min(),nd.min(),n6.empty(),0)}static newFoundDocument(e,t,r,n){return new n3(e,1,t,nd.min(),r,n,0)}static newNoDocument(e,t){return new n3(e,2,t,nd.min(),nd.min(),n6.empty(),0)}static newUnknownDocument(e,t){return new n3(e,3,t,nd.min(),nd.min(),n6.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(nd.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=n6.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=n6.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=nd.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof n3&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new n3(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n7{constructor(e,t){this.position=e,this.inclusive=t}}function n8(e,t,r){let n=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(n=s.field.isKeyField()?ny.comparator(ny.fromName(a.referenceValue),r.key):nW(a,r.data.field(s.field)),"desc"===s.dir&&(n*=-1),0!==n)break}return n}function ie(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let r=0;r<e.position.length;r++)if(!nH(e.position[r],t.position[r]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{}class ii extends ir{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,r):new il(e,t,r):"array-contains"===t?new id(e,r):"in"===t?new ip(e,r):"not-in"===t?new im(e,r):"array-contains-any"===t?new ig(e,r):new ii(e,t,r)}static createKeyFieldInFilter(e,t,r){return"in"===t?new iu(e,r):new ic(e,r)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(nW(t,this.value)):null!==t&&nZ(this.value)===nZ(t)&&this.matchesComparison(nW(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return r6()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class is extends ir{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new is(e,t)}matches(e){return ia(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let e=this.le(e=>e.isInequality());return null!==e?e.field:null}le(e){for(let t of this.getFlattenedFilters())if(e(t))return t;return null}}function ia(e){return"and"===e.op}function io(e){for(let t of e.filters)if(t instanceof is)return!1;return!0}class il extends ii{constructor(e,t,r){super(e,t,r),this.key=ny.fromName(r.referenceValue)}matches(e){let t=ny.comparator(e.key,this.key);return this.matchesComparison(t)}}class iu extends ii{constructor(e,t){super(e,"in",t),this.keys=ih("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ic extends ii{constructor(e,t){super(e,"not-in",t),this.keys=ih("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ih(e,t){var r;return((null===(r=t.arrayValue)||void 0===r?void 0:r.values)||[]).map(e=>ny.fromName(e.referenceValue))}class id extends ii{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return n0(t)&&nG(t.arrayValue,this.value)}}class ip extends ii{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&nG(this.value.arrayValue,t)}}class im extends ii{constructor(e,t){super(e,"not-in",t)}matches(e){if(nG(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!nG(this.value.arrayValue,t)}}class ig extends ii{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!n0(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>nG(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e,t=null,r=[],n=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=n,this.limit=i,this.startAt=s,this.endAt=a,this.he=null}}function iv(e,t=null,r=[],n=[],i=null,s=null,a=null){return new iy(e,t,r,n,i,s,a)}function iw(e){if(null===e.he){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof ii)return t.field.canonicalString()+t.op.toString()+nX(t.value);if(io(t)&&ia(t))return t.filters.map(t=>e(t)).join(",");{let r=t.filters.map(t=>e(t)).join(",");return`${t.op}(${r})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>nX(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>nX(e)).join(",")),e.he=t}return e.he}function ib(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var r,n;if(r=e.orderBy[i],n=t.orderBy[i],!(r.dir===n.dir&&r.field.isEqual(n.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(!function e(t,r){return t instanceof ii?r instanceof ii&&t.op===r.op&&t.field.isEqual(r.field)&&nH(t.value,r.value):t instanceof is?r instanceof is&&t.op===r.op&&t.filters.length===r.filters.length&&t.filters.reduce((t,n,i)=>t&&e(n,r.filters[i]),!0):void r6()}(e.filters[r],t.filters[r]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ie(e.startAt,t.startAt)&&ie(e.endAt,t.endAt)}function i_(e){return ny.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,t=null,r=[],n=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=n,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function iI(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function iT(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function iS(e){for(let t of e.filters){let e=t.getFirstInequalityField();if(null!==e)return e}return null}function ik(e){return null!==e.collectionGroup}function iC(e){if(null===e.Pe){e.Pe=[];let t=iS(e),r=iT(e);if(null!==t&&null===r)t.isKeyField()||e.Pe.push(new it(t)),e.Pe.push(new it(ng.keyField(),"asc"));else{let t=!1;for(let r of e.explicitOrderBy)e.Pe.push(r),r.field.isKeyField()&&(t=!0);if(!t){let t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new it(ng.keyField(),t))}}}return e.Pe}function iA(e){return e.Ie||(e.Ie=function(e,t){if("F"===e.limitType)return iv(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new it(e.field,t)});let r=e.endAt?new n7(e.endAt.position,e.endAt.inclusive):null,n=e.startAt?new n7(e.startAt.position,e.startAt.inclusive):null;return iv(e.path,e.collectionGroup,t,e.filters,e.limit,r,n)}}(e,iC(e))),e.Ie}function iN(e,t){t.getFirstInequalityField(),iS(e);let r=e.filters.concat([t]);return new iE(e.path,e.collectionGroup,e.explicitOrderBy.slice(),r,e.limit,e.limitType,e.startAt,e.endAt)}function ix(e,t,r){return new iE(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,r,e.startAt,e.endAt)}function iR(e,t){return ib(iA(e),iA(t))&&e.limitType===t.limitType}function iO(e){return`${iw(iA(e))}|lt:${e.limitType}`}function iP(e){var t;let r;return`Query(target=${r=(t=iA(e)).path.canonicalString(),null!==t.collectionGroup&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof ii?`${t.field.canonicalString()} ${t.op} ${nX(t.value)}`:t instanceof is?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(r+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>nX(e)).join(",")),t.endAt&&(r+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>nX(e)).join(",")),`Target(${r})`}; limitType=${e.limitType})`}function iD(e,t){return t.isFoundDocument()&&function(e,t){let r=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(r):ny.isDocumentKey(e.path)?e.path.isEqual(r):e.path.isImmediateParentOf(r)}(e,t)&&function(e,t){for(let r of iC(e))if(!r.field.isKeyField()&&null===t.data.field(r.field))return!1;return!0}(e,t)&&function(e,t){for(let r of e.filters)if(!r.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,r){let n=n8(e,t,r);return e.inclusive?n<=0:n<0}(e.startAt,iC(e),t))&&(!e.endAt||!!function(e,t,r){let n=n8(e,t,r);return e.inclusive?n>=0:n>0}(e.endAt,iC(e),t))}function iL(e){return(t,r)=>{let n=!1;for(let i of iC(e)){let e=function(e,t,r){let n=e.field.isKeyField()?ny.comparator(t.key,r.key):function(e,t,r){let n=t.data.field(e),i=r.data.field(e);return null!==n&&null!==i?nW(n,i):r6()}(e.field,t,r);switch(e.dir){case"asc":return n;case"desc":return -1*n;default:return r6()}}(i,t,r);if(0!==e)return e;n=n||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0!==r){for(let[t,n]of r)if(this.equalsFn(t,e))return n}}has(e){return void 0!==this.get(e)}set(e,t){let r=this.mapKeyFn(e),n=this.inner[r];if(void 0===n)return this.inner[r]=[[e,t]],void this.innerSize++;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return void(n[r]=[e,t]);n.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0===r)return!1;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return 1===r.length?delete this.inner[t]:r.splice(n,1),this.innerSize--,!0;return!1}forEach(e){nk(this.inner,(t,r)=>{for(let[t,n]of r)e(t,n)})}isEmpty(){return nC(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iU=new nA(ny.comparator),iF=new nA(ny.comparator);function iV(...e){let t=iF;for(let r of e)t=t.insert(r.key,r);return t}function ij(e){let t=iF;return e.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function i$(){return new iM(e=>e.toString(),(e,t)=>e.isEqual(t))}let iB=new nA(ny.comparator),iz=new nR(ny.comparator);function iq(...e){let t=iz;for(let r of e)t=t.add(r);return t}let iK=new nR(nu);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iZ(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nT(t)?"-0":t}}function iH(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iG{constructor(){this._=void 0}}function iW(e,t){return e instanceof i1?nJ(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class iQ extends iG{}class iX extends iG{constructor(e){super(),this.elements=e}}function iY(e,t){let r=i4(t);for(let t of e.elements)r.some(e=>nH(e,t))||r.push(t);return{arrayValue:{values:r}}}class iJ extends iG{constructor(e){super(),this.elements=e}}function i0(e,t){let r=i4(t);for(let t of e.elements)r=r.filter(e=>!nH(e,t));return{arrayValue:{values:r}}}class i1 extends iG{constructor(e,t){super(),this.serializer=e,this.Te=t}}function i2(e){return nF(e.integerValue||e.doubleValue)}function i4(e){return n0(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i9{constructor(e,t){this.field=e,this.transform=t}}class i5{constructor(e,t){this.version=e,this.transformResults=t}}class i6{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new i6}static exists(e){return new i6(void 0,e)}static updateTime(e){return new i6(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function i3(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class i7{}function i8(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new so(e.key,i6.none()):new sr(e.key,e.data,i6.none());{let r=e.data,n=n6.empty(),i=new nR(ng.comparator);for(let e of t.fields)if(!i.has(e)){let t=r.field(e);null===t&&e.length>1&&(e=e.popLast(),t=r.field(e)),null===t?n.delete(e):n.set(e,t),i=i.add(e)}return new sn(e.key,n,new nP(i.toArray()),i6.none())}}function se(e,t,r,n){return e instanceof sr?function(e,t,r,n){if(!i3(e.precondition,t))return r;let i=e.value.clone(),s=sa(e.fieldTransforms,n,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,r,n):e instanceof sn?function(e,t,r,n){if(!i3(e.precondition,t))return r;let i=sa(e.fieldTransforms,n,t),s=t.data;return(s.setAll(si(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===r)?null:r.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,r,n):i3(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):r}function st(e,t){var r,n;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(r=e.fieldTransforms,n=t.fieldTransforms,!!(void 0===r&&void 0===n||!(!r||!n)&&nc(r,n,(e,t)=>{var r,n;return e.field.isEqual(t.field)&&(r=e.transform,n=t.transform,r instanceof iX&&n instanceof iX||r instanceof iJ&&n instanceof iJ?nc(r.elements,n.elements,nH):r instanceof i1&&n instanceof i1?nH(r.Te,n.Te):r instanceof iQ&&n instanceof iQ)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class sr extends i7{constructor(e,t,r,n=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class sn extends i7{constructor(e,t,r,n,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=n,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function si(e){let t=new Map;return e.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){let n=e.data.field(r);t.set(r,n)}}),t}function ss(e,t,r){var n;let i=new Map;e.length===r.length||r6();for(let s=0;s<r.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);i.set(a.field,(n=r[s],o instanceof iX?iY(o,l):o instanceof iJ?i0(o,l):n))}return i}function sa(e,t,r){let n=new Map;for(let i of e){let e=i.transform,s=r.data.field(i.field);n.set(i.field,e instanceof iQ?function(e,t){let r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&nj(t)&&(t=n$(t)),t&&(r.fields.__previous_value__=t),{mapValue:r}}(t,s):e instanceof iX?iY(e,s):e instanceof iJ?i0(e,s):function(e,t){let r=iW(e,t),n=i2(r)+i2(e.Te);return nJ(r)&&nJ(e.Te)?iH(n):iZ(e.serializer,n)}(e,s))}return n}class so extends i7{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sl extends i7{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,t,r,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=n}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var n;n=r[t],i instanceof sr?function(e,t,r){let n=e.value.clone(),i=ss(e.fieldTransforms,t,r.transformResults);n.setAll(i),t.convertToFoundDocument(r.version,n).setHasCommittedMutations()}(i,e,n):i instanceof sn?function(e,t,r){if(!i3(e.precondition,t))return void t.convertToUnknownDocument(r.version);let n=ss(e.fieldTransforms,t,r.transformResults),i=t.data;i.setAll(si(e)),i.setAll(n),t.convertToFoundDocument(r.version,i).setHasCommittedMutations()}(i,e,n):function(e,t,r){t.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=se(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=se(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=i$();return this.mutations.forEach(n=>{let i=e.get(n.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields);a=t.has(n.key)?null:a;let o=i8(s,a);null!==o&&r.set(n.key,o),s.isValidDocument()||s.convertToNoDocument(nd.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),iq())}isEqual(e){return this.batchId===e.batchId&&nc(this.mutations,e.mutations,(e,t)=>st(e,t))&&nc(this.baseMutations,e.baseMutations,(e,t)=>st(e,t))}}class sc{constructor(e,t,r,n){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=n}static from(e,t,r){e.mutations.length===r.length||r6();let n=iB,i=e.mutations;for(let e=0;e<i.length;e++)n=n.insert(i[e].key,r[e].version);return new sc(e,t,r,n)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,t){this.count=e,this.unchangedNames=t}}function sf(e){if(void 0===e)return r4("GRPC error has no .code"),r3.UNKNOWN;switch(e){case o.OK:return r3.OK;case o.CANCELLED:return r3.CANCELLED;case o.UNKNOWN:return r3.UNKNOWN;case o.DEADLINE_EXCEEDED:return r3.DEADLINE_EXCEEDED;case o.RESOURCE_EXHAUSTED:return r3.RESOURCE_EXHAUSTED;case o.INTERNAL:return r3.INTERNAL;case o.UNAVAILABLE:return r3.UNAVAILABLE;case o.UNAUTHENTICATED:return r3.UNAUTHENTICATED;case o.INVALID_ARGUMENT:return r3.INVALID_ARGUMENT;case o.NOT_FOUND:return r3.NOT_FOUND;case o.ALREADY_EXISTS:return r3.ALREADY_EXISTS;case o.PERMISSION_DENIED:return r3.PERMISSION_DENIED;case o.FAILED_PRECONDITION:return r3.FAILED_PRECONDITION;case o.ABORTED:return r3.ABORTED;case o.OUT_OF_RANGE:return r3.OUT_OF_RANGE;case o.UNIMPLEMENTED:return r3.UNIMPLEMENTED;case o.DATA_LOSS:return r3.DATA_LOSS;default:return r6()}}(l=o||(o={}))[l.OK=0]="OK",l[l.CANCELLED=1]="CANCELLED",l[l.UNKNOWN=2]="UNKNOWN",l[l.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",l[l.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",l[l.NOT_FOUND=5]="NOT_FOUND",l[l.ALREADY_EXISTS=6]="ALREADY_EXISTS",l[l.PERMISSION_DENIED=7]="PERMISSION_DENIED",l[l.UNAUTHENTICATED=16]="UNAUTHENTICATED",l[l.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",l[l.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",l[l.ABORTED=10]="ABORTED",l[l.OUT_OF_RANGE=11]="OUT_OF_RANGE",l[l.UNIMPLEMENTED=12]="UNIMPLEMENTED",l[l.INTERNAL=13]="INTERNAL",l[l.UNAVAILABLE=14]="UNAVAILABLE",l[l.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sp=new rQ([4294967295,4294967295],0);function sm(e){let t=(new TextEncoder).encode(e),r=new rW;return r.update(t),new Uint8Array(r.digest())}function sg(e){let t=new DataView(e.buffer),r=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new rQ([r,n],0),new rQ([i,s],0)]}class sy{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new sv(`Invalid padding: ${t}`);if(r<0||e.length>0&&0===this.hashCount)throw new sv(`Invalid hash count: ${r}`);if(0===e.length&&0!==t)throw new sv(`Invalid padding when bitmap length is 0: ${t}`);this.Ae=8*e.length-t,this.Re=rQ.fromNumber(this.Ae)}Ve(e,t,r){let n=e.add(t.multiply(rQ.fromNumber(r)));return 1===n.compare(sp)&&(n=new rQ([n.getBits(0),n.getBits(1)],0)),n.modulo(this.Re).toNumber()}me(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ae)return!1;let t=sm(e),[r,n]=sg(t);for(let e=0;e<this.hashCount;e++){let t=this.Ve(r,n,e);if(!this.me(t))return!1}return!0}static create(e,t,r){let n=new Uint8Array(Math.ceil(e/8)),i=new sy(n,e%8==0?0:8-e%8,t);return r.forEach(e=>i.insert(e)),i}insert(e){if(0===this.Ae)return;let t=sm(e),[r,n]=sg(t);for(let e=0;e<this.hashCount;e++){let t=this.Ve(r,n,e);this.fe(t)}}fe(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class sv extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,t,r,n,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=n,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let n=new Map;return n.set(e,sb.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new sw(nd.min(),n,new nA(nu),iU,iq())}}class sb{constructor(e,t,r,n,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=n,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new sb(r,t,iq(),iq(),iq())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e,t,r,n){this.ge=e,this.removedTargetIds=t,this.key=r,this.pe=n}}class sE{constructor(e,t){this.targetId=e,this.ye=t}}class sI{constructor(e,t,r=nL.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=n}}class sT{constructor(){this.we=0,this.Se=sC(),this.be=nL.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return 0!==this.we}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=iq(),t=iq(),r=iq();return this.Se.forEach((n,i)=>{switch(i){case 0:e=e.add(n);break;case 2:t=t.add(n);break;case 1:r=r.add(n);break;default:r6()}}),new sb(this.be,this.De,e,t,r)}Oe(){this.Ce=!1,this.Se=sC()}Ne(e,t){this.Ce=!0,this.Se=this.Se.insert(e,t)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class sS{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=iU,this.Ue=sk(),this.We=new nA(nu)}Ge(e){for(let t of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(t,e.pe):this.je(t,e.key,e.pe);for(let t of e.removedTargetIds)this.je(t,e.key,e.pe)}He(e){this.forEachTarget(e,t=>{let r=this.Je(t);switch(e.state){case 0:this.Ye(t)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.ve||this.removeTarget(t);break;case 3:this.Ye(t)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(t)&&(this.Ze(t),r.Me(e.resumeToken));break;default:r6()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ke.forEach((e,r)=>{this.Ye(r)&&t(r)})}Xe(e){let t=e.targetId,r=e.ye.count,n=this.et(t);if(n){let i=n.target;if(i_(i)){if(0===r){let e=new ny(i.path);this.je(t,e,n3.newNoDocument(e,nd.min()))}else 1===r||r6()}else{let n=this.tt(t);if(n!==r){let r=this.nt(e),i=r?this.rt(r,e,n):1;0!==i&&(this.Ze(t),this.We=this.We.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}nt(e){let t,r;let n=e.ye.unchangedNames;if(!n||!n.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:a=0}=n;try{t=nV(i).toUint8Array()}catch(e){if(e instanceof nD)return r9("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{r=new sy(t,s,a)}catch(e){return r9(e instanceof sv?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===r.Ae?null:r}rt(e,t,r){return t.ye.count===r-this.ot(e,t.targetId)?0:2}ot(e,t){let r=this.Qe.getRemoteKeysForTarget(t),n=0;return r.forEach(r=>{let i=this.Qe.st(),s=`projects/${i.projectId}/databases/${i.database}/documents/${r.path.canonicalString()}`;e.mightContain(s)||(this.je(t,r,null),n++)}),n}_t(e){let t=new Map;this.Ke.forEach((r,n)=>{let i=this.et(n);if(i){if(r.current&&i_(i.target)){let t=new ny(i.target.path);null!==this.$e.get(t)||this.ut(n,t)||this.je(n,t,n3.newNoDocument(t,e))}r.Fe&&(t.set(n,r.xe()),r.Oe())}});let r=iq();this.Ue.forEach((e,t)=>{let n=!0;t.forEachWhile(e=>{let t=this.et(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(n=!1,!1)}),n&&(r=r.add(e))}),this.$e.forEach((t,r)=>r.setReadTime(e));let n=new sw(e,t,this.We,this.$e,r);return this.$e=iU,this.Ue=sk(),this.We=new nA(nu),n}ze(e,t){if(!this.Ye(e))return;let r=this.ut(e,t.key)?2:0;this.Je(e).Ne(t.key,r),this.$e=this.$e.insert(t.key,t),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}je(e,t,r){if(!this.Ye(e))return;let n=this.Je(e);this.ut(e,t)?n.Ne(t,1):n.Be(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),r&&(this.$e=this.$e.insert(t,r))}removeTarget(e){this.Ke.delete(e)}tt(e){let t=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let t=this.Ke.get(e);return t||(t=new sT,this.Ke.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new nR(nu),this.Ue=this.Ue.insert(e,t)),t}Ye(e){let t=null!==this.et(e);return t||r2("WatchChangeAggregator","Detected inactive target",e),t}et(e){let t=this.Ke.get(e);return t&&t.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new sT),this.Qe.getRemoteKeysForTarget(e).forEach(t=>{this.je(e,t,null)})}ut(e,t){return this.Qe.getRemoteKeysForTarget(e).has(t)}}function sk(){return new nA(ny.comparator)}function sC(){return new nA(ny.comparator)}let sA={asc:"ASCENDING",desc:"DESCENDING"},sN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sx={and:"AND",or:"OR"};class sR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function sO(e,t){return e.useProto3Json||null==t?t:{value:t}}function sP(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function sD(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function sL(e){return e||r6(),nd.fromTimestamp(function(e){let t=nU(e);return new nh(t.seconds,t.nanos)}(e))}function sM(e,t){return new np(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function sU(e){let t=np.fromString(e);return sZ(t)||r6(),t}function sF(e,t){return sM(e.databaseId,t.path)}function sV(e,t){let r=sU(t);if(r.get(1)!==e.databaseId.projectId)throw new r7(r3.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+e.databaseId.projectId);if(r.get(3)!==e.databaseId.database)throw new r7(r3.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+e.databaseId.database);return new ny(sB(r))}function sj(e,t){return sM(e.databaseId,t)}function s$(e){return new np(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function sB(e){return e.length>4&&"documents"===e.get(4)||r6(),e.popFirst(5)}function sz(e,t,r){return{name:sF(e,t),fields:r.value.mapValue.fields}}function sq(e){return{fieldPath:e.canonicalString()}}function sK(e){return ng.fromServerFormat(e.fieldPath)}function sZ(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sH{constructor(e,t,r,n,i=nd.min(),s=nd.min(),a=nL.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=n,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new sH(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new sH(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new sH(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new sH(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sG{constructor(e){this.ht=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sW{constructor(){}dt(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.At(t,5);else if("booleanValue"in e)this.At(t,10),t.Rt(e.booleanValue?1:0);else if("integerValue"in e)this.At(t,15),t.Rt(nF(e.integerValue));else if("doubleValue"in e){let r=nF(e.doubleValue);isNaN(r)?this.At(t,13):(this.At(t,15),nT(r)?t.Rt(0):t.Rt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.At(t,20),"string"==typeof r?t.Vt(r):(t.Vt(`${r.seconds||""}`),t.Rt(r.nanos||0))}else if("stringValue"in e)this.ft(e.stringValue,t),this.gt(t);else if("bytesValue"in e)this.At(t,30),t.yt(nV(e.bytesValue)),this.gt(t);else if("referenceValue"in e)this.wt(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.At(t,45),t.Rt(r.latitude||0),t.Rt(r.longitude||0)}else"mapValue"in e?n5(e)?this.At(t,Number.MAX_SAFE_INTEGER):(this.St(e.mapValue,t),this.gt(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.gt(t)):r6()}ft(e,t){this.At(t,25),this.Dt(e,t)}Dt(e,t){t.Vt(e)}St(e,t){let r=e.fields||{};for(let e of(this.At(t,55),Object.keys(r)))this.ft(e,t),this.Tt(r[e],t)}bt(e,t){let r=e.values||[];for(let e of(this.At(t,50),r))this.Tt(e,t)}wt(e,t){this.At(t,37),ny.fromName(e).path.forEach(e=>{this.At(t,60),this.Dt(e,t)})}At(e,t){e.Rt(t)}gt(e){e.Rt(2)}}sW.Ct=new sW;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sQ{constructor(){this.an=new sX}addToCollectionParentIndex(e,t){return this.an.add(t),n_.resolve()}getCollectionParents(e,t){return n_.resolve(this.an.getEntries(t))}addFieldIndex(e,t){return n_.resolve()}deleteFieldIndex(e,t){return n_.resolve()}deleteAllFieldIndexes(e){return n_.resolve()}createTargetIndexes(e,t){return n_.resolve()}getDocumentsMatchingTarget(e,t){return n_.resolve(null)}getIndexType(e,t){return n_.resolve(0)}getFieldIndexes(e,t){return n_.resolve([])}getNextCollectionGroupToUpdate(e){return n_.resolve(null)}getMinOffset(e,t){return n_.resolve(nv.min())}getMinOffsetFromCollectionGroup(e,t){return n_.resolve(nv.min())}updateCollectionGroup(e,t,r){return n_.resolve()}updateIndexEntries(e,t){return n_.resolve()}}class sX{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t]||new nR(np.comparator),i=!n.has(r);return this.index[t]=n.add(r),i}has(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t];return n&&n.has(r)}getEntries(e){return(this.index[e]||new nR(np.comparator)).toArray()}}new Uint8Array(0);class sY{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new sY(e,sY.DEFAULT_COLLECTION_PERCENTILE,sY.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sY.DEFAULT_COLLECTION_PERCENTILE=10,sY.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,sY.DEFAULT=new sY(41943040,sY.DEFAULT_COLLECTION_PERCENTILE,sY.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),sY.DISABLED=new sY(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sJ{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new sJ(0)}static Ln(){return new sJ(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(){this.changes=new iM(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,n3.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return void 0!==r?n_.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e,t,r,n){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=n}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(n=>(r=n,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==r&&se(r.mutation,e,nP.empty(),nh.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,iq()).next(()=>t))}getLocalViewOfDocuments(e,t,r=iq()){let n=i$();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,r).next(e=>{let t=iV();return e.forEach((e,r)=>{t=t.insert(e,r.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let r=i$();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,iq()))}populateOverlays(e,t,r){let n=[];return r.forEach(e=>{t.has(e)||n.push(e)}),this.documentOverlayCache.getOverlays(e,n).next(e=>{e.forEach((e,r)=>{t.set(e,r)})})}computeViews(e,t,r,n){let i=iU,s=i$(),a=i$();return t.forEach((e,t)=>{let a=r.get(t.key);n.has(t.key)&&(void 0===a||a.mutation instanceof sn)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),se(a.mutation,t,a.mutation.getFieldMask(),nh.now())):s.set(t.key,nP.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var r;return a.set(e,new s1(t,null!==(r=s.get(e))&&void 0!==r?r:null))}),a))}recalculateAndSaveOverlays(e,t){let r=i$(),n=new nA((e,t)=>e-t),i=iq();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=r.get(e)||nP.empty();a=i.applyToLocalView(s,a),r.set(e,a);let o=(n.get(i.batchId)||iq()).add(e);n=n.insert(i.batchId,o)})}).next(()=>{let s=[],a=n.getReverseIterator();for(;a.hasNext();){let n=a.getNext(),o=n.key,l=n.value,u=i$();l.forEach(e=>{if(!i.has(e)){let n=i8(t.get(e),r.get(e));null!==n&&u.set(e,n),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return n_.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,r,n){return ny.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):ik(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,n):this.getDocumentsMatchingCollectionQuery(e,t,r,n)}getNextDocuments(e,t,r,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,n).next(i=>{let s=n-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,n-i.size):n_.resolve(i$()),a=-1,o=i;return s.next(t=>n_.forEach(t,(t,r)=>(a<r.largestBatchId&&(a=r.largestBatchId),i.get(t)?n_.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,iq())).next(e=>({batchId:a,changes:ij(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ny(t)).next(e=>{let t=iV();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,r,n){let i=t.collectionGroup,s=iV();return this.indexManager.getCollectionParents(e,i).next(a=>n_.forEach(a,a=>{var o;let l=(o=a.child(i),new iE(o,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,l,r,n).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r,n){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,n))).next(e=>{i.forEach((t,r)=>{let n=r.getKey();null===e.get(n)&&(e=e.insert(n,n3.newInvalidDocument(n)))});let r=iV();return e.forEach((e,n)=>{let s=i.get(e);void 0!==s&&se(s.mutation,n,nP.empty(),nh.now()),iD(t,n)&&(r=r.insert(e,n))}),r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s4{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,t){return n_.resolve(this.lr.get(t))}saveBundleMetadata(e,t){return this.lr.set(t.id,{id:t.id,version:t.version,createTime:sL(t.createTime)}),n_.resolve()}getNamedQuery(e,t){return n_.resolve(this.hr.get(t))}saveNamedQuery(e,t){return this.hr.set(t.name,{name:t.name,query:function(e){let t=function(e){var t,r,n,i,s,a,o,l;let u,c=function(e){let t=sU(e);return 4===t.length?np.emptyPath():sB(t)}(e.parent),h=e.structuredQuery,d=h.from?h.from.length:0,f=null;if(d>0){1===d||r6();let e=h.from[0];e.allDescendants?f=e.collectionId:c=c.child(e.collectionId)}let p=[];h.where&&(p=function(e){var t;let r=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=sK(e.unaryFilter.field);return ii.create(t,"==",{doubleValue:NaN});case"IS_NULL":let r=sK(e.unaryFilter.field);return ii.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let n=sK(e.unaryFilter.field);return ii.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=sK(e.unaryFilter.field);return ii.create(i,"!=",{nullValue:"NULL_VALUE"});default:return r6()}}(t):void 0!==t.fieldFilter?ii.create(sK(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return r6()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?is.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return r6()}}(t.compositeFilter.op)):r6()}(e);return r instanceof is&&io(t=r)&&ia(t)?r.getFilters():[r]}(h.where));let m=[];h.orderBy&&(m=h.orderBy.map(e=>new it(sK(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let g=null;h.limit&&(g=null==(u="object"==typeof(t=h.limit)?t.value:t)?null:u);let y=null;h.startAt&&(y=function(e){let t=!!e.before,r=e.values||[];return new n7(r,t)}(h.startAt));let v=null;return h.endAt&&(v=function(e){let t=!e.before,r=e.values||[];return new n7(r,t)}(h.endAt)),r=c,n=f,i=m,s=p,a=g,o=y,l=v,new iE(r,n,i,s,a,"F",o,l)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?ix(t,t.limit,"L"):t}(t.bundledQuery),readTime:sL(t.readTime)}),n_.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s9{constructor(){this.overlays=new nA(ny.comparator),this.Pr=new Map}getOverlay(e,t){return n_.resolve(this.overlays.get(t))}getOverlays(e,t){let r=i$();return n_.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&r.set(t,e)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((r,n)=>{this.It(e,t,n)}),n_.resolve()}removeOverlaysForBatchId(e,t,r){let n=this.Pr.get(r);return void 0!==n&&(n.forEach(e=>this.overlays=this.overlays.remove(e)),this.Pr.delete(r)),n_.resolve()}getOverlaysForCollection(e,t,r){let n=i$(),i=t.length+1,s=new ny(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>r&&n.set(e.getKey(),e)}return n_.resolve(n)}getOverlaysForCollectionGroup(e,t,r,n){let i=new nA((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>r){let t=i.get(e.largestBatchId);null===t&&(t=i$(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=i$(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=n)););return n_.resolve(a)}It(e,t,r){let n=this.overlays.get(r.key);if(null!==n){let e=this.Pr.get(n.largestBatchId).delete(r.key);this.Pr.set(n.largestBatchId,e)}this.overlays=this.overlays.insert(r.key,new sh(t,r));let i=this.Pr.get(t);void 0===i&&(i=iq(),this.Pr.set(t,i)),this.Pr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s5{constructor(){this.Ir=new nR(s6.dr),this.Tr=new nR(s6.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,t){let r=new s6(e,t);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Rr(new s6(e,t))}Vr(e,t){e.forEach(e=>this.removeReference(e,t))}mr(e){let t=new ny(new np([])),r=new s6(t,e),n=new s6(t,e+1),i=[];return this.Tr.forEachInRange([r,n],e=>{this.Rr(e),i.push(e.key)}),i}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){let t=new ny(new np([])),r=new s6(t,e),n=new s6(t,e+1),i=iq();return this.Tr.forEachInRange([r,n],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new s6(e,0),r=this.Ir.firstAfterOrEqual(t);return null!==r&&e.isEqual(r.key)}}class s6{constructor(e,t){this.key=e,this.yr=t}static dr(e,t){return ny.comparator(e.key,t.key)||nu(e.yr,t.yr)}static Er(e,t){return nu(e.yr,t.yr)||ny.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s3{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.wr=1,this.Sr=new nR(s6.dr)}checkEmpty(e){return n_.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,r,n){let i=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new su(i,t,r,n);for(let t of(this.mutationQueue.push(s),n))this.Sr=this.Sr.add(new s6(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return n_.resolve(s)}lookupMutationBatch(e,t){return n_.resolve(this.br(t))}getNextMutationBatchAfterBatchId(e,t){let r=this.Dr(t+1),n=r<0?0:r;return n_.resolve(this.mutationQueue.length>n?this.mutationQueue[n]:null)}getHighestUnacknowledgedBatchId(){return n_.resolve(0===this.mutationQueue.length?-1:this.wr-1)}getAllMutationBatches(e){return n_.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new s6(t,0),n=new s6(t,Number.POSITIVE_INFINITY),i=[];return this.Sr.forEachInRange([r,n],e=>{let t=this.br(e.yr);i.push(t)}),n_.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new nR(nu);return t.forEach(e=>{let t=new s6(e,0),n=new s6(e,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([t,n],e=>{r=r.add(e.yr)})}),n_.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,n=r.length+1,i=r;ny.isDocumentKey(i)||(i=i.child(""));let s=new s6(new ny(i),0),a=new nR(nu);return this.Sr.forEachWhile(e=>{let t=e.key.path;return!!r.isPrefixOf(t)&&(t.length===n&&(a=a.add(e.yr)),!0)},s),n_.resolve(this.Cr(a))}Cr(e){let t=[];return e.forEach(e=>{let r=this.br(e);null!==r&&t.push(r)}),t}removeMutationBatch(e,t){0===this.vr(t.batchId,"removed")||r6(),this.mutationQueue.shift();let r=this.Sr;return n_.forEach(t.mutations,n=>{let i=new s6(n.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,t){let r=new s6(t,0),n=this.Sr.firstAfterOrEqual(r);return n_.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,n_.resolve()}vr(e,t){return this.Dr(e)}Dr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}br(e){let t=this.Dr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s7{constructor(e){this.Fr=e,this.docs=new nA(ny.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,n=this.docs.get(r),i=n?n.size:0,s=this.Fr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return n_.resolve(r?r.document.mutableCopy():n3.newInvalidDocument(t))}getEntries(e,t){let r=iU;return t.forEach(e=>{let t=this.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():n3.newInvalidDocument(e))}),n_.resolve(r)}getDocumentsMatchingQuery(e,t,r,n){let i=iU,s=t.path,a=new ny(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let r=e.readTime.compareTo(t.readTime);return 0!==r?r:0!==(r=ny.comparator(e.documentKey,t.documentKey))?r:nu(e.largestBatchId,t.largestBatchId)}(new nv(a.readTime,a.key,-1),r)||(n.has(a.key)||iD(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return n_.resolve(i)}getAllFromCollectionGroup(e,t,r,n){r6()}Mr(e,t){return n_.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new s8(this)}getSize(e){return n_.resolve(this.size)}}class s8 extends s0{constructor(e){super(),this.ur=e}applyChanges(e){let t=[];return this.changes.forEach((r,n)=>{n.isValidDocument()?t.push(this.ur.addEntry(e,n)):this.ur.removeEntry(r)}),n_.waitFor(t)}getFromCache(e,t){return this.ur.getEntry(e,t)}getAllFromCache(e,t){return this.ur.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.persistence=e,this.Or=new iM(e=>iw(e),ib),this.lastRemoteSnapshotVersion=nd.min(),this.highestTargetId=0,this.Nr=0,this.Br=new s5,this.targetCount=0,this.Lr=sJ.Bn()}forEachTarget(e,t){return this.Or.forEach((e,r)=>t(r)),n_.resolve()}getLastRemoteSnapshotVersion(e){return n_.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return n_.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),n_.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Nr&&(this.Nr=t),n_.resolve()}Qn(e){this.Or.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Lr=new sJ(t),this.highestTargetId=t),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,t){return this.Qn(t),this.targetCount+=1,n_.resolve()}updateTargetData(e,t){return this.Qn(t),n_.resolve()}removeTargetData(e,t){return this.Or.delete(t.target),this.Br.mr(t.targetId),this.targetCount-=1,n_.resolve()}removeTargets(e,t,r){let n=0,i=[];return this.Or.forEach((s,a)=>{a.sequenceNumber<=t&&null===r.get(a.targetId)&&(this.Or.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),n++)}),n_.waitFor(i).next(()=>n)}getTargetCount(e){return n_.resolve(this.targetCount)}getTargetData(e,t){let r=this.Or.get(t)||null;return n_.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Ar(t,r),n_.resolve()}removeMatchingKeys(e,t,r){this.Br.Vr(t,r);let n=this.persistence.referenceDelegate,i=[];return n&&t.forEach(t=>{i.push(n.markPotentiallyOrphaned(e,t))}),n_.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.mr(t),n_.resolve()}getMatchingKeysForTargetId(e,t){let r=this.Br.pr(t);return n_.resolve(r)}containsKey(e,t){return n_.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,t){this.kr={},this.overlays={},this.qr=new nI(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new ae(this),this.indexManager=new sQ,this.remoteDocumentCache=new s7(e=>this.referenceDelegate.$r(e)),this.serializer=new sG(t),this.Ur=new s4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new s9,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.kr[e.toKey()];return r||(r=new s3(t,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,t,r){r2("MemoryPersistence","Starting transaction:",e);let n=new ar(this.qr.next());return this.referenceDelegate.Wr(),r(n).next(e=>this.referenceDelegate.Gr(n).next(()=>e)).toPromise().then(e=>(n.raiseOnCommittedEvent(),e))}zr(e,t){return n_.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,t)))}}class ar extends nw{constructor(e){super(),this.currentSequenceNumber=e}}class an{constructor(e){this.persistence=e,this.jr=new s5,this.Hr=null}static Jr(e){return new an(e)}get Yr(){if(this.Hr)return this.Hr;throw r6()}addReference(e,t,r){return this.jr.addReference(r,t),this.Yr.delete(r.toString()),n_.resolve()}removeReference(e,t,r){return this.jr.removeReference(r,t),this.Yr.add(r.toString()),n_.resolve()}markPotentiallyOrphaned(e,t){return this.Yr.add(t.toString()),n_.resolve()}removeTarget(e,t){this.jr.mr(t.targetId).forEach(e=>this.Yr.add(e.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Yr.add(e.toString()))}).next(()=>r.removeTargetData(e,t))}Wr(){this.Hr=new Set}Gr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return n_.forEach(this.Yr,r=>{let n=ny.fromPath(r);return this.Zr(e,n).next(e=>{e||t.removeEntry(n,nd.min())})}).next(()=>(this.Hr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Zr(e,t).next(e=>{e?this.Yr.delete(t.toString()):this.Yr.add(t.toString())})}$r(e){return 0}Zr(e,t){return n_.or([()=>n_.resolve(this.jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.zr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,t,r,n){this.targetId=e,this.fromCache=t,this.Qi=r,this.Ki=n}static $i(e,t){let r=iq(),n=iq();for(let e of t.docChanges)switch(e.type){case 0:r=r.add(e.doc.key);break;case 1:n=n.add(e.doc.key)}return new ai(e,t.fromCache,r,n)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(e,t){this.ji=e,this.indexManager=t,this.Ui=!0}getDocumentsMatchingQuery(e,t,r,n){let i={result:null};return this.Hi(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.Ji(e,t,n,r).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let r=new as;return this.Yi(e,t,r).next(n=>{if(i.result=n,this.Wi)return this.Zi(e,t,r,n.size)})}).next(()=>i.result)}Zi(e,t,r,n){return r.documentReadCount<this.Gi?(r1()<=d.in.DEBUG&&r2("QueryEngine","SDK will not create cache indexes for query:",iP(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),n_.resolve()):(r1()<=d.in.DEBUG&&r2("QueryEngine","Query:",iP(t),"scans",r.documentReadCount,"local documents and returns",n,"documents as results."),r.documentReadCount>this.zi*n?(r1()<=d.in.DEBUG&&r2("QueryEngine","The SDK decides to create cache indexes for query:",iP(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,iA(t))):n_.resolve())}Hi(e,t){if(iI(t))return n_.resolve(null);let r=iA(t);return this.indexManager.getIndexType(e,r).next(n=>0===n?null:(null!==t.limit&&1===n&&(r=iA(t=ix(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,r).next(n=>{let i=iq(...n);return this.ji.getDocuments(e,i).next(n=>this.indexManager.getMinOffset(e,r).next(r=>{let s=this.Xi(t,n);return this.es(t,s,i,r.readTime)?this.Hi(e,ix(t,null,"F")):this.ts(e,s,t,r)}))})))}Ji(e,t,r,n){return iI(t)||n.isEqual(nd.min())?n_.resolve(null):this.ji.getDocuments(e,r).next(i=>{let s=this.Xi(t,i);return this.es(t,s,r,n)?n_.resolve(null):(r1()<=d.in.DEBUG&&r2("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),iP(t)),this.ts(e,s,t,function(e,t){let r=e.toTimestamp().seconds,n=e.toTimestamp().nanoseconds+1,i=nd.fromTimestamp(1e9===n?new nh(r+1,0):new nh(r,n));return new nv(i,ny.empty(),-1)}(n,0)).next(e=>e))})}Xi(e,t){let r=new nR(iL(e));return t.forEach((t,n)=>{iD(e,n)&&(r=r.add(n))}),r}es(e,t,r,n){if(null===e.limit)return!1;if(r.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(n)>0)}Yi(e,t,r){return r1()<=d.in.DEBUG&&r2("QueryEngine","Using full collection scan to execute query:",iP(t)),this.ji.getDocumentsMatchingQuery(e,t,nv.min(),r)}ts(e,t,r,n){return this.ji.getDocumentsMatchingQuery(e,r,n).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,t,r,n){this.persistence=e,this.ns=t,this.serializer=n,this.rs=new nA(nu),this.ss=new iM(e=>iw(e),ib),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new s2(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.rs))}}async function al(e,t){return await e.persistence.runTransaction("Handle user change","readonly",r=>{let n;return e.mutationQueue.getAllMutationBatches(r).next(i=>(n=i,e.us(t),e.mutationQueue.getAllMutationBatches(r))).next(t=>{let i=[],s=[],a=iq();for(let e of n)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(r,a).next(e=>({cs:e,removedBatchIds:i,addedBatchIds:s}))})})}function au(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Kr.getLastRemoteSnapshotVersion(t))}async function ac(e,t,r){let n=e.rs.get(t);try{r||await e.persistence.runTransaction("Release target",r?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,n))}catch(e){if(!nE(e))throw e;r2("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.rs=e.rs.remove(t),e.ss.delete(n.target)}function ah(e,t,r){let n=nd.min(),i=iq();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,r){let n=e.ss.get(r);return void 0!==n?n_.resolve(e.rs.get(n)):e.Kr.getTargetData(t,r)})(e,s,iA(t)).next(t=>{if(t)return n=t.lastLimboFreeSnapshotVersion,e.Kr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.ns.getDocumentsMatchingQuery(s,t,r?n:nd.min(),r?i:iq())).next(r=>{var n;let s;return n=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.os.get(n)||nd.min(),r.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.os.set(n,s),{documents:r,Ps:i}}))}class ad{constructor(){this.activeTargetIds=iK}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class af{constructor(){this.ro=new ad,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,t,r){this.io[e]=t}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new ad,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{so(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){for(let e of(r2("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.co))e(0)}uo(){for(let e of(r2("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.co))e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ag=null;function ay(){return null===ag?ag=268435456+Math.round(2147483648*Math.random()):ag++,"0x"+ag.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let av={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ab="WebChannelConnection";class a_ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),n=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${n}`,this.wo="(default)"===this.databaseId.database?`project_id=${r}`:`project_id=${r}&database_id=${n}`}get So(){return!1}bo(e,t,r,n,i){let s=ay(),a=this.Do(e,t);r2("RestConnection",`Sending RPC '${e}' ${s}:`,a,r);let o={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(o,n,i),this.vo(e,a,o,r).then(t=>(r2("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw r9("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",r),t})}Fo(e,t,r,n,i,s){return this.bo(e,t,r,n,i)}Co(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+rJ}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,r)=>e[r]=t),r&&r.headers.forEach((t,r)=>e[r]=t)}Do(e,t){let r=av[e];return`${this.po}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,n){let i=ay();return new Promise((s,a)=>{let o=new rG;o.setWithCredentials(!0),o.listenOnce(rq.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case rz.NO_ERROR:let t=o.getResponseJson();r2(ab,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case rz.TIMEOUT:r2(ab,`RPC '${e}' ${i} timed out`),a(new r7(r3.DEADLINE_EXCEEDED,"Request time out"));break;case rz.HTTP_ERROR:let r=o.getStatus();if(r2(ab,`RPC '${e}' ${i} failed with status:`,r,"response text:",o.getResponseText()),r>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(r3).indexOf(t)>=0?t:r3.UNKNOWN}(t.status);a(new r7(e,t.message))}else a(new r7(r3.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new r7(r3.UNAVAILABLE,"Connection failed."));break;default:r6()}}finally{r2(ab,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(n);r2(ab,`RPC '${e}' ${i} sending request:`,n),o.send(t,"POST",l,r,15)})}Mo(e,t,r){let n=ay(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=r$(),a=rB(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Co(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;let c=i.join("");r2(ab,`Creating RPC '${e}' stream ${n}: ${c}`,l);let h=s.createWebChannel(c,l),d=!1,f=!1,p=new aw({ho:t=>{f?r2(ab,`Not sending because RPC '${e}' stream ${n} is closed:`,t):(d||(r2(ab,`Opening RPC '${e}' stream ${n} transport.`),h.open(),d=!0),r2(ab,`RPC '${e}' stream ${n} sending:`,t),h.send(t))},Po:()=>h.close()}),m=(e,t,r)=>{e.listen(t,e=>{try{r(e)}catch(e){setTimeout(()=>{throw e},0)}})};return m(h,rH.EventType.OPEN,()=>{f||r2(ab,`RPC '${e}' stream ${n} transport opened.`)}),m(h,rH.EventType.CLOSE,()=>{f||(f=!0,r2(ab,`RPC '${e}' stream ${n} transport closed`),p.mo())}),m(h,rH.EventType.ERROR,t=>{f||(f=!0,r9(ab,`RPC '${e}' stream ${n} transport errored:`,t),p.mo(new r7(r3.UNAVAILABLE,"The operation could not be completed")))}),m(h,rH.EventType.MESSAGE,t=>{var r;if(!f){let i=t.data[0];i||r6();let s=i.error||(null===(r=i[0])||void 0===r?void 0:r.error);if(s){r2(ab,`RPC '${e}' stream ${n} received error:`,s);let t=s.status,r=function(e){let t=o[e];if(void 0!==t)return sf(t)}(t),i=s.message;void 0===r&&(r=r3.INTERNAL,i="Unknown error status: "+t+" with message "+s.message),f=!0,p.mo(new r7(r,i)),h.close()}else r2(ab,`RPC '${e}' stream ${n} received:`,i),p.fo(i)}}),m(a,rK.STAT_EVENT,t=>{t.stat===rZ.PROXY?r2(ab,`RPC '${e}' stream ${n} detected buffering proxy`):t.stat===rZ.NOPROXY&&r2(ab,`RPC '${e}' stream ${n} detected no buffering proxy`)}),setTimeout(()=>{p.Vo()},0),p}}function aE(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(e){return new sR(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e,t,r=1e3,n=1.5,i=6e4){this._i=e,this.timerId=t,this.xo=r,this.Oo=n,this.No=i,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();let t=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),n=Math.max(0,t-r);n>0&&r2("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.Bo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,n,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){null!==this.Lo&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){null!==this.Lo&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e,t,r,n,i,s,a,o){this._i=e,this.Uo=r,this.Wo=n,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new aT(e,t)}Jo(){return 1===this.state||5===this.state||this.Yo()}Yo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&null===this.zo&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,t){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,4!==e?this.Ho.reset():t&&t.code===r3.RESOURCE_EXHAUSTED?(r4(t.toString()),r4("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):t&&t.code===r3.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(t)}s_(){}auth(){this.state=1;let e=this.o_(this.Go),t=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,r])=>{this.Go===t&&this.__(e,r)},t=>{e(()=>{let e=new r7(r3.UNKNOWN,"Fetching auth token failed: "+t.message);return this.a_(e)})})}__(e,t){let r=this.o_(this.Go);this.stream=this.u_(e,t),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(e=>{r(()=>this.a_(e))}),this.stream.onMessage(e=>{r(()=>this.onMessage(e))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return r2("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return t=>{this._i.enqueueAndForget(()=>this.Go===e?t():(r2("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ak extends aS{constructor(e,t,r,n,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,n,s),this.serializer=i}u_(e,t){return this.connection.Mo("Listen",e,t)}onMessage(e){this.Ho.reset();let t=function(e,t){let r;if("targetChange"in t){var n,i;t.targetChange;let s="NO_CHANGE"===(n=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===n?1:"REMOVE"===n?2:"CURRENT"===n?3:"RESET"===n?4:r6(),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||r6(),nL.fromBase64String(i||"")):(void 0===i||i instanceof Uint8Array||r6(),nL.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause,u=l&&function(e){let t=void 0===e.code?r3.UNKNOWN:sf(e.code);return new r7(t,e.message||"")}(l);r=new sI(s,a,o,u||null)}else if("documentChange"in t){t.documentChange;let n=t.documentChange;n.document,n.document.name,n.document.updateTime;let i=sV(e,n.document.name),s=sL(n.document.updateTime),a=n.document.createTime?sL(n.document.createTime):nd.min(),o=new n6({mapValue:{fields:n.document.fields}}),l=n3.newFoundDocument(i,s,a,o),u=n.targetIds||[],c=n.removedTargetIds||[];r=new s_(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;let n=t.documentDelete;n.document;let i=sV(e,n.document),s=n.readTime?sL(n.readTime):nd.min(),a=n3.newNoDocument(i,s),o=n.removedTargetIds||[];r=new s_([],o,a.key,a)}else if("documentRemove"in t){t.documentRemove;let n=t.documentRemove;n.document;let i=sV(e,n.document),s=n.removedTargetIds||[];r=new s_([],s,i,null)}else{if(!("filter"in t))return r6();{t.filter;let e=t.filter;e.targetId;let{count:n=0,unchangedNames:i}=e,s=new sd(n,i),a=e.targetId;r=new sE(a,s)}}return r}(this.serializer,e),r=function(e){if(!("targetChange"in e))return nd.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?nd.min():t.readTime?sL(t.readTime):nd.min()}(e);return this.listener.c_(t,r)}l_(e){let t={};t.database=s$(this.serializer),t.addTarget=function(e,t){let r;let n=t.target;if((r=i_(n)?{documents:{documents:[sj(e,n.path)]}}:{query:function(e,t){var r,n;let i={structuredQuery:{}},s=t.path;null!==t.collectionGroup?(i.parent=sj(e,s),i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i.parent=sj(e,s.popLast()),i.structuredQuery.from=[{collectionId:s.lastSegment()}]);let a=function(e){if(0!==e.length)return function e(t){return t instanceof ii?function(e){if("=="===e.op){if(n2(e.value))return{unaryFilter:{field:sq(e.field),op:"IS_NAN"}};if(n1(e.value))return{unaryFilter:{field:sq(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(n2(e.value))return{unaryFilter:{field:sq(e.field),op:"IS_NOT_NAN"}};if(n1(e.value))return{unaryFilter:{field:sq(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sq(e.field),op:sN[e.op],value:e.value}}}(t):t instanceof is?function(t){let r=t.getFilters().map(t=>e(t));return 1===r.length?r[0]:{compositeFilter:{op:sx[t.op],filters:r}}}(t):r6()}(is.create(e,"and"))}(t.filters);a&&(i.structuredQuery.where=a);let o=function(e){if(0!==e.length)return e.map(e=>({field:sq(e.field),direction:sA[e.dir]}))}(t.orderBy);o&&(i.structuredQuery.orderBy=o);let l=sO(e,t.limit);return null!==l&&(i.structuredQuery.limit=l),t.startAt&&(i.structuredQuery.startAt={before:(r=t.startAt).inclusive,values:r.position}),t.endAt&&(i.structuredQuery.endAt={before:!(n=t.endAt).inclusive,values:n.position}),i}(e,n)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){r.resumeToken=sD(e,t.resumeToken);let n=sO(e,t.expectedCount);null!==n&&(r.expectedCount=n)}else if(t.snapshotVersion.compareTo(nd.min())>0){r.readTime=sP(e,t.snapshotVersion.toTimestamp());let n=sO(e,t.expectedCount);null!==n&&(r.expectedCount=n)}return r}(this.serializer,e);let r=function(e,t){let r=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return r6()}}(t.purpose);return null==r?null:{"goog-listen-tags":r}}(this.serializer,e);r&&(t.labels=r),this.n_(t)}h_(e){let t={};t.database=s$(this.serializer),t.removeTarget=e,this.n_(t)}}class aC extends aS{constructor(e,t,r,n,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,n,s),this.serializer=i,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,t){return this.connection.Mo("Write",e,t)}onMessage(e){var t,r;if(e.streamToken||r6(),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();let n=(t=e.writeResults,r=e.commitTime,t&&t.length>0?(void 0!==r||r6(),t.map(e=>{let t;return(t=e.updateTime?sL(e.updateTime):sL(r)).isEqual(nd.min())&&(t=sL(r)),new i5(t,e.transformResults||[])})):[]),i=sL(e.commitTime);return this.listener.T_(i,n)}return e.writeResults&&0!==e.writeResults.length&&r6(),this.P_=!0,this.listener.E_()}A_(){let e={};e.database=s$(this.serializer),this.n_(e)}d_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var r;let n;if(t instanceof sr)n={update:sz(e,t.key,t.value)};else if(t instanceof so)n={delete:sF(e,t.key)};else if(t instanceof sn)n={update:sz(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof sl))return r6();n={verify:sF(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let r=t.transform;if(r instanceof iQ)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(r instanceof iX)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:r.elements}};if(r instanceof iJ)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:r.elements}};if(r instanceof i1)return{fieldPath:t.field.canonicalString(),increment:r.Te};throw r6()})(0,e))),t.precondition.isNone||(n.currentDocument=void 0!==(r=t.precondition).updateTime?{updateTime:sP(e,r.updateTime.toTimestamp())}:void 0!==r.exists?{exists:r.exists}:r6()),n})(this.serializer,e))};this.n_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA extends class{}{constructor(e,t,r,n){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=n,this.R_=!1}V_(){if(this.R_)throw new r7(r3.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,t,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([n,i])=>this.connection.bo(e,t,r,n,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===r3.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new r7(r3.UNKNOWN,e.toString())})}Fo(e,t,r,n){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Fo(e,t,r,i,s,n)).catch(e=>{throw"FirebaseError"===e.name?(e.code===r3.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new r7(r3.UNKNOWN,e.toString())})}terminate(){this.R_=!0}}class aN{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){0===this.f_&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){"Online"===this.state?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,"Online"===e&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(r4(t),this.p_=!1):r2("OnlineStateTracker",t)}D_(){null!==this.g_&&(this.g_.cancel(),this.g_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e,t,r,n,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=i,this.x_.so(e=>{r.enqueueAndForget(async()=>{aV(this)&&(r2("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.F_.add(4),await aO(e),e.O_.set("Unknown"),e.F_.delete(4),await aR(e)}(this))})}),this.O_=new aN(r,n)}}async function aR(e){if(aV(e))for(let t of e.M_)await t(!0)}async function aO(e){for(let t of e.M_)await t(!1)}function aP(e,t){e.v_.has(t.targetId)||(e.v_.set(t.targetId,t),aF(e)?aU(e):a0(e).Yo()&&aL(e,t))}function aD(e,t){let r=a0(e);e.v_.delete(t),r.Yo()&&aM(e,t),0===e.v_.size&&(r.Yo()?r.e_():aV(e)&&e.O_.set("Unknown"))}function aL(e,t){if(e.N_.Le(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(nd.min())>0){let r=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(r)}a0(e).l_(t)}function aM(e,t){e.N_.Le(t),a0(e).h_(t)}function aU(e){e.N_=new sS({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.v_.get(t)||null,st:()=>e.datastore.serializer.databaseId}),a0(e).start(),e.O_.y_()}function aF(e){return aV(e)&&!a0(e).Jo()&&e.v_.size>0}function aV(e){return 0===e.F_.size}async function aj(e){e.v_.forEach((t,r)=>{aL(e,t)})}async function a$(e,t){e.N_=void 0,aF(e)?(e.O_.b_(t),aU(e)):e.O_.set("Unknown")}async function aB(e,t,r){if(e.O_.set("Online"),t instanceof sI&&2===t.state&&t.cause)try{await async function(e,t){let r=t.cause;for(let n of t.targetIds)e.v_.has(n)&&(await e.remoteSyncer.rejectListen(n,r),e.v_.delete(n),e.N_.removeTarget(n))}(e,t)}catch(r){r2("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await az(e,r)}else if(t instanceof s_?e.N_.Ge(t):t instanceof sE?e.N_.Xe(t):e.N_.He(t),!r.isEqual(nd.min()))try{let t=await au(e.localStore);r.compareTo(t)>=0&&await function(e,t){let r=e.N_._t(t);return r.targetChanges.forEach((r,n)=>{if(r.resumeToken.approximateByteSize()>0){let i=e.v_.get(n);i&&e.v_.set(n,i.withResumeToken(r.resumeToken,t))}}),r.targetMismatches.forEach((t,r)=>{let n=e.v_.get(t);if(!n)return;e.v_.set(t,n.withResumeToken(nL.EMPTY_BYTE_STRING,n.snapshotVersion)),aM(e,t);let i=new sH(n.target,t,r,n.sequenceNumber);aL(e,i)}),e.remoteSyncer.applyRemoteEvent(r)}(e,r)}catch(t){r2("RemoteStore","Failed to raise snapshot:",t),await az(e,t)}}async function az(e,t,r){if(!nE(t))throw t;e.F_.add(1),await aO(e),e.O_.set("Offline"),r||(r=()=>au(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{r2("RemoteStore","Retrying IndexedDB access"),await r(),e.F_.delete(1),await aR(e)})}function aq(e,t){return t().catch(r=>az(e,r,t))}async function aK(e){let t=a1(e),r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;aV(e)&&e.C_.length<10;)try{let n=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}(e.localStore,r);if(null===n){0===e.C_.length&&t.e_();break}r=n.batchId,function(e,t){e.C_.push(t);let r=a1(e);r.Yo()&&r.I_&&r.d_(t.mutations)}(e,n)}catch(t){await az(e,t)}aZ(e)&&aH(e)}function aZ(e){return aV(e)&&!a1(e).Jo()&&e.C_.length>0}function aH(e){a1(e).start()}async function aG(e){a1(e).A_()}async function aW(e){let t=a1(e);for(let r of e.C_)t.d_(r.mutations)}async function aQ(e,t,r){let n=e.C_.shift(),i=sc.from(n,t,r);await aq(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await aK(e)}async function aX(e,t){t&&a1(e).I_&&await async function(e,t){var r;if(function(e){switch(e){default:return r6();case r3.CANCELLED:case r3.UNKNOWN:case r3.DEADLINE_EXCEEDED:case r3.RESOURCE_EXHAUSTED:case r3.INTERNAL:case r3.UNAVAILABLE:case r3.UNAUTHENTICATED:return!1;case r3.INVALID_ARGUMENT:case r3.NOT_FOUND:case r3.ALREADY_EXISTS:case r3.PERMISSION_DENIED:case r3.FAILED_PRECONDITION:case r3.ABORTED:case r3.OUT_OF_RANGE:case r3.UNIMPLEMENTED:case r3.DATA_LOSS:return!0}}(r=t.code)&&r!==r3.ABORTED){let r=e.C_.shift();a1(e).Xo(),await aq(e,()=>e.remoteSyncer.rejectFailedWrite(r.batchId,t)),await aK(e)}}(e,t),aZ(e)&&aH(e)}async function aY(e,t){e.asyncQueue.verifyOperationInProgress(),r2("RemoteStore","RemoteStore received new credentials");let r=aV(e);e.F_.add(3),await aO(e),r&&e.O_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.F_.delete(3),await aR(e)}async function aJ(e,t){t?(e.F_.delete(2),await aR(e)):t||(e.F_.add(2),await aO(e),e.O_.set("Unknown"))}function a0(e){var t,r,n;return e.B_||(e.B_=(t=e.datastore,r=e.asyncQueue,n={Io:aj.bind(null,e),Eo:a$.bind(null,e),c_:aB.bind(null,e)},t.V_(),new ak(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.M_.push(async t=>{t?(e.B_.Xo(),aF(e)?aU(e):e.O_.set("Unknown")):(await e.B_.stop(),e.N_=void 0)})),e.B_}function a1(e){var t,r,n;return e.L_||(e.L_=(t=e.datastore,r=e.asyncQueue,n={Io:aG.bind(null,e),Eo:aX.bind(null,e),E_:aW.bind(null,e),T_:aQ.bind(null,e)},t.V_(),new aC(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.M_.push(async t=>{t?(e.L_.Xo(),await aK(e)):(await e.L_.stop(),e.C_.length>0&&(r2("RemoteStore",`Stopping write stream with ${e.C_.length} pending writes`),e.C_=[]))})),e.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e,t,r,n,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=n,this.removalCallback=i,this.deferred=new r8,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,n,i){let s=Date.now()+r,a=new a2(e,t,s,n,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new r7(r3.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function a4(e,t){if(r4("AsyncQueue",`${t}: ${e}`),nE(e))return new r7(r3.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a9{constructor(e){this.comparator=e?(t,r)=>e(t,r)||ny.comparator(t.key,r.key):(e,t)=>ny.comparator(e.key,t.key),this.keyedMap=iV(),this.sortedSet=new nA(this.comparator)}static emptySet(e){return new a9(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof a9)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(!e.isEqual(n))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let r=new a9;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a5{constructor(){this.k_=new nA(ny.comparator)}track(e){let t=e.doc.key,r=this.k_.get(t);r?0!==e.type&&3===r.type?this.k_=this.k_.insert(t,e):3===e.type&&1!==r.type?this.k_=this.k_.insert(t,{type:r.type,doc:e.doc}):2===e.type&&2===r.type?this.k_=this.k_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===r.type?this.k_=this.k_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===r.type?this.k_=this.k_.remove(t):1===e.type&&2===r.type?this.k_=this.k_.insert(t,{type:1,doc:r.doc}):0===e.type&&1===r.type?this.k_=this.k_.insert(t,{type:2,doc:e.doc}):r6():this.k_=this.k_.insert(t,e)}q_(){let e=[];return this.k_.inorderTraversal((t,r)=>{e.push(r)}),e}}class a6{constructor(e,t,r,n,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=n,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,n,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new a6(e,t,a9.emptySet(t),s,r,n,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&iR(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==r[e].type||!t[e].doc.isEqual(r[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a3{constructor(){this.Q_=void 0,this.listeners=[]}}class a7{constructor(){this.queries=new iM(e=>iO(e),iR),this.onlineState="Unknown",this.K_=new Set}}async function a8(e,t){let r=t.query,n=!1,i=e.queries.get(r);if(i||(n=!0,i=new a3),n)try{i.Q_=await e.onListen(r)}catch(r){let e=a4(r,`Initialization of query '${iP(t.query)}' failed`);return void t.onError(e)}e.queries.set(r,i),i.listeners.push(t),t.U_(e.onlineState),i.Q_&&t.W_(i.Q_)&&on(e)}async function oe(e,t){let r=t.query,n=!1,i=e.queries.get(r);if(i){let e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),n=0===i.listeners.length)}if(n)return e.queries.delete(r),e.onUnlisten(r)}function ot(e,t){let r=!1;for(let n of t){let t=n.query,i=e.queries.get(t);if(i){for(let e of i.listeners)e.W_(n)&&(r=!0);i.Q_=n}}r&&on(e)}function or(e,t,r){let n=e.queries.get(t);if(n)for(let e of n.listeners)e.onError(r);e.queries.delete(t)}function on(e){e.K_.forEach(e=>{e.next()})}class oi{constructor(e,t,r){this.query=e,this.G_=t,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){let t=[];for(let r of e.docChanges)3!==r.type&&t.push(r);e=new a6(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.z_?this.H_(e)&&(this.G_.next(e),t=!0):this.J_(e,this.onlineState)&&(this.Y_(e),t=!0),this.j_=e,t}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let t=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),t=!0),t}J_(e,t){return!e.fromCache||(!this.options.Z_||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}H_(e){if(e.docChanges.length>0)return!0;let t=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Y_(e){e=a6.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.key=e}}class oa{constructor(e){this.key=e}}class oo{constructor(e,t){this.query=e,this.oa=t,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=iq(),this.mutatedKeys=iq(),this.ua=iL(e),this.ca=new a9(this.ua)}get la(){return this.oa}ha(e,t){let r=t?t.Pa:new a5,n=t?t.ca:this.ca,i=t?t.mutatedKeys:this.mutatedKeys,s=n,a=!1,o="F"===this.query.limitType&&n.size===this.query.limit?n.last():null,l="L"===this.query.limitType&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal((e,t)=>{let u=n.get(e),c=iD(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations),f=!1;u&&c?u.data.isEqual(c.data)?h!==d&&(r.track({type:3,doc:c}),f=!0):this.Ia(u,c)||(r.track({type:2,doc:c}),f=!0,(o&&this.ua(c,o)>0||l&&0>this.ua(c,l))&&(a=!0)):!u&&c?(r.track({type:0,doc:c}),f=!0):u&&!c&&(r.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),r.track({type:1,doc:e})}return{ca:s,Pa:r,es:a,mutatedKeys:i}}Ia(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){let n=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;let i=e.Pa.q_();i.sort((e,t)=>(function(e,t){let r=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return r6()}};return r(e)-r(t)})(e.type,t.type)||this.ua(e.doc,t.doc)),this.da(r);let s=t?this.Ta():[],a=0===this.aa.size&&this.current?1:0,o=a!==this._a;return(this._a=a,0!==i.length||o)?{snapshot:new a6(this.query,e.ca,n,i,e.mutatedKeys,0===a,o,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:s}:{Ea:s}}U_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new a5,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(e=>this.oa=this.oa.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.oa=this.oa.delete(e)),this.current=e.current)}Ta(){if(!this.current)return[];let e=this.aa;this.aa=iq(),this.ca.forEach(e=>{this.Aa(e.key)&&(this.aa=this.aa.add(e.key))});let t=[];return e.forEach(e=>{this.aa.has(e)||t.push(new oa(e))}),this.aa.forEach(r=>{e.has(r)||t.push(new os(r))}),t}Ra(e){this.oa=e.Ps,this.aa=iq();let t=this.ha(e.documents);return this.applyChanges(t,!0)}Va(){return a6.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,0===this._a,this.hasCachedResults)}}class ol{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class ou{constructor(e){this.key=e,this.ma=!1}}class oc{constructor(e,t,r,n,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=n,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.fa={},this.ga=new iM(e=>iO(e),iR),this.pa=new Map,this.ya=new Set,this.wa=new nA(ny.comparator),this.Sa=new Map,this.ba=new s5,this.Da={},this.Ca=new Map,this.va=sJ.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return!0===this.Fa}}async function oh(e,t){var r,n;let i,s;let a=(e.remoteStore.remoteSyncer.applyRemoteEvent=om.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=oA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=oy.bind(null,e),e.fa.c_=ot.bind(null,e.eventManager),e.fa.xa=or.bind(null,e.eventManager),e),o=a.ga.get(t);if(o)i=o.targetId,a.sharedClientState.addLocalQueryTarget(i),s=o.view.Va();else{let e=await (r=a.localStore,n=iA(t),r.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return r.Kr.getTargetData(e,n).next(i=>i?(t=i,n_.resolve(t)):r.Kr.allocateTargetId(e).next(i=>(t=new sH(n,i,"TargetPurposeListen",e.currentSequenceNumber),r.Kr.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=r.rs.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(r.rs=r.rs.insert(e.targetId,e),r.ss.set(n,e.targetId)),e})),o=a.sharedClientState.addLocalQueryTarget(e.targetId);i=e.targetId,s=await od(a,t,i,"current"===o,e.resumeToken),a.isPrimaryClient&&aP(a.remoteStore,e)}return s}async function od(e,t,r,n,i){e.Ma=(t,r,n)=>(async function(e,t,r,n){let i=t.view.ha(r);i.es&&(i=await ah(e.localStore,t.query,!1).then(({documents:e})=>t.view.ha(e,i)));let s=n&&n.targetChanges.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s);return oT(e,t.targetId,a.Ea),a.snapshot})(e,t,r,n);let s=await ah(e.localStore,t,!0),a=new oo(t,s.Ps),o=a.ha(s.documents),l=sb.createSynthesizedTargetChangeForCurrentChange(r,n&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);oT(e,r,u.Ea);let c=new ol(t,r,a);return e.ga.set(t,c),e.pa.has(r)?e.pa.get(r).push(t):e.pa.set(r,[t]),u.snapshot}async function of(e,t){let r=e.ga.get(t),n=e.pa.get(r.targetId);if(n.length>1)return e.pa.set(r.targetId,n.filter(e=>!iR(e,t))),void e.ga.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await ac(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),aD(e.remoteStore,r.targetId),oE(e,r.targetId)}).catch(nb)):(oE(e,r.targetId),await ac(e.localStore,r.targetId,!0))}async function op(e,t,r){var n;let i=(e.remoteStore.remoteSyncer.applySuccessfulWrite=ov.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ow.bind(null,e),e);try{let e;let s=await function(e,t){let r,n;let i=nh.now(),s=t.reduce((e,t)=>e.add(t.key),iq());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=iU,l=iq();return e._s.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(n=>{r=n;let s=[];for(let e of t){let t=function(e,t){let r=null;for(let n of e.fieldTransforms){let e=t.data.field(n.field),i=iW(n.transform,e||null);null!=i&&(null===r&&(r=n6.empty()),r.set(n.field,i))}return r||null}(e,r.get(e.key).overlayedDocument);null!=t&&s.push(new sn(e.key,t,function e(t){let r=[];return nk(t.fields,(t,n)=>{let i=new ng([t]);if(n4(n)){let t=e(n.mapValue).fields;if(0===t.length)r.push(i);else for(let e of t)r.push(i.child(e))}else r.push(i)}),new nP(r)}(t.value.mapValue),i6.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{n=t;let i=t.applyToLocalDocumentSet(r,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:n.batchId,changes:ij(r)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),n=s.batchId,(e=i.Da[i.currentUser.toKey()])||(e=new nA(nu)),e=e.insert(n,r),i.Da[i.currentUser.toKey()]=e,await ok(i,s.changes),await aK(i.remoteStore)}catch(t){let e=a4(t,"Failed to persist write");r.reject(e)}}async function om(e,t){try{let r=await function(e,t){let r=t.snapshotVersion,n=e.rs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s;let a,o;let l=e._s.newChangeBuffer({trackRemovals:!0});n=e.rs;let u=[];t.targetChanges.forEach((s,a)=>{var o;let l=n.get(a);if(!l)return;u.push(e.Kr.removeMatchingKeys(i,s.removedDocuments,a).next(()=>e.Kr.addMatchingKeys(i,s.addedDocuments,a)));let c=l.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(a)?c=c.withResumeToken(nL.EMPTY_BYTE_STRING,nd.min()).withLastLimboFreeSnapshotVersion(nd.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,r)),n=n.insert(a,c),o=c,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&u.push(e.Kr.updateTargetData(i,c))});let c=iU,h=iq();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,r))}),u.push((s=t.documentUpdates,a=iq(),o=iq(),s.forEach(e=>a=a.add(e)),l.getEntries(i,a).next(e=>{let t=iU;return s.forEach((r,n)=>{let i=e.get(r);n.isFoundDocument()!==i.isFoundDocument()&&(o=o.add(r)),n.isNoDocument()&&n.version.isEqual(nd.min())?(l.removeEntry(r,n.readTime),t=t.insert(r,n)):!i.isValidDocument()||n.version.compareTo(i.version)>0||0===n.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(n),t=t.insert(r,n)):r2("LocalStore","Ignoring outdated watch update for ",r,". Current version:",i.version," Watch version:",n.version)}),{ls:t,hs:o}})).next(e=>{c=e.ls,h=e.hs})),!r.isEqual(nd.min())){let t=e.Kr.getLastRemoteSnapshotVersion(i).next(t=>e.Kr.setTargetsMetadata(i,i.currentSequenceNumber,r));u.push(t)}return n_.waitFor(u).next(()=>l.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(t=>(e.rs=n,t))}(e.localStore,t);t.targetChanges.forEach((t,r)=>{let n=e.Sa.get(r);n&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||r6(),t.addedDocuments.size>0?n.ma=!0:t.modifiedDocuments.size>0?n.ma||r6():t.removedDocuments.size>0&&(n.ma||r6(),n.ma=!1))}),await ok(e,r,t)}catch(e){await nb(e)}}function og(e,t,r){var n;if(e.isPrimaryClient&&0===r||!e.isPrimaryClient&&1===r){let r;let i=[];e.ga.forEach((e,r)=>{let n=r.view.U_(t);n.snapshot&&i.push(n.snapshot)}),(n=e.eventManager).onlineState=t,r=!1,n.queries.forEach((e,n)=>{for(let e of n.listeners)e.U_(t)&&(r=!0)}),r&&on(n),i.length&&e.fa.c_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function oy(e,t,r){e.sharedClientState.updateQueryState(t,"rejected",r);let n=e.Sa.get(t),i=n&&n.key;if(i){let r=new nA(ny.comparator);r=r.insert(i,n3.newNoDocument(i,nd.min()));let n=iq().add(i),s=new sw(nd.min(),new Map,new nA(nu),r,n);await om(e,s),e.wa=e.wa.remove(i),e.Sa.delete(t),oS(e)}else await ac(e.localStore,t,!1).then(()=>oE(e,t,r)).catch(nb)}async function ov(e,t){var r;let n=t.batch.batchId;try{let i=await (r=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let n=t.batch.keys(),i=r._s.newChangeBuffer({trackRemovals:!0});return(function(e,t,r,n){let i=r.batch,s=i.keys(),a=n_.resolve();return s.forEach(e=>{a=a.next(()=>n.getEntry(t,e)).next(t=>{let s=r.docVersions.get(e);null!==s||r6(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,r),t.isValidDocument()&&(t.setReadTime(r.commitVersion),n.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(r,e,t,i).next(()=>i.apply(e)).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t.batch.batchId)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=iq();for(let r=0;r<e.mutationResults.length;++r)e.mutationResults[r].transformResults.length>0&&(t=t.add(e.batch.mutations[r].key));return t}(t))).next(()=>r.localDocuments.getDocuments(e,n))});o_(e,n,null),ob(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await ok(e,i)}catch(e){await nb(e)}}async function ow(e,t,r){var n;try{let i=await (n=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||r6(),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))});o_(e,t,r),ob(e,t),e.sharedClientState.updateMutationState(t,"rejected",r),await ok(e,i)}catch(e){await nb(e)}}function ob(e,t){(e.Ca.get(t)||[]).forEach(e=>{e.resolve()}),e.Ca.delete(t)}function o_(e,t,r){let n=e.Da[e.currentUser.toKey()];if(n){let i=n.get(t);i&&(r?i.reject(r):i.resolve(),n=n.remove(t)),e.Da[e.currentUser.toKey()]=n}}function oE(e,t,r=null){for(let n of(e.sharedClientState.removeLocalQueryTarget(t),e.pa.get(t)))e.ga.delete(n),r&&e.fa.xa(n,r);e.pa.delete(t),e.isPrimaryClient&&e.ba.mr(t).forEach(t=>{e.ba.containsKey(t)||oI(e,t)})}function oI(e,t){e.ya.delete(t.path.canonicalString());let r=e.wa.get(t);null!==r&&(aD(e.remoteStore,r),e.wa=e.wa.remove(t),e.Sa.delete(r),oS(e))}function oT(e,t,r){for(let n of r)n instanceof os?(e.ba.addReference(n.key,t),function(e,t){let r=t.key,n=r.path.canonicalString();e.wa.get(r)||e.ya.has(n)||(r2("SyncEngine","New document in limbo: "+r),e.ya.add(n),oS(e))}(e,n)):n instanceof oa?(r2("SyncEngine","Document no longer in limbo: "+n.key),e.ba.removeReference(n.key,t),e.ba.containsKey(n.key)||oI(e,n.key)):r6()}function oS(e){for(;e.ya.size>0&&e.wa.size<e.maxConcurrentLimboResolutions;){var t;let r=e.ya.values().next().value;e.ya.delete(r);let n=new ny(np.fromString(r)),i=e.va.next();e.Sa.set(i,new ou(n)),e.wa=e.wa.insert(n,i),aP(e.remoteStore,new sH(iA((t=n.path,new iE(t))),i,"TargetPurposeLimboResolution",nI.ae))}}async function ok(e,t,r){let n=[],i=[],s=[];e.ga.isEmpty()||(e.ga.forEach((a,o)=>{s.push(e.Ma(o,t,r).then(t=>{if((t||r)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){n.push(t);let e=ai.$i(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.fa.c_(n),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",r=>n_.forEach(t,t=>n_.forEach(t.Qi,n=>e.persistence.referenceDelegate.addReference(r,t.targetId,n)).next(()=>n_.forEach(t.Ki,n=>e.persistence.referenceDelegate.removeReference(r,t.targetId,n)))))}catch(e){if(!nE(e))throw e;r2("LocalStore","Failed to update sequence numbers: "+e)}for(let r of t){let t=r.targetId;if(!r.fromCache){let r=e.rs.get(t),n=r.snapshotVersion,i=r.withLastLimboFreeSnapshotVersion(n);e.rs=e.rs.insert(t,i)}}}(e.localStore,i))}async function oC(e,t){if(!e.currentUser.isEqual(t)){r2("SyncEngine","User change. New user:",t.toKey());let r=await al(e.localStore,t);e.currentUser=t,e.Ca.forEach(e=>{e.forEach(e=>{e.reject(new r7(r3.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.Ca.clear(),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await ok(e,r.cs)}}function oA(e,t){let r=e.Sa.get(t);if(r&&r.ma)return iq().add(r.key);{let r=iq(),n=e.pa.get(t);if(!n)return r;for(let t of n){let n=e.ga.get(t);r=r.unionWith(n.view.la)}return r}}class oN{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=aI(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var t,r,n,i;return t=this.persistence,r=new aa,n=e.initialUser,i=this.serializer,new ao(t,r,n,i)}createPersistence(e){return new at(an.Jr,this.serializer)}createSharedClientState(e){return new af}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ox{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>og(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=oC.bind(null,this.syncEngine),await aJ(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new a7}createDatastore(e){var t,r,n;let i=aI(e.databaseInfo.databaseId),s=(t=e.databaseInfo,new a_(t));return r=e.authCredentials,n=e.appCheckCredentials,new aA(r,n,s,i)}createRemoteStore(e){var t,r,n,i;return t=this.localStore,r=this.datastore,n=e.asyncQueue,i=am.C()?new am:new ap,new ax(t,r,n,e=>og(this.syncEngine,e,0),i)}createSyncEngine(e,t){return function(e,t,r,n,i,s,a){let o=new oc(e,t,r,n,i,s);return a&&(o.Fa=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){r2("RemoteStore","RemoteStore shutting down."),e.F_.add(5),await aO(e),e.x_.shutdown(),e.O_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):r4("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(e,t,r,n){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=n,this.user=rY.UNAUTHENTICATED,this.clientId=nl.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async e=>{r2("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(r,e=>(r2("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new r7(r3.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new r8;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){let t=a4(r,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function oP(e,t){e.asyncQueue.verifyOperationInProgress(),r2("FirestoreClient","Initializing OfflineComponentProvider");let r=await e.getConfiguration();await t.initialize(r);let n=r.initialUser;e.setCredentialChangeListener(async e=>{n.isEqual(e)||(await al(t.localStore,e),n=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function oD(e,t){e.asyncQueue.verifyOperationInProgress();let r=await oL(e);r2("FirestoreClient","Initializing OnlineComponentProvider");let n=await e.getConfiguration();await t.initialize(r,n),e.setCredentialChangeListener(e=>aY(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,r)=>aY(t.remoteStore,r)),e._onlineComponents=t}async function oL(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){r2("FirestoreClient","Using user provided OfflineComponentProvider");try{await oP(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===r3.FAILED_PRECONDITION||t.code===r3.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;r9("Error using user provided cache. Falling back to memory cache: "+t),await oP(e,new oN)}}else r2("FirestoreClient","Using default OfflineComponentProvider"),await oP(e,new oN)}return e._offlineComponents}async function oM(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(r2("FirestoreClient","Using user provided OnlineComponentProvider"),await oD(e,e._uninitializedComponentsProvider._online)):(r2("FirestoreClient","Using default OnlineComponentProvider"),await oD(e,new ox))),e._onlineComponents}async function oU(e){let t=await oM(e),r=t.eventManager;return r.onListen=oh.bind(null,t.syncEngine),r.onUnlisten=of.bind(null,t.syncEngine),r}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oF(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oV=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oj(e,t,r){if(!r)throw new r7(r3.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function o$(e){if(!ny.isDocumentKey(e))throw new r7(r3.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function oB(e){if(ny.isDocumentKey(e))throw new r7(r3.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function oz(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let r=(t=e).constructor?t.constructor.name:null;return r?`a custom ${r} object`:"an object"}}return"function"==typeof e?"a function":r6()}function oq(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new r7(r3.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let r=oz(e);throw new r7(r3.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oK{constructor(e){var t,r;if(void 0===e.host){if(void 0!==e.ssl)throw new r7(r3.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new r7(r3.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,r,n){if(!0===t&&!0===n)throw new r7(r3.INVALID_ARGUMENT,`${e} and ${r} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=oF(null!==(r=e.experimentalLongPollingOptions)&&void 0!==r?r:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new r7(r3.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new r7(r3.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new r7(r3.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,r;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,t.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class oZ{constructor(e,t,r,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oK({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new r7(r3.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new r7(r3.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oK(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new nt;switch(e.type){case"firstParty":return new ns(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new r7(r3.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=oV.get(e);t&&(r2("ComponentProvider","Removing Datastore"),oV.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oH{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new oH(this.firestore,e,this._query)}}class oG{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oW(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new oG(this.firestore,e,this._key)}}class oW extends oH{constructor(e,t,r){super(e,t,new iE(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new oG(this.firestore,null,new ny(e))}withConverter(e){return new oW(this.firestore,e,this._path)}}function oQ(e,t,...r){if(e=(0,f.m9)(e),oj("collection","path",t),e instanceof oZ){let n=np.fromString(t,...r);return oB(n),new oW(e,null,n)}{if(!(e instanceof oG||e instanceof oW))throw new r7(r3.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(np.fromString(t,...r));return oB(n),new oW(e.firestore,null,n)}}function oX(e,t,...r){if(e=(0,f.m9)(e),1==arguments.length&&(t=nl.V()),oj("doc","path",t),e instanceof oZ){let n=np.fromString(t,...r);return o$(n),new oG(e,null,new ny(n))}{if(!(e instanceof oG||e instanceof oW))throw new r7(r3.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(np.fromString(t,...r));return o$(n),new oG(e.firestore,e instanceof oW?e.converter:null,new ny(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oY{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new aT(this,"async_queue_retry"),this.ou=()=>{let e=aE();e&&r2("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Ho.$o()};let e=aE();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;let t=aE();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});let t=new r8;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(0!==this.Xa.length){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!nE(e))throw e;r2("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){let t=this.Za.then(()=>(this.ru=!0,e().catch(e=>{let t;this.nu=e,this.ru=!1;let r=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);throw r4("INTERNAL UNHANDLED ERROR: ",r),e}).then(e=>(this.ru=!1,e))));return this.Za=t,t}enqueueAfterDelay(e,t,r){this._u(),this.su.indexOf(e)>-1&&(t=0);let n=a2.createAndSchedule(this,e,t,r,e=>this.cu(e));return this.tu.push(n),n}_u(){this.nu&&r6()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(let t of this.tu)if(t.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{for(let t of(this.tu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.tu))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){let t=this.tu.indexOf(e);this.tu.splice(t,1)}}class oJ extends oZ{constructor(e,t,r,n){super(e,t,r,n),this.type="firestore",this._queue=new oY,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||o2(this),this._firestoreClient.terminate()}}function o0(e,t){let r="object"==typeof e?e:(0,c.Mq)(),n=(0,c.qX)(r,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!n._initialized){let e=(0,f.P0)("firestore");e&&function(e,t,r,n={}){var i;let s=(e=oq(e,oZ))._getSettings(),a=`${t}:${r}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&r9("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),n.mockUserToken){let t,r;if("string"==typeof n.mockUserToken)t=n.mockUserToken,r=rY.MOCK_USER;else{t=(0,f.Sg)(n.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=n.mockUserToken.sub||n.mockUserToken.user_id;if(!s)throw new r7(r3.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");r=new rY(s)}e._authCredentials=new nr(new ne(t,r))}}(n,...e)}return n}function o1(e){return e._firestoreClient||o2(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function o2(e){var t,r,n,i,s,a;let o=e._freezeSettings(),l=(i=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",a=e._persistenceKey,new nz(i,s,a,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,oF(o.experimentalLongPollingOptions),o.useFetchStreams));e._firestoreClient=new oO(e._authCredentials,e._appCheckCredentials,e._queue,l),(null===(r=o.localCache)||void 0===r?void 0:r._offlineComponentProvider)&&(null===(n=o.localCache)||void 0===n?void 0:n._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:o.localCache.kind,_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o4{constructor(e){this._byteString=e}static fromBase64String(e){try{return new o4(nL.fromBase64String(e))}catch(e){throw new r7(r3.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new o4(nL.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o9{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new r7(r3.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ng(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o5{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o6{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new r7(r3.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new r7(r3.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return nu(this._lat,e._lat)||nu(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let o3=/^__.*__$/;class o7{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return null!==this.fieldMask?new sn(e,this.data,this.fieldMask,t,this.fieldTransforms):new sr(e,this.data,t,this.fieldTransforms)}}class o8{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new sn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function le(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw r6()}}class lt{constructor(e,t,r,n,i,s){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=n,void 0===i&&this.du(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new lt(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.Eu({path:r,Ru:!1});return n.Vu(e),n}mu(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.Eu({path:r,Ru:!1});return n.du(),n}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return lm(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(0===e.length)throw this.gu("Document fields must not be empty");if(le(this.Tu)&&o3.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class lr{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||aI(e)}wu(e,t,r,n=!1){return new lt({Tu:e,methodName:t,yu:r,path:ng.emptyPath(),Ru:!1,pu:n},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ln(e){let t=e._freezeSettings(),r=aI(e._databaseId);return new lr(e._databaseId,!!t.ignoreUndefinedProperties,r)}function li(e,t,r,n,i,s={}){let a,o;let l=e.wu(s.merge||s.mergeFields?2:0,t,r,i);lh("Data must be an object, but it was:",l,n);let u=lu(n,l);if(s.merge)a=new nP(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let n of s.mergeFields){let i=ld(t,n,r);if(!l.contains(i))throw new r7(r3.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);lg(e,i)||e.push(i)}a=new nP(e),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new o7(new n6(u),a,o)}class ls extends o5{_toFieldTransform(e){if(2!==e.Tu)throw 1===e.Tu?e.gu(`${this._methodName}() can only appear at the top level of your update data`):e.gu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ls}}class la extends o5{_toFieldTransform(e){return new i9(e.path,new iQ)}isEqual(e){return e instanceof la}}class lo extends o5{constructor(e,t){super(e),this.Su=t}_toFieldTransform(e){let t=new lt({Tu:3,yu:e.settings.yu,methodName:this._methodName,Ru:!0},e.databaseId,e.serializer,e.ignoreUndefinedProperties),r=this.Su.map(e=>ll(e,t)),n=new iX(r);return new i9(e.path,n)}isEqual(e){return this===e}}function ll(e,t){if(lc(e=(0,f.m9)(e)))return lh("Unsupported field value:",t,e),lu(e,t);if(e instanceof o5)return function(e,t){if(!le(t.Tu))throw t.gu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.gu(`${e._methodName}() is not currently supported inside arrays`);let r=e._toFieldTransform(t);r&&t.fieldTransforms.push(r)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Ru&&4!==t.Tu)throw t.gu("Nested arrays are not supported");return function(e,t){let r=[],n=0;for(let i of e){let e=ll(i,t.fu(n));null==e&&(e={nullValue:"NULL_VALUE"}),r.push(e),n++}return{arrayValue:{values:r}}}(e,t)}return function(e,t){if(null===(e=(0,f.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e){var r,n,i;return r=t.serializer,"number"==typeof(i=n=e)&&Number.isInteger(i)&&!nT(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?iH(n):iZ(r,n)}if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let r=nh.fromDate(e);return{timestampValue:sP(t.serializer,r)}}if(e instanceof nh){let r=new nh(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:sP(t.serializer,r)}}if(e instanceof o6)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof o4)return{bytesValue:sD(t.serializer,e._byteString)};if(e instanceof oG){let r=t.databaseId,n=e.firestore._databaseId;if(!n.isEqual(r))throw t.gu(`Document reference is for database ${n.projectId}/${n.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:sM(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.gu(`Unsupported field value: ${oz(e)}`)}(e,t)}function lu(e,t){let r={};return nC(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):nk(e,(e,n)=>{let i=ll(n,t.Au(e));null!=i&&(r[e]=i)}),{mapValue:{fields:r}}}function lc(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof nh||e instanceof o6||e instanceof o4||e instanceof oG||e instanceof o5)}function lh(e,t,r){if(!lc(r)||!("object"==typeof r&&null!==r&&(Object.getPrototypeOf(r)===Object.prototype||null===Object.getPrototypeOf(r)))){let n=oz(r);throw"an object"===n?t.gu(e+" a custom object"):t.gu(e+" "+n)}}function ld(e,t,r){if((t=(0,f.m9)(t))instanceof o9)return t._internalPath;if("string"==typeof t)return lp(e,t);throw lm("Field path arguments must be of type string or ",e,!1,void 0,r)}let lf=RegExp("[~\\*/\\[\\]]");function lp(e,t,r){if(t.search(lf)>=0)throw lm(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,r);try{return new o9(...t.split("."))._internalPath}catch(n){throw lm(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,r)}}function lm(e,t,r,n,i){let s=n&&!n.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;r&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${n}`),a&&(l+=` in document ${i}`),l+=")"),new r7(r3.INVALID_ARGUMENT,o+e+l)}function lg(e,t){return e.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,t,r,n,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=n,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new oG(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new lv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(lw("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class lv extends ly{data(){return super.data()}}function lw(e,t){return"string"==typeof t?lp(e,t):t instanceof o9?t._internalPath:t._delegate._internalPath}class lb{}class l_ extends lb{}function lE(e,t,...r){let n=[];for(let i of(t instanceof lb&&n.push(t),function(e){let t=e.filter(e=>e instanceof lS).length,r=e.filter(e=>e instanceof lI).length;if(t>1||t>0&&r>0)throw new r7(r3.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n=n.concat(r)),n))e=i._apply(e);return e}class lI extends l_{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new lI(e,t,r)}_apply(e){let t=this._parse(e);return lx(e._query,t),new oH(e.firestore,e.converter,iN(e._query,t))}_parse(e){let t=ln(e.firestore),r=function(e,t,r,n,i,s,a){let o;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new r7(r3.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){lN(a,s);let t=[];for(let r of a)t.push(lA(n,e,r));o={arrayValue:{values:t}}}else o=lA(n,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||lN(a,s),o=function(e,t,r,n=!1){return ll(r,e.wu(n?4:3,t))}(r,t,a,"in"===s||"not-in"===s);return ii.create(i,s,o)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return r}}function lT(e,t,r){let n=lw("where",e);return lI._create(n,t,r)}class lS extends lb{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new lS(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:is.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let r=e,n=t.getFlattenedFilters();for(let e of n)lx(r,e),r=iN(r,e)}(e._query,t),new oH(e.firestore,e.converter,iN(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class lk extends l_{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new lk(e,t)}_apply(e){let t=function(e,t,r){if(null!==e.startAt)throw new r7(r3.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new r7(r3.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");let n=new it(t,r);return function(e,t){if(null===iT(e)){let r=iS(e);null!==r&&lR(e,r,t.field)}}(e,n),n}(e._query,this._field,this._direction);return new oH(e.firestore,e.converter,function(e,t){let r=e.explicitOrderBy.concat([t]);return new iE(e.path,e.collectionGroup,r,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function lC(e,t="asc"){let r=lw("orderBy",e);return lk._create(r,t)}function lA(e,t,r){if("string"==typeof(r=(0,f.m9)(r))){if(""===r)throw new r7(r3.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ik(t)&&-1!==r.indexOf("/"))throw new r7(r3.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${r}' contains a '/' character.`);let n=t.path.child(np.fromString(r));if(!ny.isDocumentKey(n))throw new r7(r3.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return nY(e,new ny(n))}if(r instanceof oG)return nY(e,r._key);throw new r7(r3.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${oz(r)}.`)}function lN(e,t){if(!Array.isArray(e)||0===e.length)throw new r7(r3.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function lx(e,t){if(t.isInequality()){let r=iS(e),n=t.field;if(null!==r&&!r.isEqual(n))throw new r7(r3.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${n.toString()}'`);let i=iT(e);null!==i&&lR(e,n,i)}let r=function(e,t){for(let r of e)for(let e of r.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==r)throw r===t.op?new r7(r3.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new r7(r3.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${r.toString()}' filters.`)}function lR(e,t,r){if(!r.isEqual(t))throw new r7(r3.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${r.toString()}' instead.`)}class lO{convertValue(e,t="none"){switch(nZ(e)){case 0:return null;case 1:return e.booleanValue;case 2:return nF(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(nV(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw r6()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return nk(e,(e,n)=>{r[e]=this.convertValue(n,t)}),r}convertGeoPoint(e){return new o6(nF(e.latitude),nF(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=n$(e);return null==r?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(nB(e));default:return null}}convertTimestamp(e){let t=nU(e);return new nh(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=np.fromString(e);sZ(r)||r6();let n=new nq(r.get(1),r.get(3)),i=new ny(r.popFirst(5));return n.isEqual(t)||r4(`Document ${i} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lP(e,t,r){return e?r&&(r.merge||r.mergeFields)?e.toFirestore(t,r):e.toFirestore(t):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lL extends ly{constructor(e,t,r,n,i,s){super(e,t,r,n,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new lM(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(lw("DocumentSnapshot.get",e));if(null!==r)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class lM extends lL{data(e={}){return super.data(e)}}class lU{constructor(e,t,r,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new lD(n.hasPendingWrites,n.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new lM(this._firestore,this._userDataWriter,r.key,r,new lD(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new r7(r3.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(r=>{let n=new lM(e._firestore,e._userDataWriter,r.doc.key,r.doc,new lD(e._snapshot.mutatedKeys.has(r.doc.key),e._snapshot.fromCache),e.query.converter);return r.doc,{type:"added",doc:n,oldIndex:-1,newIndex:t++}})}{let r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let n=new lM(e._firestore,e._userDataWriter,t.doc.key,t.doc,new lD(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(s=(r=r.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return r6()}}(t.type),doc:n,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lF(e){e=oq(e,oG);let t=oq(e.firestore,oJ);return(function(e,t,r={}){let n=new r8;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,n,i){var s;let a=new oR({next:s=>{t.enqueueAndForget(()=>oe(e,o));let a=s.docs.has(r);!a&&s.fromCache?i.reject(new r7(r3.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&n&&"server"===n.source?i.reject(new r7(r3.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new oi((s=r.path,new iE(s)),a,{includeMetadataChanges:!0,Z_:!0});return a8(e,o)})(await oU(e),e.asyncQueue,t,r,n)),n.promise})(o1(t),e._key).then(r=>(function(e,t,r){let n=r.docs.get(t._key),i=new lV(e);return new lL(e,i,t._key,n,new lD(r.hasPendingWrites,r.fromCache),t.converter)})(t,e,r))}class lV extends lO{constructor(e){super(),this.firestore=e}convertBytes(e){return new o4(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new oG(this.firestore,null,t)}}function lj(e){e=oq(e,oH);let t=oq(e.firestore,oJ),r=o1(t),n=new lV(t);return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new r7(r3.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,r={}){let n=new r8;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,n,i){let s=new oR({next:r=>{t.enqueueAndForget(()=>oe(e,a)),r.fromCache&&"server"===n.source?i.reject(new r7(r3.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(r)},error:e=>i.reject(e)}),a=new oi(r,s,{includeMetadataChanges:!0,Z_:!0});return a8(e,a)})(await oU(e),e.asyncQueue,t,r,n)),n.promise})(r,e._query).then(r=>new lU(t,n,e,r)))}function l$(e,t,r){e=oq(e,oG);let n=oq(e.firestore,oJ),i=lP(e.converter,t,r);return lK(n,[li(ln(n),"setDoc",e._key,i,null!==e.converter,r).toMutation(e._key,i6.none())])}function lB(e,t,r,...n){let i;e=oq(e,oG);let s=oq(e.firestore,oJ),a=ln(s);return i="string"==typeof(t=(0,f.m9)(t))||t instanceof o9?function(e,t,r,n,i,s){let a=e.wu(1,t,r),o=[ld(t,n,r)],l=[i];if(s.length%2!=0)throw new r7(r3.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)o.push(ld(t,s[e])),l.push(s[e+1]);let u=[],c=n6.empty();for(let e=o.length-1;e>=0;--e)if(!lg(u,o[e])){let t=o[e],r=l[e];r=(0,f.m9)(r);let n=a.mu(t);if(r instanceof ls)u.push(t);else{let e=ll(r,n);null!=e&&(u.push(t),c.set(t,e))}}let h=new nP(u);return new o8(c,h,a.fieldTransforms)}(a,"updateDoc",e._key,t,r,n):function(e,t,r,n){let i=e.wu(1,t,r);lh("Data must be an object, but it was:",i,n);let s=[],a=n6.empty();nk(n,(e,n)=>{let o=lp(t,e,r);n=(0,f.m9)(n);let l=i.mu(o);if(n instanceof ls)s.push(o);else{let e=ll(n,l);null!=e&&(s.push(o),a.set(o,e))}});let o=new nP(s);return new o8(a,o,i.fieldTransforms)}(a,"updateDoc",e._key,t),lK(s,[i.toMutation(e._key,i6.exists(!0))])}function lz(e){return lK(oq(e.firestore,oJ),[new so(e._key,i6.none())])}function lq(e,t){let r=oq(e.firestore,oJ),n=oX(e),i=lP(e.converter,t);return lK(r,[li(ln(e.firestore),"addDoc",n._key,i,null!==e.converter,{}).toMutation(n._key,i6.exists(!1))]).then(()=>n)}function lK(e,t){return function(e,t){let r=new r8;return e.asyncQueue.enqueueAndForget(async()=>op(await oM(e).then(e=>e.syncEngine),t,r)),r.promise}(o1(e),t)}function lZ(){return new la("serverTimestamp")}function lH(...e){return new lo("arrayUnion",e)}new WeakMap,function(e=!0){rJ=c.Jn,(0,c.Xd)(new h.wA("firestore",(t,{instanceIdentifier:r,options:n})=>{let i=t.getProvider("app").getImmediate(),s=new oJ(new nn(t.getProvider("auth-internal")),new no(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new r7(r3.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new nq(e.options.projectId,t)}(i,r),i);return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),(0,c.KN)(rX,"4.2.0",void 0),(0,c.KN)(rX,"4.2.0","esm2017")}()}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[9774,179],function(){return t(91118),t(96885)}),_N_E=e.O()}]);