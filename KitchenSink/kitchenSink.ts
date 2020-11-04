const myName: string = "Will";
const unitedStates: number = 50;
const sum: number = 4 + 5;

function sayHello() {
    alert("Hello World")
};
sayHello();

function checkAge(options: { name: string, age: number }): void {
    if (options.age < 21) {
        alert(`Sorry ${options.name} is not old enough to view this page`)
    } else {
        alert(`Welcome ${options.name}`)
    }
}

checkAge({name: 'Abby', age: 27});
checkAge({name: 'James', age: 18});
checkAge({name: 'John', age: 17});
checkAge({name: 'Charles', age: 21});

const vegetables: string[] = [
    'tomatoe',
    'potato',
    'turnip',
    'squash'
];

for (let i = 0; i < vegetables.length; i++) {
    console.log(`${vegetables[i]}`);
};

const pet: string = {
    name: "Red",
    breed: "Golden Retriever",
};

console.log(
    `My dog's name is ${pet.name} and he is a ${pet.breed}`
);

const randArr: friend[] = [
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
interface friend {
    name: string,
    age: number
};
for (let i = 0; i < randArr.length; i++) {
    checkAge(randArr[i]);
    console.log(randArr[i]);
};

function getLength(word: string): void {
   let charLength: number = word.length;
   console.log(charLength);
   if (charLength !=0 && charLength %2 ) {
       console.log('The world is an odd place!');
} else if (charLength !=0) {
    console.log('The world is nice and even!');
   } else {
       console.log("Zero is neither even nor odd!")
   }
};
getLength("Hello World")