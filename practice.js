console.log("lisa b")

const myArray = [
    {
        name: "lis",
        id: 123
    },
    {
        name: "john",
        id: 234
    },
    {
        name: "mary",
        id: 453
}
]

let x = 20
let y = 10

if(x>y){
    console.log("yes x is greater than y")
  }  else{
    console.log("no x is not greater than y")
  }


  const bankCustomer = [
    {
        customerName: "linda",
        accountNumber: 2345,
        accountBalance: 50
    },
    {
        customerName: "john",
        accountNumber: 2335,
        accountBalance: 70

    },
    {
    customerName: "sandra",
        accountNumber: 2346,
        accountBalance: 10
    }
]


/*
bankCustomer.forEach(function(item){
    if(item.customerName ==="sandra"){let accountStatement = `The customer name is ${item.customerName}, the account number is ${item.accountNumber} and her account balance is ${item.accountBalance}`

console.log(accountStatement)
}
})*/

for(let x = 0; x<bankCustomer.length; x++){
    if(bankCustomer[x].customerName === "sandra"){
        let accountStatement = `The customer name is ${bankCustomer[x].customerName}, the account number is ${bankCustomer[x].accountNumber} and her account balance is ${bankCustomer[x].accountBalance}`

        console.log(accountStatement)
    }
     
}

for(x=1; x<=10; x++){
    console.log(`Multiplicaion table for ${x}`)
    for(y=1; y<=10; y++){
        result = x*y
        console.log(`${x} x ${y} =`, result)
    }
}

for(b=0; b<10; b++){
    if (b===5){
        continue
    }else console.log(b)
}

const ourArray = ["sandra", "tim", "john", "joseph"]

for (r=0; r<ourArray.length; r++){
    if(r===1){
        break
    }else console.log(ourArray[r])
}

let z=0

while(z<ourArray.length){
    result = `hi ${z} time(s)`
    console.log(result)

    z++
}

//do-while loop

let p=5

do{
console.log("yes??")
p++
}while(p< 3)

let k=5

do{
    console.log("yes??")
    k++
}while(k< 15)


//for-in loop

const myObj={
    name: "we",
    loc:"accra"
}

for(let anything in myObj){
    console.log(anything)
}

for(let anything in myObj){
    let result = myObj[anything]
    console.log(result)
}

for(let anything in myObj){
    console.log(`the ${anything} of my customer is ${myObj[anything]}`)
}

for(let cityStorage of ourArray){
    console.log(cityStorage)

}


//const buttontest = document.getElementById("button-cont")

const button_change = document.getElementById("mainButton");

button_change.addEventListener("click", function(){
    if(button_change.classList.contains("mainButton")){
        button_change.classList.remove("mainButton");
        button_change.classList.add("button-container_buttonred");
    }else{
        button_change.classList.add("mainButton");
        button_change.classList.remove("button-container_buttonred");
    }
})