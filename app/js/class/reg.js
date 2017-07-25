{
  // es5写法
  // 有两个参数 第一个参数只能为字符串 第二个参数为修饰符
  let regex = new RegExp('xyz', 'i')
  // 只有一个参数 只能为正则表达式
  let regex2 = new RegExp(/xyz/i)
  console.log(regex.test('XYz123'), regex2.test('XYz123'))

  // es6写法
  // 可以是一个或两个参数 第一个参数可以为字符串也能是正则表达式 
  // 下面这种写法后面的修饰符会替换之前正则表达式里的修饰符
  let regex3 = new RegExp(/xyz/ig, 'i')
  console.log(regex3.flags) // 获取正则的修饰符
}

{
  let s = 'bbb_bb_b'
  let a1 = /b+/g
  let a2 = /b+/y

  // y和g修饰符都是全局匹配 后一次匹配都从上一次匹配成功的下一个位置开始。不同之处在于，g修饰符只要剩余位置中存在匹配就可，而y修饰符确保匹配必须从剩余的第一个位置开始，这也就是“粘连”的涵义
  console.log('one', a1.exec(s), a2.exec(s))
  console.log('two', a1.exec(s), a2.exec(s))

  console.log(a1.sticky, a2.sticky) // 判断正则是否开启了粘连模式
}

{
  // \uD83D\uDC2A是一个四个字节的UTF-16编码，代表一个字符。但是，ES5不支持四个字节的UTF-16编码，会将其识别为两个字符，导致第二行代码结果为true。加了u修饰符以后，ES6就会识别其为一个字符，所以第一行代码结果为false。
  console.log('u-1', /^\uD83D/.test('\uD83D\uDC2A'))
  console.log('u-2', /^\uD83D/u.test('\uD83D\uDC2A'))

  // ES6新增了使用大括号表示Unicode字符，这种表示法在正则表达式中必须加上u修饰符，才能识别。
  console.log(/\u{61}/.test('a'))
  console.log(/\u{61}/u.test('a'))
  // 上面代码表示，如果不加u修饰符，正则表达式无法识别\u{61}这种表示法，只会认为这匹配61个连续的u。

  console.log(`\u{20BB7}`)
  let s = '𠮷'
  // 点（.）字符在正则表达式中，含义是除了换行符以外的任意单个字符。对于码点大于0xFFFF的Unicode字符，点字符不能识别，必须加上u修饰符。
  console.log('u', /^.$/.test(s))
  console.log('u', /^.$/u.test(s))

  // 使用u修饰符后，所有量词都会正确识别码点大于0xFFFF的Unicode字符。另外，只有在使用u修饰符的情况下，Unicode表达式当中的大括号才会被正确解读，否则会被解读为量词
  console.log('test', /𠮷{2}/.test('𠮷𠮷'))
  console.log('test2', /𠮷{2}/u.test('𠮷𠮷'))
}
