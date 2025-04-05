
// Creating an array

let arr1=[10,20,30]  // array literal

let arr2=new Array(10,40,30)  //array object

console.log(arr1)

console.log(arr2)

// fetching single value from array

console.log(arr1[2])

//mixed types

var value1=[10,"hello",true,null]

console.log(value1)

//length property

console.log(value1.length)

console.log("iterating the values.....................")

let arrvalue1=[10,4,7,20,30] 
            // 0  1 2  3  4

//1.traditinal for loop
for(var i=0;i<=4;i++)
{
    console.log(arrvalue1[i])
}

//2.foreach
//Arrow funtion
  console.log("arrow")
arrvalue1.forEach((item,index)=>{
    console.log(item,index)
})

console.log("anonymous")
arrvalue1.forEach(function(item,index){
    console.log(item,index)
})
//3. for of

console.log("for of")

for(let item of arrvalue1)
{
    console.log(item)
}


// 4 for in

for(let i in arrvalue1)
    {
        console.log(i, arrvalue1[i])
    }
    