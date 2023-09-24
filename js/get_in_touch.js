$(document).ready(function(){
    const myDetails = {
      name:"Raj Maholia" , 
      email:"maholialekhraj46@gmail.com", 
      address:"Rajasthan , India ", 
      introLine:"Let's connect and collaborate on exciting web projects. Feel free to reach out—I'm just an email away!"
    } ;
    
    $('.contact-line').text(myDetails.introLine); 
    $('.info .name').text(myDetails.name);
    $('.info .email').text(myDetails.email); 
    $('.info .address').text(myDetails.address);
});