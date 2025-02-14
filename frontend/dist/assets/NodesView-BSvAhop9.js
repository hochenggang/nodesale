import{d as S,h as p,f as X,u as E,a as P,b as Y,c as _,e as b,g as xe,i as H,j as ee,k as m,l as $,m as k,n as W,o as A,p as fe,q as ge,r as me,s as K,N as ve,t as U,v as L,E as Ce,w as be,x as ze,y as te,z as q,A as ye,B as z,C as y,D as f,_ as re,F as T,G as D,H as l,I as N,J as x,K as d,L as I,M as j,O as M,P as F,Q as we,R as Se,S as _e,T as Q,U as G,V as $e,W as ke}from"./index-DUcR8lL1.js";import{N as Be}from"./Input-BNOhe4MZ.js";function oe(e,n="default",t=[]){const s=e.$slots[n];return s===void 0?t:s()}const Te=S({name:"Checkmark",render(){return p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},p("g",{fill:"none"},p("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Ie={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"};function Pe(){return Ie}const Re={self:Pe},Fe=Object.assign(Object.assign({},P.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrap:{type:Boolean,default:!0}}),B=S({name:"Flex",props:Fe,setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:t}=E(e),r=P("Flex","-flex",void 0,Re,e,n);return{rtlEnabled:Y("Flex",t,n),mergedClsPrefix:n,margin:_(()=>{const{size:o}=e;if(Array.isArray(o))return{horizontal:o[0],vertical:o[1]};if(typeof o=="number")return{horizontal:o,vertical:o};const{self:{[b("gap",o)]:a}}=r.value,{row:u,col:h}=xe(a);return{horizontal:H(h),vertical:H(u)}})}},render(){const{vertical:e,reverse:n,align:t,inline:r,justify:s,margin:o,wrap:a,mergedClsPrefix:u,rtlEnabled:h}=this,g=X(oe(this),!1);return g.length?p("div",{role:"none",class:[`${u}-flex`,h&&`${u}-flex--rtl`],style:{display:r?"inline-flex":"flex",flexDirection:e&&!n?"column":e&&n?"column-reverse":!e&&n?"row-reverse":"row",justifyContent:s,flexWrap:!a||e?"nowrap":"wrap",alignItems:t,gap:`${o.vertical}px ${o.horizontal}px`}},g):null}}),We={stepHeaderFontSizeSmall:"14px",stepHeaderFontSizeMedium:"16px",indicatorIndexFontSizeSmall:"14px",indicatorIndexFontSizeMedium:"16px",indicatorSizeSmall:"22px",indicatorSizeMedium:"28px",indicatorIconSizeSmall:"14px",indicatorIconSizeMedium:"18px"};function Ne(e){const{fontWeightStrong:n,baseColor:t,textColorDisabled:r,primaryColor:s,errorColor:o,textColor1:a,textColor2:u}=e;return Object.assign(Object.assign({},We),{stepHeaderFontWeight:n,indicatorTextColorProcess:t,indicatorTextColorWait:r,indicatorTextColorFinish:s,indicatorTextColorError:o,indicatorBorderColorProcess:s,indicatorBorderColorWait:r,indicatorBorderColorFinish:s,indicatorBorderColorError:o,indicatorColorProcess:s,indicatorColorWait:"#0000",indicatorColorFinish:"#0000",indicatorColorError:"#0000",splitorColorProcess:r,splitorColorWait:r,splitorColorFinish:s,splitorColorError:r,headerTextColorProcess:a,headerTextColorWait:r,headerTextColorFinish:r,headerTextColorError:o,descriptionTextColorProcess:u,descriptionTextColorWait:r,descriptionTextColorFinish:r,descriptionTextColorError:o})}const je={common:ee,self:Ne},Me={headerFontSize1:"30px",headerFontSize2:"22px",headerFontSize3:"18px",headerFontSize4:"16px",headerFontSize5:"16px",headerFontSize6:"16px",headerMargin1:"28px 0 20px 0",headerMargin2:"28px 0 20px 0",headerMargin3:"28px 0 20px 0",headerMargin4:"28px 0 18px 0",headerMargin5:"28px 0 18px 0",headerMargin6:"28px 0 18px 0",headerPrefixWidth1:"16px",headerPrefixWidth2:"16px",headerPrefixWidth3:"12px",headerPrefixWidth4:"12px",headerPrefixWidth5:"12px",headerPrefixWidth6:"12px",headerBarWidth1:"4px",headerBarWidth2:"4px",headerBarWidth3:"3px",headerBarWidth4:"3px",headerBarWidth5:"3px",headerBarWidth6:"3px",pMargin:"16px 0 16px 0",liMargin:".25em 0 0 0",olPadding:"0 0 0 2em",ulPadding:"0 0 0 2em"};function Ee(e){const{primaryColor:n,textColor2:t,borderColor:r,lineHeight:s,fontSize:o,borderRadiusSmall:a,dividerColor:u,fontWeightStrong:h,textColor1:g,textColor3:C,infoColor:v,warningColor:i,errorColor:c,successColor:w,codeColor:R}=e;return Object.assign(Object.assign({},Me),{aTextColor:n,blockquoteTextColor:t,blockquotePrefixColor:r,blockquoteLineHeight:s,blockquoteFontSize:o,codeBorderRadius:a,liTextColor:t,liLineHeight:s,liFontSize:o,hrColor:u,headerFontWeight:h,headerTextColor:g,pTextColor:t,pTextColor1Depth:g,pTextColor2Depth:t,pTextColor3Depth:C,pLineHeight:s,pFontSize:o,headerBarColor:n,headerBarColorPrimary:n,headerBarColorInfo:v,headerBarColorError:c,headerBarColorWarning:i,headerBarColorSuccess:w,textColor:t,textColor1Depth:g,textColor2Depth:t,textColor3Depth:C,textColorPrimary:n,textColorInfo:v,textColorSuccess:w,textColorWarning:i,textColorError:c,codeTextColor:t,codeColor:R,codeBorder:"1px solid #0000"})}const Ve={common:ee,self:Ee},Ae=m("steps",`
 width: 100%;
 display: flex;
`,[m("step",`
 position: relative;
 display: flex;
 flex: 1;
 `,[$("disabled","cursor: not-allowed"),$("clickable",`
 cursor: pointer;
 `),k("&:last-child",[m("step-splitor","display: none;")])]),m("step-splitor",`
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
 `),m("step-content","flex: 1;",[m("step-content-header",`
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
 `,[W("title",`
 white-space: nowrap;
 flex: 0;
 `)]),W("description",`
 color: var(--n-description-text-color);
 margin-top: 12px;
 margin-left: 9px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),m("step-indicator",`
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
 `,[m("step-indicator-slot",`
 position: relative;
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 font-size: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 `,[W("index",`
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
 `,[A()]),m("icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[A()]),m("base-icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[A()])])]),$("vertical","flex-direction: column;",[fe("show-description",[k(">",[m("step","padding-bottom: 8px;")])]),k(">",[m("step","margin-bottom: 16px;",[k("&:last-child","margin-bottom: 0;"),k(">",[m("step-indicator",[k(">",[m("step-splitor",`
 position: absolute;
 bottom: -8px;
 width: 1px;
 margin: 0 !important;
 left: calc(var(--n-indicator-size) / 2);
 height: calc(100% - var(--n-indicator-size));
 `)])]),m("step-content",[W("description","margin-top: 8px;")])])])])])]);function Le(e,n){return typeof e!="object"||e===null||Array.isArray(e)?null:(e.props||(e.props={}),e.props.internalIndex=n+1,e)}function Oe(e){return e.map((n,t)=>Le(n,t))}const De=Object.assign(Object.assign({},P.props),{current:Number,status:{type:String,default:"process"},size:{type:String,default:"medium"},vertical:Boolean,"onUpdate:current":[Function,Array],onUpdateCurrent:[Function,Array]}),ne=ge("n-steps"),He=S({name:"Steps",props:De,slots:Object,setup(e,{slots:n}){const{mergedClsPrefixRef:t,mergedRtlRef:r}=E(e),s=Y("Steps",r,t),o=P("Steps","-steps",Ae,je,e,t);return me(ne,{props:e,mergedThemeRef:o,mergedClsPrefixRef:t,stepsSlots:n}),{mergedClsPrefix:t,rtlEnabled:s}},render(){const{mergedClsPrefix:e}=this;return p("div",{class:[`${e}-steps`,this.rtlEnabled&&`${e}-steps--rtl`,this.vertical&&`${e}-steps--vertical`]},Oe(X(oe(this))))}}),Ke={status:String,title:String,description:String,disabled:Boolean,internalIndex:{type:Number,default:0}},O=S({name:"Step",props:Ke,slots:Object,setup(e){const n=be(ne,null);n||ze("step","`n-step` must be placed inside `n-steps`.");const{inlineThemeDisabled:t}=E(),{props:r,mergedThemeRef:s,mergedClsPrefixRef:o,stepsSlots:a}=n,u=_(()=>r.vertical),h=_(()=>{const{status:i}=e;if(i)return i;{const{internalIndex:c}=e,{current:w}=r;if(w===void 0)return"process";if(c<w)return"finish";if(c===w)return r.status||"process";if(c>w)return"wait"}return"process"}),g=_(()=>{const{value:i}=h,{size:c}=r,{common:{cubicBezierEaseInOut:w},self:{stepHeaderFontWeight:R,[b("stepHeaderFontSize",c)]:V,[b("indicatorIndexFontSize",c)]:ie,[b("indicatorSize",c)]:se,[b("indicatorIconSize",c)]:ae,[b("indicatorTextColor",i)]:le,[b("indicatorBorderColor",i)]:de,[b("headerTextColor",i)]:ce,[b("splitorColor",i)]:pe,[b("indicatorColor",i)]:ue,[b("descriptionTextColor",i)]:he}}=s.value;return{"--n-bezier":w,"--n-description-text-color":he,"--n-header-text-color":ce,"--n-indicator-border-color":de,"--n-indicator-color":ue,"--n-indicator-icon-size":ae,"--n-indicator-index-font-size":ie,"--n-indicator-size":se,"--n-indicator-text-color":le,"--n-splitor-color":pe,"--n-step-header-font-size":V,"--n-step-header-font-weight":R}}),C=t?te("step",_(()=>{const{value:i}=h,{size:c}=r;return`${i[0]}${c[0]}`}),g,r):void 0,v=_(()=>{if(e.disabled)return;const{onUpdateCurrent:i,"onUpdate:current":c}=r;return i||c?()=>{i&&q(i,e.internalIndex),c&&q(c,e.internalIndex)}:void 0});return{stepsSlots:a,mergedClsPrefix:o,vertical:u,mergedStatus:h,handleStepClick:v,cssVars:t?void 0:g,themeClass:C==null?void 0:C.themeClass,onRender:C==null?void 0:C.onRender}},render(){const{mergedClsPrefix:e,onRender:n,handleStepClick:t,disabled:r}=this,s=K(this.$slots.default,o=>{const a=o||this.description;return a?p("div",{class:`${e}-step-content__description`},a):null});return n==null||n(),p("div",{class:[`${e}-step`,r&&`${e}-step--disabled`,!r&&t&&`${e}-step--clickable`,this.themeClass,s&&`${e}-step--show-description`,`${e}-step--${this.mergedStatus}-status`],style:this.cssVars,onClick:t},p("div",{class:`${e}-step-indicator`},p("div",{class:`${e}-step-indicator-slot`},p(ve,null,{default:()=>K(this.$slots.icon,o=>{const{mergedStatus:a,stepsSlots:u}=this;return a==="finish"||a==="error"?a==="finish"?p(U,{clsPrefix:e,key:"finish"},{default:()=>L(u["finish-icon"],()=>[p(Te,null)])}):a==="error"?p(U,{clsPrefix:e,key:"error"},{default:()=>L(u["error-icon"],()=>[p(Ce,null)])}):null:o||p("div",{key:this.internalIndex,class:`${e}-step-indicator-slot__index`},this.internalIndex)})})),this.vertical?p("div",{class:`${e}-step-splitor`}):null),p("div",{class:`${e}-step-content`},p("div",{class:`${e}-step-content-header`},p("div",{class:`${e}-step-content-header__title`},L(this.$slots.title,()=>[this.title])),this.vertical?null:p("div",{class:`${e}-step-splitor`})),s))}}),Ue=m("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[$("strong",`
 font-weight: var(--n-font-weight-strong);
 `),$("italic",{fontStyle:"italic"}),$("underline",{textDecoration:"underline"}),$("code",`
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]),qe=Object.assign(Object.assign({},P.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),Qe=S({name:"Text",props:qe,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=E(e),r=P("Typography","-text",Ue,Ve,e,n),s=_(()=>{const{depth:a,type:u}=e,h=u==="default"?a===void 0?"textColor":`textColor${a}Depth`:b("textColor",u),{common:{fontWeightStrong:g,fontFamilyMono:C,cubicBezierEaseInOut:v},self:{codeTextColor:i,codeBorderRadius:c,codeColor:w,codeBorder:R,[h]:V}}=r.value;return{"--n-bezier":v,"--n-text-color":V,"--n-font-weight-strong":g,"--n-font-famliy-mono":C,"--n-code-border-radius":c,"--n-code-text-color":i,"--n-code-color":w,"--n-code-border":R}}),o=t?te("text",_(()=>`${e.type[0]}${e.depth||""}`),s,e):void 0;return{mergedClsPrefix:n,compitableTag:ye(e,["as","tag"]),cssVars:t?void 0:s,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var e,n,t;const{mergedClsPrefix:r}=this;(e=this.onRender)===null||e===void 0||e.call(this);const s=[`${r}-text`,this.themeClass,{[`${r}-text--code`]:this.code,[`${r}-text--delete`]:this.delete,[`${r}-text--strong`]:this.strong,[`${r}-text--italic`]:this.italic,[`${r}-text--underline`]:this.underline}],o=(t=(n=this.$slots).default)===null||t===void 0?void 0:t.call(n);return this.code?p("code",{class:s,style:this.cssVars},this.delete?p("del",null,o):o):this.delete?p("del",{class:s,style:this.cssVars},o):p(this.compitableTag||"span",{class:s,style:this.cssVars},o)}}),Ge={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},Je=S({name:"ArrowCircleRight20Regular",render:function(n,t){return y(),z("svg",Ge,t[0]||(t[0]=[f("g",{fill:"none"},[f("path",{d:"M10.854 13.354l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 9.5H6.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708zM18 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0zm-8 7a7 7 0 1 0 0-14a7 7 0 0 0 0 14z",fill:"currentColor"})],-1)]))}}),Ze={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},Xe=S({name:"Box20Regular",render:function(n,t){return y(),z("svg",Ze,t[0]||(t[0]=[f("g",{fill:"none"},[f("path",{d:"M11.3 2.48a3.5 3.5 0 0 0-2.6 0L2.943 4.785A1.5 1.5 0 0 0 2 6.176v7.646a1.5 1.5 0 0 0 .943 1.393L8.7 17.518a3.5 3.5 0 0 0 2.6 0l5.757-2.303A1.5 1.5 0 0 0 18 13.822V6.176a1.5 1.5 0 0 0-.943-1.392L11.3 2.48zm-2.228.93a2.5 2.5 0 0 1 1.857 0l5.225 2.09l-2.279.91l-6.154-2.46l1.35-.54zM6.375 4.487l6.154 2.461L10 7.961L3.846 5.499l2.529-1.011zm4.125 4.35l6.5-2.6v7.584a.5.5 0 0 1-.314.465l-5.758 2.303c-.14.055-.283.098-.428.128v-7.88zm-1 0v7.88a2.508 2.508 0 0 1-.428-.128l-5.758-2.303A.5.5 0 0 1 3 13.822V6.238l6.5 2.6z",fill:"currentColor"})],-1)]))}}),Ye={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},et=S({name:"Copy24Regular",render:function(n,t){return y(),z("svg",Ye,t[0]||(t[0]=[f("g",{fill:"none"},[f("path",{d:"M5.503 4.627L5.5 6.75v10.504a3.25 3.25 0 0 0 3.25 3.25h8.616a2.251 2.251 0 0 1-2.122 1.5H8.75A4.75 4.75 0 0 1 4 17.254V6.75c0-.98.627-1.815 1.503-2.123zM17.75 2A2.25 2.25 0 0 1 20 4.25v13a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-13A2.25 2.25 0 0 1 8.75 2h9zm0 1.5h-9a.75.75 0 0 0-.75.75v13c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75v-13a.75.75 0 0 0-.75-.75z",fill:"currentColor"})],-1)]))}}),tt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},J=S({name:"QuestionCircle20Regular",render:function(n,t){return y(),z("svg",tt,t[0]||(t[0]=[f("g",{fill:"none"},[f("path",{d:"M10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16zm0 1a7 7 0 1 0 0 14a7 7 0 0 0 0-14zm0 10.5a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5zm0-8a2.5 2.5 0 0 1 1.651 4.377l-.154.125l-.219.163l-.087.072a1.968 1.968 0 0 0-.156.149c-.339.36-.535.856-.535 1.614a.5.5 0 0 1-1 0c0-1.012.293-1.752.805-2.298a3.11 3.11 0 0 1 .356-.323l.247-.185l.118-.1A1.5 1.5 0 1 0 8.5 8a.5.5 0 0 1-1 .001A2.5 2.5 0 0 1 10 5.5z",fill:"currentColor"})],-1)]))}}),rt={class:"code-display"},ot={class:"code-content"},nt={__name:"CodeLine",props:{code:{type:String,required:!0}},setup(e){const n=e,t=T(!1),r=D(),s=async()=>{t.value=!0;try{await navigator.clipboard.writeText(n.code),r.success("命令已复制到剪贴板")}catch{r.error("复制失败，请手动复制")}finally{t.value=!1}};return(o,a)=>(y(),z("div",rt,[f("pre",ot,N(e.code),1),l(d(I),{class:"copy-button",size:"small",onClick:s},{icon:x(()=>[l(d(et))]),_:1})]))}},Z=re(nt,[["__scopeId","data-v-198a82d1"]]),it={key:0},st={class:"margin-top-bottom-1"},at={key:1},lt={class:"margin-top-bottom-1"},dt={key:2},ct=S({__name:"StepInstallIncus",emits:["close"],setup(e,{emit:n}){const t=n,r=D(),s=T(1),o=()=>location.origin,a=T(""),u=T(!1),h=()=>{console.log(a);const v=a.value.trim();if(v===""){r.error("请输入IP地址");return}const i=/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,c=/^(?=.*[a-zA-Z0-9])(?=.*:)[a-zA-Z0-9:]+$/;i.test(v)||c.test(v)?u.value=!0:r.error("请输入有效的 IPv4 或 IPv6 地址")},g=T(!1),C=async()=>{g.value=!0;const v=await fetch("/api/admin/node",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({host:a.value,port:8443})});if(v.ok){const i=await v.json();if(i.metadata.auth==="trusted"){r.success("添加成功"),Se(i),t("close");return}else r.error(`添加失败 ${v.status}`)}else r.error("无法通讯，确保前序步骤已完成");g.value=!1};return(v,i)=>(y(),z("div",null,[l(d(He),{size:"small",current:s.value,status:"process"},{default:x(()=>[l(d(O),{title:"安装虚拟化程序"}),l(d(O),{title:"添加证书"}),l(d(O),{title:"完成连接"})]),_:1},8,["current"]),s.value===1?(y(),z("div",it,[f("div",st,[l(Z,{code:`bash <(curl -sL ${o()}/api/admin/incus/install.sh)`},null,8,["code"])]),l(d(B),{align:"center",justify:"space-between"},{default:x(()=>[l(d(B),{align:"center"},{default:x(()=>[i[3]||(i[3]=f("span",null,"请复制安装命令并在 debian11/12 执行",-1)),l(d(M),{title:"将在该服务器上安装 Incus，提供虚拟化能力。"},{default:x(()=>[l(d(J))]),_:1})]),_:1}),l(d(I),{secondary:"",type:"success",onClick:i[0]||(i[0]=c=>s.value++)},{default:x(()=>i[4]||(i[4]=[F("下一步")])),_:1})]),_:1})])):j("",!0),s.value===2?(y(),z("div",at,[f("div",lt,[l(Z,{code:`bash <(curl -sL ${o()}/api/admin/incus/auth.sh)`},null,8,["code"])]),l(d(B),{align:"center",justify:"space-between"},{default:x(()=>[l(d(B),{align:"center"},{default:x(()=>[i[5]||(i[5]=f("span",null,"请复制授权命令并执行",-1)),l(d(M),{title:"将在该服务器上拉取此控制台提供的证书，并添加到 Incus 进行授权，之后平台可以控制该服务器。"},{default:x(()=>[l(d(J))]),_:1})]),_:1}),l(d(I),{secondary:"",type:"success",onClick:i[1]||(i[1]=c=>s.value++)},{default:x(()=>i[6]||(i[6]=[F("下一步")])),_:1})]),_:1})])):j("",!0),s.value===3?(y(),z("div",dt,[l(d(B),{class:"margin-top-bottom-1",align:"center",justify:"space-between"},{default:x(()=>[l(d(Be),{value:a.value,"onUpdate:value":i[2]||(i[2]=c=>a.value=c),placeholder:"请输入 IP 地址",onBlur:h,onKeydown:we(h,["enter"])},null,8,["value"])]),_:1}),l(d(B),{align:"center",justify:"space-between"},{default:x(()=>[i[8]||(i[8]=f("span",null,"输入服务器的IP地址进行连接",-1)),l(d(I),{secondary:"",type:"success",onClick:C,loading:g.value,disabled:!u.value},{default:x(()=>i[7]||(i[7]=[F("连接")])),_:1},8,["loading","disabled"])]),_:1})])):j("",!0)]))}}),pt={class:"node-item"},ut={class:"flex between"},ht={class:"flex"},xt=S({__name:"NodesView",setup(e){const n=_e(),t=D(),r=T(Q()),s=()=>{const a=n.create({title:"添加节点",preset:"card",style:{width:"30rem"},content:()=>p(ct,{onClose:()=>{r.value=Q(),a.destroy()}},"")})},o=a=>{t.info(`展开 ${a.metadata.environment.server_name}`)};return(a,u)=>(y(),z(G,null,[l(d(I),{onClick:s},{default:x(()=>u[0]||(u[0]=[F("添加节点")])),_:1}),r.value.length>0?(y(!0),z(G,{key:0},$e(r.value,h=>(y(),z("div",{class:"node-items",key:h.metadata.environment.certificate_fingerprint},[f("div",pt,[l(d(ke),{hoverable:""},{default:x(()=>[f("div",ut,[f("div",ht,[l(d(M),null,{default:x(()=>[l(d(Xe))]),_:1}),l(d(Qe),null,{default:x(()=>[F(N(h.metadata.environment.server_name)+" - "+N(h.metadata.environment.server)+" "+N(h.metadata.environment.server_version),1)]),_:2},1024)]),l(d(I),{secondary:"",round:"",type:"success",onClick:g=>o(h)},{default:x(()=>[l(d(M),{size:"24"},{default:x(()=>[l(d(Je))]),_:1})]),_:2},1032,["onClick"])])]),_:2},1024)])]))),128)):j("",!0)],64))}}),mt=re(xt,[["__scopeId","data-v-d8858a94"]]);export{mt as default};
