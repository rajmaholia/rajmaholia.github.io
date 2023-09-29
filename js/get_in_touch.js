$(document).ready(function(){
    const myDetails = {
      name:"Raj Maholia" , 
      email:"maholialekhraj46@gmail.com", 
      address:"Ashok Nagar  , Savai Mansingh Road \n Rajasthan , India ", 
      whatsapp:"+91 9509871974", 
      phone:"+91 9509871974", 
      linkedin:"https://www.linkedin.com/in/raj-maholia-633459262", 
      introLine:"Let's connect and collaborate on exciting web projects. Feel free to reach out—I'm just an email away!"
    } ;
    
    $('.contact-line').text(myDetails.introLine); 
    $('.info .name').text(myDetails.name);
    $('.info .email').text(myDetails.email); 
    $('.info .address').text(myDetails.address);
    $('.info .whatsapp').text(myDetails.whatsapp);
    $('.info .phone').text(myDetails.phone);
    $('.info .linkedin').text(myDetails.linkedin);
});