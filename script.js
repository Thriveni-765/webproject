// Filter hospitals based on user search
function filterHospitals() {
    let input = document.getElementById("searchHospital").value.toLowerCase();
    let list = document.getElementById("hospitalList").getElementsByTagName("li");
    
    for (let i = 0; i < list.length; i++) {
        let hospital = list[i].innerText.toLowerCase();
        list[i].style.display = hospital.includes(input) ? "" : "none";
    }
}

// Handle doctor consultation form submission
document.getElementById("consultForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let issue = document.getElementById("issue").value;

    if (name && phone && issue) {
        document.getElementById("formMessage").innerText = "Your request has been submitted!";
        document.getElementById("consultForm").reset();
    } else {
        document.getElementById("formMessage").innerText = "Please fill out all fields.";
    }
});
