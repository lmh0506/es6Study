{
  let a, b, rest
  // 数组解构赋值
  [a, b] = [1, 2]
  console.log(a, b)
}

{
  let a, b, rest
  // 数组解构赋值
  [a, b, ...rest] = [1, 2, 3, 4, 5, 6]
  console.log(a, b, rest)
}

{
  let a,b
  // 对象解构赋值
  ({a, b} = {a: 1, b: 2})
  console.log(a, b)
}

{
  let a, b, c, rest
  // 数组解构赋值
  [a, b, c = 3] = [1, 2]
  // 如果解构赋值没有成功配对的值 则变量为undefined
  // [a, b, c] = [1, 2] 此时c为undefined
  console.log(a, b, c)
}

{
  let a = 1;
  let b = 2;
  // 利用解构赋值实现变量交换
  [a, b] = [b, a]
  console.log(a, b)
}

{
  function f(){
    return [1, 2]
  }
  let a, b
  [a, b] = f()
  console.log(a, b)
}

{
  function f(){
    return [1, 2, 3, 4, 5, 6]
  }

  let a, b, c
  // 当返回值为多个时 可以用下面的方法选择性接收
  // 当返回值的个数不确定时  可以用 ...语法去接收剩余变量
  [a, , b, ...c] = f()
  console.log(a, b, c)
}

{
  let o = {
    p: 42,
    q: true
  }
  let {p,q} = o
  console.log(p, q)
}

{
  // 对象解构赋值的默认值处理
  let {a = 10, b = 5} = {a: 3}
  console.log(a, b)
}

{
  let metaData = {
    title: 'abc',
    test: [{
      title: 'test',
      desc: 'description'
    }]
  }

  let {title: esTitle, test: [{title: cnTitle}]} = metaData
  console.log(esTitle, cnTitle)
}
