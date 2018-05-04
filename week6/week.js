
const btnGetData = document.querySelector(".btn-get-data");
const serachRepo = document.querySelector(".search-repo");
const message = document.querySelector(".message");

//showHYFRepos();
btnGetData.addEventListener('click',function(){
    const query = serachRepo.value;
    searchHyfRepos(query);
});

// Function for retrieving data from HYF Repos
function showHYFRepos() {
    getAjaxData("https://api.github.com/orgs/HackYourFuture/repos", displayData);
}

// Function for retriving searched Repo List from HYF
function searchHyfRepos(searchText){
    if(searchText.length > 0){
        const repoSearchUrl = 'https://api.github.com/search/repositories?q=user:HackYourFuture+' + searchText;
        getAjaxData(repoSearchUrl, function(searchedData){
            displayData(searchedData.items);
        });
    }
    else{
        message.textContent = "Please Enter text in Input field and Click the button";
    }


}

// Function to display given array data to a unordered List
function displayData(data){
    if(data.length > 0){
    const ulList = document.querySelector(".ul-list");
    ulList.innerHTML = "";
    data.forEach(element => {
        const liItem = document.createElement('li');
        liItem.innerHTML = `<a href="${element.url}">${element.name}</a>`;
        ulList.appendChild(liItem);
        });
    }
    else{
        message.textContent = "There are no matched Results. Try again!!"
    }
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