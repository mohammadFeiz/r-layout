import React,{Component,Fragment} from "react";
import "./index.css";
import $ from 'jquery';
export default class RLayout extends Component {
  touch = 'ontouchstart' in document.documentElement;
  eventHandler(event, action,type = 'bind'){
    event = this.touch ? { mousemove: "touchmove", mouseup: "touchend" }[event] : event;
    $(window).unbind(event, action);
    if(type === 'bind'){$(window).bind(event, action)}
  }
  getClassName(obj,childs,Attrs,attrs,Props){
    let className = childs.length?'r-layout-parent':'r-layout-item';
    let gapClassName = 'r-layout-gap';
    if(Attrs.className){ className += ' ' + Attrs.className}
    if(attrs.className){ className += ' ' + attrs.className}
    if(obj.hide_xs || Props.hide_xs){
      className += ' r-layout-hide-xs';
      gapClassName += ' r-layout-hide-xs';
    }
    if(obj.hide_sm || Props.hide_sm){
      className += ' r-layout-hide-sm';
      gapClassName += ' r-layout-hide-sm';
    }
    if(obj.hide_md || Props.hide_md){
      className += ' r-layout-hide-md';
      gapClassName += ' r-layout-hide-md';
    }
    if(obj.hide_lg || Props.hide_lg){
      className += ' r-layout-hide-lg';
      gapClassName += ' r-layout-hide-lg';
    }
    return {className,gapClassName};
  }
  getStyle(obj,Props,style){
    let align = obj.align || Props.align;
    let scroll = obj.scroll || Props.scroll;
    if(align === 'v'){
      if(obj.column){style.justifyContent = 'center'}
      else {style.alignItems = 'center'}
      
    }
    else if(align === 'h'){
      if(obj.column){style.alignItems = 'center'}
      else {style.justifyContent = 'center'}
      
    }
    else if(align === 'vh' || align === 'hv'){style.alignItems = 'center'; style.justifyContent = 'center';}
    if(scroll === 'v'){style.overflowY = 'auto'}
    else if(scroll === 'h'){style.overflowX = 'auto'; style.whiteSpace = 'nowrap';}
    else if(scroll === 'vh' || scroll === 'hv'){style.overflowX = 'auto'; style.overflowY = 'auto';}
    return style
  }
  getProps(obj,index,parent){
    let {childsAttrs = ()=>{return {}},childsProps = ()=>{return {}}} = parent;
    let {attrs = {},onResize} = obj;
    let Attrs = (typeof childsAttrs === 'function'?childsAttrs(obj,index):childsAttrs) || {};
    let Props = (typeof childsProps === 'function'?childsProps(obj,index):childsProps) || {};
    let size = obj.size || Props.size;
    let flex = obj.flex || Props.flex;
    let cursor = Attrs.onClick || attrs.onClick?'pointer':undefined;
    let childs = [];
    let html = typeof obj.html === 'function'?obj.html():obj.html;
    let dataId = 'a' + Math.random();
    let style = this.getStyle(obj,Props,{cursor,...Attrs.style,...attrs.style})
    let axis;
    let gapStyle = {}
    if(parent.row){
      style.width = size;
      style.height = '100%';
      gapStyle.width = parent.gap;
      if(size && onResize){gapStyle.cursor = 'col-resize';}
      axis = 'x';
    }
    else if(parent.column){
      style.height = size;
      style.width = '100%';
      gapStyle.height = parent.gap;
      if(size && onResize){gapStyle.cursor = 'row-resize';}
      axis = 'y';
    }
    if(obj.row){
      childs = typeof obj.row === 'function'?obj.row():obj.row;
      style.flexDirection = 'row'
    }
    else if(obj.column){
      childs = typeof obj.column === 'function'?obj.column():obj.column
      style.flexDirection = 'column'
    }
    let {className,gapClassName} = this.getClassName(obj,childs,Attrs,attrs,Props);
    let gapAttrs = {className:gapClassName,style:gapStyle,draggable:false,onDragStart:(e)=>e.preventDefault()};
    if(size && onResize){
      gapAttrs[this.touch?'onTouchStart':'onMouseDown'] = (e)=>{
        this.so = {pos:this.getClient(e),onResize,axis,size,dataId};
        this.eventHandler('mousemove',$.proxy(this.mouseMove,this));
        this.eventHandler('mouseup',$.proxy(this.mouseUp,this));
      }
    }
    return {
      size,flex,childs,style,html,dataId,
      attrs:{...Attrs,...attrs,className,'data-id':dataId},
      gapAttrs
    }
  }
  getClient(e){return this.touch?{x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY}:{x:e.clientX,y:e.clientY}}
  getHtml(obj,index,parentObj){
    if(!obj || obj === null){return ''}
    let {show = true} = obj;
    let Show = typeof show === 'function'?show():show;
    let parent = parentObj || {};
    if(!Show){return null}
    let {size,flex,childs,style,html,attrs,gapAttrs} = this.getProps(obj,index,parent)
    if(parentObj){flex = flex || 'none'}
    var result;
    if(!childs.length){result = <div {...attrs} style={{...style,flex}}>{html}</div>}
    else{
      let Style = {...style,flex:!size?(flex || 1):undefined};
      result = (
        <div {...attrs} style={Style}>
          {childs.map((o,i)=><Fragment key={i}>{this.getHtml(o,i,obj)}</Fragment>)}
        </div>
      )
    }
    return (
      <Fragment key={index}>
        {result}
        {parent.gap !== undefined && <div {...gapAttrs}></div>}
      </Fragment>
    ) 
  }
  mouseMove(e){
    var {rtl} = this.props;
    var {pos,axis,size,dataId} = this.so;
    var client = this.getClient(e);
    var offset = (client[axis] - pos[axis]) * (rtl?-1:1);
    this.so.newSize = offset + size;
    var panel = $('[data-id="'+dataId+'"]');
    panel.css({[{'x':'width','y':'height'}[axis]]:this.so.newSize})
  }
  mouseUp(){
    this.eventHandler('mousemove',this.mouseMove,'unbind');
    this.eventHandler('mouseup',this.mouseUp,'unbind');
    var {onResize,newSize} = this.so;
    onResize(newSize);
  }
  render(){
    var {gap,layout} = this.props;
    return this.getHtml(layout,0);
  }
}
RLayout.defaultProps = {gap:0,layout:{}};
