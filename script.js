(function () {
    // Helper to get elements with proper type casting
    function getElement(id) {
        var element = document.getElementById(id);
        if (!element)
            throw new Error("Element with id '".concat(id, "' not found"));
        return element;
    }
    var resumeForm = getElement('resume-form');
    var resumePage = getElement('resume-page');
    var resumeName = getElement('resume-name');
    var resumeEmail = getElement('resume-email');
    var resumePhone = getElement('resume-phone');
    var resumeAddress = getElement('resume-address');
    var photoInput = getElement('photo');
    var photoPreview = getElement('resume-photo');
    var jobTitleElement = getElement('resume-job-title');
    var companyElement = getElement('resume-company');
    var durationElement = getElement('resume-duration');
    var descriptionElement = getElement('resume-description');
    var degreeElement = getElement('resume-degree');
    var institutionElement = getElement('resume-institution');
    var yearElement = getElement('resume-year');
    var programmingLanguagesElement = getElement('resume-programming-languages');
    var otherLanguagesElement = getElement('resume-other-languages');
    // Function to handle input changes
    function updateResume() {
        var _a;
        var name = getElement('name').value;
        var email = getElement('email').value;
        var phone = getElement('phone').value;
        var address = getElement('address').value;
        var photoFile = (_a = photoInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var jobTitle = getElement('job-title').value;
        var company = getElement('company').value;
        var duration = getElement('duration').value;
        var description = getElement('description').value;
        var degree = getElement('degree').value;
        var institution = getElement('institution').value;
        var year = getElement('year').value;
        var programmingLanguages = getElement('programming-languages').value;
        var otherSkills = getElement('other-languages').value;
        // Update Resume
        resumeName.textContent = name;
        resumeEmail.textContent = email;
        resumePhone.textContent = phone;
        resumeAddress.textContent = address;
        // Display photo preview
        if (photoFile) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                photoPreview.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            };
            reader.readAsDataURL(photoFile);
        }
        jobTitleElement.textContent = jobTitle;
        companyElement.textContent = company;
        durationElement.textContent = duration;
        descriptionElement.textContent = description;
        degreeElement.textContent = degree;
        institutionElement.textContent = institution;
        yearElement.textContent = year;
        programmingLanguagesElement.textContent = programmingLanguages;
        otherLanguagesElement.textContent = otherSkills;
        // Show resume page
        resumePage.classList.remove('hidden');
    }
    // Attach event listeners to input fields
    resumeForm.addEventListener('input', updateResume);
})();
