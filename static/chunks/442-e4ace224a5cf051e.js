(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[442],{2653:function(e,t,r){"use strict";r.r(t);var n=r(8081),o=r(6325),s=r(8415),i=r(9268),u=r(2053),l=r(5424);let c={button:{4:"foGVKH",50:"dkRyNE",52:"ycSPk",53:"kzDapR",60:"izykGz",76:"dyRlvF",95:"jhKQav",kr:"gBVNXm",ko:"eMqxAe",kh:"brhdyO",kn:"kfioal",ba:"fjiKus",f6:"egGyMq",g7:"wbbxo",g4:"cPXfUw","5v":"lnkRcN","5x":"hiSRKO","3q":"hKpYQc","3o":"fxUyiS",td:"hiBeFF",ti:"gFUUhA",t5:"eYPjUa",q6:"bbUXPo","1x":"gudRHt","5f":"ikqruN","3t":"ctibpX","5z":"FwRrA","5e":"cDIyHz","3s":"hpBjJb","5t":"cvxgCt","5c":"uoKwr","3m":"bIoEhL","6l":"giWIyA",brsFym:{50:"gtsNAg",52:"eAtEss",53:"exFBLD",60:"fUNWmL",76:"isqNIn","1x":"dgUqoF","5f":"ihNqYi","3t":"eOUwza","5z":"hovZQC","5e":"cDzHOr","3s":"bGTDx","5t":"HtTRW","5c":"efqtiG","3m":"glKYlv"}}},a=(0,l.q)((e,t)=>{let{as:r="button",xstyle:l=[]}=e,a=(0,s.Z)(e,["as","xstyle"]);return(0,i.jsx)(r,(0,o.Z)((0,n.Z)({},a),{className:(0,u.Z)(c.button,...l),ref:t}))});t.default=a},3554:function(e,t,r){"use strict";r.d(t,{B:function(){return a}});var n=r(8081),o=r(6325),s=r(8415),i=r(9268),u=r(6006),l=r(2053);let c={base:{95:"fdLHFk",u4:"eLDTYY",ue:"fEmNDH",d4:"khPxKL","9b":"PItLl"},hollow:{"9b":"rnYNS",oy:"gYUVgM"}},a=(0,u.forwardRef)((e,t)=>{let{xstyle:r=[],isHollowed:u}=e,a=(0,s.Z)(e,["xstyle","isHollowed"]);return(0,i.jsx)("svg",(0,o.Z)((0,n.Z)({},a),{className:(0,l.Z)(c.base,u&&c.hollow,...r),ref:t}))})},8084:function(e,t,r){"use strict";r.d(t,{T:function(){return l}});var n=r(8081),o=r(6325),s=r(9268),i=r(6006),u=r(3554);let l=(0,i.memo)(e=>(0,s.jsx)(u.B,(0,o.Z)((0,n.Z)({xmlns:"http://www.w3.org/2000/svg",isHollowed:!0,strokeWidth:"2",viewBox:"0 0 24 24"},e),{children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"})})))},6746:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(9268),o=r(6006),s=r(2267),i=r(8103);function u(e){let{trailingAccessory:t,titlebarTitle:r,children:u}=e,l=(0,o.useRef)(null);return(0,n.jsxs)(s.Z,{ref:l,children:[(0,n.jsx)(i.Z,{title:r,scrollContainerRef:l,trailingAccessory:t}),u]})}},2267:function(e,t,r){"use strict";var n=r(8081),o=r(6325),s=r(9268),i=r(6006);let u=(0,i.forwardRef)((e,t)=>(0,s.jsx)("div",(0,o.Z)((0,n.Z)({},e),{className:"cjScYX gSBWlu cyvxod eqLCHj bpejLK cRUUAa iMkoWi llUCyD ",ref:t})));t.Z=u},8103:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var n=r(9268),o=r(6006),s=r(8081),i=r(6325),u=r(3554),l=r(8084);let c=(0,o.memo)(e=>(0,n.jsx)(u.B,(0,i.Z)((0,s.Z)({xmlns:"http://www.w3.org/2000/svg",isHollowed:!0,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24"},e),{children:(0,n.jsx)("path",{d:"M3 12h18M3 6h18M3 18h18"})}))),a=window.matchMedia("(prefers-color-scheme: dark)"),d=()=>null==a?void 0:a.matches,f=()=>!1,h=e=>((null==a?void 0:a.addEventListener)&&a.addEventListener("change",e,{passive:!0}),()=>{(null==a?void 0:a.removeEventListener)&&a.removeEventListener("change",e)}),v=()=>(0,o.useSyncExternalStore)(h,d,f);var b=r(7387);let x=[{ue:"gCWTgM",d4:"jXiuYf"}],m=(0,o.memo)(()=>{let e=(0,b.useSidebarActive)();return e?(0,n.jsx)(l.T,{xstyle:x}):(0,n.jsx)(c,{xstyle:x})});function g(e){let{title:t,globalMenu:r=!0,magicTitle:s=!1,titleRef:i=null,scrollContainerRef:u=null,extraScrollOffset:l=0,trailingAccessory:c=null,children:a}=e,d=(0,b.useSetSidebarActive)(),[f,h]=(0,o.useState)(200),[x,g]=(0,o.useState)(0),[j,k]=(0,o.useState)(0),p=v(),[S,w]=(0,o.useState)({top:0,bottom:0}),y=(0,o.useRef)(S),N=(0,o.useCallback)(e=>{y.current=e,w(e)},[]),C=(0,o.useCallback)(()=>{if(!u||!u.current)return;let e=u.current.scrollTop,t=e>l?(e-l)/200:0;if(k(t>.12?.12:t),!s||!i||!i.current||!(null==y?void 0:y.current))return;let r=i.current.getBoundingClientRect(),n=r.top-48,o=r.bottom-56,c=y.current,a=100*parseFloat((o/c.bottom).toFixed(2)),d=-1*parseFloat((n/c.top).toFixed(2)),f=a<0?0:a;h(f>100?100:f),g(d>=1?1:d)},[u,l,i,s]);(0,o.useEffect)(()=>{let e=null==u?void 0:u.current;if(e)return e.addEventListener("scroll",C),()=>e.removeEventListener("scroll",C)},[u,C]),(0,o.useEffect)(()=>{if(!(null==i?void 0:i.current)||!(null==u?void 0:u.current))return;u.current.scrollTop=0;let e=i.current.getBoundingClientRect();g(0),N({bottom:e.bottom-56,top:e.top-48})},[t,i,u,N]);let Z=(0,o.useMemo)(()=>0===j?j:p?j+.55:j+.8,[j,p]),B=(0,o.useCallback)(()=>{d(e=>!e)},[d]);return(0,n.jsxs)("div",{style:{background:"rgba(".concat(p?"26,36,40":"255,255,255",",").concat(Z,")"),boxShadow:"0 1px 3px rgba(0,0,0,".concat(j,")"),minHeight:"48px"},suppressHydrationWarning:!0,className:"iWYcRe doNOqr dqNEPM bsOvLZ gSBWlu iMkoWi IVbXa gBVNXm brhdyO iQmyKI isJucy kjJUmV "+(r?"eXfkYj ":"dkWiBb "),children:[(0,n.jsxs)("div",{className:"gSBWlu kJzccJ dYbGIK bUPwGt iBlkxz foGVKH ",children:[(0,n.jsxs)("span",{className:"gSBWlu foGVKH ",children:[(0,o.useMemo)(()=>r&&(0,n.jsx)("span",{onClick:B,className:"gSBWlu IVbXa gBVNXm brhdyO dVnYnt eXfkYj foGVKH jsvbrX lnkRcN hiSRKO hKpYQc fxUyiS NUqwe gQHdBQ ",children:(0,n.jsx)(m,{})}),[r,B]),(0,n.jsx)("h2",{style:s?{transform:"translateY(".concat(f,"%)"),opacity:x}:{},className:"bBZtzC dUvWpK hRLVFh gnwQvY jSaNpv jxySid kAVdUc fzfnfJ gCfpSJ jjXmdF ",children:t})]}),c]}),(0,n.jsx)("div",{children:a})]})}},7387:function(e,t,r){"use strict";r.r(t),r.d(t,{SidebarActiveProvider:function(){return a},useSetSidebarActive:function(){return c},useSidebarActive:function(){return l}});var n=r(9268),o=r(4291),s=r(6006);let i=(0,s.createContext)(!1),u=(0,s.createContext)(o.ZT),l=()=>(0,s.useContext)(i),c=()=>(0,s.useContext)(u),a=e=>{let{children:t}=e,[r,o]=(0,s.useState)(!1);return(0,n.jsx)(i.Provider,{value:r,children:(0,n.jsx)(u.Provider,{value:o,children:t})})}},4291:function(e,t,r){"use strict";var n,o;r.d(t,{$L:function(){return s},AW:function(){return n},MF:function(){return i},Np:function(){return u},ZT:function(){return l}});let s=String.fromCharCode(115,107,107,46,109,111,101),i=String.fromCharCode(104,116,116,112,115,58,47,47,115,107,107,46,109,111,101),u=String.fromCharCode(108,111,99,97,108,104,111,115,116),l=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r]};(o=n||(n={}))[o.zh=0]="zh",o[o.en=1]="en"},5424:function(e,t,r){"use strict";r.d(t,{S:function(){return o},q:function(){return s}});var n=r(6006);let o=e=>fetch(e).then(e=>e.json()),s=n.forwardRef},5442:function(e,t,r){Promise.resolve().then(r.t.bind(r,1616,23)),Promise.resolve().then(r.t.bind(r,3619,23)),Promise.resolve().then(r.bind(r,2653)),Promise.resolve().then(r.bind(r,6746)),Promise.resolve().then(r.t.bind(r,6715,23))},1616:function(){}}]);