/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  let ary = [];
  let isBreak = false;
  let leng = nums.length;
  for(let i = 0; i< leng ; i++ ){
    for(let j = 0; j < leng; j++){
      if(i !==j && target == nums[i] + nums[j] ){
        isBreak = true
        ary = [i,j]
      }
      if(isBreak){
        break
      }
    }
    if(isBreak){
      break
    }
  }
  return ary
};

// @lc code=end

