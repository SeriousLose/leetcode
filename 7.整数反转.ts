/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 *
 * 对10进行取整
 * 每次得到结果乘10进行累加,
 * 直到最后为0退出循环
 * 提交结果
 */

// @lc code=start
function reverse(x: number): number {
  let res = 0;
  while(x){
    res = res * 10 + x % 10;
    if(res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31)) return 0;
    x = ~~(x / 10);
  }
  return res;
};
// @lc code=end

