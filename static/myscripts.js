const projectButton = document.getElementById("projectsButton");
const mainImage = document.getElementById("me");
const mainImageDiv = document.getElementById("mainImageDiv");
const myText = document.getElementById("myText");
const slidersDiv = document.getElementById("sliders");
const sliders = document.getElementsByClassName("slider");
const contactsDiv = document.getElementById("contactButtons");
const switchButtons = document.getElementById("switchButtons");
const projectImgDiv = document.getElementById("projectImgDiv");
const projectTextDiv = document.getElementById("projectTextDiv");
const slidersAmount = document.getElementsByClassName("slider").length;
const projectImg = document.getElementById("projectImg");

const images = ["../assets/py.png", "../assets/camera.gif", "../assets/empty.png"];
const descriptions = ["Work in progress", "A face tracking camera using 2 9g servos, a 3D printed support, and an Arduino Uno. The main difference in this project compared to others I've found is the use of a PID controller algorithm to make it more stable. ", "Work in progress"];

var currentProject = 1;
var buttonActive = true;
var message = "Latest Projects";

projectButton.addEventListener("transitionend", () => {
    projectButton.innerHTML = message;
});

function showProject(index)
{
    projectTextDiv.innerHTML = descriptions[index];
    projectImg.src = images[index];
}

function switchProject(direction)
{
    currentProject += direction;
    if (currentProject < 0)
        currentProject += slidersAmount;
    else if (currentProject >= slidersAmount)
        currentProject -= slidersAmount;
    
    selectProject(sliders[currentProject]);
}

function selectProject(button)
{

    for (var i = 0; i < sliders.length; i++) {
        if (sliders[i] == button)
        {
            button.style.backgroundColor = "#E4366C";
            currentProject = i;
            showProject(i);
        }
        else
            sliders[i].style.backgroundColor = "#34323C";
    }
}

function showProjects()
{
    message = "X";
    projectButton.innerHTML = "";
    projectButton.style.transition = "0.2s";
    projectButton.style.width = "8vh";
    projectButton.style.borderRadius = "50%";
    projectButton.style.padding = "0";

    myText.style.display = "none";
    mainImageDiv.style.display = "none";
    contactsDiv.style.display = "none";
    switchButtons.style.display = "flex";
    projectImgDiv.style.display = "flex";
    projectTextDiv.style.display = "flex";
    slidersDiv.style.visibility = "visible";

    selectProject(sliders[currentProject]);
}

function showMe()
{
    message = "Latest Projects"
    projectButton.innerHTML = "";
    projectButton.style.transition = "0.2s";
    projectButton.style.width = "35vh";
    projectButton.style.borderRadius = "2vh";
    projectButton.style.padding = "0";

    myText.style.display = "block";
    mainImageDiv.style.display = "block";
    contactsDiv.style.display = "flex";
    switchButtons.style.display = "none";
    projectImgDiv.style.display = "none";
    projectTextDiv.style.display = "none";
    slidersDiv.style.visibility = "hidden";
}

function changeButton()
{  
    if (buttonActive)
    {
        showProjects();
        buttonActive = false;
    }
    else
    {
        showMe();
        buttonActive = true;
    }
}

