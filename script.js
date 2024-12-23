document.getElementById('resume-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const jobTitle = document.getElementById('job-title').value;
    const company = document.getElementById('company').value;
    const duration = document.getElementById('duration').value;
    const description = document.getElementById('description').value;
    const degree = document.getElementById('degree').value;
    const institution = document.getElementById('institution').value;
    const year = document.getElementById('year').value;
    const programmingLanguages = document.getElementById('programming-languages').value;
    const otherLanguages = document.getElementById('other-languages').value;

    // Set resume content
    document.getElementById('resume-name').textContent = name;
    document.getElementById('resume-email').textContent = email;
    document.getElementById('resume-phone').textContent = phone;
    document.getElementById('resume-address').textContent = address;
    document.getElementById('resume-job-title').textContent = jobTitle;
    document.getElementById('resume-company').textContent = company;
    document.getElementById('resume-duration').textContent = duration;
    document.getElementById('resume-description').textContent = description;
    document.getElementById('resume-degree').textContent = degree;
    document.getElementById('resume-institution').textContent = institution;
    document.getElementById('resume-year').textContent = year;
    document.getElementById('resume-programming-languages').textContent = programmingLanguages;
    document.getElementById('resume-other-languages').textContent = otherLanguages;

    // Toggle visibility
    document.getElementById('resume-form').classList.add('hidden');
    document.getElementById('resume-page').classList.remove('hidden');
});
