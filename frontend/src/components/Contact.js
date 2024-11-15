import React from 'react'
import "../style/styles.css"
import "../style/animate.css"
import "../style/mklib.css"
import "../style/customblue.css"
function Contact() {
  return (
    <div>
          <div>
  <section className="page-hero custom-blue">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
          <div className="home-wrapper">
            <h1 className="text-white fw-bold f-36 animated fadeInDown wow" data-wow-delay=".1s">Contact Us</h1>
            <h6 className="text-white animated fadeInDown wow" data-wow-delay=".3s">Simply dummy text of the printing and type</h6>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="contact-form">
            <span id="error-msg" />
            <form method="post" name="myForm" onsubmit="return validateForm()">
              <div className="row animated fadeInDown wow" data-wow-delay=".5s">
                <div className="col-md-4">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input name="name" id="name" type="text" className="form-control" placeholder="Name" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input name="email" id="email" type="email" className="form-control" placeholder="Email" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input name="text" id="subject" type="text" className="form-control" placeholder="Subject" />
                  </div>
                </div>
              </div>
              <div className="row animated fadeInDown wow" data-wow-delay=".7s">
                <div className="col-12">
                  <div className="mb-4">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea name="comments" id="message" rows={4} className="form-control" placeholder="Message" defaultValue={""} />
                  </div>
                </div>
              </div>
              <div className="row justify-content-center animated fadeInDown wow" data-wow-delay=".9s">
                <div className="col-lg-8 text-center">
                  <p className="text-center con_sub_text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren.</p>
                  <input type="submit" id="submit" name="send" className="submitBnt btn btn-sm btn-primary" defaultValue="Submit" />
                </div>
              </div>
            </form>
          </div>
        </div> 
      </div> 
    </div>
  </section>
</div>

    </div>
  )
}

export default Contact