const links = document.querySelector('.links');

let socialMedia = [{name: 'github', url:'https://github.com/tylertruong' }, {name: 'linkedin', url:'https://www.linkedin.com/in/tyler-truong/' }, {name: 'email', url:'mailto:me@tylertruong.com'}];

links.innerHTML = socialMedia.map(media => `
    <a class="link" href="${media.url}"">${media.name}</a>
    `).join('');
