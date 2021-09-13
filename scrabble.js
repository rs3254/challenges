class Scrabble {
  constructor(word){
    this.word = word; 
  }

  score(){
    return this.scoreHelper()


  }

  static score(word){
    let s = new Scrabble(word)
    return s.score()

  }

  scoreHelper(w = this.word){
    // let w = this.word
    let s = 0; 
    if(w === null){
      return 0
    }
    w = w.toUpperCase();
    for(let i = 0; i<w.length; i++){

      if(["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"].includes(w[i])){
        s += 1
      }
      else if(["D", "G"].includes(w[i])){
        s += 2
      }
      else if (["B", "C", "M", "P"].includes(w[i])){
        s += 3
      }
      else if (["F", "H", "V", "W", "Y"].includes(w[i])){
        s += 4
      }
      else if (w[i] === "K"){
        s += 5
      }
      else if (["J", "X"].includes(w[i])){
        s += 8
      }
      else if(["Q", "Z"].includes(w[i])) {
        s += 10
      }
    } 

    return s 

  }


}


module.exports = Scrabble