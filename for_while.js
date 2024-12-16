//for
for (let i = 0; i < 10; i++){
    // console.log(i);
    console.log(`for loop number: ${i}`);
}

//while
let i = 0;
while (i < 10) {
    console.log(`while loop number: ${i}`);
    i++;
}


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
]; 
for (let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}
//特殊循环
for (let a of todos) {
    console.log(a);       //得到数组的每一项
    console.log(a.text);  //得到每一项的text内容
}