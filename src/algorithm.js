'use strick'

// check if a string has unique characters
function isUniqCha(str) {
    var dic = {};
    for (var i = 0; i < str.length; i++) {
        if (dic[str[i]]) {
            return false;
        } else {
            dic[str[i]] = str[i];
        }
    }
    return true;
}


// reverse a string
function reverseStr(str) {
    var len = str.length;
    var newArr = [];
    for (var i = len - 1; i > 0; i--) {
        newArr.push(str[i]);
    }
    return newArr.join("");
}

// remove duplcates in a string
function removeDuplicate(str) {
    var dic = {};
    for (var i = 0; i < str.length; i++) {
        if (dic[str[i]]) {
            str = str.substr(0, i) + str.substr(i + 1, str.length);
            i = i - 1;
        } else {
            dic[str[i]] = str[i];
        }
    }
    return str;
}

// check if two strings are anagrams
function isAnagrams(str1, str2) {
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');
    return str1 == str2;
}

//check if two strings are anagrams
function isAnagramsComplex(str1, str2) {
    if (str1.length != str2.length) return false;
    var dic = {};
    var dic2 = {};
    for (var i = 0; i < str1.length; i++) {
        if (!dic[str1[i]]) {
            dic[str1[i]] = str1[i];
        }
    }
    for (var i = 0; i < str2.length; i++) {
        if (!dic2[str2[i]]) {
            dic2[str2[i]] = str2[i];
        }
    }
    for (var p in dic) {
        if (dic[p] != dic2[p]) {
            return false;
        }
    }
    return true;
}

// replace spaces in a string with '%20'
function replaceSpace(str) {
    return str.split(' ').join('%20');
}

// rotaten an image 90 degree
function rotateImage(n) {
    var newGrid = [];
    var rowLen = n;
    for (var i = 0; i < rowLen; i++) {
        for (var j = 0; j < rowLen; j++) {
            console.log('(' + i + ',' + j + ') => ');
            rotate(i, j, rowLen);
            console.log('');
        }
    }

    function rotate(x, y, len) {
        var newX = y;
        var newY = x;
        newX = len - newX - 1;
        console.log('(' + newX + ',' + newY + ')');
    }
}


// set row + columns 0 if an element is 0 in matrix
function setZeroMatrix(m, n) {

}

//check substring rotation, 1.8
function checkRotation(s1, s2) {
    if (s1.length != s2.length) return false;
    newS1 = s1 + s1;
    return newS1.indexOf(s2) != -1;
}



// get minimun Unique sum
function getMinimumUniqueSum(arr) {
    var returnVal = [];
    for (var i = 0; i < arr.length; i++) {
        var range = arr[i].split(' ');
        var a = Number(range[0]);
        var b = Number(range[1]);
        var count = 0;
        var j = a;
        while (j <= b) {
            if (isSqaureNum(j)) {
                count++;
            }
            j++;
        }
        returnVal.push(count);
    }
    return returnVal;
}

// check if a number is a square number
function isSqaureNum(num) {
    return (num > 0) && (Math.sqrt(num) % 1 === 0);
}

// get the max difference of any two numbers in an array of numbers
function maxDifference(a) {
    var max = findMax(a);
    if (max == -1) {
        return -1;
    }
    var min = findMin(a, max, a.indexOf(max));
    return max - min;

    function findMax(arr) {
        var max = 0;
        if (arr.length <= 0) {
            return -1;
        }
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        if (arr.indexOf(max) == 0) {
            arr.shift();
            max = findMax(arr);
        }
        return max;
    }

    function findMin(arr, max, idx) {
        var min = max;
        for (var i = 0; i < idx; i++) {
            if (arr[i] < min) {
                min = arr[i]
            }
        }
        return min;
    }
}


//move 0 to the end of the array
function moveZeros(nums) {
    if (nums == null || nums.length < 1) {
        return;
    }
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === 0 && nums[i + 1]) {
            nums.push(nums.splice(i, 1)[0]);
            i--;
        }
    }
    console.log(nums);
}

// given mouth, get the quarter of a year;
function getQuarter(num){
    var count = 1;
    var mouths = 12/4;
    while(num - mouths > 0){
        count ++;
        num -= mouths;
    }
    return count;
}

// get the angel of the short + long hands of a clock when its 3:30
function getAngel(){
    var hr = 3;
    var mi = 30;
    var minDeg = 360/60 * mi ;
    var hrDeg = (360/12) * hr + (minDeg/360) * (360/12) ;
    return Math.abs(minDeg - hrDeg)
}


//given a string, find the longest Palindrome the string can possible build
var longestPalidrome = function(s){
    if (!s) return 0;

    var len = s.length;
    var dic = {}
    var result = 0;

    for (var i = 0; i < len ; i ++){
        if (!dic[s[i]]){
            dic[s[i]] = 1;
        } else {
            dic[s[i]] ++;
        }
    }

    for (var p in dic){
        if (dic[p] % 2 === 0){
            result += dic[p];
        }
    }

    if (Object.keys(dic).length === 1){
        return len;
    }


    if (result < len){
        result ++;
        return result;
    }

    return result;
}


// create a counter and increment every time it's called
function curry(){
    var counter = 0;
    return function count(){
        return counter++;
    }
}


//write a function that realize : curry_two(1)(2)(3)(4)() = 1+2+3+4 = 10
function curry_two(){
    var counter = 0;

    return function c(x){
        if(x){
            counter = counter + x;
            return c;
        } else {
            return counter ;
        }
    };
}


