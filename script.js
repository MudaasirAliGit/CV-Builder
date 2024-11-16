document.getElementById("createResume").onclick = function() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var objective = document.getElementById("objective").value;
    var degree = document.getElementById("degree").value;
    var institution = document.getElementById("institution").value;
    var year = document.getElementById("year").value;
    var grade = document.getElementById("grade").value;
    var jobTitle = document.getElementById("jobTitle").value;
    var company = document.getElementById("company").value;
    var duration = document.getElementById("duration").value;
    var jobDescription = document.getElementById("jobDescription").value;
    var skills = document.getElementById("skills").value;

    var resumeHTML = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <h3>Career Objective</h3>
        <p>${objective}</p>
        <h3>Education</h3>
        <p><strong>Degree:</strong> ${degree}</p>
        <p><strong>Institution:</strong> ${institution}</p>
        <p><strong>Year of Completion:</strong> ${year}</p>
        <p><strong>Grade:</strong> ${grade}</p>
        <h3>Work Experience</h3>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Duration:</strong> ${duration}</p>
        <p>${jobDescription}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    var resumeOutput = document.getElementById("resumeOutput");
    resumeOutput.innerHTML = resumeHTML;
    resumeOutput.style.display = "block";
};
