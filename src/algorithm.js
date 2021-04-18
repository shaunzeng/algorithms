'use strick'



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
function getQuarter(num) {
    var count = 1;
    var mouths = 12 / 4;
    while (num - mouths > 0) {
        count++;
        num -= mouths;
    }
    return count;
}

// get the angel of the short + long hands of a clock when its 3:30
function getAngel() {
    var hr = 3;
    var mi = 30;
    var minDeg = 360 / 60 * mi;
    var hrDeg = (360 / 12) * hr + (minDeg / 360) * (360 / 12);
    return Math.abs(minDeg - hrDeg)
}


//given a string, find the longest Palindrome the string can possible build
var longestPalidrome = function(s) {
    if (!s) return 0;

    var len = s.length;
    var dic = {}
    var result = 0;

    for (var i = 0; i < len; i++) {
        if (!dic[s[i]]) {
            dic[s[i]] = 1;
        } else {
            dic[s[i]]++;
        }
    }

    for (var p in dic) {
        if (dic[p] % 2 === 0) {
            result += dic[p];
        }
    }

    if (Object.keys(dic).length === 1) {
        return len;
    }


    if (result < len) {
        result++;
        return result;
    }

    return result;
}


// create a counter and increment every time it's called
function curry() {
    var counter = 0;
    return function count() {
        return counter++;
    }
}


//write a function that realize : curry_two(1)(2)(3)(4)() = 1+2+3+4 = 10
function curry_two() {
    var counter = 0;

    return function c(x) {
        if (x) {
            counter = counter + x;
            return c;
        } else {
            return counter;
        }
    };
}

// given an array of continous unsorted numbers, find the missing number, e.g : [1,3,2] => 4, [3,2,5,1] => 4, [2,3,4] = > 1

function findMissingNum(arr) {
    arr = arr.sort();

    if (arr[0] != 1) { return 1 }

    for (var i = 0; i < arr.length; i++) {
        if (arr[i + 1] - arr[i] != 1) {
            return arr[i] + 1;
        }
    }

    return arr[arr.length - 1] + 1;
}

// big o notation: O(NlogN);

function findMissingNumWithDic(arr) {
    var dic = {};
    for (var i = 1; i <= arr.length + 1; i++) {
        dic[i] = false;
    }

    arr.forEach(function(ele) {
        dic[ele] = true;
    });

    for (var p in dic) {
        if (!dic[p]) {
            return parseInt(p);
        }
    }
}

// big o notationn: O(n);

function findMissingNumWithSum(arr) {
    var sum = 0;

    for (var i = 1; i <= arr.length + 1; i++) {
        sum = sum + arr[i];
    }

    for (var i = 0; i < arr.lengh; i++) {
        sum - arr[i];
    }

    return sum;
}



//check if parantheses are in wrapped structure : "({[]})" => true, "({)}[]" => false
function checkBrackets(s) {
    var brackets = '(){}[]<>';
    var stack = [];

    for (var i = 0; i < s.length; i++) {
        var position = brackets.indexOf(s[i]);

        if (position % 2 === 0) {
            stack.push(s[i]);
        } else {
            var el = stack.pop();
            if (brackets[position - 1] != el) {
                return false;
            }
        }
    }

    return !stack.length;
}

//a O(n) shuffle
function quickShuffle(arr) {
    var length = arr.length;
    var shuffled = Array(length);
    var getRandom = function(min, max) {
        Math.floor(Math.random() * max) + min;
    }
    for (var i = 0; i < length; i++) {
        var rand = getrandome(0, index);
        if (rand !== index) {
            shuffled[index] = shuffled[rand];
        }
        shuffled[rand] = arr[index];
    }
    return shuffled;
}





//implementation of Stack that has push, pop, peek, and getMinimun methods
/**
 * initialize your data structure here.
 */
var Stack = function() {
    var self = this;

    self.data = [];
    self.push = push;
    self.pop = pop;
    self.peek = peek;
    self.size = size;

    function push(val) {
        self.data.push(val);
    }

    function pop() {
        return self.data.pop();
    }

    function peek() {
        return self.data[self.data.length - 1];
    }

    function size() {
        return self.data.length;
    }
}


var MinStack = function() {
    var self = this;

    self.s1 = new Stack();
    self.s2 = new Stack();
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.s1.push(x);

    if (!this.s2.peek() && this.s2.peek() != 0) {
        this.s2.push(x);
    } else {
        if (this.s2.peek() >= x) {
            this.s2.push(x);
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    var temp = this.s1.pop();

    if (!!this.s2.peek() || this.s2.peek() == 0) {
        if (temp === this.s2.peek()) {
            this.s2.pop();
        }
    }

    console.log(this.s1.data, this.s2.data);

};


/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.s1.peek();
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.s2.peek();
};




// Tower Hanoi, 'cracking coding interview 4 edition', 3.4

var Stack = function() {
    var self = this;
    self.name = count++;
    self.data = [];
    self.push = push;
    self.pop = pop;
    self.peek = peek;
    self.size = size;

    function push(val) {
        self.data.push(val);
    }

    function pop() {
        return self.data.pop();
    }

    function peek() {
        return self.data[self.data.length - 1];
    }

    function size() {
        return self.data.length;
    }
}


function Hanoi(n) {
    var rod1 = new Stack();
    var rod2 = new Stack();
    var rod3 = new Stack();

    init();

    function init() {
        for (var i = n; i >= 1; i--) {
            rod1.push(i);
        }

        moveDisk(n, rod1, rod3, rod2);
    }


    function moveDisk(n, origin, destination, buffer) {
        if (n <= 0) return;

        moveDisk(n - 1, origin, buffer, destination);

        moveTop(n, origin, destination);

        moveDisk(n - 1, buffer, destination, origin);
    }

    function moveTop(n, origin, destination) {
        destination.push(origin.pop());
        console.log('Disk ' + n + ' is moved from rod' + origin.name + ' to : rod' + destination.name);
    }

    console.log(' ');
    console.log(rod1.data, rod2.data, rod3.data);
}

//given a list of coins of different denaminations, find the number of ways to make up the given amount
var coinChange = function(coins, amount) {
    coins = coins.sort();

    var combinations = {};

    for (var i = 0; i < coins.length; i++) {
        for (var j = 0; j <= amount; j++) {
            if (j === 0 && combinations[j] == void 0) {
                combinations[j] = 1;
            }

            if (j >= coins[i]) {
                combinations[j] = !combinations[j] ? 0 : combinations[j];
                combinations[j] = combinations[j - coins[i]] >= 0 ? combinations[j] + combinations[j - coins[i]] : combinations[j] + 0;
            }
        }
    }
    return combinations[amount];
};