/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function(n) {


    let dp00 = new Array(n + 1).fill(0), // has no A and end with 0 L
        dp01 = new Array(n + 1).fill(0), // has no A and end with 1 L
        dp02 = new Array(n + 1).fill(0), // has no A and end with 2 L
        dp10 = new Array(n + 1).fill(0), // has 1 A and end with no L
        dp11 = new Array(n + 1).fill(0), // has 1 A and end with 1 L
        dp12 = new Array(n + 1).fill(0), // has 1 A and end with 2 L
        mod = 1000000007;

    dp00[0] = 1; // number 0 matches "no A no L"
    dp01[0] = 0; // number 0 does not match "no A 1 L"
    dp02[0] = 0; // number 0 does not match the rest
    dp10[0] = 0;
    dp11[0] = 0;
    dp12[0] = 0;


    for (let i = 1; i <= n; i++) {

        // "ALL" = "AL" + "L"
        dp12[i] = dp11[i - 1] * 1;

        // "AL" = "A" + "L"; 
        dp11[i] = dp10[i - 1] * 1;

        // "A" = ("A" + "P") + ("AL" + "P") + ("ALL" + "P") + ("LL" + "A") + ("L" + "A") + ("" + "A")
        dp10[i] = (dp10[i - 1] * 1 + dp11[i - 1] * 1 + dp12[i - 1] * 1 + dp02[i - 1] * 1 + dp01[i - 1] * 1 + dp00[i - 1] * 1) % mod;

        // "LL" = "L" + "L"
        dp02[i] = dp01[i - 1] * 1;

        // "L" = "" + "L";
        dp01[i] = dp00[i - 1] * 1;

        // "" = ("" + "P") + ("l" + "p") + ("LL" + "P");
        dp00[i] = (dp00[i - 1] + dp01[i - 1] + dp02[i - 1]) % mod;
    }

    return (dp00[n] + dp01[n] + dp02[n] + dp10[n] + dp11[n] + dp12[n]) % mod;
};