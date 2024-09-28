//enter your name and print Welcome 'the person's name'
const nameInputField = document.getElementById("usersname")
const form = document.getElementById("form")
const container = document.getElementById("posts-container")

let userPostRecord = {}

//form.addEventListener("submit", function(event){
 //   event.preventDefault()
 
  //  let nameFromForm = nameInputField.value
  //  const welcomeMessage = `Welcome ${nameFromForm}` 
 
 //   container.textContent = welcomeMessage
 //   form.reset()
    
 //})

form.addEventListener("submit", function(event){
    event.preventDefault()

    let nameFromForm = nameInputField.value;
    userPostRecord = {
        nameOfUser: nameFromForm
    }
    console.log(userPostRecord);

    
    form.reset();
    printToTheUI()

   
})

function printToTheUI(){
      for(let calledname in userPostRecord){
        container.innerHTML = ` `
        let result = userPostRecord[calledname]
        let nameElement = document.createElement("h3")
        nameElement.textContent = `Welcome ${result}!!`
        container.append(nameElement)
      }
    }     
       

        //
 //   })
          
      
  


//


    //const userPostRecord = {
   //     nameOfUser: nameFromForm.value
   // }

   // console.log(userPostRecord)
    
  //  form.reset()
   // printToTheUI()
//})


// Collect Data From Array And Print it on the UI

    //let userNAME = userPostRecord.nameOfUser
    //console.log(userNAME)


    
    
    
    
    
    
    
    //container.innerHTML = ` `
    //arrayOfUserPostObjects.forEach(function(item){
       // let userNAME = item.nameOfUser

       // let nameElement = document.createElement("h3")
        //nameElement.textContent = userNAME

        //container.append(postElement, nameElement)
 //   })


// const nameInputField = document.getElementById("usersname")
// const form = document.getElementById("form")
// const container = document.getElementById("posts-container")
//form.addEventListener("submit", function(event){
   // event.preventDefault()

   // let nameFromForm = nameInputField.value
   //const welcomeMessage = `Welcome ${nameFromForm}` 

   // container.textContent = welcomeMessage
   // form.reset()
   

   
//})