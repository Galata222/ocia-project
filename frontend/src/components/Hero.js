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
            <h2 className="text-white fw-bold f-36 mt-3 pb-2 animated fadeInDown wow" data-wow-delay=".1s">Welcome to the GOSA page</h2>
            <p className="text-white f-16 mb-5 mt-4 animated fadeInDown wow" data-wow-delay=".2s">Founded in June 2022 by Wabi Mulata Dinsa, Warra Guddaa (meaning “Great Family”) reflects a fundamental belief: a family is truly great when its members support one another, regardless of differences. The Oromo people, as one family, embody this spirit of unity.

Growing up, my family used the term Warra Guddaa to describe the ways families support one another. Curious about its true meaning, I once asked my father, “What makes a family Warra Guddaa?” His response has guided me in establishing GOSA—the Great Oromo Support Association—where we come together to support one another, just as we did in our village.

Want to learn more about how GOSA works? Register using the link below, and the GOSA Administrator will provide you with a detailed explanation..</p>
            <a href="/HowItWorks" className="btn btn-primary rounded-pill animated fadeInDown wow" data-wow-delay=".4s">How It Works</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default Hero