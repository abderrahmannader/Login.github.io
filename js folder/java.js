
var YourEmail = document.querySelector("#email")
var YourPass = document.querySelector("#pass")
var YourName = document.querySelector("#name")



var loginArr = []

var DataBase = []

if (localStorage.getItem("info") != null) {
    DataBase = JSON.parse(localStorage.getItem("info"))
}


function LoginElement() {

    YourName = document.querySelector("#name")
    YourEmail = document.querySelector("#email")
    YourPass = document.querySelector("#pass")
    var regexEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    var regexPass = /([a-zA-Z1-9]|[!@#$%^&*]){8,}$/


    var login = {
        email: YourEmail.value,
        pass: YourPass.value
    }

    


    if (regexEmail.test(email.value) && regexPass.test(pass.value)) {
        

        loginArr.push(login)

        

        
        
        console.log(loginArr)
        

        if(LoginAcc()){

            // loginArr = []

            document.querySelector(".validation1").setAttribute("class", "text-success validation1 pt-2 text-center")
            document.querySelector(".validation1").innerHTML = "success"

            UserInterFace()
           
            clear()



        }else{

            clear()
            document.querySelector(".validation1").setAttribute("class", "text-danger validation1 pt-2 text-center")
            document.querySelector(".validation1").innerHTML = "Email or Pass Wrong"

        }

        

       
    } else {
        clear()
        document.querySelector(".validation1").setAttribute("class", "text-danger validation1 pt-2 text-center")
        document.querySelector(".validation1").innerHTML = "invalid input"
    }






}

function LoginAcc(){

    var  loginCheck = ""
    var  loginCheck2 = ""
    

    for(var t = 0 ; t< loginArr.length;t++){
        for(var i =0; i< DataBase.length;i++){
       

            //  loginCheck =  if(DataBase[i].email.includes(loginArr[t].email) ){} 
            
            //  loginCheck2 = DataBase[i].pass.includes(loginArr[t].pass)
    
             if(DataBase[i].email.includes(loginArr[t].email) == true ){
                loginCheck = true
        
            }else{
                console.log("bye")
            }

            if(DataBase[i].pass.includes(loginArr[t].pass) == true ){
                loginCheck2 = true
        
            }else{
                console.log("bye")
            }
         
    
        
            console.log(loginCheck)
            console.log(loginCheck2)
      
    
    }
    }

    // if(loginCheck == "true"){
    //     console.log("hi")
    // }else{
    //     console.log("bye")
    // }
    

    if(loginCheck == true && loginCheck2 == true){
        return true;
    }else{
        return false;
    }

   
    



  
}





function UserInterFace(){
    

    document.querySelector(".box").innerHTML = ``

    document.querySelector(".login-interface").innerHTML =`

     <div class=" d-flex justify-content-between px-5 py-3 nav-bar-color">
    <h2>Smart login</h2>

    <button class="btn btn-warning" onclick="logOut()">LogOut</button>

</div>

<div class=" h-100 d-flex justify-content-center align-items-center">
    <div class=" interface">
        <h2  >Welcome ${loginArr[loginArr.length - 1].email}</h2>
    </div>
    

</div>`



loginArr = []



   

}

function logOut(){
    SignIn()
    
    YourEmail = document.querySelector("#email")
    YourPass = document.querySelector("#pass")
    YourName = document.querySelector("#name")
    

}


function sginElement() {
    YourName = document.querySelector("#name")
    YourEmail = document.querySelector("#email")
    YourPass = document.querySelector("#pass")
    
    var regexEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    var regexPass = /([a-zA-Z1-9]|[!@#$%^&*]){8,}$/
    var regexName = /^[a-z0-9_-]{3,15}$/

    checkData = ""
    checkData2 = ""
    if (regexEmail.test(YourEmail.value) && regexPass.test(YourPass.value) && regexName.test(YourName.value)) {
      
        for(var i=0; i < DataBase.length; i++){

            var checkData =  DataBase[i].name.includes(YourName.value)
            var checkData2 = DataBase[i].email.includes(YourEmail.value)

        }

        if(checkData == false && checkData2 == false){

            var signup = {
                email: YourEmail.value,
                pass: YourPass.value,
                name: YourName.value
            }
    
            DataBase.push(signup)
    
            localStorage.setItem("info", JSON.stringify(DataBase))

           
            clear2()
            document.querySelector(".validation1").setAttribute("class", "text-success validation1 pt-2 text-center")
            document.querySelector(".validation1").innerHTML = "success"
            SignIn()
           

        }else{
            clear2()
            document.querySelector(".validation1").setAttribute("class", "text-danger validation1 pt-2 text-center")
        document.querySelector(".validation1").innerHTML = "Email or UserName used"

        

        
        
        }

       
        
           

      
       
        
    } else {
        clear2()
        document.querySelector(".validation1").setAttribute("class", "text-danger validation1 pt-2 text-center")
        document.querySelector(".validation1").innerHTML = "invalid input"
        
    }







}

 
function clear2(){
    YourEmail.value =""
    YourPass.value =""
    YourName.value = ""
}

function clear(){
    YourEmail.value =""
    YourPass.value =""
}






function signUp() {

    document.querySelector(".box").innerHTML = `
    <div class="w-75 m-auto" id="SignUp">
   <h2 class="text-center display-5 fw-bolder">Smart Login System</h2>
   <input id="name" class="form-control mt-4" placeholder="Enter your name" type="text">
<input id="email" class="form-control my-4 " placeholder="Enter your email" type="text">
<input id="pass" class="form-control" placeholder="Enter your password" type="password">
<p class="text-danger validation1 pt-2 text-center"></p>
<button class="button1 form-control btn  mt-4" onclick="sginElement()">Sign Up</button>
<p class="text-center mt-3 text-white">Don’t have an account?<span><a class="text-white ps-1 loginSwitcher " onclick="SignIn()"  >Sign In</a></span></p>

</div>`

}

function SignIn() {

    document.querySelector(".login-interface").innerHTML =``

    document.querySelector(".box").innerHTML = ` <div class="w-75 m-auto" id="Login">
    <h2 class="text-center display-5 fw-bolder">Smart Login System</h2>
<input id="email" class="form-control my-4 " placeholder="Enter your email" type="text">
<input id="pass" class="form-control" placeholder="Enter your password" type="password">
<p class="text-danger validation1 pt-2 text-center"></p>
<button class="button1 form-control btn  mt-4" onclick="LoginElement()">Login</button>
<p class="text-center mt-3 text-white">Don’t have an account?<span><a class="text-white ps-1 loginSwitcher " onclick="signUp()" >Sign Up</a></span></p>


</div>`

}

