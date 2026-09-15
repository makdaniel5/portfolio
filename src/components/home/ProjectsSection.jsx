
import { Link } from "react-router-dom";
import { projects } from "../../data/projects.js";
import { FaAngleRight } from "react-icons/fa";
import ImageOpenButton from "../../tools/ImageOpenButton";

function ProjectsSection() {
    return (
            <section className="projects" aria-label="Projektjeim">
                <h2>Projektjeim</h2>
                <div className="projects-grid">
                    {projects.slice(0, 6).map((project, index) => (
                        <article
                            className="project"
                            key={index}
                        >
                            <ImageOpenButton
                                src={project.thumbnail}
                                fullSrc={project.image || project.thumbnail}
                                alt={project.alt}
                                caption={project.title}
                                aria-label={`${project.title} kép nagyítása`}
                            >
                                <img 
                                    src={project.thumbnail}
                                    alt={project.alt}
                                    className="project-image thumb"
                                    loading="lazy"
                                />
                            </ImageOpenButton>
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                            <a className="project-btn" href={project.href}>
                                <span>Részletek</span>
                                <FaAngleRight aria-hidden="true" focusable="false" />
                            </a>
                        </article>
                    ))}
                </div>
                <div className="projects-cta">
                    <Link className="projects-cta-button" to="/portfolio">További munkáim</Link>
                </div>
            </section>
    );
}

export default ProjectsSection;
