class Robot {
  static names = []

  constructor() {
    this.robotName  = this.createName()
    while(Robot.names.indexOf(this.robotName) !== -1){
      this.robotName = this.createName()
    }
    // this.robotName = name
    Robot.names.push(this.robotName)
  }

  createName(){
    let letters = "abcdefghijklmnopqrstuvwxyz".split("")
    let digits = "123456789".split("")
    let name = "" 

    for(let i = 0; i<2; i++){
      let l = Math.floor(Math.random() *25)
      name += letters[l].toUpperCase()

    }

    for(let i = 0; i<3; i++){
      let d = Math.floor(Math.random() * 8)
      name += digits[d]
    }
    return name
  }

  name(){
    return this.robotName 
  }

  reset(){
    for(let i = 0; i<Robot.names.length; i++){
      if(Robot.names[i] === this.name){
        Robot.names.splice(i, i+1)
      }
    }
    this.robotName = this.createName(); 

  }
}





module.exports = Robot; 

