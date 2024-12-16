const todos = [
    {
        id: 1,
        text: "take out trash",
        isCompleted: true,
    },
    {
        id: 2,
        text: "Meeting with Boss",
        isCompleted: true,
    },
    {
        id: 3,
        text: "Dentist a PPT ",
        isCompleted: false,
    }
];  //对象的数组
console.log(todos);
console.log(todos[1].text);
//JSON是一种数据格式，常被用在API，和服务器和客户端的传输过程中，json和对象数组非常类似（json中每个属性的KEY都被打上了双引号）

const todoJSON = JSON.stringify(todos);    //将对象数组转换为json数据格式
console.log(todoJSON);