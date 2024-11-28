import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import fullstack from "../Images/fullstack.jpg";
import webdev from "../Images/webdev.webp";
import customsoftware from "../Images/CSD.jpeg";
import techinical from "../Images/Techinical.jpeg";
import saas from "../Images/Saas.jpeg";
import graphics from "../Images/graphics.jpg";
import presentation from "../Images/presentational.jpg";
import training from "../Images/training.jpg";
import tutorial from "../Images/tutorial.jpg";
import '../style/service.css';
import "../style/customblue.css"

const servicesData = [
  {
    title: "Web Development",
    description: "Build websites, especially for small businesses or personal brands.",
    image: webdev},
  {
    title: "Full-Stack Development",
    description: "Offer comprehensive services from frontend to backend, including API and database management.",
    image: fullstack
  },
  {
    title: "Custom Software Development",
    description: "Build custom applications for clients needing unique solutions.",
    image: customsoftware
  },
  {
    title: "Technical Support and Troubleshooting",
    description: "Help clients with tech issues, software installations, and debugging.",
    image: techinical
  },
  {
    title: "SaaS Development Consultation",
    description: "Assist companies in developing Software-as-a-Service products.",
    image: saas
  },
  {
    title: "Logo and Branding Design",
    description: "Create logos, brand kits, and style guides for businesses.",
    image: graphics
  },
  {
    title: "Presentation Design",
    description: "Design professional slides for presentations, events, and training sessions.",
    image: presentation
  },
  {
    title: "IT and Software Training",
    description: "Teach programming, web development, and software usage through webinars or one-on-one sessions.",
    image: training
  },
  {
    title: "Graphics and Design Tutorials",
    description: "Provide training on Photoshop, Illustrator, or other design tools.",
    image: tutorial
  }
];

const ServicesList = () => {
    return (
      <div className="custom-blue py-5">
        <div >
          <h2 className="text-center mb-4">Other Services</h2>
          
          <h3 className="text-center mb-3">IT and Software Development Services</h3>
          <div className="row">
            {servicesData.slice(0, 5).map((service, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card shadow-sm">
                  <img src={service.image} className="card-img-top" alt={service.title} />
                  <div className="card-body">
                    <h5 className="card-title text-dark">{service.title}</h5>
                    <p className="card-text">{service.description}</p>
                    <a href="/" className="btn btn-primary">More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          <h3 className="text-center mb-3">Graphic Design and Digital Art Services</h3>
          <div className="row">
            {servicesData.slice(5, 7).map((service, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card shadow-sm">
                  <img src={service.image} className="card-img-top " alt={service.title} />
                  <div className="card-body">
                    <h5 className="card-title text-dark">{service.title}</h5>
                    <p className="card-text">{service.description}</p>
                    <a href="#" className="btn btn-primary">More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          <h3 className="text-center mb-3">Consultation and Training Services</h3>
          <div className="row">
            {servicesData.slice(7).map((service, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card shadow-sm">
                  <img src={service.image} className="card-img-top" alt={service.title} />
                  <div className="card-body">
                    <h5 className="card-title text-dark">{service.title}</h5>
                    <p className="card-text">{service.description}</p>
                    <a href="#" className="btn btn-primary">More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ServicesList;