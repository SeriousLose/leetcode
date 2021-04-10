/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 *
 * 所有小于0的都不是回文数
 * 个位为0的数也不是回文数
 *
 * 默认 true
 * 数字转字符串
 * 判断字符串对应位置是否相等
 * 最后返回结果
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }
  let n = x;
  let res = 0;
  while(x){
    res = res * 10 + x % 10;
    x = ~~(x / 10);
  }
  return res == n;
};
// @lc code=end

