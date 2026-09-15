import { useState } from "react";
import ImageOpenButton from "../../tools/ImageOpenButton";

function ProjectShowcase({images, desc, summary, isAvailable, url=""}) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <section className="project-details">
      <div className="project-gallery">
        <div className="project-main-image-wrapper">
          <ImageOpenButton
            src={selectedImage}
            alt="Kiválasztott projektkép előnézete"
            caption="Projektkép"
          >
            <img
              src={selectedImage}
              alt="Kiválasztott projektkép előnézete"
              className="project-main-image"
              loading="lazy"
            />
          </ImageOpenButton>
        </div>

        <div className="project-thumbnails">
          {images.map((image, index) => (
            <button
              key={image}
              className={
                selectedImage === image
                  ? "project-thumbnail active"
                  : "project-thumbnail"
              }
              onClick={() => setSelectedImage(image)}
              aria-label={`Projektkép ${index + 1} megjelenítése`}
            >
              <img
                src={image}
                alt={`Projekt előnézet ${index + 1}`}
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      <article className="project-description">
        <h2>A projektről</h2>

        {desc.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
        ))}

        <h3>Összefoglalva</h3>

        <ul className="project-summary">
          {summary.map((bullet_point, index) => (
           <li key={index}>{bullet_point}</li>
          ))}
        </ul>

        <div className="project-actions">
          {isAvailable 
          ?
            <a href={url} className="project-button" target="_blank" rel="noopener noreferrer">
              Munka megtekintése
            </a>
            :
            <span className="project-button project-button-disabled" aria-disabled="true">
              Folyamatban
            </span>
          }
          <a href="/portfolio" className="project-button">
            Vissza a projektekhez
          </a>
        </div>
      </article>
    </section>
  );
}

export default ProjectShowcase;
