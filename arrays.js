// Quwstion 1
var arr_li = [];
// Question 2
var arr_ob = [];
//  Question 3
var arr_str = ["string"];
//  Question 4
var arr_num = [3, 4];
//
var arr_bol = [true, false];
//
var arr_mix = [3, "sring", true];
// Question 7
document.write("<h2> EDUCATION AND QUALIFICATION </h2>");
var education = [
  "SSC ",
  " HSC ",
  " BCS ",
  " BS ",
  "BCOM ",
  " MS ",
  " M.PHIL. ",
  " PHD ",
];
document.write(
  education[0] +
    "<br>" +
    education[1] +
    "<br>" +
    education[2] +
    "<br>" +
    education[3] +
    "<br>" +
    education[4] +
    "<br>" +
    education[5] +
    "<br>" +
    education[6] +
    "<br>" +
    education[7] +
    "<br>"
);
// Question 8

document.write("<h2> MARKS AND PERCENTAGE</h2>");
arr_li = ["Michael", "john", "Tony"];
arr_mar = [400, 230, 410];
total_mark_each_stu = 500;
percentage = [
  (percent1 = (arr_mar[0] / total_mark_each_stu) * 100),
  (percent2 = (arr_mar[1] / total_mark_each_stu) * 100),
  (percent3 = (arr_mar[2] / total_mark_each_stu) * 100),
];
document.write("Score of ", arr_li[0], " is " + arr_mar[0]);
document.write(". percentage is " + percent1 + "%" + "<br>");
document.write("Score of ", arr_li[1], " is " + arr_mar[1]);
document.write(". percentage is " + percent2 + "%" + "<br>");
document.write("Score of ", arr_li[2], " is " + arr_mar[2]);
document.write(". percentage is " + percent3 + "%" + "<br>");

//
// var color1=[prompt("please input a color which you want to add to the beginning")];
// // docu
// var color2=[prompt("please input a color which you want to add ito the end")];
// color1_2=[ color1 +", "+ color2 ];
// document.write("<h4>"+ color1_2+"</h4>");
// var color3=["black,","white"];
// document.write("<h4>"+color3 +", "+ color1_2+"/h4")
// var delete_first_element=color1.shift()
// document.write(color3 +", "+ color1 +", "+ color2)

// question 9
document.write("<h2> COLORS </h2>");
var color = [
  prompt("please input any color to add in to begining "),
  prompt("please input any color to add in to end"),
  "black",
  "white",
];
document.write(+color[0] + color[1] + "<br>");
document.write(color + "<br>");

color.shift();
document.write(color + "<br>");
color.pop();
document.write(color + "<br>");
// var index=prompt("at which index you want to add color"))
// color[prompt("At which index you want to add color")] = [];

var addition = (color[+prompt("At which index you want add color")] = [
  prompt("and please input a that color name"), //addition means add the element
]);
document.write(addition + "<br>");
var subtraction = (color[+prompt("At which index you want to delete color")] =
  color.splice(+prompt("How many colors do you want to delete"))); // subtraction means delete the element
document.write(subtraction + "<br>");

// Question 10
document.write("<h2>STUDENT SCORE</h2>");

var student_score = [100, 90, 80, 70, 49, 90];
document.write("Score of Students : " + student_score + "<br>"); //student scores
var ascending_order = student_score.sort((a, b) => a - b);
document.write("Ordered Scores of Students " + ascending_order + "<br>"); //use sort method for ordering numbers

// question 11
document.write("<h2> CITIES LIST</h2>");

var cities = [
  "karachi" + "<br>",
  "islamabad" + "<br>",
  "lahore" + "<br>",
  "sukkur" + "<br>",
  "larkna" + "<br>",
  "thar",
];
document.write(cities);
document.write("<h2>Selected values from cities</h2>");
var selected_cities = [cities[1], cities[2], cities[3]];
document.write(selected_cities);

// Question 12
document.write("<h2>Array</h2>");

var array = ["This", "is", "my", "cat" + "<br>"];
document.write(array);

document.write("<h2>String:</h2>");
var array_string = "This is my cat" + "<br>";
document.write(array_string);

// Question 13
// document.write("<h2>first in first out</h2>")

var fifo = ["keyboard", "mouse", "printer", "moniter"];
console.log("Devices:" + fifo);

console.log("out: ", fifo[0]);
console.log("out: ", fifo[1]);
console.log("out: ", fifo[2]);
console.log("out: ", fifo[3]);

// Question 14
var reverse_fifo = fifo.reverse(); //reverse order
var r_fifo = reverse_fifo;
console.log("Devices: " + r_fifo);

console.log("out: ", reverse_fifo[0]);
console.log("out: ", reverse_fifo[1]);
console.log("out: ", reverse_fifo[2]);
console.log("out: ", reverse_fifo[3]);

// Question no 15

document.write("<h2>Dropdown box</h2>")

let phone_manufacture_company = [
  "Apple",
  "Vivo",
  "Qmobile",
  "samsung",
  "infinix",
];
document.write(
  "<select><option>",
  phone_manufacture_company[0],
  "</option><option>",
  phone_manufacture_company[1],
  "</option><option>",
  phone_manufacture_company[2],
  "</option><option>",
  phone_manufacture_company[3],
  "</option>option",
  phone_manufacture_company[4],
  "</option></select>"
);
