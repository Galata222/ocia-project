import React from 'react';
import "../style/styles.css";
import "../style/animate.css";
import "../style/mklib.css";
import griefrelief from "../Images/griefRelief/greatfamily.png";

function GriefRelief() {
  return (
    <div> 
      <section className="section" id="features">
        <div className="container">
          <div className="row align-items-center"> {/* Align items vertically */}
            <div className="col-sm-6">
              <div className="feature-1">
                <img src={griefrelief} className="img-fluid" alt="features-img" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="feature-detail">
                <h1 className="title f-36 animated fadeInRight wow" data-wow-delay=".1s">Warra Guddaa</h1>
                <h4 className="f-18 animated fadeInRight wow" data-wow-delay=".3s">Quunceen wal gargaartee arba hitii</h4>
                <p className="features-txt animated fadeInRight wow" data-wow-delay=".5s">
                  Gosa (Great Oromo Support Association) is a community initiative that helps newcomers through education and support during emergencies. Offering workshops and mentorship, Gosa builds collaboration and resilience among Oromo members. Its motto, "Qunceen Wal Gargaartee Arba Hiitii," means that even a single piece of cotton can tie an elephant together, highlighting the power of unity in overcoming challenges and making a positive impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GriefRelief;