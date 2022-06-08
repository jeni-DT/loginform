function validateform(){
    var uname=document.querySelector('#uname').value;
    var password=document.querySelector('#password').value;
    var confirm = document.querySelector('#confirm').value;
    var mobile = document.querySelector('#mobile').value;
    if(uname == null || uname == ""){
        alert('Please enter name');
        return false;
        
    }
    else if(password == null || password == ""){
        alert('Please Enter your password');
        return false;
        
        
    }
    else if(confirm ==null || confirm == ''){
        alert('confirm Password cannot be blank');
        
    }
    else if(password != confirm){
        alert("password must be same");
        return false;
        
    }
    if(isNaN(password)){
        alert('Please Enter Numeric Value only');
        return false;
        
    }
    else if(isNaN(mobile)){
        alert('Enter numeric value');
        return false;
        
    }
    else if(mobile.length!=10){
        alert("enter vaild mobile number");
        return false;
         
    }
}