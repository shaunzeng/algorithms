var splitListToParts = function(root, k) {
    if (k == 1 || k == 0) return [root];

    var len = getLength(root);
    var width = Math.floor(len / k), // how long for each part
        r = len % k, // how many parts will be longer than width;
        ans = [],
        curr = root,
        prev = null;

    for (var i = 0; i < k; i++) {

        ans.push(curr);

        var count = width + (r > 0 ? 1 : 0);

        while (count > 0) {
            prev = curr;
            curr = curr.next;
            count--
        }
        if (prev) prev.next = null;
        r--;
    }

    return ans
};



function getLength(head) {
    let count = 0,
        curr = head;

    while (curr) {
        count++;
        curr = curr.next;
    };

    return count;
}