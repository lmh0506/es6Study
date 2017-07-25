// 优先使用map，  如果对数据存储要求高 要求唯一 使用set
{
  let list = new Set()
  list.add(5)
  list.add(7)

  console.log('size', list.size)
}

{
  let arr = [1, 2, 3, 4, 5]
  let list = new Set(arr) // 将数组转换成set类型

  console.log('size', list.size)
}

{
  let list = new Set()
  list.add(5)
  list.add(1)
  list.add(1) // set无法添加相同的元素

  console.log('list', list)

  let arr = [1, 2, 3, 1, '2']
  let list2 = new Set(arr) // 利用set进行去重 如果数据类型不同 则不算重复

  console.log('unique', list2)
}

{
  let arr = ['add', 'delete', 'clear', 'has']
  let list = new Set(arr)
  console.log('has', list.has('add')) // 判断是否有某个元素
  console.log('delete', list.delete('add'), list) // 删除某个元素
  list.clear() // 清空list 
  console.log('list', list)
}

{
  let arr = ['add', 'delete', 'clear', 'has']
  let list = new Set(arr)

  // set类型的遍历

  for(let key of list.keys()){
    console.log('key', key)
  }

  for(let value of list.values()){
    console.log('value', value)
  }

  for(let value of list){
    console.log('value', value)
  }

  for(let [key, value] of list.entries()){
    console.log('key', key, 'value', value)
  }

  list.forEach((item) => {
    console.log(item)
  })
}

{
  let weakList = new WeakSet()
  // weakSet 元素只能是对象

  let arg = {}
  weakList.add(arg)
  console.log('weakList', weakList)

  // weakLsit 没有size属性 没有clear方法 不能遍历
}

{
  let map = new Map()
  let arr = ['123']

  map.set(arr, 456) // map添加元素用set
  console.log('map', map, map.get(arr)) // get方法传入key值 获取value值
}

{
  let map = new Map([['a', 123], ['b', 456]])
  console.log('map args', map)
  console.log('size', map.size)
  console.log('delete', map.delete('a'), map)
  console.log('clear', map.clear(), map)
}

{
  let weakMap = new WeakMap()
  // weakMap接收的 key值也只能是对象 没有size属性 没有clear方法 不能遍历

  let o = {}
  weakMap.set(o, 123)
  console.log(weakMap.get(o))
}

{
  // 数据结构的横向对比 增查改删
  let map = new Map()
  let array = []
  // 增
  map.set('t', 1)
  array.push({t: 1})
  console.info('map-array', map, array)

  // 查
  let map_exist = map.has('t')
  let array_exist = array.find(item => item.t)
  console.info('map-array', map_exist, array_exist)

  // 改
  map.set('t', 2)
  array.forEach(item => item.t ? item.t = 2 : '')
  console.info('map-array-modify', map, array)

  // 删
  map.delete('t')
  let index = array.findIndex(item => item.t)
  array.splice(index, 1)
  console.info('map-array-delete', map, array)
}

{
  // set 和 array的对比
  let set = new Set()
  let array = []

  // 增
  set.add({t: 1})
  array.push({t: 1})
  console.info('set-array', set, array)

  // 查
  let set_exist = set.has({t: 1}) // 这里的对象引用地址与之前添加的不同 所以返回false
  let array_exist = array.find(item => item.t)
  console.info('set-array', set_exist, array_exist)

  // 改
  set.forEach(item => item.t ? item.t = 2 : '')
  array.forEach(item => item.t ? item.t = 2 : '')
  console.info('set-array-modify', set, array)

  // 删
  set.forEach(item => item.t ? set.delete(item) : '')
  let index = array.findIndex(item => item.t)
  array.splice(index, 1)
  console.info('set-array-delete', set, array)
}

{
  // map set object 对比
  let item = {t: 1}
  let map = new Map()
  let set = new Set()
  let obj = {}

  // 增
  map.set('t', 1)
  set.add(item)
  obj['t'] = 1
  console.info('map-set-obj', map, set, obj)

  // 查
  console.info({
    map_exist: map.has('t'),
    set_exist: set.has(item),
    obj_exist: 't' in obj
  })

  // 改
  map.set('t', 2)
  item.t = 2 // 因为set存储的是引用地址 所以只需要改变量的值就行
  obj['t'] = 2
  console.info('map-set-obj-modify', map, set, obj)

  // 删
  map.delete('t')
  set.delete(item)
  delete obj['t']
  console.info('map-set-obj-delete', map, set, obj)
}
