



document.getElementById('postJobBtn').addEventListener('click', function (e) {
    e.preventDefault(); 
    document.getElementById('jobPostSection').style.display = 'block'; 
  });

  // document.getElementById('jobPostForm').addEventListener('submit', async function(event) {
  //   event.preventDefault();

  //   const jobData = {
  //             title: document.getElementById('jobTitle').value,
  //             shortDescription: document.getElementById('jobShortDescription').value,
  //             skills: document.getElementById('jobSkills').value,
  //             gender: document.getElementById('jobGender').value,
  //             country: document.getElementById('jobCountry').value,
  //             state: document.getElementById('jobState').value,
  //             city: document.getElementById('jobCity').value,
  //             careerLevel: document.getElementById('careerLevel').value,
  //             salaryFrom: document.getElementById('salaryFrom').value,
  //             salaryTo: document.getElementById('salaryTo').value,
  //             salaryCurrency: document.getElementById('salaryCurrency').value,
  //             salaryPeriod: document.getElementById('salaryPeriod').value,
  //             jobType: document.getElementById('jobType').value,
  //             jobShift: document.getElementById('jobShift').value,
  //             position: document.getElementById('jobPosition').value,
  //             expiryDate: document.getElementById('jobExpiry').value,
  //             experience: document.getElementById('requiredExperience').value,
  //             degree: document.getElementById('requiredDegree').value,
  //             benefits: document.getElementById('jobBenefits').value,
  //             fullDescription: document.getElementById('jobFullDescription').value,
  //         };

  //         console.log('Form Data:', jobData);
      
  //         // Display in HTML
  //         const outputDiv = document.getElementById('output');
  //         outputDiv.innerHTML = `
  //           <h3>Job Data Submitted:</h3>
  //           <p><strong>Job Title:</strong> ${jobData.title}</p>
  //           <p><strong>Job Description:</strong> ${jobData.shortDescription}</p>
  //           <p><strong>Job Skills:</strong> ${jobData. skills}</p>
  //           <p><strong>Gender:</strong> ${jobData.gender}</p>
  //           <p><strong>Country:</strong> ${jobData. country}</p>
  //           <p><strong>State:</strong> ${jobData.state}</p>
  //           <p><strong>City:</strong> ${jobData.city}</p>
  //           <p><strong>Career Level:</strong> ${jobData.careerLevel}</p>
  //           <p><strong>Salary From:</strong> ${jobData.salaryFrom}</p>
  //           <p><strong>Salary To:</strong> ${jobData.salaryTo}</p>
  //           <p><strong>Salary Currency:</strong> ${jobData. salaryCurrency}</p>
  //           <p><strong>Salary period:</strong> ${jobData.salaryPeriod}</p>
  //           <p><strong>Job Type:</strong> ${jobData.jobType}</p>
  //           <p><strong>Job Shift:</strong> ${jobData.jobShift}</p>
  //           <p><strong>Position:</strong> ${jobData.position}</p>
  //           <p><strong>Job Expiry Date:</strong> ${jobData.expiryDate}</p>
  //           <p><strong>Required Job Experience:</strong> ${jobData.experience}</p>
  //           <p><strong>Required Degree Level:</strong> ${jobData.degree}</p>
  //           <p><strong>Job benefits:</strong> ${jobData.benefits}</p>
  //           <p><strong>job description:</strong> ${jobData.fullDescription}</p>
            
  //                `;
      
          
  //         document.getElementById('detail.html').reset();

  document.getElementById('jobPostForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const jobData = {
      title: document.getElementById('jobTitle').value,
      shortDescription: document.getElementById('jobShortDescription').value,
      skills: document.getElementById('jobSkills').value,
      gender: document.getElementById('jobGender').value,
      country: document.getElementById('jobCountry').value,
      state: document.getElementById('jobState').value,
      city: document.getElementById('jobCity').value,
      careerLevel: document.getElementById('careerLevel').value,
      salaryFrom: document.getElementById('salaryFrom').value,
      salaryTo: document.getElementById('salaryTo').value,
      salaryCurrency: document.getElementById('salaryCurrency').value,
      salaryPeriod: document.getElementById('salaryPeriod').value,
      jobType: document.getElementById('jobType').value,
      jobShift: document.getElementById('jobShift').value,
      position: document.getElementById('jobPosition').value,
      expiryDate: document.getElementById('jobExpiry').value,
      experience: document.getElementById('requiredExperience').value,
      degree: document.getElementById('requiredDegree').value,
      benefits: document.getElementById('jobBenefits').value,
      fullDescription: document.getElementById('jobFullDescription').value
    };
  
    // Save to localStorage
    localStorage.setItem('jobData', JSON.stringify(jobData));
  
    // Redirect to job-details.html
    window.location.href = 'detail.html';
  
  });
 