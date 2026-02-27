import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Companies.css"
const Companies = () => {
       const navigate = useNavigate();

  const companies = [
  { name: "Google", role: "Software Engineer", location: "Bangalore", applyLink: "https://careers.google.com/" },
  { name: "Amazon", role: "Frontend Developer", location: "Hyderabad", applyLink: "https://www.amazon.jobs/" },
  { name: "Infosys", role: "Full Stack Trainee", location: "Chennai", applyLink: "https://www.infosys.com/careers/"  },
  { name: "TCS", role: "Graduate Engineer", location: "Mumbai", applyLink: "https://careers.tcs.com/" },
  { name: "Wipro", role: "React Developer Intern", location: "Pune", applyLink:"https://careers.wipro.com/" },
  { name: "Zomato", role: "Backend Developer", location: "Bangalore", applyLink:  "https://www.zomato.com/careers"},
  { name: "Swiggy", role: "Data Engineer", location: "Bangalore", applyLink: "https://careers.swiggy.com/" },
  { name: "Freshworks", role: "Frontend Developer", location: "Chennai", applyLink: "https://www.freshworks.com/company/careers"  },
  { name: "Razorpay", role: "Software Engineer Intern", location: "Bangalore", applyLink: "https://razorpay.com/jobs/"  },
  { name: "Byju's", role: "Full Stack Developer", location: "Bangalore", applyLink: "https://byjus.com/careers/" },
  { name: "Ola Electric", role: "Embedded Systems Engineer", location: "Pune", applyLink: "https://www.olacabs.com/careers" },
  { name: "Unacademy", role: "React Developer", location: "Bangalore", applyLink: "https://unacademy.com/careers" },
  { name: "Cure.fit", role: "Mobile App Developer", location: "Bangalore", applyLink: "https://www.cure.fit/careers" },
  { name: "Dream11", role: "Backend Developer", location: "Mumbai", applyLink: "https://www.dream11.com/careers" },
  { name: "Meesho", role: "Frontend Developer Intern", location: "Bangalore", applyLink: "https://meesho.io/careers"  },
  { name: "Urban Company", role: "Software Engineer", location: "Delhi", applyLink: "https://careers.urbancompany.com/"},
  { name: "DailyHunt", role: "Full Stack Developer", location: "Noida", applyLink: "https://www.dailyhunt.in/careers" },
  { name: "Postman", role: "QA Engineer", location: "Bangalore", applyLink: "https://www.postman.com/company/careers/"  },
  { name: "Microsoft", role: "Cloud Engineer", location: "Hyderabad", applyLink:"https://careers.microsoft.com/" },
  { name: "Adobe", role: "Frontend Developer", location: "Noida", applyLink: "https://careers.adobe.com/"},
  { name: "Flipkart", role: "Full Stack Developer", location: "Bangalore", applyLink: "https://www.flipkartcareers.com/"  },
  { name: "Paytm", role: "Software Engineer", location: "Noida", applyLink:  "https://paytm.com/careers/" },
  { name: "PhonePe", role: "Mobile Developer", location: "Bangalore", applyLink: "https://www.phonepe.com/careers"  },
  { name: "Intuit", role: "Frontend Developer", location: "Pune", applyLink: "https://careers.intuit.com/"   },
  { name: "Capgemini", role: "Graduate Engineer Trainee", location: "Mumbai", applyLink: "https://www.capgemini.com/careers/" },
  { name: "Goldman Sachs", role: "Backend Developer", location: "Bangalore", applyLink: "https://www.goldmansachs.com/careers/" },
  { name: "Uber", role: "React Native Developer", location: "Bangalore", applyLink: "https://www.uber.com/careers/" },
  { name: "LinkedIn", role: "Frontend Engineer", location: "Bangalore", applyLink: "https://careers.linkedin.com/"   },
  { name: "CoinDCX", role: "Blockchain Developer", location: "Mumbai", applyLink: "https://careers.coindcx.com/"},
  { name: "CRED", role: "React Developer", location: "Bangalore", applyLink: "https://careers.cred.club/" },
];


  return (
    <div className="companies-container">
      <h1>Hiring Companies</h1>

      <div className="companies-grid">
        {companies.map((c, index) => (
          <div key={index} className="company-card">
            <h2>{c.name}</h2>
            <p><strong>Role:</strong> {c.role}</p>
            <p><strong>Location:</strong> {c.location}</p>

            <button onClick={() => window.open(c.applyLink, "_blank")}>Apply Now</button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
