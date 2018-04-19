
//retriving data from JSON HYF using techniquies from MDN JSON exmaples
var requestURL = 'https://api.github.com/orgs/HackYourFuture/repos';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  let retrivedData = request.response; 
  accessData(retrivedData);
}

// function for accessing data which is retrives from JSON hyf
function accessData(hyfData){
  let curriculumModules = ['HTML-CSS','Node.js','JavaScript1','Git','CommandLine','Project','databases','curriculum','React','masterclass-react-redux'];
  console.log("Third repositary name is -------->>> " + hyfData[2].name);

  let imgHyf = document.querySelector("#hyfLogo");
  let listUl = document.querySelector('#ul-list');
  let containerProp = document.querySelector("#disp-properties");  

  //send avatar to html img for displaying on page
  imgHyf.src = hyfData[0].owner.avatar_url;


for(let module of hyfData){
  let exist = curriculumModules.includes(module.name);  //check each module name includes in curriculum
  if(exist){
    displayContent(module);
  }
}  

//display content to html by appending to it
function displayContent(module){
  let listItem = document.createElement('li');
  listItem.textContent = module.name;
  listUl.appendChild(listItem);
  let moduleProp = document.createElement("p");
  moduleProp.textContent = module.name;
  let displayList = ["watchers","forks","stargazers_count","language"];
 
  for(let i = 0; i < displayList.length; i++){
    let listItem = document.createElement('li');
    listItem.textContent = displayList[i] + " : " + module[displayList[i]];
    moduleProp.appendChild(listItem);    
  }
  let hr = document.createElement('hr');
  moduleProp.appendChild(hr);
  containerProp.appendChild(moduleProp);

}
}