//一个商品如果可以重复多次放入是完全背包，而只能放入一次是01背包
function testWeightBagProblem(wight, value, size) {
    const len = wight.length,
        dp = Array.from({ length: len + 1 }).map(//初始化dp数组
            () => Array(size + 1).fill(0)
        );
    //注意我们让i从1开始，因为我们有时会用到i - 1，为了防止数组越界
    //所以dp数组在初始化的时候，长度是wight.length+1
    for (let i = 1; i <= len; i++) {
        for (let j = 0; j <= size; j++) {
            //因为weight的长度是wight.length+1，并且物品下标从1开始，所以这里i要减1
            if (wight[i - 1] <= j) {
                dp[i][j] = Math.max(
                    dp[i - 1][j],
                    value[i - 1] + dp[i - 1][j - wight[i - 1]]
                )
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    return dp[len][size];
}

console.log(testWeightBagProblem([1, 3, 4], [15, 20, 30], 4));
