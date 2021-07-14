var click_counter=2;

var car = {x:300,y:300};
var fruit = ["apple","cherry","banana"];


for (values in car){
    console.log(values+": "+car[values]);
    if(car[values]>100){
        console.log("car is above 100");
    }
}

for(values in fruit){
    console.log(fruit[values]);
}


function sum(){
click_counter++;
document.getElementById("click_counter_element").innerHTML = (click_counter+" Things Veterinarians Dont Want You To Know.");
}

function up(){
    car.y-=50;
    document.getElementById('car').style.top =  car.y+"px";
}
function down(){
    car.y+=50;
    document.getElementById('car').style.top =  car.y+"px";
}
function left(){
    car.x-=50;
    document.getElementById('car').style.left =  car.x+"px";
}
function right(){
    car.x+=50;
    document.getElementById('car').style.left =  car.x+"px";
}

function checkbounds(){

}
