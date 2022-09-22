/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    let len = s.length;
    if(len<2){
        return s;
    }

    let max_len = 1;
    let begin = 0;
    //dp[i][j]表示i，j是否为回文
    let dp = new Array(len).fill(0).map((item)=>Array(len).fill(0));
    for(let i =0;i<len;i++){
        dp[i][i] = true;
    }

    //从长度为2的字符串开始遍历
    for(let L = 2; L <= len; L++){
        //从字符串开头开始寻找长度为L的子串
        for(let i = 0; i< len;i++){
            //计算长度为L的字串的最右字符的索引
            j = L + i - 1;
            //如果索引超出了最大索引，则停止
            if(j>=len){
                break;
            }

           // 如果子串两端的字符不同，则（i,j）子串不是回文
            if(s[i] != s[j]){
                dp[i][j] = false;
            }else{
                //如果子串长度小于3，则（i，j）子串是回文
                if(j-i<3){
                    dp[i][j] = true;
                }else{
                    //如果长度大于三，则i,j与i+1，j-1的结果一致
                    dp[i][j]=dp[i+1][j-1];
                }
            }
            //记录最大回文子串的长度和开始索引
            if(dp[i][j] && j-i+1>=max_len){
                max_len = j-i+1;
                begin = i;
            }
        }
    }
    return s.slice(begin,begin+max_len);
};