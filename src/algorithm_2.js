'use strict'
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

// find the sum supposed to be, then substract numbers in the array, the remain is the number that is missing; Big o notation: O(n)



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




// leetcode 198 house robber
// always assume you rob the current house as you looping through the array, the way you calculate the sum of robbing current house is by
// find out the max of 2 houses before and 3 houses before because you cannot rob the house right before. so the dp equation is 
// dp(n) = Math.max(dp(n - 2) , dp(n - 3)) + v(n);  v is the array of money in each house.

function rob(v) {
    var firstHouse = v[0];
    var secondHouse = v[1];
    var dp = [];

    dp[0] = firstHouse;
    dp[1] = secondHouse;

    for (var i = 2; i < v.length; i++) {
        dp[i] = v[i] + Math.max(dp[i - 2], dp[i - 3]);
    }

    return Math.max(dp[v.length - 1], dp[v.length - 2]);
}