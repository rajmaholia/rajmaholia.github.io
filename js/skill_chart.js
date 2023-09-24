$(document).ready(function(){
  const mySkills = { 
      html:["HTML",90],
      css:["CSS",60],
      javascript:["JavaScript",70],
      python:["Python", 70],
      django:["Django",60],
      rest_framework:["REST Framework",70],
      php:["PHP",60],
      mysql:["MySQL",70]
    }; 
    
    // Loop through the mySkills object
    $.each(mySkills, function(skillKey, skillData) {
      const [skillName, skillPercentage] = skillData;
      // Create a new 'bars' div
      const barsDiv = $('<div>').addClass('bars');
      // Create a child 'info' div
      const infoDiv = $('<div>').addClass('info');
      // Create the first span for skill name
      const skillNameSpan = $('<span>').text(skillName);
      // Create the second span for skill percentage
      const skillPercentageSpan = $('<span>').text(skillPercentage + '%');
      // Append the span elements to the 'info' div
      infoDiv.append(skillNameSpan, skillPercentageSpan);
      // Create a 'line' div for the skill chart
      const lineDiv = $('<div>').addClass('line');
      //lineDiv.css('width', skillPercentage + '%');
      //lineDiv.css('background-color', 'crimson');
      // Set the background color of 'line' based on skill percentage
      lineDiv.css('background', 'linear-gradient(to right, crimson ' + skillPercentage + '%, lightgrey ' + skillPercentage + '% 130%)');

      // Append the 'info' and 'line' divs to the 'bars' div
      barsDiv.append(infoDiv, lineDiv);
      // Append the 'bars' div to the parent element with class 'skill-charts'
      $('.skill-charts').append(barsDiv);
    });
})