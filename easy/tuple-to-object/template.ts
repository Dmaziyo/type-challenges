type TupleToObject<T extends readonly (string | symbol | number)[]> = {
  [P in T[number]]: P
}
// 1.type世界中遍历数组的方法是[P in T[number]],T为数组，P为遍历出的值
// 2.readonly (string | symbol | number)[]表示为字面量
// 3.字面量就如同类型世界里面的const，将类型限定为某一个值，类型写死了,如果在js中使用const，或者在定义中规定好值都会变成字面量
/**
 字面量定义的方法
 type CardinalDirection = 'North' | 'East' | 'South' | 'West'; 
 const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
 */

/*
 目的是返回将数组的value转换成类似{
    value:value
 }的对象
 */
// js
function myTupleToObject(array) {
  let result = {}
  for (let item of array) {
    result[item] = item
  }
}
