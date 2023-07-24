function createSceneSetting(parent){

    let scene=document.createElement("a-scene")
    let partymusic=document.createElement("a-entity")
    let assets=document.createElement("a-assets")
    let backgroundImage = document.createElement("img")
    backgroundImage.src="./assets/kerala.jpg"
    backgroundImage.id="background"
    assets.appendChild(backgroundImage)
    partymusic.setAttribute("sound","src: url(https://songwhip.com/walk-off-the-earth/long-way-home); autoplay: true")
    let sky = document.createElement("a-sky")
    sky.setAttribute("src","#"+backgroundImage.id)
    scene.appendChild(assets)
    scene.appendChild(partymusic)
    scene.appendChild(sky)
    parent.innerHTML=""
    parent.appendChild(scene)
}

function createLoginScreen(parent){
    let loginPage = document.createElement("div")
    loginPage.className="loginPage"
    let loginSection = document.createElement("div")
    loginSection.className="loginSection"
    let loginHeader = document.createElement("h2")
    loginHeader.innerText="Welcome to a Virtual experience"
    loginHeader.className="loginHeader"
    let emailLabel=document.createElement("label")
    emailLabel.innerText="Email"
    emailLabel.className="loginHeader loginLabels"
    let emailInput = document.createElement("input")
    emailInput.type="email"
    emailInput.className="loginInputs"
    let passwordLabel=document.createElement("label")
    passwordLabel.innerText="Password"
    passwordLabel.className="loginHeader loginLabels"
    let passwordInput = document.createElement("input")
    passwordInput.type="password"
    passwordInput.className="loginInputs"
    let submitButton = document.createElement("button")
    submitButton.innerText="Submit"
    submitButton.className="loginButton"

    submitButton.addEventListener("click",function(e){
        if(emailInput.value.trim().length>0 && passwordInput.value.trim()==="test"){
            createSceneSetting(parent)
        }
        else{
            let alert= document.createElement("label")
            loginSection.appendChild(alert)
            alert.style.color="red"
            alert.innerText="Username or password is incorrect"
        }
    })

    loginPage.appendChild(loginSection)
    loginSection.appendChild(loginHeader)
    loginSection.appendChild(emailLabel)
    loginSection.appendChild(emailInput)
    loginSection.appendChild(passwordLabel)
    loginSection.appendChild(passwordInput)
    loginSection.appendChild(submitButton)
    parent.appendChild(loginPage)
    

}

function init(){
    let a= document.getElementsByTagName("body")[0]
    createLoginScreen(a)
}


init()