var myName = "Will";
var unitedStates = 50;
var sum = 4 + 5;
function sayHello() {
    alert("Hello World");
}
;
sayHello();
function checkAge(options) {
    if (options.age < 21) {
        alert("Sorry " + options.name + " is not old enough to view this page");
    }
    else {
        alert("Welcome " + options.name);
    }
}
checkAge({ name: 'Abby', age: 27 });
checkAge({ name: 'James', age: 18 });
checkAge({ name: 'John', age: 17 });
checkAge({ name: 'Charles', age: 21 });
var vegetables = [
    'tomatoe',
    'potato',
    'turnip',
    'squash'
];
for (var i = 0; i < vegetables.length; i++) {
    console.log("" + vegetables[i]);
}
;
var pet = {
    name: "Red",
    breed: "Golden Retriever"
};
console.log("My dog's name is " + pet.name + " and he is a " + pet.breed);
var randArr = [
    {
        name: "Will",
        age: 26
    },
    {
        name: "Jake",
        age: 26
    },
    {
        name: "Sally",
        age: 20
    },
    {
        name: "Thomas",
        age: 1
    },
    {
        name: "Rosie",
        age: 2
    },
];
;
for (var i = 0; i < randArr.length; i++) {
    checkAge(randArr[i]);
    console.log(randArr[i]);
}
;
function getLength(word) {
    var charLength = word.length;
    console.log(charLength);
    if (charLength != 0 && charLength % 2) {
        console.log('The world is an odd place!');
    }
    else if (charLength != 0) {
        console.log('The world is nice and even!');
    }
    else {
        console.log("Zero is neither even nor odd!");
    }
}
;
getLength("Hello World");
