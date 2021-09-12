class DNA {
  constructor(str){
    this.str = str; 
  }

  hammingDistance(newString){
    let distance = Math.min(newString.length, this.str.length)
    let count = 0 
    for (let i = 0; i<distance; i++){
      if(newString[i] !== this.str[i]){
        count += 1
      }
    }
    return count 
  }
}


module.exports = DNA