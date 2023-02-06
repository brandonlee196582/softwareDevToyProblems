//Given a positive integer, return its digits reversed.

//Method 1 recursive
var reverse = x => {
    var reverse = 0;
    var reverseOut;

    var reverseCk = (x, reverse) => {
        var reverse;
        if (x !== 0) {
            reverse = reverse * 10 + x % 10;
            x = parseInt(x / 10);
            reverseCk(x, reverse);
        } else reverseOut = reverse;
    };
    reverseCk(x, reverse);
    return reverseOut;
};

console.log(reverse(123));

//Method 2 while loop
var reverse2 = x => {
    var reverse = 0;

    while (x > 0) {
        reverse = reverse * 10 + x % 10;
        x = parseInt(x / 10);
    }
    return reverse
}

console.log(reverse2(123));

//Takes in negative numbers
var reverse3 = x => {
    let testArr = [0, 1, x, false];
    if (testArr[2] < 0) testArr.splice(2, 2, -(testArr[2]), true);
    while (testArr[1] > 0) testArr.splice(0, 3, testArr[0] * 10 + testArr[2] % 10, parseInt(testArr[2] / 10), parseInt(testArr[2] / 10));
    if (testArr[0] >= (2 ** 31) - 1 || testArr[0] <= (-(2 ** 31))) return 0;
    return testArr[3] ? -(testArr[0]) : testArr[0];
};

console.log(reverse3(123));