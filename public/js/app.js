const sectionLogin = document.getElementById("sectionLogin")
const connected = document.getElementById("connected")
const username = document.getElementById("username");
const pass = document.getElementById("pass");
const submit = document.getElementById("login");
const response = document.getElementById("reponses");

const checker = (loginUsername, loginPassword) =>{

    fetch('http://localhost:1000/login/check',
        {
            method: "POST",
            body: JSON.stringify({ user: loginUsername, password: loginPassword }),
            headers:  {
                'Content-Type': 'application/json'
            }
        }
    )
    .then( body => { return body.json().catch( ( err ) => err ) } )
    .then( data => {
        if( data.acces === true ) {
            window.location.href = `http://localhost:1000/login/${data.perm}`
        } else if( data.acces === false ) {
            response.style.display = "block";
            response.textContent = `Votre mot de passe ou votre email n'est pas enregistrer !`; 
        } else{
            response.style.display = "block";
            response.textContent = `Trop de tentative ressayer plus tard !`
        }
        })
    .catch( err => err )
    
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    response.style.display = "block";
    if(username.value === "") return response.textContent = "Vous n'avez pas rentrer votre username";
    if(pass.value === "") return response.textContent = "Vous n'avez pas rentrer votre mot de passe";
    response.style.display = "none";
    checker(username.value, pass.value)
})