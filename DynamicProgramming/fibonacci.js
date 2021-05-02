//bad solution
function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

//fib(6); // 8

// fast and good solution with memoization but have issues with space complexity
function fibWithMemo(n, memo = []) {
    if (memo[n] !== undefined) return memo[n]
    if (n <= 2) return 1;
    let res = fibWithMemo(n - 1, memo) + fibWithMemo(n - 2, memo);
    memo[n] = res;
    return res;
}

fibWithMemo(6)

//fast and good solution with tabulation dont have issues with space complexity
function fibWithTabulation(n) {
    if (n <= 2) return 1;
    let fibNums = [0, 1, 1]
    for (let i = 3; i < n; i++) {
        fibNums[i] = fuiNums[i - 1] + fibNums[i - 2];
    }
    return fibNums[n]
}

fibWithTabulation(6)