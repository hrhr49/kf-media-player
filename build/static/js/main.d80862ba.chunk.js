(this["webpackJsonpkf-media-player"]=this["webpackJsonpkf-media-player"]||[]).push([[0],{64:function(e,n,t){"use strict";t.r(n);t(32);var o=t(0),r=t.n(o),c=t(17),i=t.n(c),a=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var u=function(e){e&&e instanceof Function&&t.e(16).then(t.bind(null,78)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),o(e),r(e),c(e),i(e)}))},s=t(5),d=t.n(s),f=t(4),p=t(6),b=t(2),O=t(18),j=t(10),h=t.n(j),g=t(1),m={margin:"3px 5px",padding:"1px 3px",backgroundColor:"#f9f9f9",border:"1px solid #aaa",borderRadius:"2px",boxShadow:"1px 2px 2px #ddd",fontSize:"0.85em"},x=function(e){var n=e.keys,t=null===n?[]:"string"===typeof n?[n]:n;return Object(g.jsx)(g.Fragment,{children:t.map((function(e){return Object(g.jsx)("span",{style:m,children:e},e)}))})},k=function(e){var n=e.text,t=e.matchedIndexes,o=new Set(t);return Object(g.jsx)(g.Fragment,{children:n.split("").map((function(e,n){var t=o.has(n),r={color:t?"coral":"#333",fontWeight:t?"bold":"normal"};return Object(g.jsx)("span",{style:r,children:e},n)}))})},v=t(8),w=t.n(v),y=function(e){var n=Object(o.useState)(e),t=Object(b.a)(n,2),r=t[0],c=t[1];return[r,{set:c,on:Object(o.useCallback)((function(){c(!0)}),[]),off:Object(o.useCallback)((function(){c(!1)}),[]),toggle:Object(o.useCallback)((function(){c((function(e){return!e}))}),[])}]},P=t(26),C=function e(){var n=this;Object(P.a)(this,e),this.promise=void 0,this._resolve=void 0,this._reject=void 0,this.resolve=function(e){return n._resolve(e)},this.reject=function(e){return n._reject(e)},this._resolve=function(){throw Error("_resolve is not initialized yet")},this._reject=function(){throw Error("_reject is not initialized yet")},this.promise=new Promise((function(e,t){n._resolve=e,n._reject=t}))},S=t(11),I=t.n(S),T=(t(55),function(e){var n=e.keybindings,t=e.commandCallbacks,r=e.commands,c=e.bindGlobal,i=void 0!==c&&c,a=e.enabled,l=void 0===a||a,u=Object(o.useRef)(t);u.current=t,Object(o.useEffect)((function(){if(l)return r.forEach((function(e){var t=n[e];t&&(i?I.a.bindGlobal(t,(function(){var n,t;null===(n=(t=u.current)[e])||void 0===n||n.call(t)})):I.a.bind(t,(function(){var n,t;null===(n=(t=u.current)[e])||void 0===n||n.call(t)})))})),function(){r.forEach((function(e){var t=n[e];t&&I.a.unbind(t)}))}}),[n,l,i,r])}),E={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"80%",height:"80%",overflow:"hidden",padding:"3px",boxSizing:"border-box"}},R={margin:0,padding:"2px 8px",boxSizing:"border-box",color:"#333"},B={width:"100%",margin:0,padding:"4px 8px",fontSize:"1.2em",boxSizing:"border-box",border:"solid 2px orange",color:"#333"},z={width:"100%",listStyleType:"none",margin:0,padding:0,color:"#333"},Q={width:"100%",padding:0,margin:0,borderBottom:"1px solid #aaa",boxSizing:"border-box",color:"#333"},D=function(e){var n=e.title,t=e.placeHolder,o=e.isOpen,r=e.items,c=e.selectedIndex,i=e.onClose,a=e.onTextChange,l=e.onMouseDownOutside,u=e.renderItem,s=e.parentSelector;return Object(g.jsx)("div",{onMouseDown:l,children:Object(g.jsxs)(w.a,{isOpen:o,onRequestClose:i,style:E,contentLabel:"Command Palette",parentSelector:s,children:[n&&Object(g.jsx)("div",{style:R,children:n}),Object(g.jsx)("input",{autoFocus:!0,onChange:a,type:"text",placeholder:t,style:B}),Object(g.jsx)("ul",{style:z,children:r.map((function(e,n){return Object(g.jsx)("li",{style:Q,children:u(e,n===c)},"".concat(e.name))}))})]})})},F=["cancelQuickPick","selectItemQuickPick","nextItemQuickPick","previousItemQuickPick"],U={cancelQuickPick:"esc",selectItemQuickPick:"enter",nextItemQuickPick:"down",previousItemQuickPick:"up"},L=t(27),A={substringFilter:function(e,n){var t=n.indexOf(e);return t>=0?Array(e.length).fill(0).map((function(e,n){return n+t})):null},regexFilter:function(e,n){try{var t=n.match(e);if(t){var o=t[0],r=t.index;return void 0===r?null:Array(o.length).fill(0).map((function(e,n){return n+r}))}return null}catch(c){return null}},fuzzyFilter:function(e,n){var t,o=[],r=0,c=Object(L.a)(e);try{for(c.s();!(t=c.n()).done;){var i=t.value;if((r=n.indexOf(i,r))<0)return null;o.push(r),r++}}catch(a){c.e(a)}finally{c.f()}return o}},G={backgroundColor:"white",width:"100%",height:"100%",margin:0,padding:"4px 8px",boxSizing:"border-box"},M=Object(f.a)(Object(f.a)({},G),{},{backgroundColor:"#ddd"}),W=function(e){var n=e.renderItem,t=e.textFilter,r=Object(o.createContext)({isOpen:!1,showQuickPick:function(){throw Error("QuickPickGlobals is not initialized yet")},cancelQuickPick:function(){throw Error("QuickPickGlobals is not initialized yet")},selectItemQuickPick:function(){throw Error("QuickPickGlobals is not initialized yet")},nextItemQuickPick:function(){throw Error("QuickPickGlobals is not initialized yet")},previousItemQuickPick:function(){throw Error("QuickPickGlobals is not initialized yet")}});return{QuickPickContext:r,QuickPickProvider:function(e){var c=e.parentSelector,i=e.modalAppElement,a=void 0===i?"#root":i,l=e.children;w.a.setAppElement(a);var u=Object(o.useRef)(null),s=Object(o.useState)([]),d=Object(b.a)(s,2),p=d[0],O=d[1],j=Object(o.useState)(""),h=Object(b.a)(j,2),m=h[0],x=h[1],k=Object(o.useState)(""),v=Object(b.a)(k,2),P=v[0],S=v[1],I=function(e){var n=e.items,t=e.textFilter,r=Object(o.useState)(""),c=Object(b.a)(r,2),i=c[0],a=c[1],l=Object(o.useState)(0),u=Object(b.a)(l,2),s=u[0],d=u[1],f=y(!1),p=Object(b.a)(f,2),O=p[0],j=p[1],h=j.on,g=j.off,m=Object(o.useState)([]),x=Object(b.a)(m,2),k=x[0],v=x[1],w=Object(o.useCallback)((function(){a(""),d(0),h()}),[h]),P=Object(o.useCallback)((function(){a(""),d(0),g()}),[g]),C=Object(o.useCallback)((function(){O?P():w()}),[O,w,P]),S=Object(o.useCallback)((function(){var e,n,t=null!==(e=null===(n=k[s])||void 0===n?void 0:n.content)&&void 0!==e?e:null;return P(),t}),[s,k,P]),I=Object(o.useCallback)((function(e){a(e),d(0)}),[]),T=Object(o.useCallback)((function(){d((function(e){return Math.min(e+1,k.length-1)}))}),[k]),E=Object(o.useCallback)((function(){d((function(e){return Math.max(0,e-1)}))}),[]);return Object(o.useEffect)((function(){var e=[];n.forEach((function(n){var o=t(i,n.name);null!==o&&e.push({name:n.name,matchedIndexes:o,content:n})})),v(e)}),[i,O,n,t]),{isOpen:O,open:w,close:P,toggle:C,nextItem:T,previousItem:E,select:S,chanegeInputText:I,matchedItems:k,selectedIndex:s}}({items:p,textFilter:t}),E=I.isOpen,R=I.open,B=I.close,z=I.nextItem,Q=I.previousItem,L=I.select,A=I.chanegeInputText,G=I.matchedItems,M=I.selectedIndex,W=function(){var e;B(),null===(e=u.current)||void 0===e||e.resolve(null)},_={cancelQuickPick:W,selectItemQuickPick:function(){var e,n=L();null===(e=u.current)||void 0===e||e.resolve(n)},nextItemQuickPick:z,previousItemQuickPick:Q};T({keybindings:U,commandCallbacks:_,commands:F,bindGlobal:!0,enabled:E});var H=Object(f.a)({isOpen:E,showQuickPick:function(e,n){var t=n||{},o=t.placeHolder,r=void 0===o?"":o,c=t.title,i=void 0===c?"":c;x(r),S(i),O(e);var a=new C;return u.current=a,R(),a.promise}},_);return Object(g.jsxs)(r.Provider,{value:H,children:[E&&Object(g.jsx)(D,{title:P,placeHolder:m,isOpen:E,items:G,selectedIndex:M,onClose:W,onTextChange:function(e){A(e.target.value)},onMouseDownOutside:W,renderItem:n,parentSelector:c}),l]})}}}({renderItem:function(e,n){var t=e.name,o=e.matchedIndexes,r=e.content;return Object(g.jsxs)("div",{style:n?M:G,children:[Object(g.jsx)(k,{text:t,matchedIndexes:o}),Object(g.jsx)(x,{keys:r.keys})]})},textFilter:function(e,n){var t=(null!==n&&void 0!==n?n:{}).ignoreCase,o=void 0!==t&&t;return function(n,t){return o&&(n=n.toLowerCase(),t=t.toLowerCase()),A[e](n,t)}}("fuzzyFilter",{ignoreCase:!0})}),_=W.QuickPickContext,H=W.QuickPickProvider,$={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"80%",height:"20%",overflow:"hidden",padding:"3px",boxSizing:"border-box"}},N={margin:0,padding:"2px 8px",boxSizing:"border-box",color:"#333"},K={width:"100%",margin:0,padding:"4px 8px",fontSize:"1.2em",boxSizing:"border-box",border:"solid 2px orange",color:"#333"},q=function(e){var n=e.prompt,t=e.placeHolder,o=e.isOpen,r=e.onClose,c=e.onTextChange,i=e.onMouseDownOutside,a=e.parentSelector;return Object(g.jsx)("div",{onMouseDown:i,children:Object(g.jsxs)(w.a,{isOpen:o,onRequestClose:r,style:$,contentLabel:"Input Box",parentSelector:a,children:[Object(g.jsx)("input",{autoFocus:!0,onChange:c,type:"text",placeholder:t,style:K}),n&&Object(g.jsx)("div",{style:N,children:n})]})})},J=["cancelInputBox","confirmInputBox"],Z={cancelInputBox:"esc",confirmInputBox:"enter"},V=function(){var e=Object(o.createContext)({isOpen:!1,showInputBox:function(){throw Error("InputBoxGlobals is not initialized yet")},cancelInputBox:function(){throw Error("InputBoxGlobals is not initialized yet")},confirmInputBox:function(){throw Error("InputBoxGlobals is not initialized yet")}});return{InputBoxContext:e,InputBoxProvider:function(n){var t=n.parentSelector,r=n.modalAppElement,c=void 0===r?"#root":r,i=n.children;w.a.setAppElement(c);var a=Object(o.useRef)(null),l=Object(o.useState)(""),u=Object(b.a)(l,2),s=u[0],d=u[1],f=Object(o.useState)(""),p=Object(b.a)(f,2),O=p[0],j=p[1],h=Object(o.useState)(""),m=Object(b.a)(h,2),x=m[0],k=m[1],v=y(!1),P=Object(b.a)(v,2),S=P[0],I=P[1],E=I.on,R=I.off,B=Object(o.useCallback)((function(){E(),k("")}),[E]),z=Object(o.useCallback)((function(){R()}),[R]),Q=Object(o.useCallback)((function(e){k(e.target.value)}),[]),D=function(){var e;z(),null===(e=a.current)||void 0===e||e.resolve(null)},F=function(){var e;z(),null===(e=a.current)||void 0===e||e.resolve(x)};T({keybindings:Z,commandCallbacks:{cancelInputBox:D,confirmInputBox:F},commands:J,bindGlobal:!0,enabled:S});var U={isOpen:S,showInputBox:function(e){var n=e||{},t=n.placeHolder,o=void 0===t?"":t,r=n.prompt,c=void 0===r?"":r;d(o),j(c);var i=new C;return a.current=i,B(),i.promise},cancelInputBox:D,confirmInputBox:F};return Object(g.jsxs)(e.Provider,{value:U,children:[S&&Object(g.jsx)(q,{prompt:O,placeHolder:s,isOpen:S,onClose:D,onTextChange:Q,onMouseDownOutside:D,parentSelector:t}),i]})}}}(),X=V.InputBoxContext,Y=V.InputBoxProvider,ee=t(30),ne={position:"fixed",top:0,left:0,width:"100%",height:"100%"},te=function(e){var n=e.onDropFile,t=e.children,o=e.accept,r=Object(ee.a)({noKeyboard:!0,noClick:!0,maxFiles:1,onDrop:function(e){n(e[0])},accept:o}),c=r.getRootProps,i=r.getInputProps;return Object(g.jsxs)("div",Object(f.a)(Object(f.a)({},c({onClick:function(e){return e.stopPropagation()}})),{},{style:ne,children:[Object(g.jsx)("input",Object(f.a)({},i())),t]}))},oe=["doNothing","fullScreenOn","fullScreenOff","fullScreenToggle","playingOn","playingOff","playingToggle","mutedOn","mutedOff","mutedToggle","loopOn","loopOff","loopToggle","controlsOn","controlsOff","controlsToggle","pipOn","pipOff","pipToggle","showInfoOn","showInfoOff","showInfoToggle","volumeUp","volumeDown","volumeDefault","playbackRateUp","playbackRateDown","playbackRateDefault","seekForward10Seconds","seekBackward10Seconds","seekTo0Percent","seekTo10Percent","seekTo20Percent","seekTo30Percent","seekTo40Percent","seekTo50Percent","seekTo60Percent","seekTo70Percent","seekTo80Percent","seekTo90Percent","commandPaletteOpen","loadUrl"],re=function(e){return e.replace(/^(\w)/,(function(e){return e.toUpperCase()})).replace(/([a-z])([A-Z])/g,"$1 $2").replace(/([a-zA-Z])(\d)/g,"$1 $2").replace(/(\d)([a-zA-Z])/g,"$1 $2")},ce={padding:"0px 40px",background:"white",width:"100%",height:"100%",overflow:"scroll"},ie={borderCollapse:"collapse"},ae={backgroundColor:"#777",color:"#eee",border:"1px solid #ddd",padding:"4px"},le={padding:"4px"},ue={padding:"4px"},se={padding:"4px"},de=function(e){var n=e.keybindings;return Object(g.jsxs)("div",{style:ce,children:[Object(g.jsx)("h3",{children:"How to Use"}),Object(g.jsxs)("li",{children:["command palette: ",Object(g.jsx)(x,{keys:n.commandPaletteOpen})]}),Object(g.jsxs)("li",{children:["load URL: ",Object(g.jsx)(x,{keys:n.loadUrl})," (supported URL depends ",Object(g.jsx)("a",{href:"https://github.com/cookpete/react-player",children:"react-player"})]}),Object(g.jsx)("li",{children:"load File: drag and drop media file here (supported file depends your browser)"}),Object(g.jsx)("h3",{children:"Keybindings"}),Object(g.jsxs)("table",{style:ie,children:[Object(g.jsxs)("thead",{style:ae,children:[Object(g.jsx)("th",{style:le,children:"command"}),Object(g.jsx)("th",{style:le,children:"keybord shortcuts"})]}),Object(g.jsx)("tbody",{children:oe.map((function(e,t){return Object(g.jsxs)("tr",{style:Object(f.a)(Object(f.a)({},ue),{},{backgroundColor:t%2===0?"#eee":"#fff"}),children:[Object(g.jsx)("td",{style:se,children:re(e)}),Object(g.jsx)("td",{style:se,children:Object(g.jsx)(x,{keys:n[e]})})]},e)}))})]})]})},fe=function(e,n){var t=Object(b.a)(n,2),o=t[0],r=t[1];return Math.min(Math.max(e,o),r)},pe=function(e,n){var t=n.min,r=n.max,c=n.step,i=void 0===c?0:c,a=Object(o.useState)(fe(e,[t,r])),l=Object(b.a)(a,2),u=l[0],s=l[1];return[u,{set:Object(o.useCallback)((function(e){s(fe(e,[t,r]))}),[t,r]),up:Object(o.useCallback)((function(){s((function(e){return fe(e+i,[t,r])}))}),[t,r,i]),down:Object(o.useCallback)((function(){s((function(e){return fe(e-i,[t,r])}))}),[t,r,i]),min:Object(o.useCallback)((function(){s(t)}),[t]),max:Object(o.useCallback)((function(){s(r)}),[r]),default:Object(o.useCallback)((function(){s(fe(e,[t,r]))}),[e,t,r])}]},be=["inputFileData","loadKeybindings"],Oe="ipcApi",je=function(){return Oe in window},he=je()?window.ipcApi:function(){var e={};return be.forEach((function(n){e[n]=Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:throw Error("can not use IPC API : ".concat(n));case 1:case"end":return e.stop()}}),e)})))})),e}(),ge=function(e){if(e.isOk)return e.data;throw e.err},me=function(e){var n=e.keybindings,t=e.fullScreenOn,c=e.fullScreenOff,i=e.fullScreenToggle,a=Object(o.useState)(""),l=Object(b.a)(a,2),u=l[0],s=l[1],f=Object(o.useRef)(null);Object(o.useEffect)((function(){Object(p.a)(d.a.mark((function e(){var n,t,o,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(je()){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.t0=ge,e.next=6,he.inputFileData();case 6:e.t1=e.sent,(n=(0,e.t0)(e.t1))&&(t=n.data,o=n.mime,r=new Blob([t.buffer],{type:o}),c=URL.createObjectURL(r),s(c)),e.next=15;break;case 11:e.prev=11,e.t2=e.catch(2),console.log(e.t2),alert(e.t2);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})))()}),[]);var O=y(!0),j=Object(b.a)(O,2),m=j[0],x=j[1],k=x.set,v=x.on,w=x.off,P=x.toggle,C=y(!1),S=Object(b.a)(C,2),I=S[0],E=S[1],R=E.on,B=E.off,z=E.toggle,Q=y(!1),D=Object(b.a)(Q,2),F=D[0],U=D[1],L=U.on,A=U.off,G=U.toggle,M=y(!1),W=Object(b.a)(M,2),H=W[0],$=W[1],N=$.on,K=$.off,q=$.toggle,J=y(!0),Z=Object(b.a)(J,2),V=Z[0],Y=Z[1],ee=Y.on,ne=Y.off,ce=Y.toggle,ie=y(!1),ae=Object(b.a)(ie,2),le=ae[0],ue=ae[1],se=ue.on,fe=ue.off,be=ue.toggle,Oe=pe(.5,{min:0,max:1,step:.05}),me=Object(b.a)(Oe,2),xe=me[0],ke=me[1],ve=ke.up,we=ke.down,ye=ke.default,Pe=pe(1,{min:.1,max:4,step:.1}),Ce=Object(b.a)(Pe,2),Se=Ce[0],Ie=Ce[1],Te=Ie.up,Ee=Ie.down,Re=Ie.default,Be=pe(0,{min:0,max:1}),ze=Object(b.a)(Be,2),Qe=ze[0],De=ze[1].set,Fe=pe(0,{min:0,max:1}),Ue=Object(b.a)(Fe,2),Le=Ue[0],Ae=Ue[1].set,Ge=pe(0,{min:0,max:1}),Me=Object(b.a)(Ge,2),We=Me[0],_e=Me[1].set,He=r.a.useRef(),$e=Object(o.useContext)(_),Ne=Object(o.useContext)(X),Ke=r.a.useCallback((function(e){s(e),Ae(0),De(0)}),[Ae,De]),qe=r.a.useCallback((function(e){var n=URL.createObjectURL(e);Ke(n)}),[Ke]),Je=r.a.useCallback((function(e){if(He.current){var n=He.current.getCurrentTime();He.current.seekTo(n+e,"seconds")}}),[]),Ze=r.a.useCallback((function(e){He.current&&He.current.seekTo(e,"fraction")}),[]),Ve={doNothing:function(){},fullScreenOn:t,fullScreenOff:c,fullScreenToggle:i,playingOn:v,playingOff:w,playingToggle:P,mutedOn:R,mutedOff:B,mutedToggle:z,loopOn:L,loopOff:A,loopToggle:G,controlsOn:ee,controlsOff:ne,controlsToggle:ce,pipOn:N,pipOff:K,pipToggle:q,showInfoOn:se,showInfoOff:fe,showInfoToggle:be,volumeUp:ve,volumeDown:we,volumeDefault:ye,playbackRateUp:Te,playbackRateDown:Ee,playbackRateDefault:Re,seekForward10Seconds:function(){return Je(10)},seekBackward10Seconds:function(){return Je(-10)},seekTo0Percent:function(){return Ze(0)},seekTo10Percent:function(){return Ze(.1)},seekTo20Percent:function(){return Ze(.2)},seekTo30Percent:function(){return Ze(.3)},seekTo40Percent:function(){return Ze(.4)},seekTo50Percent:function(){return Ze(.5)},seekTo60Percent:function(){return Ze(.6)},seekTo70Percent:function(){return Ze(.7)},seekTo80Percent:function(){return Ze(.8)},seekTo90Percent:function(){return Ze(.9)},commandPaletteOpen:function(){var e=Object(p.a)(d.a.mark((function e(){var t,o,r,c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Ne.isOpen&&!$e.isOpen){e.next=2;break}return e.abrupt("return");case 2:return t=oe.map((function(e){return{name:re(e),command:e,keys:n[e]}})),e.next=5,$e.showQuickPick(t);case 5:null!==(o=e.sent)&&o.command&&(i=o.command,null===(r=f.current)||void 0===r||null===(c=r[i])||void 0===c||c.call(r));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),loadUrl:function(){var e=Object(p.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Ne.isOpen&&!$e.isOpen){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Ne.showInputBox({prompt:"input URL to laod"});case 4:(n=e.sent)&&Ke(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()};return f.current=Ve,T({keybindings:n,commandCallbacks:Ve,commands:oe}),u?Object(g.jsxs)(te,{onDropFile:qe,children:[Object(g.jsx)(h.a,{ref:He,width:"100%",height:"100%",url:u,pip:H,playing:m,controls:V,loop:F,playbackRate:Se,volume:xe,muted:I,onReady:function(){return console.log("onReady")},onStart:function(){return console.log("onStart")},onPlay:v,onEnablePIP:N,onDisablePIP:K,onPause:w,onBuffer:function(){return console.log("onBuffer")},onSeek:function(e){return console.log("onSeek",e)},onEnded:function(){k(F)},onError:function(e){alert("sorry, error occurred")},onProgress:function(e){var n=e.loaded,t=e.played;Ae(n),De(t)},onDuration:_e}),Object(g.jsx)("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",backgroundColor:"transparent"}}),le&&Object(g.jsx)("div",{style:{position:"fixed",top:0,left:0,backgroundColor:"rgba(255, 255, 255, 0.5)"},children:Object(g.jsx)("pre",{children:Object(g.jsxs)("code",{children:["state = ",JSON.stringify({url:u,playing:m,muted:I,volume:xe,playbackRate:Se,loop:F,duration:We,played:Qe,loaded:Le,controls:V,pip:H,canPlay:h.a.canPlay(u),canEnablePip:h.a.canEnablePIP(u)},null,"  ")]})})})]}):Object(g.jsx)(te,{onDropFile:qe,children:Object(g.jsx)(de,{keybindings:n})})},xe=t(29),ke=function(){var e={anyOf:[{type:"null"},{type:"string"},{type:"array",items:[{type:"string"},{type:"string"}]}]},n={$schema:"http://json-schema.org/draft-04/schema#",type:"object",additionalProperties:!1,properties:{},required:[]};return oe.forEach((function(t){n.properties[t]=e})),n}(),ve=new xe.Validator,we=function(e){var n=ve.validate(e,ke);if(n.valid)return!0;throw n.errors},ye={doNothing:null,fullScreenOn:null,fullScreenOff:null,fullScreenToggle:"f",playingOn:null,playingOff:null,playingToggle:"space",mutedOn:null,mutedOff:null,mutedToggle:"m",loopOn:null,loopOff:null,loopToggle:null,controlsOn:null,controlsOff:null,controlsToggle:"c",pipOn:null,pipOff:null,pipToggle:"p",showInfoOn:null,showInfoOff:null,showInfoToggle:"i",volumeUp:"+",volumeDown:"-",volumeDefault:null,playbackRateUp:">",playbackRateDown:"<",playbackRateDefault:null,seekForward10Seconds:"l",seekBackward10Seconds:"j",seekTo0Percent:"0",seekTo10Percent:"1",seekTo20Percent:"2",seekTo30Percent:"3",seekTo40Percent:"4",seekTo50Percent:"5",seekTo60Percent:"6",seekTo70Percent:"7",seekTo80Percent:"8",seekTo90Percent:"9",commandPaletteOpen:["command+shift+p","ctrl+shift+p"],loadUrl:["command+shift+u","ctrl+shift+u"]},Pe=function(){var e=Object(o.useRef)(null),n=Object(o.useState)(!1),t=Object(b.a)(n,2),r=t[0],c=t[1],i=Object(o.useState)(document.documentElement.clientWidth),a=Object(b.a)(i,2),l=a[0],u=a[1],s=Object(o.useState)(document.documentElement.clientHeight),j=Object(b.a)(s,2),h=j[0],m=j[1],x=Object(o.useState)(ye),k=Object(b.a)(x,2),v=k[0],w=k[1];Object(o.useEffect)((function(){var e=function(){u(document.documentElement.clientWidth),m(document.documentElement.clientHeight)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),Object(o.useEffect)((function(){Object(p.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(je()){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.t0=ge,e.next=6,he.loadKeybindings();case 6:e.t1=e.sent,(n=(0,e.t0)(e.t1))&&we(n)&&w(Object(f.a)(Object(f.a)({},ye),n)),e.next=15;break;case 11:e.prev=11,e.t2=e.catch(2),console.error(e.t2),alert("error occrus while loading keybindings.\n".concat(String(e.t2)));case 15:case"end":return e.stop()}}),e,null,[[2,11]])})))()}),[]);var y=Object(O.b)(),P=Object(o.useCallback)((function(){r||y.enter()}),[r,y]),C=Object(o.useCallback)((function(){r&&y.exit()}),[r,y]),S=Object(o.useCallback)((function(){r?y.exit():y.enter()}),[r,y]),I=r?{width:"100%",height:"100%"}:{width:l,height:h},T=function(){return e.current?e.current:document.body};return Object(g.jsx)(O.a,{handle:y,onChange:c,children:Object(g.jsx)("div",{ref:e,children:Object(g.jsx)(H,{parentSelector:T,children:Object(g.jsx)(Y,{parentSelector:T,children:Object(g.jsx)("div",{style:I,children:Object(g.jsx)(me,{keybindings:v,fullScreenOn:P,fullScreenOff:C,fullScreenToggle:S})})})})})})};i.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(Pe,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat(".","/service-worker.js");a?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):l(n,e)}))}}(),u()}},[[64,14,15]]]);
//# sourceMappingURL=main.d80862ba.chunk.js.map