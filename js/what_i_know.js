$(document).ready(function(){
/* Handle Content of What i Know Part */
  
   // Your skills data
        const skills = [
            "Programming Languages: Proficient in Python, PHP, and JavaScript.",
            "Web Development: Experienced in building dynamic web applications using Django, HTML, CSS, and JavaScript.",
            "Database Management: Skilled in working with databases, including MySQL and SQLite, for efficient data storage and retrieval.",
            "Mobile-Friendly Development: Capable of creating responsive web applications for optimal user experiences on all devices.",
            "Debugging and Troubleshooting: Strong problem-solving skills to identify and resolve technical challenges efficiently.",
            "Version Control: Familiar with version control systems like Git for collaborative development.",
            "Code Optimization: Dedicated to writing clean, efficient, and maintainable code for robust web solutions.",
            "Web Security: Knowledgeable about web security best practices to protect applications and user data.",
            "API Integration: Proficient in integrating APIs to enhance web application functionality.",
            "Front-End Frameworks: Familiar with front-end frameworks like Bootstrap and jQuery for streamlined UI development."
        ];
        
        const maxToShow = 3; 
        let showAllSkills = false;
        // Function to populate skills content as a list
        function populateSkills() {
            const skillList = $('.skill-description');
            skillList.empty(); // Clear any existing content 
            
            const skillsToDisplay = showAllSkills ? skills : skills.slice(0, maxToShow);

            for (let i = 0; i < skillsToDisplay.length; i++) {
                const skillParts = skills[i].split(':');
                if (skillParts.length === 2) {
                    const skillTitle = skillParts[0].trim();
                    const skillDescription = skillParts[1].trim();
                    skillList.append('<li><strong>' + skillTitle + ':</strong> ' + skillDescription + '</li>');
                }
            }
        }
        // Populate skills as a list when the page loads
        populateSkills();
        // Show all skills when "Read More" button is clicked
        $('.read-more').on('click', function () { 
            showAllSkills = !showAllSkills; 
            $(this).text(get_toggle_text()); // Hide the "Read More" button
            populateSkills()
        }); 
        
        function get_toggle_text(){
          if (showAllSkills == true) {
            return "Show less";
          } else {
            return "Read more";
          }
        } 
});