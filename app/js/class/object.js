{
  // 简洁表示法
  let o = 1
  let k = 2

  let es5 = {
    o: o,
    k: k
  }

  let es6 = {
    o,
    k
  }
  console.log(es5, es6)

  let es5_method = {
    hello: function(){
      console.log('hello')
    }
  }

  let es6_method = {
    hello(){
      console.log('hello')
    }
  }

  console.log(es5_method, es6_method)
}

{
  // 属性表达式
  let a = 'b'
  let es5_obj = {
    a: 'c'
  }

  let es6_obj = {
    [a]: 'c' // 这里的a是变量不是key
  }

  console.log(es5_obj, es6_obj)
}

{
  // 新增 API
  console.log('字符串', Object.is('abc', 'abc'), 'abc' === 'abc')
  console.log('数组', Object.is([], []), [] === [])

  console.log('拷贝', Object.assign({a: 'a'}, {b: 'b'}))
  console.log('拷贝', Object.assign({a: 'a'}, {a: 'c', b: 'b'}))

  let test = {
    k: 123,
    o: 456
  }

  for(let [key, value] of Object.entries(test)){
    console.log([key, value])
  }
}

{
  // 扩展运算符
  // let {a, b, ...c} = {a: 'test', b: 'aaa', c:'bbb', d: 'ccc'}
  // c = {
  //   c: 'bbb',
  //   d: 'ccc'
  // }
  // console.log(a, b, c)
}
