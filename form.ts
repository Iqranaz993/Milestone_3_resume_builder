//listing element
document.getElementById('resumeform')?.addEventListener('submit' , function(event){
    event?.preventDefault();

    // type asserations for resume form submission
const nameElement = document.getElementById('name') as HTMLInputElement;
const emailElement = document.getElementById('email') as HTMLInputElement;
const phoneElement = document.getElementById('phone') as HTMLInputElement;
const educationElement = document.getElementById('education') as HTMLInputElement;
const experieneceElement = document.getElementById('experience') as HTMLInputElement;
const skillsElement = document.getElementById('skills') as HTMLInputElement;

if (nameElement && emailElement && phoneElement && educationElement && experieneceElement && skillsElement){

    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experience = experieneceElement.value;
    const skills = skillsElement.value;

   //creat resume output
   const resumeOutput = `
   <h2>Resume</h2>
   <p><strong> Name:</strong> ${email}</p>
   <p><strong>Email:</strong> ${email}</p>
   <p><strong>Phone Number:</strong> ${phone}</p>

   <h3>Education</h3>
   <p>${education}</p>

   <h3>Experience</h3>
   <p>${experience}</p>

   <h3>Skills</h3>
   <p>${skills}</p>`;

   const resumeOutputElement = document.getElementById('resumeOutput');
   if (resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput;
   }else{
    alert('Error: Resume Output Element not found');
   }
}

});

