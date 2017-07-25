// 第三方库修饰器的js库 core-decorators
{
  // 修饰器是一个函数 修改类的行为
  // 用修饰器进行只读操作
  let readonly = (target, name, descriptor) => {
    descriptor.writable = false
    return descriptor
  }

  // 修饰器只能用于类
  class Test{
    @readonly
    time(){
      return '2017-7-25'
    }
  }

  let test = new Test()

  console.log('time', test.time())

  // test.time = () => 'reset'
  // console.log('time', test.time())
}

{
  // 利用修饰器对类定义静态属性
  let typename = (target, name, descriptor) => {
    target.myname = 'hello'
  }

  @typename
  class Test{

  }

  console.log('myname', Test.myname)
}

{
  let log = (type) => {
    return (target, name, descriptor) => {
      let src_method = descriptor.value
      descriptor.value = (...arg) => {
        src_method.apply(target, arg)
        console.info(`log ${type}`)
      }
    }
  }

  class AD{
    @log('show')
    show(){
      console.info('ad is show')
    }

    @log('click')
    click(){
      console.info('ad is click')
    }
  }

  let ad = new AD()
  ad.show()
  ad.click()
}
