const header = document.createElement('h1');
header.textContent = 'Welcome to My Project';
header.style.fontSize = '32px';
header.style.marginBottom = '10px';

const subtext = document.createElement('p');
subtext.textContent = 'This is a subtitle with additional information';
subtext.style.fontSize = '16px';
subtext.style.color = '#666';

document.body.appendChild(header);
document.body.appendChild(subtext);
