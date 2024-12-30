(function () {
  // Helper to get elements with proper type casting
  function getElement<T extends HTMLElement>(id: string): T {
    const element = document.getElementById(id) as T;
    if (!element) throw new Error(`Element with id '${id}' not found`);
    return element;
  }

  const resumeForm = getElement<HTMLFormElement>('resume-form');
  const resumePage = getElement<HTMLDivElement>('resume-page');
  const resumeName = getElement<HTMLHeadingElement>('resume-name');
  const resumeEmail = getElement<HTMLSpanElement>('resume-email');
  const resumePhone = getElement<HTMLSpanElement>('resume-phone');
  const resumeAddress = getElement<HTMLSpanElement>('resume-address');
  const photoInput = getElement<HTMLInputElement>('photo');
  const photoPreview = getElement<HTMLImageElement>('resume-photo');

  const jobTitleElement = getElement<HTMLSpanElement>('resume-job-title');
  const companyElement = getElement<HTMLSpanElement>('resume-company');
  const durationElement = getElement<HTMLSpanElement>('resume-duration');
  const descriptionElement = getElement<HTMLSpanElement>('resume-description');

  const degreeElement = getElement<HTMLSpanElement>('resume-degree');
  const institutionElement = getElement<HTMLSpanElement>('resume-institution');
  const yearElement = getElement<HTMLSpanElement>('resume-year');

  const programmingLanguagesElement = getElement<HTMLSpanElement>('resume-programming-languages');
  const otherLanguagesElement = getElement<HTMLSpanElement>('resume-other-languages');

  // Function to handle input changes
  function updateResume() {
    const name = (getElement<HTMLInputElement>('name') as HTMLInputElement).value;
    const email = getElement<HTMLInputElement>('email').value;
    const phone = getElement<HTMLInputElement>('phone').value;
    const address = getElement<HTMLInputElement>('address').value;
    const photoFile = photoInput.files?.[0];

    const jobTitle = getElement<HTMLInputElement>('job-title').value;
    const company = getElement<HTMLInputElement>('company').value;
    const duration = getElement<HTMLInputElement>('duration').value;
    const description = getElement<HTMLTextAreaElement>('description').value;

    const degree = getElement<HTMLInputElement>('degree').value;
    const institution = getElement<HTMLInputElement>('institution').value;
    const year = getElement<HTMLInputElement>('year').value;

    const programmingLanguages = getElement<HTMLInputElement>('programming-languages').value;
    const otherSkills = getElement<HTMLInputElement>('other-languages').value;

    // Update Resume
    resumeName.textContent = name;
    resumeEmail.textContent = email;
    resumePhone.textContent = phone;
    resumeAddress.textContent = address;

    // Display photo preview
    if (photoFile) {
      const reader = new FileReader();
      reader.onload = function (e) {
        photoPreview.src = e.target?.result as string;
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
