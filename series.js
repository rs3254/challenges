class Series {
  constructor(str){
    this.str = str; 
  }

  slices(num){
    let res = [] 
    if(num > this.str.length){
      throw new Error("error")
    }

    for(let i=0; i<this.str.length-num + 1; i++){
      let s = this.str.split("").slice(i, i+num)
      s = s.map(elem => Number(elem))
      res.push(s)
    }
    console.log(res)

    return res 

  }
}


module.exports = Series