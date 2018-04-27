let btnStepThree = document.querySelector(".btn-step3");
let btnEnter = document.querySelector(".btn-enter");
let nodeJs = document.querySelector(".btn-node");
let inputRepo = document.querySelector(".input-repo");

btnStepThree.addEventListener('click',function(){
    console.log("you clicked me!");
    showHYFRepos('ALL');
});
btnEnter.addEventListener('click',function(){
    showHYFRepos(inputRepo.value);
});
nodeJs.addEventListener('click',function(){
    showHYFRepos('Node.js');
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
function showHYFRepos(toDisplay) {
    fetchJSONData('https://api.github.com/orgs/HackYourFuture/repos', function(repoList) {
    let repoToDisplay = [];  
    if(toDisplay === 'ALL'){
        repoToDisplay = repoList;
      }
      else{
        repoToDisplay = repoList.filter((element) => { return element.name == toDisplay });
      }
      const ul = document.querySelector('#repoList');
      ul.innerHTML = "";
    
      repoToDisplay.forEach(repo => {
        const li = document.createElement('li');
        li.innerHTML = '<a target="_blank" href=' + repo.html_url + '> ' + repo.name + ' </a>';
        ul.appendChild(li);          
      }); 
    });        
}

    //   else if(toDisplay == 'Node'){
    //     repoToDisplay = repoList.filter((element) => { return element.name == 'Node.js' });
    //   }
    //   else{
    //       repoToDisplay = repoList;
    //   }



        // const a = document.createElement('a');
        // a.href="https://api.github.com/repos/HackYourFuture/" + repo.name;
        // a.textContent = repo.name;
        // li.appendChild(a);



