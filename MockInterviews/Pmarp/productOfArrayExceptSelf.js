const productExceptSelfEfficient = function(nums) {
    if (nums.length === 0 || nums.length === 1) return [];

    const result = new Array(nums.length).fill(0);
    let prefix = 1;
    let postfix = 1;
  
    //write prefix into the result box, then update prefix variable
    for (let i = 0; i < nums.length; i++) {
      result[i] = prefix;
      prefix *= nums[i];
    }
  
    //calculate and update with what's in the result box then update postfix variable
    for (let i = nums.length; i >= 0; i--) {
      result[i] *= postfix;
      postfix *= nums[i];
    }
  
    return result;
  };