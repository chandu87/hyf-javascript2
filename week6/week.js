
const btnGetData = document.querySelector(".btn-get-data");
const serachRepo = document.querySelector(".search-repo");

showHYFRepos();
btnGetData.addEventListener('click',function(){
   
    const query = serachRepo.value;
    searchHyfRepos(query);
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

function searchHyfRepos(searchText){

const repoSearchUrl = 'https://api.github.com/search/repositories?q=user:HackYourFuture+' + searchText;

getAjaxData(repoSearchUrl,function(searchedRepoData){

    const ulList = document.querySelector(".ul-list");
    ulList.innerHTML = "";
    searchedRepoData.items.forEach(element => {
        const liItem = document.createElement('li');
        liItem.innerHTML = `<a href="${element.url}">${element.name}</a>`;
        ulList.appendChild(liItem);
    });
});

}

function getAjaxData(url, callback) {
    // Create new ajax call with the js function called XMLHttpRequest
    const request = new XMLHttpRequest();
    request.addEventListener('load', function () {
        // This in here is our callback function
        // Check our server responsecode, 200 means ok, success: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes 
        if (this.status === 200) {
            callback(JSON.parse(request.responseText));
        } else {
            console.log('Something is probably wrong with the url');
        }
    });

    request.addEventListener('error', function () {
        console.log('Server error like timeout');
    });

    // initializes a request with an http method
    request.open("GET", url);
    // Sends the request 
    request.send();
}