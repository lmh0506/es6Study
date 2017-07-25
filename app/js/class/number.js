{
  // es6 中二进制的表示方法
  console.log(0b111110111)
  // es6 中八进制的表示方法
  console.log(0o767)
}

{
  // 判断一个数是否是无穷大。
  console.log('15', Number.isFinite(15))
  console.log('NaN', Number.isFinite(NaN))
  console.log('1/0', Number.isFinite(1/0))
  // 判断一个数是否为NaN
  console.log('NaN', Number.isNaN(NaN))
  console.log('0', Number.isNaN(0))
}

{
  // 判断一个数是否为整数
  console.log('25', Number.isInteger(25))
  console.log('25.0', Number.isInteger(25.0))
  console.log('25.5', Number.isInteger(25.5))
}

{
  console.log(Number.MAX_SAFE_INTEGER) // 2的53次方
  console.log(Number.MIN_SAFE_INTEGER) // -2的53次方
  console.log('10', Number.isSafeInteger(10))
  console.log('a', Number.isSafeInteger('a'))
}

{
  // 只取整数部分
  console.log('4.1', Math.trunc(4.1))
  console.log('4.9', Math.trunc(4.9))
}

{
  // 判断一个数为正数 0 负数
  console.log('-5', Math.sign(-5)) // 负数返回 -1
  console.log('0', Math.sign(0)) // 0返回 0
  console.log('5', Math.sign(5)) // 正数返回 1
  console.log('5', Math.sign('5')) // 先转成Number类型在返回值 如果为正数返回 1
  console.log('a', Math.sign('a')) // 字符返回 NaN
}

{
  // 立方根
  console.log('9', Math.cbrt(9))
  console.log('-8', Math.cbrt(-8))
}