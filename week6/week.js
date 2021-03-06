const btnGetData = document.querySelector(".btn-get-data");
const serachRepo = document.querySelector(".search-repo");
const message = document.querySelector(".message");
const ulList = document.querySelector(".ul-list");
const contributorsContainer = document.querySelector(".contributors-container");

//showHYFRepos();    //function call to display HYF repos

btnGetData.addEventListener("click", function() {
  // Event listener for Search button
  const query = serachRepo.value;
  searchHyfRepos(query);
});

// Function for retrieving ALL HYF Repos
function showHYFRepos() {
  getAjaxData(
    "https://api.github.com/orgs/HackYourFuture/repos",
    displayData,
    displayError
  );
}

// Function for retriving searched Repo List from HYF
function searchHyfRepos(searchText) {
  if (searchText.length > 0) {
    const repoSearchUrl =
      "https://api.github.com/search/repositories?q=user:HackYourFuture+" +
      searchText;
    getAjaxData(
      repoSearchUrl,
      function(searchedData) {
        displayData(searchedData.items);
      },
      displayError
    );
  } else {
    message.innerHTML = `<i class="fas fa-search"></i><p>We could not perform this search. Search text is required when searching. Were you searching for something else</p>`;
    ulList.innerHTML = "";
    contributorsContainer.innerHTML = "";
  }
}

// Function to display given array data to a unordered List
function displayData(data) {
  ulList.innerHTML = "";
  contributorsContainer.innerHTML = "";
  if (data.length > 0) {
    message.innerHTML = "";
    data.forEach(setupEventListeners);
    // console.log(data);
    stepTwoWeekSeven(data);
  } else {
    message.innerHTML = `<i class="fas fa-search"></i><p>There are no matched Results. Were you searching for something else!</p>`;
  }
}
// Function for setting up event listeners for Each item
function setupEventListeners(element) {
  const liItem = document.createElement("li");
  liItem.innerHTML = `<a>${element.name}</a>`;
  liItem.addEventListener("click", function() {
    contributorsContainer.innerHTML = "";
    const repoName = document.createElement("h2");
    repoName.innerHTML = `Repository Name: <a href="${
      element.url
    }" target="_blank">${element.name}</a>`;
    contributorsContainer.appendChild(repoName);
    displayButton("eye", "Watchers", element.watchers);
    displayButton("star", "Stars", element.stargazers_count);
    displayButton("code-branch", "Forks", element.forks);

    const contributorHeader = document.createElement("h4");
    contributorHeader.innerHTML = "Contributors";
    contributorsContainer.appendChild(contributorHeader);

    getAjaxData(element.contributors_url, function(contributorsData) {
      contributorsData.forEach(contributor => {
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("card");
        const imgCard = document.createElement("img");
        imgCard.src = contributor.avatar_url;
        cardContainer.appendChild(imgCard);
        const cardInfoContainer = document.createElement("div");
        cardContainer.appendChild(cardInfoContainer);
        cardInfoContainer.innerHTML = `<h4><a href="${
          contributor.url
        }" target="_blank">${contributor.login}</h4><p>Contributions: ${
          contributor.contributions
        } & ID: ${contributor.id}</p>`;
        contributorsContainer.appendChild(cardContainer);
      });
    });
  });
  ulList.appendChild(liItem);
}
function displayButton(btnIcon, btnName, count) {
  // Display button for the Given Input
  const btn = document.createElement("button");
  btn.innerHTML = `<i class="fas fa-${btnIcon}"></i> ${btnName} ${count}`;
  contributorsContainer.appendChild(btn);
}
function displayError(error) {
  message.innerHTML = error;
}

// function for getting data with given URL
function getAjaxData(url, successCallback, failureCallback) {
  // Create new ajax call with the js function called XMLHttpRequest
  const request = new XMLHttpRequest();
  request.addEventListener("load", function() {
    // This in here is our callback function
    // Check our server responsecode, 200 means ok, success: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
    if (this.status === 200) {
      successCallback(JSON.parse(request.responseText));
    } else {
      failureCallback("Something is probably wrong with the url");
    }
  });

  request.addEventListener("error", function() {
    failureCallback("Server error, Failed to load");
  });

  // initializes a request with an http method
  request.open("GET", url);
  // Sends the request
  request.send();
}
// Week 7 assignment step 2 finding total forks, Max fork repo, Min fork Repo
function stepTwoWeekSeven(data){
  const maxForks = data.reduce(
    (prev, current) => prev.forks > current.forks ? prev : current
  );
  console.log("Maximum forked repository", maxForks);

  const minForks = data.reduce(
    (prev, current) => prev.forks < current.forks ? prev : current
  );
  console.log("Minimum forked repository", minForks);

  const maxWatchers = data.reduce(
    (prev, current) => prev.watchers > current.watchers ? prev : current
  );
  console.log("Maximum Watched Repo", maxWatchers);

  const minWatchers = data.reduce(
    (prev, current) => prev.watchers < current.watchers ? prev : current
  );
  console.log("Minimum Watched Repo", minWatchers);

  const forksTotal = data.map((repo)=>repo.forks).reduce((prev, current) => prev + current);
  console.log("Total number of Forks", forksTotal);
  console.log("======================================== ");

}

//------------------------- Bonus task ------------------------
function scanDuplicates(array) {
  let newArray = [];
  array.forEach(element => {
    if (!newArray.includes(element)) {
      newArray.push(element);
    }
  });
  return newArray;
}
const testArray = ["a", "b", "c", "d", "a", "e", "f", "c", "a", "b", "c", "a"];
console.log(scanDuplicates(testArray));
