{
  // 把参数填充到数组中
  let arr = Array.of(3, 4, 7, 9, 11)
  console.log('arr', arr)

  // 不传参数返回空数组
  let empty = Array.of()
  console.log('empty', empty)
}

{
  // 获取的不是一个真数组 而是一个集合 没有forEach方法
  let p = document.getElementsByTagName('p')
  // 把集合转换成数组
  let pArr = Array.from(p)
  pArr.forEach((item) => {
    console.log(item.innerHTML)
  })

  // 第二个参数执行map函数
  console.log(Array.from([1, 3, 5], (item) => item * 2))
}

{
  // 将数组用传进来的参数进行填充
  console.log('fill-7', [1, 'a', undefined].fill(7))
  // 第二个参数为起始替换位置 第三个参数为截止替换位置但是不包含 
  console.log('fill-pos', ['a', 'b', 'c', 'd'].fill(7, 1, 3))
}

{
  // 返回数组下标
  for(let index of ['1', 'c', 'ks'].keys()){
    console.log('keys', index)
  }

  // 返回数组的值
  for(let value of ['1', 'c', 'ks'].values()){
    console.log('values', value)
  }

  // 返回数组下标和值
  for(let [index, value] of ['1', 'c', 'ks'].entries()){
    console.log('index', index, 'values', value)
  }
}

{
  // 第一参数为替换开始位置  第二个参数为复制的起始位置 第三个为参数为复制的结束位置 但是不包括
  console.log([1, 2, 3, 4, 5].copyWithin(0, 2, 3))
}

{
  // 查找符合条件的成员 但是只返回找到的第一个
  console.log([1, 2, 3, 4, 5, 6].find((item) => item > 3))
  // 查找符合条件的成员 但是只返回找到的第一个的下标
  console.log([1, 2, 3, 4, 5, 6].findIndex((item) => item > 3))
}

{
  // 判断是否包含某个值
  console.log('number', [1, 2, NaN].includes(1))
  console.log('number', [1, 2, NaN].includes(NaN))
}
