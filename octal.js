class Octal {
  constructor(num){
    this.num = Number(num)
  }

  toDecimal(){
    let decimal = 0
    let digit = 1
    while(this.num>0){
      if(this.num%10 >=8){
        return 0
      }
  
      decimal += (this.num%10)*(digit)
      console.log(decimal)
      this.num = Math.floor(this.num/10)
      
      digit *= 8
    }
    return decimal

  }

}




module.exports = Octal; 