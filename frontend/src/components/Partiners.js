import React from 'react'
import osfna from "../Images/partiners/OSFNA.png"
import brand01 from "../Images/partiners/brand_01.png"
import brand02 from "../Images/partiners/brand_02.png"
import brand03 from "../Images/partiners/brand_03.png"
import brand04 from "../Images/partiners/brand_04.png"
import brand05 from "../Images/partiners/brand_05.png"
import "../style/styles.css"
import "../style/animate.css"
import "../style/mklib.css"
function Partiners() {
  return (
   <div>
  <section className="section-sm section-light">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="clients d-lg-flex text-center">
            <div className="brand-item animated fadeInLeft wow" data-wow-delay=".1s">
              <a href="#"><img alt="01 brand" src={osfna} className="img-fluid" /></a>
            </div>
            <div className="brand-item animated fadeInLeft wow" data-wow-delay=".2s">
              <a href="#"><img alt="02 brand" src={brand01} className="img-fluid" /></a>
            </div>
            <div className="brand-item animated fadeInLeft wow" data-wow-delay=".3s">
              <a href="#"><img alt="03 brand" src={brand02} className="img-fluid" /></a>
            </div>
            <div className="brand-item animated fadeInLeft wow" data-wow-delay=".4s">
              <a href="#"><img alt="04 brand" src={brand03} className="img-fluid" /></a>
            </div>
            <div className="brand-item animated fadeInLeft wow" data-wow-delay=".5s">
              <a href="#"><img alt="05 brand" src={brand04} className="img-fluid" /></a>
            </div>
            <div className="brand-item animated fadeInLeft wow" data-wow-delay=".6s">
              <a href="#"><img alt="06 brand" src={brand05} className="img-fluid" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default Partiners