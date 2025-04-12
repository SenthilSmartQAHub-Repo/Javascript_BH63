

  // Map is collectiok key- value pair(Any data type)

  //Creating a Map1

  const mymap1=new Map([
     
     ["myname","john"],
     ["age",25],
     [true,"yes"]
  ])
  console.log(mymap1)

    //Creating a Map2
    const mymap2=new Map()

    mymap2.set(10,true)
    mymap2.set("welcome",10)
    mymap2.set("welcome",20)
    console.log(mymap2)

    //Retrieving the values
    console.log(mymap2.get("welcome"))

    //checking the key
    console.log(mymap2.has("welcome"))

    //removing the key value pair
    console.log(mymap2.delete("welcome"))
    console.log(mymap2)


    mymap2.clear()

    console.log(mymap2.size)


    const mymap3=new Map([
        ["myname","john"],
        ["age",25],
        [true,"yes"]
     ])

     console.log(mymap3.keys())
     console.log(mymap3.values())
     console.log(mymap3.entries())



     //for of /  for in 
     //array  - both
     //set  -  for of
     //object -  for in 
     //map - for of

 console.log("Iterating the map")

     for(const [key,value] of mymap3 )
     {
         console.log(key, value)
     }

     mymap3.forEach((v,k)=>console.log(v,k))

     //Storing the metadata;

    

     const studentInfo=new Map();

     studentInfo.set("student1",{

        myName:'paul',
        mark1:90,
        age:23
     })
     studentInfo.set("student2",{

        myName:'john',
        mark1:86,
        age:23
     })

     console.log(studentInfo.get("student1"))