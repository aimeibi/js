// == 表示值相同，类型可以不同；=== 表示值和类型都相同
const x = 10;
if (x === 10) {
    console.log('x is 10');
}
if (x == 10) {
    console.log('x is 10,but don`t concern type')
} else {
    console.log("x is not 10")
}
const y = "10"//字符串
console.log(y === 10); console.log(y == 10);//分别输出false、true
//用||表示或，&&表示且