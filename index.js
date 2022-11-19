const arr =[];
function writeCards(arr) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        arr1.push(`Thank you, ${arr[i]}, for the wonderful surprise gift!`);

    }
return arr1;
}

function countDown(number) {
while (number > 0) {
     console.log(number);
    number--;
    }
console.log(number);
}