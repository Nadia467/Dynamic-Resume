var resumeForm = document.getElementById('resume-form');
//for resume page
var resumePage = document.getElementById('resume-page');
var resumeContent = document.getElementById('resume-content');
var resumeName = document.getElementById('resume-name');
var resumeEmail = document.getElementById('resume-email');
var resumePhone = document.getElementById('resume-phone');
var resumeAddress = document.getElementById('resume-address');
var jobTitleElement = document.getElementById('job-title');
var companyElement = document.getElementById('company');
var durationElement = document.getElementById('duration');
var descriptionElement = document.getElementById('description');
var educationElement = document.getElementById('resume-edu');
var degreeElement = document.getElementById('dgree');
var institutionElement = document.getElementById('institution');
var yearElement = document.getElementById('year');
var programmingLanguagesElement = document.getElementById('programming-lan');
var otherLanguagesElement = document.getElementById('other-lan');
// for submit button
if (resumeForm && resumePage) {
    resumeForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // for form data
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var address = document.getElementById('address').value;
        var jobTitle = document.getElementById('job-title').value;
        var company = document.getElementById('company').value;
        var duration = document.getElementById('duration').value;
        var description = document.getElementById('description').value;
        var degree = document.getElementById('degree').value;
        var institution = document.getElementById('institution').value;
        var year = document.getElementById('year').value;
        var programmingLanguages = document.getElementById('programming-languages').value;
        var otherLanguages = document.getElementById('other-languages').value;
        // Name validation: 10 characters max, alphabets only
        if (!/^[A-Za-z]{1,10}$/.test(name)) {
            alert('Name must be alphabetic and up to 10 characters long.');
            return;
        }
        //combine data 
        resumeName.textContent = name;
        resumeEmail.textContent = email;
        resumePhone.textContent = phone;
        resumeAddress.textContent = address;
        jobTitleElement.textContent = jobTitle;
        companyElement.textContent = company;
        durationElement.textContent = duration;
        descriptionElement.textContent = description;
        educationElement.textContent = 'Education:';
        degreeElement.textContent = degree;
        institutionElement.textContent = institution;
        yearElement.textContent = year;
        programmingLanguagesElement.textContent = 'Programming Languages: ' + programmingLanguages;
        otherLanguagesElement.textContent = 'Other Languages: ' + otherLanguages;
        resumePage.classList.remove('hidden'); //for remove previous data
    });
}
else {
    console.error('Form and/or output element not found');
}
