//  type MyPick<T, K> = any
// links:https://juejin.cn/post/7177979237738954808
// ts
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

// js 写法:本质上是将target对象中的指定属性key和value筛选出来，返回一个新的对象
// 将定义的type也看成一个对象，而类型定义的检测过程，就是ts类型系统的代码运行
function myPick(target, keys) {
  let result = {}

  keys.forEach(key => {
    if (key in target) {
      result[key] = target[key]
    } else {
      throw Error('the keys is not satisfy the constraint keyof target')
    }
  })
  return result
}
