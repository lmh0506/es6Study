function test(){
  let a = 1
  console.log(a)
  
  for(let i = 0; i < 2; i++)
  {
    console.log(i)
  }
  // let定义的变量只在块作用域里有效
  //console.log(i)

  // 使用let定义变量不能重复定义
  //let a = 2

}

test()

function last(){
  // 使用const定义常量 必须赋值 且作用域也是块级
  const PI = 3.1415926
  // 如果常量为值类型 不能被修改
  // PI = 8
  console.log(PI)

  // 如果常量为引用类型 则可以被修改
  const k = {
    a: 1
  }
  k.a = 2
  k.b = 3
  console.log(k)
}

last()
