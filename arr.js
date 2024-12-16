//数组的声明
const numbers = new Array(1, 2, 3, 4, 5);
const fruits = ["apple", "orange", "pear", 10, true]//同一数组中可以是不同的数据类型
const text = [1, 2, 3, 4, 5]
text[0] = 9;
console.log(numbers);
console.log(fruits);
console.log(text);
text[5] = 10;
console.log("在末尾添加" + text);
fruits.push("lemon");   //数组末尾添加元素
fruits.unshift("watermelon");    //数组头部添加元素
console.log("新的水果数组" + fruits);
fruits.pop();   //删除末尾元素
console.log(fruits);
console.log(Array.isArray(fruits))//判断是否为数组，为true
console.log(Array.isArray('hello'))//输出false，hello为字符串
console.log(fruits.indexOf('orange'))//输出数组元素的下标