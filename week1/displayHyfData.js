
var requestURL = 'https://api.github.com/orgs/HackYourFuture/repos';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  let retrivedData = JSON.parse(JSON.stringify(request.response)); 
  accessData(retrivedData);
}

function accessData(hyfData){
  let curriculumModules = ['HTML-CSS','Node.js','JavaScript1','Git','CommandLine','Project','databases','curriculum','React','masterclass-react-redux'];
  console.log("Third repositary name is -------->>> " + hyfData[2].name);

  let listUl = document.querySelector('#ul-list');
  let containerProp = document.querySelector("#disp-properties");  

  for(let i = 0; i < hyfData.length; i++){
      let exist = moduleExisted(hyfData[i].name);
      if(exist){
        displayContent(hyfData[i]); 
      }
  }

function moduleExisted(moduleName){
    for(i = 0; i < curriculumModules.length; i++){
        if(moduleName == curriculumModules[i]){
            return true;
        }
    }
}
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
  containerProp.appendChild(moduleProp);

}
}