import React from 'react'
import "../style/styles.css"
import "../style/animate.css"
import "../style/mklib.css"
import profile1 from "../Images/founder/profile.jpg"
import profile2 from "../Images/founder/profile2.jpg"
import profile3 from "../Images/founder/profile3.jpg"
  function About() {
  return (
  <div>
    <section className="page-hero bg-custom-dark">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <div className="home-wrapper">
              <h1 className="text-white fw-bold f-36 animated fadeInDown wow" data-wow-delay=".1s">About Us</h1>
              <h6 className="text-white animated fadeInDown wow" data-wow-delay=".3s">About OCIA project</h6>
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
            <p className="sub-title animated fadeInDown wow" data-wow-delay=".3s">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 
                 to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially 
                 unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
                 publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
                  <img src={profile1} alt="team-member" className="img-fluid " />
                  <h4 className="mt-4 pt-1">Galata Waqwaya</h4>
                  <p className="mb-2">Backend-Developer</p>
                  <ul className="list-inline social-list">
                    <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f" /></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fab fa-twitter" /></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fab fa-instagram" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="team-member text-center animated fadeInDown wow" data-wow-delay=".5s">
                  <img src={profile1} alt="team-member" className="img-fluid " />
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
  )
  }
  export default About
