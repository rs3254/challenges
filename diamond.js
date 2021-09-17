class Diamond {
  static makeDiamond(l){
    let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
    let index = alpha.indexOf(l)
    let res = "" 
    let s = index
    let count = 1
    let arr = [] 
    let line = ""
    for(let i = 0; i<=index; i++){
      if(i === 0){
        line = " ".repeat(s) + alpha[i] + " ".repeat(s) +  "\n"
        res += line
        arr.push(line)
      }
      else if (i > 0){
        line = " ".repeat(s) + alpha[i] +  " ".repeat(count) + alpha[i] + " ".repeat(s) + "\n"
        res += line
        arr.push(line)
        count += 2

      }
      s -= 1
    }
    arr.pop()
    arr = arr.reverse()
    for(let i = 0; i<arr.length;i++){
      res += arr[i]
    }

    console.log(res)
    return res

  }



}

module.exports = Diamond;
Diamond.makeDiamond("A")
Diamond.makeDiamond("B")
Diamond.makeDiamond("C")
Diamond.makeDiamond("D")