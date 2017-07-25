{
  let obj = { // 原始数据
    time: '2017-07-25',
    name: 'net',
    _r: 123
  }

  let monitor = new Proxy(obj, { // 通过Proxy进行代理 对原始数据进行处理 最后只暴露这个代理对象给用户
    // 拦截对象属性的读取
    get(target, key){
      return target[key].replace('2017', '2018')
    },
    // 拦截对象设置属性
    set(target, key, value){
      if(key === 'name'){
        return target[key] = value
      }else{
        return target[key]
      }
    },
    // 拦截 key in object 操作
    has(target, key){
      if(key === 'name'){
        return target[key]
      }else{
        return false
      }
    },
    // 拦截删除属性操作
    deleteProperty(target, key){
      if(key.indexOf('_') > -1 ){
        delete target[key]
        return true
      }else{
        return target[key]
      }
    },
    // 拦截object.keys object.getOwnPropertySymbols  object.getOwnPropertyNames
    ownKeys(target){
      return Object.keys(target).filter(item => item != 'time')
    }
  })

  console.log('ownKeys', Object.keys(monitor))

  console.log('get', monitor.time)
  monitor.time = '2018'
  monitor.name = 'lmh'
  console.log('set', monitor)

  console.log('has', 'name' in monitor, 'time' in monitor)

  delete monitor.time
  delete monitor._r
  console.log('delete', monitor)
}

{
  let obj = { // 原始数据
    time: '2017-07-25',
    name: 'net',
    _r: 123
  }

  console.log('reflect', Reflect.get(obj, 'time'))
  Reflect.set(obj, 'name', 'lmh')
  console.log( obj)
  console.log('has', Reflect.has(obj, 'name'))
}

{
  function validator(target, validator){
    return new Proxy(target, {
      _validator: validator, // 保存配置选项
      set(target, key, value, proxy){
        if(target.hasOwnProperty(key)){ // 判断当前对象有没有key值
          let va = this._validator[key]
          if(va(value)){ // 判断传入的值是否符合要求
            return Reflect.set(target, key, value, proxy)
          }else{
            throw Error(`不能设置${key}到${value}`)
          }
        }else{
          throw Error(`${key} 不存在`)
        }
      }
    })
  }

  const personValidators = {
    name(val){
      return typeof val === 'string'
    },
    age(val){
      return typeof val === 'number' && val > 18
    }
  }

  class Person{
    constructor(name, age){
      this.name = name
      this.age = age
      // 该构造函数返回一个proxy对象  该proxy对象代理了person对象
      return validator(this, personValidators)
    }
  }

  const person = new Person('lmh', 22)
  console.info(person)
  // person.name = 48 报错
  person.name = 'fl'
  console.info(person)
}
