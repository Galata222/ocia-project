import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import "../style/styles.css";
import "../style/animate.css";
import "../style/mklib.css";
// s

function Partiners() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const containerRef = useRef(null);

  const fetchImages = async () => {
    const response = await axios.get(`https://api.unsplash.com/photos/random?client_id=STtygF8ZotScGoZ45elaYTI84M9CrwqAFVahrPULkeQ&count=5`);
    setImages(prevImages => [...prevImages, ...response.data]);
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = containerRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 5) {
        setPage(prevPage => prevPage + 1);
      }
    }
  };

  return (
    <div>
      <section className="section-sm section-light">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div
                className="clients d-lg-flex text-center overflow-auto"
                ref={containerRef}
                onScroll={handleScroll}
                style={{ whiteSpace: 'nowrap', overflowX: 'auto' }}
              >
                {images.map((image) => (
                  <div key={image.id} className="brand-item animated fadeInLeft wow" data-wow-delay=".1s">
                    <a href="#"><img alt={image.alt_description} src={image.urls.small} className="img-fluid" /></a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Partiners;