import React from 'react'
import "../style/styles.css"
import "../style/animate.css"
import "../style/mklib.css"
function Hero() {
  return (
    <div>
  <section className="hero bg-custom-dark">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-9 text-center">
          <div className="px-md-2">
            <h2 className="text-white fw-bold f-36 mt-3 pb-2 animated fadeInDown wow" data-wow-delay=".1s">Welcome to the OCIA page</h2>
            <p className="text-white f-16 mb-5 mt-4 animated fadeInDown wow" data-wow-delay=".2s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat arcu ut orci porta, 
                eget porttitor felis suscipit. Sed a nisl ullamcorper,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at magna non nunc tristique rhoncus. Aliquam nibh ante, 
                egestas id dictum a, commodo luctus libero. Praesent faucibus malesuada faucibus. Donec laoreet metus id laoreet malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Nullam consectetur orci sed nulla facilisis consequat. Curabitur vel lorem sit amet nulla ullamcorper fermentum. Sed eget odio in ligula ullamcorper commodo. Sed porttitor, felis eu 
                 sahre the same paragraph of lorem ipsum again. tempus augue at, rutrum lacus. Duis et turpis eros.</p>
            <a href="javascript:void(0);" className="btn btn-primary rounded-pill animated fadeInDown wow" data-wow-delay=".4s">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default Hero