let btnStepThree = document.querySelector(".btn-step3");

btnStepThree.addEventListener('click',function(){
    console.log("you clicked me!");
    showHYFRepos();
});

function fetchJSONData(url, callbackFn) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function() {
        console.log("Data loaded.");
        const data = JSON.parse(xhr.responseText);
        callbackFn(data);
    });
    xhr.open('GET', url);
    xhr.send();
}
function showHYFRepos() {
    fetchJSONData('https://api.github.com/orgs/HackYourFuture/repos', function(repoList) {
        for (let i = 0; i < repoList.length; i++) {
            const repo = repoList[i];

            const ul = document.querySelector('#repoList');
            const li = document.createElement('li');
            // const a = document.createElement('a');
            // a.href="https://api.github.com/repos/HackYourFuture/" + repo.name;
            // a.textContent = repo.name;
            // li.appendChild(a);
            li.innerHTML = '<a href=' + repo.html_url + '> ' + repo.name + ' </a>';
            ul.appendChild(li);
        }
    });
}


