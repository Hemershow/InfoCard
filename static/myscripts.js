const projectButton = document.getElementById("projectsButton");

var buttonActive = true;

function changeButton()
{  
    if (buttonActive)
    {
        projectButton.innerHTML = "X";
        projectButton.style.width = "8vh";
        projectButton.style.borderRadius = "50%";
        buttonActive = false;
    }
    else
    {
        projectButton.innerHTML = "Latest Projects";
        projectButton.style.width = "35vh";
        projectButton.style.borderRadius = "2vh";
        buttonActive = true;
    }
}