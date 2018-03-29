const links = document.querySelector('.links');
const portfolio = document.querySelector('.portfolio');

let socialMedia = [{name: 'github', url:'https://github.com/tylertruong' }, {name: 'linkedin', url:'https://www.linkedin.com/in/tyler-truong/' }, {name: 'email', url:'mailto:me@tylertruong.com'}];

let repos = [];

const goTo = (url) => {
    window.location = url;
};

const makePortfolio = (array) => {
    portfolio.innerHTML = array.map(repo => `
        <div class="project" onclick="goTo('${repo.html_url}')">
            ${repo.name}
        </div>
    `).join("")
}

links.innerHTML = socialMedia.map(media => `
    <a class="link" href="${media.url}"">${media.name}</a>
    `).join('');

// fetch('https://api.github.com/orgs/model-airbnb/repos')
//     .then(data => data.json())
//     .then(newRepos => {
//         repos.concat(newRepos);
//         makePortfolio(repos);
//     });

fetch('https://api.github.com/users/tylertruong/repos?type=all')
    .then(data => data.json())
    .then(newRepos => {
        repos = repos.concat(newRepos);
        makePortfolio(repos);
    });


