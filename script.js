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
    // Handle photo upload
    photoInput.addEventListener('change', function () {
        var _a;
        var file = (_a = photoInput.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            var reader_1 = new FileReader();
            reader_1.onload = function () {
                photoPreview.src = reader_1.result;
            };
            reader_1.readAsDataURL(file);
        }
    });
    // Validate name
    function validateName(name) {
        var nameRegex = /^[A-Za-z]{1,10}$/;
        return nameRegex.test(name);
    }
    // Handle form submission
    resumeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var formData = new FormData(resumeForm);
        var name = formData.get('name');
        if (!validateName(name)) {
            alert('Name must be alphabetic and up to 10 characters long.');
            return;
        }
        // Form Data
        var fullName = document.getElementById('name').value;
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
        // Display Resume Data
        resumeName.textContent = fullName;
        resumeEmail.textContent = email;
        resumePhone.textContent = phone;
        resumeAddress.textContent = address;
        jobTitleElement.textContent = jobTitle;
        companyElement.textContent = company;
        durationElement.textContent = duration;
        descriptionElement.textContent = description;
        degreeElement.textContent = degree;
        institutionElement.textContent = institution;
        yearElement.textContent = year;
        programmingLanguagesElement.textContent = 'Programming Languages: ' + programmingLanguages;
        otherLanguagesElement.textContent = 'Other Languages: ' + otherLanguages;
        resumePage.classList.remove('hidden'); // Show the resume page
    });
    resumePage.style.display = 'block';
})();
