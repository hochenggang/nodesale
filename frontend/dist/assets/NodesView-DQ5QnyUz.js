import{d as z,h as c,f as K,u as A,a as T,b as U,c as _,e as h,g as le,i as M,j as ce,k as f,l as B,m as S,n as P,o as F,p as de,q as pe,r as ue,s as V,N as fe,t as W,v as j,E as ve,w as xe,x as ge,y as me,z as O,A as y,B as b,C,_ as he,D as $,F as Q,G as a,H as Ce,I as x,J as l,K as k,L as N,M as H,O as R,P as be,Q as ze,R as ye}from"./index-BZX1O4Hz.js";import{N as we}from"./Input-BOu2Ynn0.js";function q(e,r="default",t=[]){const i=e.$slots[r];return i===void 0?t:i()}const Se=z({name:"Checkmark",render(){return c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},c("g",{fill:"none"},c("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Ie={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"};function _e(){return Ie}const $e={self:_e},ke=Object.assign(Object.assign({},T.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrap:{type:Boolean,default:!0}}),I=z({name:"Flex",props:ke,setup(e){const{mergedClsPrefixRef:r,mergedRtlRef:t}=A(e),n=T("Flex","-flex",void 0,$e,e,r);return{rtlEnabled:U("Flex",t,r),mergedClsPrefix:r,margin:_(()=>{const{size:o}=e;if(Array.isArray(o))return{horizontal:o[0],vertical:o[1]};if(typeof o=="number")return{horizontal:o,vertical:o};const{self:{[h("gap",o)]:d}}=n.value,{row:p,col:m}=le(d);return{horizontal:M(m),vertical:M(p)}})}},render(){const{vertical:e,reverse:r,align:t,inline:n,justify:i,margin:o,wrap:d,mergedClsPrefix:p,rtlEnabled:m}=this,s=K(q(this),!1);return s.length?c("div",{role:"none",class:[`${p}-flex`,m&&`${p}-flex--rtl`],style:{display:n?"inline-flex":"flex",flexDirection:e&&!r?"column":e&&r?"column-reverse":!e&&r?"row-reverse":"row",justifyContent:i,flexWrap:!d||e?"nowrap":"wrap",alignItems:t,gap:`${o.vertical}px ${o.horizontal}px`}},s):null}}),Pe={stepHeaderFontSizeSmall:"14px",stepHeaderFontSizeMedium:"16px",indicatorIndexFontSizeSmall:"14px",indicatorIndexFontSizeMedium:"16px",indicatorSizeSmall:"22px",indicatorSizeMedium:"28px",indicatorIconSizeSmall:"14px",indicatorIconSizeMedium:"18px"};function Re(e){const{fontWeightStrong:r,baseColor:t,textColorDisabled:n,primaryColor:i,errorColor:o,textColor1:d,textColor2:p}=e;return Object.assign(Object.assign({},Pe),{stepHeaderFontWeight:r,indicatorTextColorProcess:t,indicatorTextColorWait:n,indicatorTextColorFinish:i,indicatorTextColorError:o,indicatorBorderColorProcess:i,indicatorBorderColorWait:n,indicatorBorderColorFinish:i,indicatorBorderColorError:o,indicatorColorProcess:i,indicatorColorWait:"#0000",indicatorColorFinish:"#0000",indicatorColorError:"#0000",splitorColorProcess:n,splitorColorWait:n,splitorColorFinish:i,splitorColorError:n,headerTextColorProcess:d,headerTextColorWait:n,headerTextColorFinish:n,headerTextColorError:o,descriptionTextColorProcess:p,descriptionTextColorWait:n,descriptionTextColorFinish:n,descriptionTextColorError:o})}const Te={common:ce,self:Re},Be=f("steps",`
 width: 100%;
 display: flex;
`,[f("step",`
 position: relative;
 display: flex;
 flex: 1;
 `,[B("disabled","cursor: not-allowed"),B("clickable",`
 cursor: pointer;
 `),S("&:last-child",[f("step-splitor","display: none;")])]),f("step-splitor",`
 background-color: var(--n-splitor-color);
 margin-top: calc(var(--n-step-header-font-size) / 2);
 height: 1px;
 flex: 1;
 align-self: flex-start;
 margin-left: 12px;
 margin-right: 12px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),f("step-content","flex: 1;",[f("step-content-header",`
 color: var(--n-header-text-color);
 margin-top: calc(var(--n-indicator-size) / 2 - var(--n-step-header-font-size) / 2);
 line-height: var(--n-step-header-font-size);
 font-size: var(--n-step-header-font-size);
 position: relative;
 display: flex;
 font-weight: var(--n-step-header-font-weight);
 margin-left: 9px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[P("title",`
 white-space: nowrap;
 flex: 0;
 `)]),P("description",`
 color: var(--n-description-text-color);
 margin-top: 12px;
 margin-left: 9px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),f("step-indicator",`
 background-color: var(--n-indicator-color);
 box-shadow: 0 0 0 1px var(--n-indicator-border-color);
 height: var(--n-indicator-size);
 width: var(--n-indicator-size);
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[f("step-indicator-slot",`
 position: relative;
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 font-size: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 `,[P("index",`
 display: inline-block;
 text-align: center;
 position: absolute;
 left: 0;
 top: 0;
 white-space: nowrap;
 font-size: var(--n-indicator-index-font-size);
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[F()]),f("icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[F()]),f("base-icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[F()])])]),B("vertical","flex-direction: column;",[de("show-description",[S(">",[f("step","padding-bottom: 8px;")])]),S(">",[f("step","margin-bottom: 16px;",[S("&:last-child","margin-bottom: 0;"),S(">",[f("step-indicator",[S(">",[f("step-splitor",`
 position: absolute;
 bottom: -8px;
 width: 1px;
 margin: 0 !important;
 left: calc(var(--n-indicator-size) / 2);
 height: calc(100% - var(--n-indicator-size));
 `)])]),f("step-content",[P("description","margin-top: 8px;")])])])])])]);function Fe(e,r){return typeof e!="object"||e===null||Array.isArray(e)?null:(e.props||(e.props={}),e.props.internalIndex=r+1,e)}function je(e){return e.map((r,t)=>Fe(r,t))}const Ne=Object.assign(Object.assign({},T.props),{current:Number,status:{type:String,default:"process"},size:{type:String,default:"medium"},vertical:Boolean,"onUpdate:current":[Function,Array],onUpdateCurrent:[Function,Array]}),G=pe("n-steps"),Ee=z({name:"Steps",props:Ne,slots:Object,setup(e,{slots:r}){const{mergedClsPrefixRef:t,mergedRtlRef:n}=A(e),i=U("Steps",n,t),o=T("Steps","-steps",Be,Te,e,t);return ue(G,{props:e,mergedThemeRef:o,mergedClsPrefixRef:t,stepsSlots:r}),{mergedClsPrefix:t,rtlEnabled:i}},render(){const{mergedClsPrefix:e}=this;return c("div",{class:[`${e}-steps`,this.rtlEnabled&&`${e}-steps--rtl`,this.vertical&&`${e}-steps--vertical`]},je(K(q(this))))}}),Ae={status:String,title:String,description:String,disabled:Boolean,internalIndex:{type:Number,default:0}},E=z({name:"Step",props:Ae,slots:Object,setup(e){const r=xe(G,null);r||ge("step","`n-step` must be placed inside `n-steps`.");const{inlineThemeDisabled:t}=A(),{props:n,mergedThemeRef:i,mergedClsPrefixRef:o,stepsSlots:d}=r,p=_(()=>n.vertical),m=_(()=>{const{status:u}=e;if(u)return u;{const{internalIndex:v}=e,{current:w}=n;if(w===void 0)return"process";if(v<w)return"finish";if(v===w)return n.status||"process";if(v>w)return"wait"}return"process"}),s=_(()=>{const{value:u}=m,{size:v}=n,{common:{cubicBezierEaseInOut:w},self:{stepHeaderFontWeight:J,[h("stepHeaderFontSize",v)]:X,[h("indicatorIndexFontSize",v)]:Y,[h("indicatorSize",v)]:ee,[h("indicatorIconSize",v)]:te,[h("indicatorTextColor",u)]:re,[h("indicatorBorderColor",u)]:ne,[h("headerTextColor",u)]:oe,[h("splitorColor",u)]:ie,[h("indicatorColor",u)]:se,[h("descriptionTextColor",u)]:ae}}=i.value;return{"--n-bezier":w,"--n-description-text-color":ae,"--n-header-text-color":oe,"--n-indicator-border-color":ne,"--n-indicator-color":se,"--n-indicator-icon-size":te,"--n-indicator-index-font-size":Y,"--n-indicator-size":ee,"--n-indicator-text-color":re,"--n-splitor-color":ie,"--n-step-header-font-size":X,"--n-step-header-font-weight":J}}),g=t?me("step",_(()=>{const{value:u}=m,{size:v}=n;return`${u[0]}${v[0]}`}),s,n):void 0,Z=_(()=>{if(e.disabled)return;const{onUpdateCurrent:u,"onUpdate:current":v}=n;return u||v?()=>{u&&O(u,e.internalIndex),v&&O(v,e.internalIndex)}:void 0});return{stepsSlots:d,mergedClsPrefix:o,vertical:p,mergedStatus:m,handleStepClick:Z,cssVars:t?void 0:s,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender}},render(){const{mergedClsPrefix:e,onRender:r,handleStepClick:t,disabled:n}=this,i=V(this.$slots.default,o=>{const d=o||this.description;return d?c("div",{class:`${e}-step-content__description`},d):null});return r==null||r(),c("div",{class:[`${e}-step`,n&&`${e}-step--disabled`,!n&&t&&`${e}-step--clickable`,this.themeClass,i&&`${e}-step--show-description`,`${e}-step--${this.mergedStatus}-status`],style:this.cssVars,onClick:t},c("div",{class:`${e}-step-indicator`},c("div",{class:`${e}-step-indicator-slot`},c(fe,null,{default:()=>V(this.$slots.icon,o=>{const{mergedStatus:d,stepsSlots:p}=this;return d==="finish"||d==="error"?d==="finish"?c(W,{clsPrefix:e,key:"finish"},{default:()=>j(p["finish-icon"],()=>[c(Se,null)])}):d==="error"?c(W,{clsPrefix:e,key:"error"},{default:()=>j(p["error-icon"],()=>[c(ve,null)])}):null:o||c("div",{key:this.internalIndex,class:`${e}-step-indicator-slot__index`},this.internalIndex)})})),this.vertical?c("div",{class:`${e}-step-splitor`}):null),c("div",{class:`${e}-step-content`},c("div",{class:`${e}-step-content-header`},c("div",{class:`${e}-step-content-header__title`},j(this.$slots.title,()=>[this.title])),this.vertical?null:c("div",{class:`${e}-step-splitor`})),i))}}),Me={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Ve=z({name:"Copy24Regular",render:function(r,t){return b(),y("svg",Me,t[0]||(t[0]=[C("g",{fill:"none"},[C("path",{d:"M5.503 4.627L5.5 6.75v10.504a3.25 3.25 0 0 0 3.25 3.25h8.616a2.251 2.251 0 0 1-2.122 1.5H8.75A4.75 4.75 0 0 1 4 17.254V6.75c0-.98.627-1.815 1.503-2.123zM17.75 2A2.25 2.25 0 0 1 20 4.25v13a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-13A2.25 2.25 0 0 1 8.75 2h9zm0 1.5h-9a.75.75 0 0 0-.75.75v13c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75v-13a.75.75 0 0 0-.75-.75z",fill:"currentColor"})],-1)]))}}),We={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},L=z({name:"QuestionCircle20Regular",render:function(r,t){return b(),y("svg",We,t[0]||(t[0]=[C("g",{fill:"none"},[C("path",{d:"M10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16zm0 1a7 7 0 1 0 0 14a7 7 0 0 0 0-14zm0 10.5a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5zm0-8a2.5 2.5 0 0 1 1.651 4.377l-.154.125l-.219.163l-.087.072a1.968 1.968 0 0 0-.156.149c-.339.36-.535.856-.535 1.614a.5.5 0 0 1-1 0c0-1.012.293-1.752.805-2.298a3.11 3.11 0 0 1 .356-.323l.247-.185l.118-.1A1.5 1.5 0 1 0 8.5 8a.5.5 0 0 1-1 .001A2.5 2.5 0 0 1 10 5.5z",fill:"currentColor"})],-1)]))}}),Oe={class:"code-display"},He={class:"code-content"},Le={__name:"CodeLine",props:{code:{type:String,required:!0}},setup(e){const r=e,t=$(!1),n=Q(),i=async()=>{t.value=!0;try{await navigator.clipboard.writeText(r.code),n.success("命令已复制到剪贴板")}catch{n.error("复制失败，请手动复制")}finally{t.value=!1}};return(o,d)=>(b(),y("div",Oe,[C("pre",He,Ce(e.code),1),a(l(k),{class:"copy-button",size:"small",onClick:i},{icon:x(()=>[a(l(Ve))]),_:1})]))}},D=he(Le,[["__scopeId","data-v-198a82d1"]]),De={key:0},Ke={class:"margin-top-bottom-1"},Ue={key:1},Qe={class:"margin-top-bottom-1"},qe={key:2},Ge=z({__name:"StepInstallIncus",setup(e){const r=Q(),t=$(1),n=()=>location.origin,i=$(""),o=$(!1),d=()=>{console.log(i);const m=i.value.trim();if(m===""){r.error("请输入IP地址");return}const s=/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,g=/^(?=.*[a-zA-Z0-9])(?=.*:)[a-zA-Z0-9:]+$/;s.test(m)?(r.success("发现一个格式正确的IPV4地址"),o.value=!0):g.test(m)?(r.success("发现一个格式正确的IPV6地址"),o.value=!0):r.error("请输入有效的 IPv4 或 IPv6 地址")},p=$(!1);return(m,s)=>(b(),y("div",null,[a(l(Ee),{size:"small",current:t.value,status:"process"},{default:x(()=>[a(l(E),{title:"安装虚拟化程序"}),a(l(E),{title:"添加证书"}),a(l(E),{title:"完成连接"})]),_:1},8,["current"]),t.value===1?(b(),y("div",De,[C("div",Ke,[a(D,{code:`bash <(${n()}/api/admin/incus/install.sh)`},null,8,["code"])]),a(l(I),{align:"center",justify:"space-between"},{default:x(()=>[a(l(I),{align:"center"},{default:x(()=>[s[4]||(s[4]=C("span",null,"请复制安装命令并在 debian11/12 执行",-1)),a(l(H),{title:"将在该服务器上安装 Incus，提供虚拟化能力。"},{default:x(()=>[a(l(L))]),_:1})]),_:1}),a(l(k),{secondary:"",type:"success",onClick:s[0]||(s[0]=g=>t.value++)},{default:x(()=>s[5]||(s[5]=[R("下一步")])),_:1})]),_:1})])):N("",!0),t.value===2?(b(),y("div",Ue,[C("div",Qe,[a(D,{code:`bash <(${n()}/api/admin/incus/auth.sh)`},null,8,["code"])]),a(l(I),{align:"center",justify:"space-between"},{default:x(()=>[a(l(I),{align:"center"},{default:x(()=>[s[6]||(s[6]=C("span",null,"请复制授权命令并执行",-1)),a(l(H),{title:"将在该服务器上拉取此控制台提供的证书，并添加到 Incus 进行授权，之后平台可以控制该服务器。"},{default:x(()=>[a(l(L))]),_:1})]),_:1}),a(l(k),{secondary:"",type:"success",onClick:s[1]||(s[1]=g=>t.value++)},{default:x(()=>s[7]||(s[7]=[R("下一步")])),_:1})]),_:1})])):N("",!0),t.value===3?(b(),y("div",qe,[a(l(I),{class:"margin-top-bottom-1",align:"center",justify:"space-between"},{default:x(()=>[a(l(we),{value:i.value,"onUpdate:value":s[2]||(s[2]=g=>i.value=g),placeholder:"请输入 IP 地址",onBlur:d,onKeydown:be(d,["enter"])},null,8,["value"])]),_:1}),a(l(I),{align:"center",justify:"space-between"},{default:x(()=>[s[9]||(s[9]=C("span",null,"输入刚才添加的服务器的IP地址",-1)),a(l(k),{secondary:"",type:"success",onClick:s[3]||(s[3]=g=>p.value=!p.value),loading:p.value,disabled:!o.value},{default:x(()=>s[8]||(s[8]=[R("连接")])),_:1},8,["loading","disabled"])]),_:1})])):N("",!0)]))}}),Xe=z({__name:"NodesView",setup(e){const r=ze(),t=()=>{r.create({title:"添加节点",preset:"card",style:{width:"30rem"},content:()=>c(Ge,null,"")})};return(n,i)=>(b(),ye(l(k),{onClick:t},{default:x(()=>i[0]||(i[0]=[R("添加节点")])),_:1}))}});export{Xe as default};
