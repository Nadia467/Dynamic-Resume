(function() {
  // Helper to get elements with proper type casting
  function getElement<T extends HTMLElement>(id: string): T {
    const element = document.getElementById(id) as T;
    if (!element) throw new Error(`Element with id '${id}' not found`);
    return element;
  }

  const resumeForm = getElement<HTMLFormElement>('resume-form');
  const resumePage = getElement<HTMLDivElement>('resume-page');
  const resumeName = getElement<HTMLHeadingElement>('resume-name');
  const resumeEmail = getElement<HTMLParagraphElement>('resume-email');
  const resumePhone = getElement<HTMLParagraphElement>('resume-phone');
  const resumeAddress = getElement<HTMLParagraphElement>('resume-address');
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

  // Handle photo upload
  photoInput.addEventListener('change', () => {
    const file = photoInput.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        photoPreview.src = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  });

  // Validate name
  function validateName(name: string): boolean {
    const nameRegex = /^[A-Za-z]{1,10}$/;
    return nameRegex.test(name);
  }

  // Handle form submission
  resumeForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(resumeForm);
    const name = formData.get('name') as string;

    if (!validateName(name)) {
      alert('Name must be alphabetic and up to 10 characters long.');
      return;
    }

    // Form Data
    const fullName = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const jobTitle = (document.getElementById('job-title') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const duration = (document.getElementById('duration') as HTMLInputElement).value;
    const description = (document.getElementById('description') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const institution = (document.getElementById('institution') as HTMLInputElement).value;
    const year = (document.getElementById('year') as HTMLInputElement).value;
    const programmingLanguages = (document.getElementById('programming-languages') as HTMLInputElement).value;
    const otherLanguages = (document.getElementById('other-languages') as HTMLInputElement).value;
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