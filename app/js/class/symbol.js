{
  // 声明
  let a1 = Symbol()
  let a2 = Symbol()

  console.log('symbol', a1 === a2)

  let a3 = Symbol.for('a3') // 参数为key值 如果之前有变量定义则用该变量的值赋值 否则用Symbol() 赋值
  let a4 = Symbol.for('a3') // 因为a3变量之前定义过  所以  a3与a4相等

  console.log('symbol', a3 === a4)
}

{
  let a1 = Symbol.for('abc')
  let obj = {
    [a1]: '123',
    'abc': 345,
    'c': 456
  }

  console.log('objSymbol', obj)

  for(let [key, value] of Object.entries(obj)){
    console.log('let of symbol', key, value) // 无法取得symbol的属性
  }

  Object.getOwnPropertySymbols(obj).forEach((item) => {
    console.log(obj[item])
  })

  Reflect.ownKeys(obj).forEach((item) => {
    console.log('ownKeys', obj[item])
  })
}
