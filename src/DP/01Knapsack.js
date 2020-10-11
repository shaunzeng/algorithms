// you have a weight constraint , put books of various value in the backpack, and total weight should be within weight constraight
// each book has a value, 
// find biggest value you can put in backpack within weight constrit

//input bookweight b, bookValues v, weight constraint

export const biggestValue = (b, v, W) => {
    if (!b || b.length == 0 || !v || v.length == 0 || !W) return 0;

    let dp = Array.from(new Array(b.length + 1), () => new Array(W + 1).fill(0));
    console.log(dp)

    for (let i = 1; i <= b.length; i++) {
        let currWeight = b[i - 1];
        console.log('curr weight  : ', currWeight);
        for (let j = 1; j <= W; j++) {


            if (currWeight > j) {
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = Math.max(dp[i][j - currWeight] + v[i - 1], dp[i - 1][j]);
            }

            console.log(' dp : ', i, j, " => ", dp[i][j])
        }
    };

    return dp[b.length][W];
}