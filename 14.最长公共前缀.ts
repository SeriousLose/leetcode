/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 *
 * 注意 公共前缀
 *
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  if (strs === null || strs.length === 0) return '';
  let str = strs[0];
  let publicStr = '';
  for (let i = 0; i < str.length; i++) {
    publicStr = str.slice(0, str.length - i);
    let isTrue = true;
    for (let item of strs) {
      if (item.indexOf(publicStr) != 0) {
        isTrue = false;
        break;
      }
    }
    if (isTrue) {
      break;
    }
    if (i == str.length - 1 && !isTrue) {
      publicStr = '';
    }
  }
  return publicStr;
};
// @lc code=end

