class Triangle {
  constructor(s1,s2, s3){
    this.s1 = s1; 
    this.s2 = s2; 
    this.s3 = s3; 

    [s1, s2, s3] = [this.s1, this.s2, this.s3].sort((a,b) => a-b)
    if(s1 + s2 <= s3){
      throw new Error("error")
    }
    else if(s1 <=0 || s2<=0 || s3 <=0){
      throw new Error("error")
    }

  }

  kind(){
    let [s1, s2, s3] = [this.s1, this.s2, this.s3].sort((a,b) => a-b)

    if(s1 === s2 && s2 === s3){
      return "equilateral"
    }
    else if(s1 === s2 || s2 === s3){
      return "isosceles"
    }
    else{
      return "scalene"
    }
  }


}

module.exports = Triangle