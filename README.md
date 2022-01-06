# r-layout
### row
##### set horizontal layout
``` javascript
import React,{Component} from "react";
import RLayout from 'r-layout';
import './style.css'
export default class app extends Component {
  render(){
    return (
      <RLayout
        layout={{
          attrs:{className:'container'},gap:12,
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

[![alt text](/images/1.jpg)]

### column
##### set vertical layout

``` javascript
import React,{Component} from "react";
import RLayout from 'r-layout';
import './style.css'
export default class app extends Component {
  render(){
    return (
      <RLayout
        layout={{
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
[![alt text](/images/2.jpg)]

### childsAttrs
##### set childsAttrs in parent as set attrs property of childs
``` javascript
import React,{Component} from "react";
import RLayout from 'r-layout';
import './style.css'
export default class app extends Component {
  render(){
    return (
      <RLayout
        layout={{
          attrs:{className:'container'},
          childsAttrs:{className:'panel'},//see here
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
##### set specific size on childs
``` javascript
import React,{Component} from "react";
import RLayout from './r-layout';
import './style.css'
export default class app extends Component {
  render(){
    return (
      <RLayout
        layout={{
          attrs:{className:'container'},
          childsAttrs:{className:'panel'},
          row:[
            {html:'a',size:48},//see here
            {html:'b'},
            {html:'c'}, 
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
import RLayout from 'r-layout';
import './style.css'
export default class app extends Component {
  render(){
    return (
      <RLayout
        layout={{
          attrs:{className:'container'},
          childsAttrs:{className:'panel'},
          row:[
            {html:'a',flex:2},//see here
            {html:'b'},
            {html:'c'}, 
          ]
        }}
      />
    )
  }
}
```

[![alt text](/images/4.jpg)]


### flex:'none'
##### set size of child as fit content
``` javascript
import React,{Component} from "react";
import RLayout from 'r-layout';
import './style.css'
export default class app extends Component {
  render(){
    return (
      <RLayout
        layout={{
          attrs:{className:'container'},
          childsAttrs:{className:'panel'},
          row:[
            {html:'abcdefg',flex:'none'},//see here
            {html:'b'},
            {html:'c'}, 
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
import RLayout from 'r-layout';
import './style.css'
export default class app extends Component {
  render(){
    return (
      <RLayout
        layout={{
          attrs:{className:'container'},
          row:[
            {
              childsAttrs:{className:'panel'},
              column:[
                {html:'a1'},
                {html:'a2'},
                {html:'a3'},
              ]
            },
            {html:'b',attrs:{className:'panel'}},
            {
              childsAttrs:{className:'panel'},
              column:[
                {html:'c1'},
                {html:'c2'},
                {html:'c3'},
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

### gap
##### space between childs
##### default is 12
``` javascript
import React,{Component} from "react";
import RLayout from 'r-layout';
import './style.css'
export default class app extends Component {
  render(){
    return (
      <RLayout
        gap={24} //see here
        layout={{
          attrs:{className:'container'},
          row:[
            {
              childsAttrs:{className:'panel'},
              column:[
                {html:'a1'},
                {html:'a2'},
                {html:'a3'},
              ]
            },
            {html:'b',attrs:{className:'panel'}},
            {
              childsAttrs:{className:'panel'},
              column:[
                {html:'c1'},
                {html:'c2'},
                {html:'c3'},
              ]
            },
          ]
        }}
      />
    )
  }
}


```

[![alt text](/images/7.jpg)]

### overwrite gap
##### each child can get own gap
``` javascript
import React,{Component} from "react";
import RLayout from 'r-layout';
import './style.css'
export default class app extends Component {
  render(){
    return (
      <RLayout
        gap={24}
        layout={{
          attrs:{className:'container'},
          row:[
            {
              childsAttrs:{className:'panel'},
              column:[
                {html:'a1'},
                {html:'a2'},
                {html:'a3'},
              ]
            },
            {html:'b',attrs:{className:'panel'}},
            {
              childsAttrs:{className:'panel'},
              gap:6, // see here
              column:[
                {html:'c1'},
                {html:'c2'},
                {html:'c3'},
              ]
            },
          ]
        }}
      />
    )
  }
}


```

[![alt text](/images/8.jpg)]

### onResize
##### resize child by mouse
##### in this case size of child should store in state and onResize function change it
``` javascript
import React,{Component} from "react";
import RLayout from 'r-layout';
import './style.css'
export default class app extends Component {
  state = {size1:100}; //see here
  render(){
    let {size1} = this.state; //see here
    return (
      <RLayout
        layout={{
          attrs:{className:'container'},
          row:[
            {
              size:size1, // see here
              onResize:(value)=>this.setState({size1:value}), //see here
              childsAttrs:{className:'panel'},
              column:[
                {html:'a1'},
                {html:'a2'},
                {html:'a3'},
              ]
            },
            {html:'b',attrs:{className:'panel'}},
            {
              childsAttrs:{className:'panel'},
              column:[
                {html:'c1'},
                {html:'c2'},
                {html:'c3'}, 
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
import RLayout from 'r-layout';
import './style.css'
export default class app extends Component {
  render(){
    return (
      <RLayout
        layout={{
          attrs:{className:'container'},
          row:[
            {
              childsAttrs:{className:'panel'},
              column:[
                {html:'a1'},
                {html:'a2',show:()=>false},//see here . show type function
                {html:'a3'},
              ]
            },
            {html:'b',attrs:{className:'panel'}},
            {
              childsAttrs:{className:'panel'},
              column:[
                {html:'c1'},
                {html:'c2',show:false}, // see here . show type boolean
                {html:'c3'}, 
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
import RLayout from 'r-layout';
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
      <RLayout
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
