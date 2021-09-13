class sumOfMultiples {

  constructor(...nums){
    // if(nums === undefined){
    //   this.nums = [3,5]
    // }
    this.nums = nums; 
  }

  to(num) {

    let sumM = 0
    console.log("here")
    console.log(this.nums)
    for(let i = 1; i<num; i++){
      for(let j = 0; j<this.nums.length; j++){
        if(i%this.nums[j] === 0) {
          sumM += i
          break
        }
      }
    }

    return sumM
  }

  static to(num){
    let obj = new sumOfMultiples(3,5); 
    return obj.to(num)

  }

}



module.exports = sumOfMultiples; 