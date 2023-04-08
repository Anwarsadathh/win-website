let nameVal;
  let emailVal;
  let msgVal;
  let mobVal;
  function Name(){
    let name_x=document.getElementById("name").value
    let regex = /^[a-zA-Z ]{2,30}$/;
    
    if(regex.test(name_x))
    {
        document.getElementById("name-warning").innerHTML=""
        nameVal=true;
    }
    else{
        document.getElementById("name-warning").innerHTML= "Enter a valid Name"
        nameVal=false;
    }
    
     
  }
  
    function EmailVal(){
      console.log("email validated")
    let mail_x=document.getElementById("email").value
    let regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if(regex.test(mail_x))
    {
        document.getElementById("email-warning").innerHTML=""
        emailVal=true;
    }
    else{
        document.getElementById("email-warning").innerHTML= "Must be a valid email"
        emailVal=false;
    }
  }
  
  
  function messageVal(){
      let message = document.getElementById("message").value
      let lengthhh = message.length
      console.log(lengthhh);
      if(lengthhh<3){
          document.getElementById("message-warning").innerHTML= "Enter a Message"
          msgVal=false
      }
      else{
          document.getElementById("message-warning").innerHTML=""
          msgVal=true
      }
  }
  
  function phoneVal(){
    let number=document.getElementById("phone").value
    var regex = /^[0-9]+$/;
    var check = /^[0-9]{10}/;
    let length = number.toString().length;
    var result = number.match(check);
    
   
    if(regex.test(number) &&result!= null && length==10)
    {
        document.getElementById("phone-warning").innerHTML=""
       
        mobVal = true;
    }
    else{
        document.getElementById("phone-warning").innerHTML= "Phone number is not valid"
       
        mobVal = false;
    }
  }
  
  function SubmitVal(){
      if(nameVal==true && emailVal==true && msgVal == true && mobVal == true){
  
          $("#submit-form").submit((e)=>{
              e.preventDefault()
              $.ajax({
                  url:"https://script.google.com/macros/s/AKfycbwChNQldrgSiXEWedtADf_vIP4pIb8O5n3w19weasJupiAHOWp0WckZ1kYYRLoY-x31/exec",
                  data:$("#submit-form").serialize(),
                  method:"post",
                  success:function (response){
                    Swal.fire(
  'Your message was sent',
  'Thank you!',
  'success'
)
setTimeout(function(){
   window.location.reload();
}, 2000);
                      //window.location.href="https://google.com"
                  },
                  error:function (err){
                      alert("Something Error")
          
                  }
              })
          })
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'please enter proper details!',
          
        })
      }
      
  
  }