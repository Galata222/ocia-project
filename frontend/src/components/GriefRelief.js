import React from 'react'
import "../style/styles.css"
import "../style/animate.css"
import "../style/mklib.css"
import griefrelief from "../Images/griefRelief/flower.webp"

function GriefRelief() {
  return (
    <div> 
  <section className="section" id="features">
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className="feature-1">
            <img src={griefrelief} className="img-fluid" alt="features-img" />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="feature-detail">
            <h1 className="title f-36 animated fadeInRight wow" data-wow-delay=".1s">let's collaborate</h1>
            <h4 className="f-18 animated fadeInRight wow" data-wow-delay=".3s">Quunceen wal gargaartee arba hitii</h4>
            <p className="features-txt animated fadeInRight wow" data-wow-delay=".5s">Dantes remained confused and silent by this explanation of the thoughts which had unconsciously been working in his mind, or rather soul; for there are two distinct sorts of ideas, those that proceed from the head and those from the heart.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default GriefRelief