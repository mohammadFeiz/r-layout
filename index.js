import t,{Component as e,Fragment as s}from"react";import o from"jquery";import"./index.css";import{jsx as r}from"react/jsx-runtime";import{Fragment as i}from"react/jsx-runtime";import{jsxs as a}from"react/jsx-runtime";let RVDCLS={rvd:"rvd",pointer:"rvd-pointer",gap:"rvd-gap",justify:"rvd-justify",align:"rvd-align",row:"rvd-row",column:"rvd-column",hidexs:"rvd-hide-xs",hidesm:"rvd-hide-sm",hidemd:"rvd-hide-md",hidelg:"rvd-hide-lg"};export default class l extends e{getClassName(t,e,s,o={}){let r=RVDCLS.rvd;e&&(r+=" rvd-root"),s.className?r+=" "+s.className:o.className&&(r+=" "+o.className),t&&(r+=" "+RVDCLS.pointer),"v"===s.align?r+=" "+(s.column?RVDCLS.justify:RVDCLS.align):"h"===s.align?r+=" "+(s.column?RVDCLS.align:RVDCLS.justify):"vh"===s.align&&(r+=` ${RVDCLS.justify} ${RVDCLS.align}`),s.row?r+=" "+RVDCLS.row:(s.column||s.grid)&&(r+=" "+RVDCLS.column);let i=getHideClassName(s);return r+(i?" "+i:"")}getProps(t,e,s={},l){let{htmls:n={}}=this.props,{childsProps:d=()=>({})}=s,h=("function"==typeof d?d(t,e):d)||{},m={...h,...t},{dragId:c,size:u,flex:p,onClick:g,html:f,style:v,longTouch:$}=m,C=t.attrs||h.attrs||{},y=!!g||!!C.onClick,w=[];"string"==typeof(f="function"==typeof f?f():f)&&n[f]&&(f=n[f](t));let x="a"+Math.random();if(v={...C.style,...v},s.row?void 0!==u&&(v.width=u,p=void 0):(s.column||s.grid)&&void 0!==u&&(v.height=u,p=void 0),t.row)w="function"==typeof t.row?t.row():t.row;else if(t.column)w="function"==typeof t.column?t.column():t.column;else if(t.grid){let{gridCols:N=2}=t,D="function"==typeof t.grid?t.grid():t.grid;for(let R=0;R<D.length;R+=N){let _=[],b="function"==typeof t.gridRow?t.gridRow(R):t.gridRow;for(let S=R;S<R+N;S++)D[S]&&_.push(D[S]);w.push({row:[..._],...b})}t.column=[...w]}let V=this.getClassName(y,l,m,C),L=getGapAttrs(t,s,m,x),j=s&&s.gapHtml?s.gapHtml(t,e):"";return void 0!==c&&(C.draggable=!0,C.onDragStart=t=>{let{dragHandleClassName:e,onDragStart:s=()=>{}}=this.props;(!e||o(t.target).hasClass(e)||0!==o(t.target).parents("."+e).length)&&(s(c),this.dragId=c)},C.onDragOver=t=>t.preventDefault(),C.onDrop=()=>{let{onSwap:t=()=>{},onDrop:e=()=>{}}=this.props;this.dragId!==c&&(t(this.dragId,c),e(c),this.dragId=!1)}),C={onClick:g,...C,style:{flex:p,...v},className:V,"data-id":x},m.egg&&(C.onClick=()=>this.egg(m.egg)),$&&(C["ontouchstart"in document.documentElement?"onTouchStart":"onMouseDown"]=t=>{this.lt=x,this[x+"callback"]=$,this.timer(),eventHandler("mouseup",o.proxy(this.longTouchMouseUp,this))}),this.props.loading&&f&&(f=a(i,{children:[r("div",{style:{opacity:0},children:f}),r("div",{className:"rvd-loading"})]}),C.onClick=void 0),{childs:w,html:f,attrs:C,gapAttrs:L,gapHtml:j}}getLayout(t,e,o,i){"object"==typeof t&&"object"==typeof o&&(t.props={...o.props,...t.props});let{getLayout:l}=this.props;if(!t||null===t||("function"==typeof t.show?t.show():t.show)===!1)return"";l&&(t=l(t,o));let{childs:n,html:d,attrs:h,gapAttrs:m,gapHtml:c=""}=this.getProps(t,e,o,i);return a(s,{children:[r("div",{...h,children:n.length?n.map((e,o)=>r(s,{children:this.getLayout(e,o,t,!1)},o)):d}),o&&(void 0!==o.gap||o.props&&void 0!==o.props.gap)&&r("div",{...m,children:c})]},e)}egg({callback:t=()=>{},count:e=10}){this.eggCounter++,this.eggCounter>=e&&t(),clearTimeout(this.timeOut),this.timeOut=setTimeout(()=>this.eggCounter=0,500)}longTouchMouseUp(){eventHandler("mouseup",this.longTouchMouseUp,"unbind"),clearInterval(this[this.lt+"interval"])}timer(){this.time=0,this[this.lt+"interval"]=setInterval(()=>{this.time++,this.time>50&&(clearInterval(this[this.lt+"interval"]),this[this.lt+"callback"]())},10)}render(){var{gap:t,layout:e}=this.props;return this.getLayout(e,0,void 0,!0)}};l.defaultProps={gap:0,layout:{}};export function RVDRemoveV(t,e){o(t).animate({opacity:0},100).animate({height:0,padding:0},150,e)}export function RVDRemoveH(t,e){o(t).animate({opacity:0},100).animate({width:0,padding:0},150,e)}export function RVDRemove(t,e){o(t).animate({opacity:0},200,e)}function eventHandler(t,e,s="bind"){t="ontouchstart"in document.documentElement?({mousemove:"touchmove",mouseup:"touchend"})[t]:t,o(window).unbind(t,e),"bind"===s&&o(window).bind(t,e)}function getGapAttrs(t,e={},s={},r){return({getClient:t=>"ontouchstart"in document.documentElement?{x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}:{x:t.clientX,y:t.clientY},mouseMove(t){var{rtl:e}=this.props,{pos:s,axis:r,size:i,dataId:a}=this.so,l=(this.getClient(t)[r]-s[r])*(e?-1:1);l%24==0&&(this.so.newSize=l+i,o('[data-id="'+a+'"]').css({[({x:"width",y:"height"})[r]]:this.so.newSize}))},mouseUp(){eventHandler("mousemove",this.mouseMove,"unbind"),eventHandler("mouseup",this.mouseUp,"unbind");var{onResize:t,newSize:e}=this.so;t(e)},getGap(t,e,s){let o=e["gap"+s]||e.gap||(e.props?e.props["gap"+s]||e.props.gap:void 0);return"function"==typeof o?o(t,e):o},getClassName(){let t=RVDCLS.gap;e.gapAttrs&&e.gapAttrs.className&&(t+=" "+e.gapAttrs.className);let o=getHideClassName(s);return t+(o?" "+o:"")},getGapAttrs(){let{size:i,onResize:a}=s,l={},n;if(e.row)n="x",l.width=this.getGap(t,e,"H"),i&&a&&(l.cursor="col-resize");else{if(!e.column&&!e.grid)return{};n="y",l.height=this.getGap(t,e,"V"),i&&a&&(l.cursor="row-resize")}e.gapAttrs&&e.gapAttrs.style&&(l={...l,...e.gapAttrs.style});let d={className:this.getClassName(),style:l,draggable:!1,onDragStart:t=>(t.preventDefault(),!1)};return i&&a&&(d["ontouchstart"in document.documentElement?"onTouchStart":"onMouseDown"]=t=>{this.so={pos:this.getClient(t),onResize:a,axis:n,size:i,dataId:r},eventHandler("mousemove",o.proxy(this.mouseMove,this)),eventHandler("mouseup",o.proxy(this.mouseUp,this))}),d}}).getGapAttrs()}function getHideClassName(t){let e,s,o,r,i;return t.show_xs&&(e=!1,s=!0,o=!0,r=!0),t.hide_xs&&(e=!0),t.show_sm&&(e=!0,s=!1,o=!0,r=!0),t.hide_sm&&(s=!0),t.show_md&&(e=!0,s=!0,o=!1,r=!0),t.hide_md&&(o=!0),t.show_lg&&(e=!0,s=!0,o=!0,r=!1),t.hide_lg&&(r=!0),e&&(i+=" "+RVDCLS.hidexs),s&&(i+=" "+RVDCLS.hidesm),o&&(i+=" "+RVDCLS.hidemd),r&&(i+=" "+RVDCLS.hidelg),i}function Cls(t,e){let s=`rvd-${t}`;return e&&(s+=" "+e),s}export function renderCards({items:t=[],gap:e,attrs:s={}}){return r(l,{layout:{className:Cls("cards-container",s.className),column:[{className:Cls("cards"),style:{gap:e},column:t.map(t=>({style:{gap:e},row:t.map(t=>({className:"of-visible",flex:1,html:renderCard(t)}))}))}]}})}export function renderCardsRow(t=[],e){return r(l,{layout:{className:Cls("cards-row-container"),column:[{className:Cls("cards-row","of-visible"),style:{gap:e},row:t.map(t=>({className:"of-visible",html:renderCard(t)}))}]}})}export function renderCard({text:t,subtext:e,uptext:s,attrs:o={},before:i,after:a,header:n,footer:d,justify:h,classes:m={}}){return r(l,{layout:{attrs:o,onClick:o.onClick,className:Cls("card",o.className)+(h?" justify":""),style:o.style,column:[{show:!!n&&!Array.isArray(n),html:n,className:Cls("card-header",m.header)},{show:!!Array.isArray(n),className:Cls("card-header",m.header),row:()=>[{html:n[0]},{flex:1},{html:n[1]}]},{className:Cls("card-body",m.body),row:[{show:!!i,html:()=>i,align:"vh",className:Cls("card-before",m.before)},{flex:1,align:"v",column:[{show:!!s,html:s,className:Cls("card-uptext",m.uptext)},{html:t,className:Cls("card-text",m.text)},{show:!!e,html:()=>e,className:Cls("card-subtext",m.subtext)}]},{show:!!a,html:()=>a,align:"vh",className:Cls("card-after",m.after)}]},{show:!!d&&!Array.isArray(d),html:d,className:Cls("card-footer",m.footer)},{show:!!Array.isArray(d),className:Cls("card-footer",m.footer),row:()=>[{html:d[0]},{flex:1},{html:d[1]}]}]}})}