import React from 'react';
import '../style/donate.css'
import "../style/customblue.css"

const Donate = ({ paymentLink }) => {
  const handleDonateClick = () => {
    window.open(paymentLink, '_blank'); 
  };

  return (
    <div className="container-fluid my-0.5 custom-blue text-white p-4"> 
      <section className="text-center  mb-5">
        <h1 className="display-4">Donate to Make a Difference</h1>
        <p className="lead">
          Your support is crucial for us to continue our mission. By donating, you help GOSA reach more people and make a positive impact in our community.
        </p>
      </section>

      <section className="text-center mb-5 ">
        <h2>Why Do You Donate?</h2>
        <div className="row ">
          {[
            'Support Community Programs',
            'Help Those in Need',
            'Promote Education',
            'Assist Local Businesses',
            'Create Lasting Change',
          ].map((item, index) => (
            <div className="col-md-4 mb-4  " key={index}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front bg-custom-dark">
                    <h3>{item}</h3>
                  </div>
                  <div className="flip-card-back bg-custom-dark">
                    <p>Learn more about how your donation helps!</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Donate Button Section */}
      <section className="text-center">
        <button className="btn btn-lg btn-primary" onClick={handleDonateClick}>
          Donate Now
        </button>
      </section>
    </div>
  );
};

export default Donate;