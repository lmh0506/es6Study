{
  // 基本定义
  let ajax = callback => {
    console.log('执行')
    setTimeout(function() {
      callback && callback.call()
    }, 1000);
  }

  ajax(() => {
    console.log('timeout1')
  })
}

{
  let ajax = () => {
    console.log('执行2')
    return new Promise((resolve, reject) => { // resolve 执行下一步操作 reject中断当前操作
      setTimeout(function() {
        resolve()
      }, 1000);
    })
  }

  ajax().then(() => {
    console.log('promise', 'timeout2')
  })
}

{
  let ajax = () => {
    console.log('执行3')
    return new Promise((resolve, reject) => { // resolve 执行下一步操作 reject中断当前操作
      setTimeout(function() {
        resolve()
      }, 1000);
    })
  }

  ajax().then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        resolve()
      }, 1000);
    })
  }).then(() => {
    console.log('timeout3')
  })

}

{
  let ajax = (num) => {
    console.log('执行4')
    return new Promise((resolve, reject) => {
      if(num > 5){
        resolve()
      }else{
        throw new Error('出错了')
      }
    })
  }

  ajax(3).then(() => {
    console.log('num', 6)
  }).catch((err) => {
    console.log('catch', err)
  })
}

{
  // 所有图片加载完在添加到页面
  function loadImg(src){
    return new Promise((resolve, reject) => {
      let img = document.createElement('img')
      img.src = src
      img.onload = () => {
        resolve(img)
      }
      img.onerror = (err) => {
        reject(err)
      }
    })
  }

  function showImgs(imgs){
    imgs.forEach((img) => {
      document.body.appendChild(img)
    })
  }

  Promise.all([ // 把多个promise实例当成一个promise实例
    loadImg('http://img3.imgtn.bdimg.com/it/u=295286015,3475255162&fm=26&gp=0.jpg'),
    loadImg('http://img2.imgtn.bdimg.com/it/u=3255492702,1431047136&fm=26&gp=0.jpg'),loadImg('http://img5.imgtn.bdimg.com/it/u=3777653310,1405536063&fm=26&gp=0.jpg')
  ]).then(showImgs)

}

{
  // 有一个图片加载完就添加到页面
  function loadImg(src){
    return new Promise((resolve, reject) => {
      let img = document.createElement('img')
      img.src = src
      img.onload = () => {
        resolve(img)
      }
      img.onerror = (err) => {
        reject(err)
      }
    })
  }

  function showImgs(img){
    let p = document.createElement('p')
    p.appendChild(img)
    document.body.appendChild(p)
  }

  Promise.race([ // 有一个promise完成了就结束
    loadImg('http://img3.imgtn.bdimg.com/it/u=295286015,3475255162&fm=26&gp=0.jpg'),
    loadImg('http://img2.imgtn.bdimg.com/it/u=3255492702,1431047136&fm=26&gp=0.jpg'),loadImg('http://img5.imgtn.bdimg.com/it/u=3777653310,1405536063&fm=26&gp=0.jpg')
  ]).then(showImgs)

}
