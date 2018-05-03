
const btnGetData = document.querySelector(".btn-get-data");

btnGetData.addEventListener('click',function(){
    showHYFRepos();
});
function fetchJSONData(url, callbackFn) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function() {
      console.log("Data loaded.");
      const data = JSON.parse(xhr.responseText);
      callbackFn(data);
    });
    xhr.open("GET", url);
    xhr.send();
  }
  function showHYFRepos() {
    fetchJSONData("https://api.github.com/orgs/HackYourFuture/repos", function(hyfRepoData){
    const ulList = document.querySelector(".ul-list");
    ulList.innerHTML = "";
    hyfRepoData.forEach(element => {
        const liItem = document.createElement('li');
        liItem.innerHTML = element.name;
        ulList.appendChild(liItem);
    });

    });
}

