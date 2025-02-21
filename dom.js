// Update title text
function updateTitle() {
    document.getElementById("title").innerHTML = "Valorant: Select Your Main Agent!";
}

// Toggle dark/light theme
function toggleTheme() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === "white" ? "#0f1923" : "white";
    document.body.style.color = document.body.style.color === "black" ? "white" : "black";
}

// Change agent image
function switchAgent() {
    let img = document.getElementById("agentImage");
    img.src = img.src.includes("phx.jpg") ? "raze.jpg" : "phx.jpg";
}

// Add dynamic text
function appendText() {
    let text = document.createTextNode("Valorant is a fast-paced tactical shooter!");
    document.getElementById("description").appendChild(text);
}

// Remove an element
function removeElement() {
    let element = document.getElementById("removable");
    if (element) {
        element.parentNode.removeChild(element);
    }
}

// jQuery functionalities
$(document).ready(function() {
    // Modify button text
    $("#btnChange").click(function() {
        $(this).text("Modified!");
    });

    // Change image alt attribute
    $("#addAlt").click(function() {
        $("#agentImage").attr("alt", "Updated Valorant Agent");
        alert("Alt text updated!");
    });

    // Form submission
    $("#agentForm").submit(function(event) {
        event.preventDefault();
        let name = $("#agentName").val();
        $("#output").text("Welcome, Agent " + name + "!");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.body.style.backgroundImage = "url('valt.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.color = "white"; // Ensures readability
});
