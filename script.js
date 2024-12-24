var _a;
(_a = document.getElementById("buildResume")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    if (!name || !email || !phone || !experience || !skills) {
        alert("Please fill out all fields!");
        return;
    }
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        experience: experience,
        skills: skills,
    };
    displayEditableResume(resumeData);
});
function displayEditableResume(data) {
    var _a;
    var resumeOutput = document.getElementById("resumeOutput");
    if (!resumeOutput)
        return;
    resumeOutput.innerHTML = "\n        <h2>Your Resume</h2>\n        <label><strong>Name:</strong></label>\n        <input type=\"text\" id=\"editName\" value=\"".concat(data.name, "\">\n        <br>\n        <label><strong>Email:</strong></label>\n        <input type=\"email\" id=\"editEmail\" value=\"").concat(data.email, "\">\n        <br>\n        <label><strong>Phone:</strong></label>\n        <input type=\"tel\" id=\"editPhone\" value=\"").concat(data.phone, "\">\n        <br>\n        <h3>Experience</h3>\n        <textarea id=\"editExperience\" rows=\"4\">").concat(data.experience, "</textarea>\n        <br>\n        <h3>Skills</h3>\n        <textarea id=\"editSkills\" rows=\"4\">").concat(data.skills, "</textarea>\n        <br>\n        <button id=\"saveResume\">Save Changes</button>\n    ");
    (_a = document.getElementById("saveResume")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", saveEditedResume);
}
function saveEditedResume() {
    var name = document.getElementById("editName").value;
    var email = document.getElementById("editEmail").value;
    var phone = document.getElementById("editPhone").value;
    var experience = document.getElementById("editExperience").value;
    var skills = document.getElementById("editSkills").value;
    var updatedData = {
        name: name,
        email: email,
        phone: phone,
        experience: experience,
        skills: skills,
    };
    alert("Resume updated successfully!");
    displayEditableResume(updatedData);
}
