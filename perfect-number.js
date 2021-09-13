class PerfectNumber {


  static classify(num){
    let sum = 0
    if(num <= 0){
      throw new Error("only positive numbers plz")
    }
    for(let i = 1; i<num; i++){
      if(num%i === 0){
        sum += i
      }
    }
    if(sum === num){
      return "perfect"
    }
    else if (sum > num){
      return "abundant"
    }
    else{
      return "deficient"
    }
  }

}


module.exports = PerfectNumber; 


