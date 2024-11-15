import React from 'react';
import "../style/styles.css";
import "../style/animate.css";
import "../style/mklib.css";
import profile1 from "../Images/founder/profile.jpg";
import "../style/customblue.css"

function About() {
  return (
    <div>
      <section className="page-hero custom-blue py-5"> {/* Adjusted padding */}
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <div className="home-wrapper">
                <h1 className="text-white  f-30 animated fadeInDown wow" data-wow-delay=".1s">Mission and Vision</h1>
                <h3 className="text-white  f-18 animated fadeInDown wow" data-wow-delay=".1s">Vision</h3>
                <h6 className="text-white animated fadeInDown wow" data-wow-delay=".3s">
                  To create a platform where every Oromo community can succeed and contribute to a more inclusive and prosperous society.
                </h6>
                <h2 className="text-white  f-18 animated fadeInDown wow" data-wow-delay=".1s">Mission</h2>
                <h6 className="text-white animated fadeInDown wow" data-wow-delay=".3s">
                  To provide our community with essential skills and certifications through free computer training, language proficiency courses, and job training programs (both online and in-person), thereby enhancing their job prospects and bridging the gap between talent and opportunity.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h1 className="title zoomIn animated wow" data-wow-delay=".1s">Our Story</h1>
              <span className="title-border" />
            </div> 
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10 text-center">
              <p className="sub-title animated fadeInDown wow text-dark equal-height" data-wow-delay=".3s">
                When I arrived in the USA in May 2022, I brought dreams, hopes, and ambitions, seeking a brighter future for me and my family. However, I encountered significant barriers, from language differences to unfamiliar job markets and skill gaps. This is where GOSA steps in, providing essential support and resources to turn those dreams into reality. I tried to get support from people around me, but unfortunately, I did not, as they were busy with their day-to-day lives. <br />
                Imagine Kenna, a young woman who recently moved to the U.S., eager to work and build a new life. Despite her determination, she struggles to find a job that matches her aspirations due to limited computer skills and language barriers. That’s when Kenna discovers GOSA. She enrolls in a free computer training program, improves her language skills through GOSA’s classes, and participates in hands-on job training. With her newfound skills and confidence, Kenna secures a job and begins to thrive in her career. <br />
                Through Kenna’s story, we see how GOSA bridges the gap between talent and opportunity. By offering free training and certification, GOSA empowers our immigrant community, like Kenna, to overcome obstacles, helping them integrate into the workforce with dignity and purpose. <br />
                With everyone we support, GOSA builds a stronger, more diverse American workforce—benefiting both our community and the nation. This is GOSA’s vision: a world where every Oromo community in the USA can succeed and contribute, creating a more inclusive and prosperous society together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h1 className="title zoomIn animated wow" data-wow-delay=".1s">Our People</h1>
              <span className="title-border" />
            </div> 
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-10">
              <div className="row team">
                <div className="col-md-4">
                  <div className="team-member text-center animated fadeInDown wow" data-wow-delay=".1s">
                    <img src={profile1} alt="team-member" className="img-fluid" />
                    <h4 className="mt-4 pt-1">Wabi Mulata</h4>
                    <p className="mb-2">Founder</p>
                    <ul className="list-inline social-list">
                      <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f" /></a></li>
                      <li className="list-inline-item"><a href="#"><i className="fab fa-twitter" /></a></li>
                      <li className="list-inline-item"><a href="#"><i className="fab fa-instagram" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="team-member text-center animated fadeInDown wow" data-wow-delay=".3s">
                    <img src={profile1} alt="team-member" className="img-fluid" />
                    <h4 className="mt-4 pt-1">Galata Waqwaya</h4>
                    <p className="mb-2">Backend Developer</p>
                    <ul className="list-inline social-list">
                      <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f" /></a></li>
                      <li className="list-inline-item"><a href="#"><i className="fab fa-twitter" /></a></li>
                      <li className="list-inline-item"><a href="#"><i className="fab fa-instagram" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="team-member text-center animated fadeInDown wow" data-wow-delay=".5s">
                    <img src={profile1} alt="team-member" className="img-fluid" />
                    <h4 className="mt-4 pt-1">Firaol Fikadu</h4>
                    <p className="mb-2">Frontend Developer</p>
                    <ul className="list-inline social-list">
                      <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f" /></a></li>
                      <li className="list-inline-item"><a href="#"><i className="fab fa-twitter" /></a></li>
                      <li className="list-inline-item"><a href="#"><i className="fab fa-instagram" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;