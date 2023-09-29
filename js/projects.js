$(document).ready(function(){ 
 const projectsData = {
   flashkart:{ 
     preview_url:"", 
     caption:"Comming Soon ..."
 }
 }
  // Loop through the projectsData object to create and append cards
  for (const project in projectsData) {
    const { preview_url,caption  } = projectsData[project];
    const card = $('<div class="card" >');
    card.html(`
      <figure class="box">
          <video src="${preview_url}" height="" width="" preload="none" autoplay="autoplay"> Sorry ,  video not available.</video>
          <figcaption class="text">${caption}</figcaption> 
      </figure>`);
    $('.project-corousel').append(card);
  }
});