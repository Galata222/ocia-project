import React from 'react';
import frecomputer from "../Images/free-computer.jpg"
import frelang from "../Images/free-language.jpg"
import frecv from "../Images/free-cv.jpg"
import "../style/customblue.css"
const servicesData = [
  {
    title: "Computer Training for All Ages",
    description: "In Person and Online sessions available.",
    image: frecomputer
  },
  {
    title: "Language Training",
    description: "Enhance your language skills with our tailored programs.",
    image: frelang
  },
  {
    title: "CV Preparation Training",
    description: "Learn how to create an attractive CV that stands out.",
    image: frecv
  }
];

function FREEService() {
  return (
    <div className="custom-blue py-5">
      <div className="container">
        <h2 className="text-center text-white mb-4">Free Service</h2>
        <div className="row">
          {servicesData.map((service, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card text-center shadow-sm">
                <img src={service.image} alt={service.title} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title text-dark">{service.title}</h5>
                  <p className="text-dark">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FREEService;