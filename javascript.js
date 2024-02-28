//visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors. They type vanilla,vanilla,vanilla,strawberry,coffee,coffee
let inputString = prompt("Please enter a list of flavors separated by commas:", "vanilla,vanilla,vanilla,strawberry,coffee,coffee" );

//split inputString into an array of strings
let flavors = inputString.split(",");

//orderCounter function
function orderCounter (flavors){

//create empty object
let orderCount = {};

//iterate through the array of flavors
    for(const index of flavors){
        //if the flavor has been counted, increase the count
        if(orderCount[index] >= 1){
            orderCount[index] += 1;
        } 
        //otherwise, count the flavor
        else {
            orderCount[index] = 1;
        }
    };
//return orderCount object
return orderCount
}

//display a table of the flavors and how many times each were ordered
console.table(orderCounter(flavors));