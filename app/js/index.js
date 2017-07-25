import 'babel-polyfill'

import './class/letAndConst'
import './class/jiegoufuzhi'
import './class/reg'
import './class/string'
import './class/number'
import './class/array'
import './class/function'
import './class/object'
import './class/symbol'
import './class/setAndMap'
import './class/ProxyAndReflect'
import './class/Class'
import './class/Promise'
import './class/iterator'
import './class/generator'
import './class/decorator'
// import {A, test, Hello} from './class/module'
// import {A} from './class/module'
import * as module from './class/module'
import module2 from './class/module2'

class Test{
  constructor(){
    this.a = 'hello world'
  }
}

let t = new Test()
let p = document.createElement('p')
p.textContent = t.a
document.body.appendChild(p)

// console.log(A, test, Hello)
// console.log(A)
console.log('module', module)
console.log('module2', module2)
