  const resumeForm: HTMLFormElement = document.getElementById('resume-form') as HTMLFormElement;
  //for resume page
  const resumePage: HTMLDivElement = document.getElementById('resume-page') as HTMLDivElement;
  const resumeContent: HTMLDivElement = document.getElementById('resume-content') as HTMLDivElement;
  const resumeName: HTMLHeadingElement = document.getElementById('resume-name') as HTMLHeadingElement;
  const resumeEmail: HTMLParagraphElement = document.getElementById('resume-email') as HTMLParagraphElement;
  const resumePhone: HTMLParagraphElement = document.getElementById('resume-phone') as HTMLParagraphElement;
  const resumeAddress: HTMLParagraphElement = document.getElementById('resume-address') as HTMLParagraphElement;
  const jobTitleElement: HTMLParagraphElement = document.getElementById('job-title') as HTMLParagraphElement;
  const companyElement: HTMLParagraphElement = document.getElementById('company') as HTMLParagraphElement;
  const durationElement: HTMLParagraphElement = document.getElementById('duration') as HTMLParagraphElement;
  const descriptionElement: HTMLParagraphElement = document.getElementById('description') as HTMLParagraphElement;
  const educationElement: HTMLParagraphElement = document.getElementById('resume-edu') as HTMLParagraphElement;
  const degreeElement: HTMLParagraphElement = document.getElementById('dgree') as HTMLParagraphElement;
  const institutionElement: HTMLParagraphElement = document.getElementById('institution') as HTMLParagraphElement;
  const yearElement: HTMLParagraphElement = document.getElementById('year') as HTMLParagraphElement;
  const programmingLanguagesElement: HTMLParagraphElement = document.getElementById('programming-lan') as HTMLParagraphElement;
  const otherLanguagesElement: HTMLParagraphElement = document.getElementById('other-lan') as HTMLParagraphElement;

  // for submit button
  if(resumeForm && resumePage){
    resumeForm.addEventListener('submit', (e: Event) => {
      e.preventDefault();

    // for form data
    const name = (document.getElementById('name') as HTMLInputElement).value;
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
    yearElement.textContent =year;
    programmingLanguagesElement.textContent = 'Programming Languages: ' + programmingLanguages;
    otherLanguagesElement.textContent = 'Other Languages: ' +otherLanguages;
    resumePage.classList.remove('hidden');  //for remove previous data
  });
} else {
  console.error('Form and/or output element not found');
}
