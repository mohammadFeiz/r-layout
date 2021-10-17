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
          attrs:{className:'container'},
          row:[ //see here
            {html:'a',attrs:{className:'panel'}},
            {html:'b',attrs:{className:'panel'}},
            {html:'c',attrs:{className:'panel'}}, 
          ]
        }}
      />
    )
  }
}
```

# image1

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
            {html:'a',attrs:{className:'panel'}},
            {html:'b',attrs:{className:'panel'}},
            {html:'c',attrs:{className:'panel'}}, 
          ]
        }}
      />
    )
  }
}
```
# image2

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

# image1

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

# image3

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
            {html:'a',flex:48},//see here
            {html:'b'},
            {html:'c'}, 
          ]
        }}
      />
    )
  }
}
```

# image4


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

# image5

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

# image6

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

# image7

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

# image8
