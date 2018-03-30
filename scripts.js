const links = document.querySelector('.links');
const portfolio = document.querySelector('.port');
const topBanner = document.querySelector('.top-banner');

const socialMedia = [{name: 'resume', url:'resume.pdf' }, {name: 'github', url:'https://github.com/tylertruong' }, {name: 'linkedin', url:'https://www.linkedin.com/in/tyler-truong/' }, {name: 'email', url:'mailto:me@tylertruong.com'}];

let repos = [];

const goTo = (url) => {
    window.location = url;
};

const makePortfolio = (array) => {
    portfolio.classList.add('portfolio');
    portfolio.innerHTML = array.map(repo => `
        <div class="project" onclick="goTo('${repo.html_url}')">
            ${repo.name}
        </div>
    `).join("")
}

const renderProjects = () => {
    topBanner.classList.add('top-banner-projects');
    fetch('https://api.github.com/users/tylertruong/repos?type=all')
        .then(data => data.json())
        .then(newRepos => {
            repos = repos.concat(newRepos);
            makePortfolio(repos);
        });    
}

const media = socialMedia.map(media => `
    <a class="link" href="${media.url}"">${media.name}</a>
    `).join('');

links.innerHTML = links.innerHTML.concat(media);




