
const btnGetData = document.querySelector(".btn-get-data");
const serachRepo = document.querySelector(".search-repo");
const message = document.querySelector(".message");

//showHYFRepos();
btnGetData.addEventListener('click',function(){
    const query = serachRepo.value;
    searchHyfRepos(query);
});

// Function for retrieving ALL HYF Repos
function showHYFRepos() {
    getAjaxData("https://api.github.com/orgs/HackYourFuture/repos", displayData, displayError);
}

// Function for retriving searched Repo List from HYF
function searchHyfRepos(searchText){
    if(searchText.length > 0){
        const repoSearchUrl = 'https://api.github.com/search/repositories?q=user:HackYourFuture+' + searchText;
        getAjaxData(repoSearchUrl, function(searchedData){
            displayData(searchedData.items);
        }, displayError);
    }
    else{
        message.textContent = "We could not perform this search. Search text is required when searching. Were you searching for something else.";
    }


}

// Function to display given array data to a unordered List
function displayData(data){
    if(data.length > 0){
    const ulList = document.querySelector(".ul-list");
    const contributorsContainer = document.querySelector(".contributors-container");    
    ulList.innerHTML = "";

    data.forEach(element => {
        const liItem = document.createElement('li');
        liItem.innerHTML = `<a>${element.name}</a>`;
        liItem.addEventListener('click',function(){
            contributorsContainer.innerHTML = "";
            const repoName = document.createElement('h2');
            repoName.innerHTML = `Repository Name: <a href="${element.url}">${element.name}</a>`;
            contributorsContainer.appendChild(repoName);
            const contributorHeader = document.createElement('h4');
            contributorHeader.innerHTML = "Contributors";
            contributorsContainer.appendChild(contributorHeader);

            getAjaxData(element.contributors_url,function(contributorsData){
                const contributorsList = document.createElement('ul');
                contributorsList.innerHTML = "";
                contributorsContainer.appendChild(contributorsList);
                contributorsData.forEach((contributor)=>{
                    const contributorListItem = document.createElement('li');
                    contributorListItem.innerHTML = contributor.login;
                    contributorsList.appendChild(contributorListItem);
                    const img = document.createElement('img');
                    img.src = contributor.avatar_url;
                    contributorsList.appendChild(img);

                });
            });
        });
        ulList.appendChild(liItem);
        });
    }
    else{
        message.textContent = "There are no matched Results. Try again!!"
    }
}
function displayError(error){
    message.textContent = error;
}

// function for getting data with given URL
function getAjaxData(url, successCallback, failureCallback) {
    // Create new ajax call with the js function called XMLHttpRequest
    const request = new XMLHttpRequest();
    request.addEventListener('load', function () {
        // This in here is our callback function
        // Check our server responsecode, 200 means ok, success: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes 
        if (this.status === 200) {
            successCallback(JSON.parse(request.responseText));
        } else {
            failureCallback('Something is probably wrong with the url');
        }
    });

    request.addEventListener('error', function () {
        failureCallback('Server error, Failed to load');
    });

    // initializes a request with an http method
    request.open("GET", url);
    // Sends the request 
    request.send();
}


//------------------------- Bonus task ------------------------
function scanDuplicates(array){
    let newArray = [];
    array.forEach(element =>{
        if(!newArray.includes(element)){
            newArray.push(element);
       }
    });
    return newArray;
}
const testArray = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c','a','b','c',"a"]; 
console.log(scanDuplicates(testArray));