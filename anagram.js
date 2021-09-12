class Anagram {

  constructor(word){
    this.word = word
  }

  match(arr){
    let res = [] 
    console.log(arr)
    for(let i = 0; i<arr.length; i++){
      let boolWord = true
      if(arr[i].toLowerCase() === this.word.toLowerCase()){
        continue
      }

      let element  = arr[i].toLowerCase().split("").sort().join("")
      let w = this.word.toLowerCase().split("").sort().join("")
      if(element.length !== w.length){
        continue
      }

      for(let i = 0; i<w.length; i++){
        if(w[i] != element[i]){
          boolWord = false
        }
      }

      if(boolWord === true){
        res.push(arr[i])
      }

    }
    return res
  }


}


module.exports = Anagram; 