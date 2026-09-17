
import { categories } from "../../data/categories";
import { FaAngleRight } from "react-icons/fa";
import ImageOpenButton from "../../tools/ImageOpenButton";

function Projects() {
  return (
    <>
      <h2>Munkák, amik mögött valódi tanulási folyamat van</h2>
      <p>
        A portfólióban olyan projekteket gyűjtöttem össze, amelyek oktatáshoz, programozáshoz, tanulásmódszertanhoz, kutatáshoz és vizuális szakmai anyagokhoz kapcsolódnak.
      </p>
      <div className="categories-grid">
        {categories.map((category) => (
          <article className="category" key={category.id}>
            <div className="category-header">
                <span className="category-count">0{category.id}</span>
                <div className="category-header-text">
                    <h3>{category.name}</h3>
                    <p>{category.desc}</p>
                </div>
            </div>

            <div className="projects-grid">
              {category.projects.map((project) => (
                <article className="project" key={project.title}>
                  <ImageOpenButton
                    src={project.thumbnail}
                    fullSrc={project.image || project.thumbnail}
                    alt={project.alt}
                    caption={project.title}
                  >
                    <img
                      src={project.thumbnail}
                      alt={project.alt}
                      className="project-image thumb"
                      loading="lazy"
                    />
                  </ImageOpenButton>
                  <h4>{project.title}</h4>
                  <p>{project.desc}</p>
                  <a className="project-btn" href={project.href}>
                    <span>Részletek</span>
                    <FaAngleRight aria-hidden="true" focusable="false" />
                  </a>
                </article>
              ))}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export default Projects;
