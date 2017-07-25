{
  function test(x, y = 'world'){
    console.log('默认值', x, y)
  }

  test('hello')
  test('hello', 'es6')
}

{
  let x = 'test'
  function test(x, y = x){// 因为y会先找相同作用域中的x进行赋值 在这里是第一个参数x
    console.log('作用域', x, y)
  }

  test()
  test('es6')

  function test2(a, y = x){// 这里因为找不到 去父级的作用域中寻找 所以是父级的值为test的x
    console.log('作用域', a, y)
  }

  test2('es6')
}

{
  function test(a, ...arg){// 将剩余参数填充到数组中
    console.log('a', a)
    for(let v of arg){
      console.log('rest', v)
    }
  }

  test(1, 2, 3, 4, 'a')
}

{
  console.log(...[1, 2, 4])// 将数组转成一个个单个元素
  console.log('a', ...[1, 2, 4])
}

{
  let arrow = v => v * 2
  let arrow2 = () => 5
  console.log('arrow', arrow(2))
  console.log('arrow2', arrow2())
}

{
  function tail(x){
    console.log('tail', x)
  }

  function fx(x){
    return tail(x)
  }

  fx(123)
}
