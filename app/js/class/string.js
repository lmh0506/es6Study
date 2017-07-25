{
  console.log('a', `\u0061`)
  // Unicode 编码无法显示大于 FFFF的字符
  console.log('s', `\u20BB7`)
  // 使用大括号表示Unicode字符
  console.log('s', `\u{20BB7}`)

}

{
  let s = '𠮷'
  // es5中 处理编码大于FFFF的字符
  console.log('length', s.length)
  console.log('0', s.charAt(0))
  console.log('1', s.charAt(1))

  console.log('at0', s.charCodeAt(0))
  console.log('at1', s.charCodeAt(1))

  let s1 = '𠮷a'
  // es6中 处理编码大于FFFF的字符
  console.log('length', s1.length)
  console.log('code0', s1.codePointAt(0))
  console.log('code0', s1.codePointAt(0).toString(16))
  console.log('code1', s1.codePointAt(1))
  console.log('code2', s1.codePointAt(2))
}

{
  // es5
  console.log(String.fromCharCode('0x20bb7'))

  // es6
  console.log(String.fromCodePoint('0x20bb7'))
}

{
  let str = '\u{20bb7}abc'
  for(let i = 0; i < str.length; i++){
    console.log('es5', str[i])
  }

  for(let code of str){
    console.log('es6', code)
  }

}

{
  let str = 'string'
  // 判断字符串是否包含某个字符串
  console.log('includes', str.includes('ri'))
  // 判断字符串是否以某个字符串开始
  console.log('start', str.startsWith('str'))
  // 判断字符串是否以某个字符串结束
  console.log('end', str.endsWith('ng'))
}

{
  let str = 'abc'
  // 将字符串重复两次
  console.log(str.repeat(2))
}

{
  let name = 'list'
  let info = 'hello world'
  let m = `i am ${name}, ${info}`
  console.log(m)
}

{
  // 第一个参数为返回的字符串长度  如果长度不够 则用第二个参数补充
  console.log('1'.padStart(2, '0'))
  console.log('1'.padEnd(2, '0'))
}

{
  let user = {
    name: 'list',
    info: 'hello world',
    test: 'test1',
    test2: 'test2'
  }
  console.log(abc`i am ${user.name}, ${user.info}, ${user.test}, ${user.test2}`)

  function abc(s, v1, v2, ...rest){
    console.log(s, v1, v2, rest)
    return s + v1 + v2
  }
}

{
  // String.raw方法 往往用来充当模板字符串的处理函数， 返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串，对应于替换变量后的模板字符串
  console.log(String.raw`Hi\n${1 + 2}`)
  // 如果原字符串的斜杠已经转义 那么String.raw不会做任何处理
  console.log(String.raw`Hi\\n${1 + 2}`)
  console.log(`Hi\n${1 + 2}`)
}
