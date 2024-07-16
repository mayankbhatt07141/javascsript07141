let str = "mayank bhatt";
let arr = str.split("");
let x = arr.reduce((acc, curr) => {
  if (curr != " ") {
    if (acc[curr]) {
      acc[curr] = ++acc[curr];
    } else {
      acc[curr] = 1;
    }
  }
  return acc;
}, {});

console.log(x);



//ployfill of reduce
// A piece of code called polyfill is used to add support for more recent features in earlier browsers that don't already have native support for them.


let array = [1,2,3,4,5]

function myReduce(logic, initialValue){
       let acc = initialValue

        for(let i=0;i<this.length; i++){
                acc = acc?logic(acc, this[i]):this[i]
        }
        return acc
}

Array.prototype.myReduce = myReduce

sum  = array.myReduce((acc, curr)=>{
        
        return acc +curr;
}, "")

console.log(sum)


//ployfill of filter function
// A piece of code called polyfill is used to add support for more recent features in earlier browsers that don't already have native support for them.


let array = [1,2,3,4,5]

function myfilter(logic){
       let result = []

        for(let i=0;i<this.length; i++){
                if(logic(this[i])){
                        result.push(this[i])
                }
        }
        return result
}

Array.prototype.myfilter = myfilter

evenValueArray  = array.myfilter((item)=>{
        console.log(item)
        return item%2 == 0;
})

console.log(evenValueArray)

