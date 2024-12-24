interface ResumeData {
    name: string;
    email: string;
    phone: string;
    experience: string;
    skills: string;
}

document.getElementById("buildResume")?.addEventListener("click", () => {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

    if (!name || !email || !phone || !experience || !skills) {
        alert("Please fill out all fields!");
        return;
    }

    const resumeData: ResumeData = {
        name,
        email,
        phone,
        experience,
        skills,
    };

    displayEditableResume(resumeData);
});

function displayEditableResume(data: ResumeData): void {
    const resumeOutput = document.getElementById("resumeOutput");
    if (!resumeOutput) return;

    resumeOutput.innerHTML = `
        <h2>Your Resume</h2>
        <label><strong>Name:</strong></label>
        <input type="text" id="editName" value="${data.name}">
        <br>
        <label><strong>Email:</strong></label>
        <input type="email" id="editEmail" value="${data.email}">
        <br>
        <label><strong>Phone:</strong></label>
        <input type="tel" id="editPhone" value="${data.phone}">
        <br>
        <h3>Experience</h3>
        <textarea id="editExperience" rows="4">${data.experience}</textarea>
        <br>
        <h3>Skills</h3>
        <textarea id="editSkills" rows="4">${data.skills}</textarea>
        <br>
        <button id="saveResume">Save Changes</button>
    `;

    document.getElementById("saveResume")?.addEventListener("click", saveEditedResume);
}

function saveEditedResume(): void {
    const name = (document.getElementById("editName") as HTMLInputElement).value;
    const email = (document.getElementById("editEmail") as HTMLInputElement).value;
    const phone = (document.getElementById("editPhone") as HTMLInputElement).value;
    const experience = (document.getElementById("editExperience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("editSkills") as HTMLTextAreaElement).value;

    const updatedData: ResumeData = {
        name,
        email,
        phone,
        experience,
        skills,
    };

    alert("Resume updated successfully!");
    displayEditableResume(updatedData);
}
