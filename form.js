var _a;
//listing element
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    // type asserations for resume form submission
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experieneceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && phoneElement && educationElement && experieneceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experieneceElement.value;
        var skills = skillsElement.value;
        //creat resume output
        var resumeOutput = "\n   <h2>Resume</h2>\n   <p><strong> Name:</strong> ".concat(email, "</p>\n   <p><strong>Email:</strong> ").concat(email, "</p>\n   <p><strong>Phone Number:</strong> ").concat(phone, "</p>\n\n   <h3>Education</h3>\n   <p>").concat(education, "</p>\n\n   <h3>Experience</h3>\n   <p>").concat(experience, "</p>\n\n   <h3>Skills</h3>\n   <p>").concat(skills, "</p>");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            alert('Error: Resume Output Element not found');
        }
    }
});
