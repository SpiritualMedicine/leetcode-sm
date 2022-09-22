var canCross = function (stones) {
    const n = stones.length;
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
    dp[0][0] = true;
    //如果从第i-1个石头到第i个石头需要的步数大于i，则不能到达
    for (let i = 1; i < n; i++) {
        if (stones[i] - stones[i - 1] > i) {
            return false;
        }
    }
    //动态规划， 到第i个石头需要k步的结果与第j（j<i）个石头需要k或者k-1或者k+1的结果一致
    for (let i = 0; i < n; i++) {
        for (let j = i - 1; j >= 0; j--) {
            const k = stones[i] - stones[j];
            if (k > j + 1) {
                break;
            }
            dp[i][k] = dp[j][k - 1] || dp[j][k] || dp[j][k + 1];
            //如果到最后一个石头并且最后一块石头是可达的，那么返回true
            if (i === n - 1 && dp[i][k]) {
                return true;
            }
        }
    }
    return false;
}