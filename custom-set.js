class CustomSet {

  constructor(arr=[]){
    this.arr = [] 
    let obj = {} 
    for(let i = 0; i<arr.length; i++){
      if(this.arr.indexOf(arr[i]) !== -1){
        continue
      }
      else{
        this.arr.push(arr[i])
      }
    }

    this.arr = this.arr.sort((a,b) => a-b)
  }


  isEmpty(){
    if(this.arr.length === 0){
      return true
    }
    else{
      return false 
    }
  }

  isSubset(set2){
    console.log(set2.arr)
    if(set2.arr.length === 0 && this.arr.length === 0){
      return true 
    }
    else if(set2.arr.length === 0 && this.arr.length !== 0 ){
      return false 
    }

    for(let i = 0; i<this.arr.length; i++){
      if(set2.arr.indexOf(this.arr[i]) === -1){
        return false
      }
    }


    return true 

  }


  contains(elem){
    if(this.arr.indexOf(elem) === -1){
      return false
    }
    return true
  }


  intersection(s2){
    let sameElements = this.arr.filter(elem => s2.contains(elem));
    return new CustomSet(sameElements);

  }

  difference(s2){
    let elements = this.arr.filter(elem => !s2.contains(elem));
    return new CustomSet(elements);
  }

  union(s2){
    
    let unionSet = new CustomSet(this.arr);
    s2.arr.forEach(elem => unionSet.add(elem));
    return unionSet;
  }

  isDisjoint(s2){
    return this.arr.every(elem => !s2.contains(elem));
  }

  isSame(s2){
    if(s2.arr.length === 0 && this.arr.length === 0){
      return true
    }


    if(this.isSubset(s2) && s2.arr.length === this.arr.length){
      return true
    }
    else{
      return false 
    }

  }

  add(elem){
    if(this.arr.indexOf(elem) === -1){
      this.arr.push(elem)
    }
    return this;

  }




}



module.exports = CustomSet; 