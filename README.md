# react-virtual-dom ( reactjs )
- ### create complex html/jsx layout by json
- ### decrease code capasity
- ### auto generate css by js(not required styling layout by css)
- ### based on flexbox styling
- ### simple change layout by just change a json
- ### repeat html attributes in loops
- ### resize layput panels by set one property 
- ### support rtl layout just by set main parent direction css to rtl
- ### make panels resizable
- ### align panels content hotizontaly and/or verticaly
# Install
``` npm i react-virtual-dom ```
# props(just 1 prop)
prop | type | description
layout | json | this json will convert to html

# layout json properties:

property | type | default | description
row | array | optional | child divs (Which will placed horizontally)
column | array | optional | child divs (Which will placed vertically)
html | html/jsx | optional | html content of node.
gap | number | optional | will generate gap space between childs.
align | string 'v' or 'h' or 'vh' | optional | align content in center horizontally and/or vertically.
attrs | object | optional | node attributes.
childsAttrs | object | optional | an object that defines childs attributes.
childsAttrs | function | optional | a function that get each direct child object and  direct each child index as parameter and returns child attributes.

## row
- ##### generate a horizontal layout in one row without typing any css code
``` javascript
import React,{Component} from "react";
import ReactVirtualDom from 'react-virtual-dom';
import './style.css'
export default class app extends Component {
  render(){
    return (
      <ReactVirtualDom
        layout={{
          gap:12,
          attrs:{className:'container'},
          row:[ //see here
            {html:'a',flex:1,attrs:{className:'panel'}},
            {html:'b',flex:1,attrs:{className:'panel'}},
            {html:'c',flex:1,attrs:{className:'panel'}}, 
          ]
        }}
      />
    )
  }
}
```
- ##### gap:12 property will generate a div by width=12px between each child panels for gapping or resizing panels
- ##### attrs property will set all possible html attributes on div by an object. 
- ##### notice that attrs property can be a function that returns attrs object
- ##### this code will generate below html code:
```javascript
render(){
    return (
      <div class="r-layout-parent container" data-id="a0.4737824055943596" style="flex-direction: row; flex: 1 1 0%;">
        <div class="r-layout-item panel" data-id="a0.32910683900978577" style="flex: 1 1 0%;">
          a
        </div>
        <div class="r-layout-gap" draggable="false" style="width: 12px;"></div>
        <div class="r-layout-item panel" data-id="a0.42573192806826876" style="flex: 1 1 0%;">
          b
        </div>
        <div class="r-layout-gap" draggable="false" style="width: 12px;"></div>
        <div class="r-layout-item panel" data-id="a0.6251698251428581" style="flex: 1 1 0%;">
          c
        </div>
      </div>
    )
  }
```
[![alt text](/images/1.jpg)]

### column
- ##### generate a vertical layout in one column without typing any css code.
- ##### just change row in before exampe to column
``` javascript
import React,{Component} from "react";
import ReactVirtualDom from 'react-virtual-dom';
import './style.css'
export default class app extends Component {
  render(){
    return (
      <ReactVirtualDom
        layout={{
          gap:12,
          attrs:{className:'container'},
          column:[ // see here
            {html:'a',flex:1,attrs:{className:'panel'}},
            {html:'b',flex:1,attrs:{className:'panel'}},
            {html:'c',flex:1,attrs:{className:'panel'}}, 
          ]
        }}
      />
    )
  }
}
```
- ##### this code will generate below html code:
```javascript
<div class="r-layout-parent container" data-id="a0.16193452121795082" style="flex-direction: column; flex: 1 1 0%;">
  <div class="r-layout-item panel" data-id="a0.7349682553750092" style="flex: 1 1 0%;">
    a
  </div>
  <div class="r-layout-gap" draggable="false" style="height: 12px;"></div>
  <div class="r-layout-item panel" data-id="a0.2587051202578894" style="flex: 1 1 0%;">
    b
  </div>
  <div class="r-layout-gap" draggable="false" style="height: 12px;"></div>
  <div class="r-layout-item panel" data-id="a0.4623202720076629" style="flex: 1 1 0%;">
    c
  </div>
</div>
```
[![alt text](/images/2.jpg)]
### childsAttrs
- ##### set childsAttrs in parent as set attrs property of childs.
- ##### this code is same of first example by fewer code capacity.
``` javascript
import React,{Component} from "react";
import ReactVirtualDom from 'react-virtual-dom';
import './style.css'
export default class app extends Component {
  render(){
    return (
      <ReactVirtualDom
        layout={{
          gap:12,
          attrs:{className:'container'},
          childsAttrs:{className:'panel'},//see here
          row:[
            {html:'a',flex:1},
            {html:'b',flex:1},
            {html:'c',flex:1}, 
          ]
        }}
      />
    )
  }
}
```

[![alt text](/images/1.jpg)]

### childsProps
- ##### set childsProps in parent as set props of childs,
- ##### this code is same of first example by fewer code capacity.
- ##### all div childswill get flex property set by childsAttrs,
- ##### notice that childsAttrs can be a function that returns child attrs object.
``` javascript
import React,{Component} from "react";
import ReactVirtualDom from 'react-virtual-dom';
import './style.css'
export default class app extends Component {
  render(){
    return (
      <ReactVirtualDom
        layout={{
          gap:12,
          attrs:{className:'container'},
          childsAttrs:{className:'panel'},//see here
          childsProps:{flex:1},//see here
          row:[
            {html:'a'},
            {html:'b'},
            {html:'c'}, 
          ]
        }}
      />
    )
  }
}
```
[![alt text](/images/1.jpg)]


### size
- ##### set specific size on childs
``` javascript
import React,{Component} from "react";
import ReactVirtualDom from 'react-virtual-dom';
import './style.css'
export default class app extends Component {
  render(){
    return (
      <ReactVirtualDom
        layout={{
          gap:12,
          attrs:{className:'container'},
          childsAttrs:{className:'panel'},
          row:[
            {html:'a',size:48},//see here
            {html:'b',flex:1},
            {html:'c',flex:1}, 
          ]
        }}
      />
    )
  }
}
```

[![alt text](/images/3.jpg)]

### flex
##### set specific flex on childs
##### default is 1
``` javascript
import React,{Component} from "react";
import ReactVirtualDom from 'react-virtual-dom';
import './style.css'
export default class app extends Component {
  render(){
    return (
      <ReactVirtualDom
        layout={{
          gap:12,
          attrs:{className:'container'},
          childsAttrs:{className:'panel'},
          row:[
            {html:'a',flex:2},//see here
            {html:'b',flex:1},
            {html:'c',flex:1}, 
          ]
        }}
      />
    )
  }
}
```

[![alt text](/images/4.jpg)]


### set size of child as fit content
##### just dont set flex and size
``` javascript
import React,{Component} from "react";
import ReactVirtualDom from 'react-virtual-dom';
import './style.css'
export default class app extends Component {
  render(){
    return (
      <ReactVirtualDom
        layout={{
          gap:12,
          attrs:{className:'container'},
          childsAttrs:{className:'panel'},
          row:[
            {html:'abcdefg'},//see here
            {html:'b',flex:1},
            {html:'c',flex:1}, 
          ]
        }}
      />
    )
  }
}
```

[![alt text](/images/5.jpg)]

### nested layout
##### each child can get own layout 
``` javascript
import React,{Component} from "react";
import ReactVirtualDom from 'react-virtual-dom';
import './style.css'
export default class app extends Component {
  render(){
    return (
      <ReactVirtualDom
        layout={{
          gap:12,
          attrs:{className:'container'},
          row:[
            {
              gap:12,
              flex:1,
              childsAttrs:{className:'panel'},
              column:[
                {html:'a1',flex:1},
                {html:'a2',flex:1},
                {html:'a3',flex:1},
              ]
            },
            {
              flex:1,
              attrs:{className:'panel'},
              html:'b'
            },
            {
              gap:12,
              flex:1,
              childsAttrs:{className:'panel'},
              column:[
                {html:'c1',flex:1},
                {html:'c2',flex:1},
                {html:'c3',flex:1},
              ]
            },
          ]
        }}
      />
    )
  }
}


```

[![alt text](/images/6.jpg)]

### onResize
##### resize child by mouse
##### in this case size of child should store in state and onResize function change it
``` javascript
import React,{Component} from "react";
import ReactVirtualDom from 'react-virtual-dom';
import './style.css'
export default class app extends Component {
  state = {size1:100};
  render(){
    let {size1} = this.state;
    return (
      <ReactVirtualDom
        layout={{
          gap:12,
          attrs:{className:'container'},
          row:[
            {
              gap:12,
              size:size1, // see here
              onResize:(value)=>this.setState({size1:value}), //see here
              childsAttrs:{className:'panel'},
              column:[
                {html:'a1',flex:1},
                {html:'a2',flex:1},
                {html:'a3',flex:1},
              ]
            },
            {
              attrs:{className:'panel'},
              flex:1,
              html:'b',
            },
            {
              childsAttrs:{className:'panel'},
              flex:1,
              gap:12,
              column:[
                {html:'c1',flex:1},
                {html:'c2',flex:1},
                {html:'c3',flex:1}, 
              ]
            },
          ]
        }}
      />
    )
  }
}
```

[![alt text](/images/9.gif)]


### show
##### set false to prevent show child
##### boolean or function that return boolean
``` javascript
import React,{Component} from "react";
import ReactVirtualDom from 'react-virtual-dom';
import './style.css'
export default class app extends Component {
  render(){
    return (
      <ReactVirtualDom
        layout={{
          gap:12,
          attrs:{className:'container'},
          row:[
            {
              gap:12,
              flex:1,
              childsAttrs:{className:'panel'},
              column:[
                {html:'a1',flex:1},
                {html:'a2',flex:1,show:false},//see here . show type function
                {html:'a3',flex:1},
              ]
            },
            {html:'b',flex:1,attrs:{className:'panel'}},
            {
              gap:12,
              flex:1,
              childsAttrs:{className:'panel'},
              column:[
                {html:'c1',flex:1},
                {html:'c2',flex:1,show:false}, // see here . show type boolean
                {html:'c3',flex:1}, 
              ]
            },
          ]
        }}
      />
    )
  }
}
```

[![alt text](/images/10.jpg)]

### handle Complexity by get child from functions
``` javascript
import React,{Component} from "react";
import ReactVirtualDom from 'react-virtual-dom';
import './style.css'
export default class app extends Component {
  state = {
    list1:[
      {title:'item1'},
      {title:'item2'},
      {title:'item3'},
      {title:'item4'},
      {title:'item5'},
      {title:'item6'},
      {title:'item7'},
      {title:'item8'},
      {title:'item9'},
      {title:'item10'},
      {title:'item11'},
      {title:'item12'},
      {title:'item13'},
      {title:'item14'},
      {title:'item15'},
      {title:'item16'},
      {title:'item17'},
      {title:'item18'},
      {title:'item19'},
    ],
    list2:[]
  }
  getList(listName){
    return {
      gap:0,attrs:{className:'panel',},
      column:this.state[listName].map((o,index)=>{
        return {
          html:o.title,size:36,
          attrs:{
            className:'item',
            onClick:()=>{
              let currentList = this.state[listName];
              let otherList = this.state[listName === 'list1'?'list2':'list1'];
              otherList.push(o);
              currentList.splice(index,1);
              this.setState({[listName]:currentList});
            }
          }
        }
      })
    }
  }
  render(){
    return (
      <ReactVirtualDom
        layout={{
          attrs:{className:'container',style:{padding:12,boxSizing:'border-box'}},
          column:[ 
            {
              size:72,
              childsAttrs:{className:'panel'},
              row:[
                {html:'a'},
                {html:'b'},
                {html:'c'},
              ]
            },
            {
              row:[
                this.getList('list1'),
                this.getList('list2'),
              ]
            }
          ]
        }}
      />
    )
  }
}


```

[![alt text](/images/11.gif)]
