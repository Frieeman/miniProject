
let userDetailsDatabase = {}


function getUserDetails(userDetails){

    let userName = prompt("Enter Your Username")

    if (userName == null){
        return
    }

    function validateUserName(userName){
        if(userName.length < 10 && userName.length > 0){
            return true
        } else{
            return false
        }
    }
    
    while (validateUserName(userName) == false){
        userName = prompt("USERNAME must be less than 10 and greater than 0")
    }
    
    userDetailsDatabase["userName"] = userName




    let email = prompt("Enter your email address")
    
    if (email == null){
        return
    }

    function validateEmail(email) {
        const emailCheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        emailCheckResult = emailCheck.test(email);
        if (emailCheckResult == true) {
        return true;
        } else {
        return false;
        }
      }

      while (validateEmail(email) == false){
        email = prompt("ENTER a valid email")
      }
      
      userDetailsDatabase["email"] = email
    

      let phoneNumber = prompt("Enter your phone number")
    
      if (phoneNumber == null){
        return
    }

    function validatePhoneNumber(phoneNumber){
        if (phoneNumber.length == 11){
            return true
        } else{
            return false
        }
    }
    
    while (validatePhoneNumber(phoneNumber) == false){
        phoneNumber = prompt("Phone Number Must be 11 digits, try again!")
    }
    
    userDetailsDatabase["PhoneNumber"] = phoneNumber

    
    
    let password = prompt ("Enter your password")
    
    if (password == null){
        return
    }

    function validatePassword(password){
        if (password.length < 6){
            return false
        } else{
            return true
        }
    }
    
    while (validatePassword(password) == false){
        password = prompt("Password must not be less than 6 digits")
    }
    
    userDetailsDatabase["password"] = password


    let confirmPassword = prompt("Confirm your password");
    
    if (confirmPassword == null){
        return
    }

    function validateConfirmPassword (confirmPassword){
        if (confirmPassword != password){
            return false
        } else{
            return true
        }
    }
    
       while (validateConfirmPassword(confirmPassword) == false){
        confirmPassword = prompt("Your password does not match!")
    }

    userDetailsDatabase["Confirm Password"] = confirmPassword
}



function displayUserDetails(){
    alert(`Your Details\n\nUsername: ${userDetailsDatabase.userName}\nPhone Number: ${userDetailsDatabase.PhoneNumber}\nEmail: ${userDetailsDatabase.email}`)
}



