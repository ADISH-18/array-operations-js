//sorting an array with multiple parameters
const people = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Mary', age: 25 },
    { name: 'Mike', age: 20 }
];

people.sort((a, b) => {
    if (a.age === b.age) {
        return a.name.localeCompare(b.name);
    }
    return a.age - b.age;
});

console.log(people);

//rotating an array
const arr1 = [1, 2, 3, 4, 5, 6]
console.log(arr1);
console.log(arr1.slice(1));
console.log(arr1.slice(1).concat(arr1[0]));

//array initialization
const arr2 = [1, 2, 3, 4, 5, 6];
console.log(arr2);

//remove an array item by index
const array = [1, 2, 3, 4, 5];
const index = 2;
if (index > -1 && index < array.length) {
    array.splice(index, 1);
}
console.log(array);
//1.range of an array
function range(start, end) {
    const array = [];
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
}
console.log(range(1, 10));




          //rotating an array
function rotateLeft(array) {
    if (array.length === 0) return array;
    array.push(array.shift());
    return array;
}
let arr3 = [1, 2, 3, 4, 5];
console.log(rotateLeft(arr3));



          //sorting arrays with complex arrays
const peoples = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 30 }
];
peoples.sort((a, b) => a.age - b.age);
console.log(peoples);
peoples.sort((a, b) => a.name.localeCompare(b.name));
console.log(peoples);



            //inserting elements in a specific position
let fruits = ["Apple", "Banana", "Mango", "Orange"];
fruits.splice(2, 0, "Grapes");
console.log(fruits);



            //array into objects
const arr = ['a', 'b', 'c'];
const obj = Object.assign({}, arr);
console.log(obj);


