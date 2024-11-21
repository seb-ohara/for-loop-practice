//when iterating through an array the array needs to be declared out of the for loop
const fruits = ["apple", "banana", "cherry", "date"]
//standard practice is to use i, which represents index
//let i = 0 | this just means start iterating from zero
//i < fruits.length | this means while the index (i) is smaller than the length of the fruits array the for loop will run
//i++ | this just means the for loop will iterate by one position upward
for (let i = 0; i < fruits.length; i++){
    //this logs the index variable of i and then starts the loop again which iterated up 1
    console.log(fruits[i]);
}