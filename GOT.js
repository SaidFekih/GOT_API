
class Actor {
    constructor(id,family,firstName,fullName,image,imageUrl,lastName,title) {
        this.id = id;
        this.family=family
        this.firstName=firstName
        this.fullName=fullName
        this.image=image
        this.imageUrl=imageUrl
        this.lastName=lastName
        this.title=title
    }
}

var data;
var actorsList;
var dropList;

const myTimeout = setTimeout(start, 100);

// Load and fill the data when we start 
async function  start() {

    //Fetch data from https://thronesapi.com/api/v2/Characters
    var fetchResult = await fetch('https://thronesapi.com/api/v2/Characters')
    data = await fetchResult.json()

    //Insert Image 
    document.querySelector('#img-GOT').src = data[0].imageUrl 

    //Fill the dropdownList
    var actorsList = data
    dropList = document.getElementById("actorData");
    console.log(actorsList)
    actorsList.forEach((item)=>{
        let Identite = new Actor(item)
        Identite.id=item.id
        Identite.firstName=item.firstName
        console.log(Identite) 
        let option = document.createElement("option");
        option.innerText = Identite.firstName;
        dropList.appendChild(option);    
    })
}

//Display the selected actor
function display() {
    var index = document.getElementById("actorData").selectedIndex;
    document.querySelector('#img-GOT').src = data[index].imageUrl 
    document.getElementById("firstName").innerHTML = data[index].firstName;
    document.getElementById("lastName").innerHTML = data[index].lastName;
    document.getElementById("fullName").innerHTML = data[index].fullName;
    document.getElementById("image").innerHTML = data[index].image;
    document.getElementById("title").innerHTML = data[index].title;
    document.getElementById("family").innerHTML = data[index].fullName;


 }

 /*document.querySelector('#fetch-dog').addEventListener('click',async()=>{
    var fetchResult = await fetch('https://random.dog/woof.json')
    var data2 = await fetchResult.json()
    document.querySelector('#img-dog').src = data2.url 
})
*/