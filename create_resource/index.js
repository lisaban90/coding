let createResourceButton = document.getElementById("createResourceButton")
let webName = document.getElementById("webname")
let emailAddress = document.getElementById("email")
let emailAlert = document.getElementById("email-alert")
let webDescription = document.getElementById("web_description")
let createButtonForm = document.getElementById("createbuttonForm")
let form = document.getElementById("form")
let formContainer = document.getElementById("form_container")
let overlay = document.getElementById("overlay")
let cancelIcon = document.getElementById("cancel-icon")
let webnameAlert = document.getElementById("webname-alert")
let webDescriptionAlert = document.getElementById("web_description_alert")
let webHeadingDisplay = document.getElementById("web_heading")
let textWebDescription = document.getElementById("text_web_description")
let firstResourceContainer = document.getElementById("first_resource_container")
let containerAllResourcesEntered = document.getElementById("resource_entered_container")
let deleteIcon = document.getElementById("delete_icon")
// Initialize an array to store resources
let resources = []

createResourceButton.addEventListener("click", function(){
    form.style.display = "flex"
    overlay.style.display = "flex"
})

cancelIcon.addEventListener("click", function(){
    form.style.display = "none"
    overlay.style.display = "none"
})



webName.addEventListener("keyup",function(){
    enterWebname()
} )

function enterWebname(){
    let webNameInput = webName.value
    if(webNameInput.length == 0){
        webnameAlert.innerText = 'Enter your website name'
        webName.style.border = "1px solid red"
    }else
        if(webNameInput.length > 0){
            webnameAlert.innerText = ' '
            webName.style.border = "1.5px solid green"
    }
}

emailAddress.addEventListener("keyup", function(){
    validateEmail()
})

function validateEmail(){
    let emailAddressInput = emailAddress.value
    if(emailAddressInput == 0){
        emailAlert.innerText = 'Enter Link to your Website'
        emailAddress.style.border = "1px solid red"
    }else if(!emailAddressInput.match(/^(https?:\/\/)?((([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})))+(\/[a-zA-Z0-9.-]*)*\/?$/)){
        emailAlert.innerText = 'Enter a valid website address'
    }else{
        emailAlert.innerText= ' '
        emailAddress.style.border = "1.5px solid green"
    }
}

webDescription.addEventListener("keyup",function(){
    enterWebDescription()
} )

function enterWebDescription(){
    let webDescriptionInput = webDescription.value
    if(webDescriptionInput.length == 0){
        webDescriptionAlert.innerText = 'Enter a description of your website'
        webDescription.style.border = "1px solid red"
    }else
        if(webDescriptionInput.length > 0){
            webDescriptionAlert.innerText = ' '
            webDescription.style.border = "1.5px solid green"
    }
}

form.addEventListener("submit", function(event){
    event.preventDefault()

// Validate before adding to resources array
let valid = true;
if (webName.value.length == 0) {
    webnameAlert.innerText = 'Enter your website name'
    webName.style.border = "1px solid red"
    valid = false;
}
if (emailAddress.value.length == 0 || !emailAddress.value.match(/^(https?:\/\/)?((([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})))+(\/[a-zA-Z0-9.-]*)*\/?$/)) {
    emailAlert.innerText = 'Enter a valid website address'
    emailAddress.style.border = "1px solid red"
    valid = false;
}
if (webDescription.value.length == 0) {
    webDescriptionAlert.innerText = 'Enter a description of your website'
    webDescription.style.border = "1px solid red"
    valid = false;
}

if (valid) {
    // Add the new resource to the resources array
    resources.push({ 
        webname: webName.value, 
        description: webDescription.value 
    });

    
    // Clear the container before appending all resources
    containerAllResourcesEntered.innerHTML = '';

    // Loop through the resources array and display each resource
    resources.forEach(function(resource,index) {
        const newResource = document.createElement('div');
        newResource.classList.add('first_resource_container');
        newResource.innerHTML = `
            <div class="heading_section">
                <div class="heading">
                    <h4 class="web_heading">${resource.webname}</h4>
                </div>
                <div class="delete_icon">
                    <i class="fa-solid fa-trash"></i>
                </div>
            </div>
            <div class="text_section">
                <p class="text_web_description">${resource.description}</p>
            </div>
        `;
        containerAllResourcesEntered.appendChild(newResource);
        newResource.style.display = "flex"

        newResource.querySelector('.delete_icon').addEventListener('click', function() {
            // Call deleteResource function with the current index
            deleteResource(index);

        })
    });

    form.style.display = "none"
    overlay.style.display = "none"
    
    console.log(resources)
    console.log(containerAllResourcesEntered)
    form.reset();
}
});

function deleteResource(index) {
    // Remove the resource from the array
    resources.splice(index, 1);

  


containerAllResourcesEntered.innerHTML = '';

    // Loop through the resources array and display each resource
    resources.forEach(function(resource, index) {
        const newResource = document.createElement('div');
        newResource.classList.add('first_resource_container');
        newResource.innerHTML = `
            <div class="heading_section">
                <div class="heading">
                    <h4 class="web_heading">${resource.webname}</h4>
                </div>
                <div class="delete_icon" data-index="${index}">
                    <i class="fa-solid fa-trash"></i>
                </div>
            </div>
            <div class="text_section">
                <p class="text_web_description">${resource.description}</p>
            </div>
        `;
        containerAllResourcesEntered.appendChild(newResource);
        newResource.style.display = "flex";

        // Add event listener for the delete icon
        newResource.querySelector('.delete_icon').addEventListener('click', function() {
            deleteResource(index);
        });
    });
}
    




    
