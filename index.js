function createSceneSetting(parent){

    let scene=document.createElement("a-scene")
    scene.setAttribute("wasd-controls","acceleration")
    scene.setAttribute("acceleration","200")
    let partymusic=document.createElement("a-entity")
    let assets=document.createElement("a-assets")
    let backgroundImage = document.createElement("img")
    backgroundImage.src="./assets/kerala.jpg"
    backgroundImage.id="background"
    assets.appendChild(backgroundImage)
    let sky = document.createElement("a-sky")
    sky.setAttribute("src","#"+backgroundImage.id)
    scene.setAttribute("sound","src: url(./assets/longwayhome.mp3); autoplay: true")
    scene.appendChild(assets)
    scene.appendChild(sky)
    createskyBox(scene)
    createBalcony(scene)

    parent.innerHTML=""
    parent.appendChild(scene)
}

function createskyBox(parent){
    // <a-plane color="#CCC" height="20" width="20"></a-plane>
    let plane1=document.createElement("a-plane")
    let plane2=document.createElement("a-plane")
    let plane3=document.createElement("a-plane")
    let plane4=document.createElement("a-plane")
    let plane5=document.createElement("a-plane")
    let plane6=document.createElement("a-plane")
    // color="#CCC" height="20" width="20"
    let entity1=document.createElement("a-entity")
    let entity2=document.createElement("a-entity")
    let entity3=document.createElement("a-entity")
    let entity4=document.createElement("a-entity")
    let entity5=document.createElement("a-entity")
    let entity6=document.createElement("a-entity")

    
    entity1.setAttribute("position", "0 -10 0")
    entity2.setAttribute("position","50 15 0")
    entity3.setAttribute("position","-50 15 0")
    entity4.setAttribute("position", "0 15 0")
    entity5.setAttribute("position" , "0 15 50")
    entity6.setAttribute("position" , "0 15 -50")


    plane1.setAttribute("color","blanchedalmond")
    plane1.setAttribute("height","100")
    plane1.setAttribute("width","100")
    plane1.setAttribute("rotation","-90 0 0")
    plane1.setAttribute("material",'side:double')

    plane2.setAttribute("color","blanchedalmond")
    plane2.setAttribute("height","50")
    plane2.setAttribute("width","100")
    plane2.setAttribute("rotation","0 -90 0")
    plane2.setAttribute("material",'side:double')

    plane3.setAttribute("color","blanchedalmond")
    plane3.setAttribute("height","50")
    plane3.setAttribute("width","100")
    plane3.setAttribute("rotation","0 90 0")
    plane3.setAttribute("material",'side:double')

    plane4.setAttribute("color","blanchedalmond")
    plane4.setAttribute("height","100")
    plane4.setAttribute("width","100")
    plane4.setAttribute("rotation","-90 0 0")
    plane4.setAttribute("material",'side:double')

    plane5.setAttribute("color","blanchedalmond")
    plane5.setAttribute("height","100")
    plane5.setAttribute("width","50")
    plane5.setAttribute("rotation","0 0 90")
    plane5.setAttribute("material",'side:double')

    plane6.setAttribute("color","blanchedalmond")
    plane6.setAttribute("height","100")
    plane6.setAttribute("width","50")
    plane6.setAttribute("rotation","0 0 -90")
    plane6.setAttribute("material",'side:double; opacity:0')


    entity1.appendChild(plane1)
    entity2.appendChild(plane2)
    entity3.appendChild(plane3)
    entity4.appendChild(plane4)
    entity5.appendChild(plane5)
    entity6.appendChild(plane6)

    parent.appendChild(entity1)
    parent.appendChild(entity2)
    parent.appendChild(entity3)
    parent.appendChild(entity4)
    parent.appendChild(entity5)
    parent.appendChild(entity6)
}

function createBalcony(parent){
    let plane1=document.createElement("a-box")
    plane1.setAttribute("height","100")
    plane1.setAttribute("width","5")
    plane1.setAttribute("color","blanchedalmond")
    plane1.setAttribute("rotation","0 0 -90")
    plane1.setAttribute("material",'side:double')

    let entity1=document.createElement("a-entity")
    entity1.setAttribute("position","0 -7.5 -50")
    entity1.appendChild(plane1)
    parent.appendChild(entity1)
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