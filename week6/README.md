# Synopsis
This Project is about accessing HackYourFuture github repositories with user's searched keyword and Displaying them on the page. Users can click on each repository to see number of contributors with their images and they can see number of forks, watcher, stars of that repository.
<img width="1202" alt="screen shot 2018-05-19 at 15 01 27" src="https://user-images.githubusercontent.com/11009319/40268854-bcbcfdbe-5b75-11e8-9182-98b1545b37c1.png">


# Code examples
```js
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
```

# Motivation
This Project is made a part of Hackyourfuture assignment. Reading JSON data articles motivated to do this project

# Installation
- Installation of this project can be done by simply cloning this repository and opening week6 folder. 
- git clone https://github.com/chandu87/hyf-javascript2

# Contributors 
- Chandrashekar Palle


