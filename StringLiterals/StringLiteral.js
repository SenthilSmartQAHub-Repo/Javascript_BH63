
  
  let Automation1="Playwright"
  let Automation2='Selenuim'
  let Automation3=`Cypress`

    console.log(Automation1, Automation2, Automation3)


    let Lang1="Ja\"v\"a"
    console.log(Lang1)  // ja"v"a

    let lang2='jav\'ascr\'ipt'
    console.log(lang2)  // jav'ascr'ipt

    let lang3="py'thon"
    console.log(lang3)  // py'thon

    let lang4=`java"script`
    console.log(lang4)  // java"script

    //Mulitple lines

    let message=`this is a
    
    javascript
    
    code`
    console.log(message)

    //String interpolation----> ${variable}

    let empNme="John"

    let message1=`my name is ${empNme}`;
    
    console.log(message1)  // my name is John