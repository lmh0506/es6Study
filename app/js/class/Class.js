{
  // 基本定义和生成实例
  class Parent{
    constructor(name = 'lmh'){
      this.name = name
    }
  }

  let v_parent = new Parent('v')
  console.log('构造函数和实例', v_parent)

  class Child extends Parent{ // 继承

  }

  console.log('继承', new Child())
}

{
  // 继承传递参数
  class Parent{
    constructor(name = 'lmh'){
      this.name = name
    }
  }

  class Child extends Parent{ // 继承
    constructor(name = 'child'){
      super(name) // super的参数列表就是父类的构造函数的参数列表 如果不传参则使用父类的默认值
      // 子类的属性一定要放在super函数下面
      this.type = 'child'
    }
  }
  console.log('继承传递参数', new Child())
  console.log('继承传递参数', new Child('hello'))
}

{
  // getter, setter
  class Parent{
    constructor(name = 'lmh'){
      this.name = name
    }

    get longName(){
      return 'hello, ' + this.name
    }

    set longName(value){
      this.name = value
    }
  }

  let p = new Parent()
  console.log('parent', p.longName)
  p.longName = 'hello'
  console.log('setter', p.longName)
}

{
  // 静态方法
  class Parent{
    constructor(name = 'lmh'){
      this.name = name
    }
    // static 只能定义静态方法
    static tell(){
      console.log('tell')
    }
  }

  Parent.tell()
}

{
  // 静态属性
  class Parent{
    constructor(name = 'lmh'){
      this.name = name
    }
    // static 只能定义静态方法
    static tell(){
      console.log('tell')
    }
  }

  Parent.type = 'test'
  console.log('静态属性', Parent.type)
}
