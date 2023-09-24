$(document).ready(function(){
    // Create a JavaScript object to store service details
const servicesData = {
  'web development': {
    logo: 'fa-code',
    title: 'Web Development',
    description: 'Building interactive and responsive web applications using cutting-edge technologies for a seamless user experience.'
  },
  'e-commerce solutions': {
    logo: 'fa-wrench',
    title: 'E-Commerce Development',
    description: 'Creating robust and secure online stores with payment integration and inventory management.'
  },
  'custom web design': {
    logo: 'fa-pencil-alt',
    title: 'Custom Web Design',
    description: 'Crafting unique and visually appealing website designs tailored to your brand\'s identity.'
  },
  'database management': {
    logo: 'fa-database',
    title: 'Database Management',
    description: 'Efficiently handling data with database design, optimization, and seamless integration into web applications.'
  },
  'responsive ui/ux': {
    logo: 'fa-desktop',
    title: 'Responsive UI/UX Design',
    description: 'Designing intuitive and user-friendly interfaces for a satisfying user journey across all devices.'
  },
  'api integration': {
    logo: 'fa-plug',
    title: 'API Integration',
    description: 'Connecting your web applications with third-party APIs to enhance functionality and data exchange.'
  }
};

// Loop through the servicesData object to create and append cards
for (const service in servicesData) {
  const { logo, title, description } = servicesData[service];
  const card = $('<div class="card" >');
  card.html(`
    <div class="box">
        <i class="fas ${logo}"></i>
        <div class="text">${title}</div>
        <p>${description}</p>
    </div>`);
  $('.serv-content').append(card);
}
});