const numbers = [3, 6, 8, 2, 7, 5, 10];
// Create an empty array to store even numbers
const evenNumbers = [];
//the reason we use i as index is because when we put it through a situation like this it represents the current index in the loop
//if you were to put a specific index the loop would just print the value at that specific index constantly 
for (let i = 0; i < numbers.length; i++){
    //Check if the current number is even
    //The modulus operator returns the remainder of dividing 2 numbers, therefore if it is divisible by 2 fully their should be no remainder
    if (numbers[i] % 2 === 0){
        evenNumbers.push(numbers[i]);
    }
}

console.log(evenNumbers);