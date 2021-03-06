{
  // generator基本定义
  let tell = function * (){
    yield 'a'
    yield 'b'
    return 'c'
  }

  let k = tell()
  console.log(k.next())
  console.log(k.next())
  console.log(k.next())
}

{
  let obj = {}
  obj[Symbol.iterator] = function *(){
    yield 1;
    yield 2;
    yield 3
  }

  for(let value of obj){
    console.log('value', value)
  }
}

{
  let state = function *(){
    while(1){
      yield 'A'
      yield 'B'
      yield 'c'
    }
  }
  let status = state()
  console.log('status', status.next())
  console.log('status', status.next())
  console.log('status', status.next())
  console.log('status', status.next())
  console.log('status', status.next())
  console.log('status', status.next())
}

{
  // 需要babel插件
  // let state = async function (){
  //   while(1){
  //     await 'A'
  //     await 'B'
  //     await 'c'
  //   }
  // }
  // let status = state()
  // console.log('status', status.next())
  // console.log('status', status.next())
  // console.log('status', status.next())
  // console.log('status', status.next())
  // console.log('status', status.next())
  // console.log('status', status.next())
}

{
  let draw = (count) => {
    // 具体抽奖逻辑
    // ...

    console.info(`剩余${count}次`)
  }

  let residue = function *(count){
    while(count > 0){
      count --
      yield draw(count)
    }
  }

  let start = residue(5)
  let btn = document.createElement('button')
  btn.id = 'start'
  btn.textContent = '抽奖'
  document.body.appendChild(btn)
  btn.addEventListener('click', () => {
    start.next()
  }, false)
}

{
  // 长轮询
  let ajax = function *(){
    yield new Promise((resolve, reject) => {
      resolve({code: Math.round(Math.random())})
    }, 200)
  }

  let pull = function(){
    let generator = ajax()
    let step = generator.next()
    step.value.then((d) => {
      if(d.code != 0){
        setTimeout(function() {
          console.info('wait')
          pull()
        }, 1000);
      }else{
        console.info(d)
      }
    })
  }

  pull()

}
