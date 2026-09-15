
import { useState } from "react";
import { reviews } from "../../data/reviews.js";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function ReviewsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideCount = reviews.length + 1;
    const isCtaSlide = currentIndex === reviews.length;
    const activeReview = reviews[currentIndex];

    function nextSlide() {
        setCurrentIndex((currentIndex + 1) % slideCount);
    }

    function prevSlide() {
        setCurrentIndex((currentIndex - 1 + slideCount) % slideCount);
    }

    return (
        <section className="reviews" aria-label="Visszajelzesek">
                <h2>Visszajelzések</h2>
                <div className="review-track">
                    {!isCtaSlide ? (
                        <blockquote className="review-slide active">
                        <div className="review-person">
                            <span className="review-avatar">
                            {activeReview.name.charAt(0)}
                            </span>
                            <div>
                            <cite>{activeReview.name}</cite>
                            <span>{activeReview.type}</span>
                            </div>
                        </div>
                        <p>{activeReview.review}</p>
                        </blockquote>
                    ) : (
                        <div className="review-slide active">
                        <div className="review-cta">
                            <span className="review-cta-glow"></span>
                            <h3>További véleményeket olvasnál, vagy írnál véleményt?</h3>
                            <a
                                href="https://www.superprof.hu"
                                className="review-cta-btn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                            Superprof megnyitása
                            </a>
                        </div>
                        </div>
                    )}

                    <div className="review-controls">
                        <button className="review-prev" type="button" onClick={prevSlide} aria-label="Elozo velemeny">
                            <FaChevronLeft aria-hidden="true" focusable="false" />
                        </button>

                        <div className="review-dots">
                            {Array.from({ length: slideCount }).map((_, index) => (
                                <button
                                    key={index}
                                    className={`review-dot ${currentIndex === index ? "active" : ""}`}
                                    onClick={() => setCurrentIndex(index)}
                                    type="button"
                                    aria-label={`${index + 1}. velemeny megjelenitese`}
                                    aria-current={currentIndex === index ? "true" : undefined}
                                ></button>
                            ))}
                        </div>
                        
                        <button className="review-next" type="button" onClick={nextSlide} aria-label="Kovetkezo velemeny">
                            <FaChevronRight aria-hidden="true" focusable="false" />
                        </button>
                    </div>
                </div>
            </section>
    );
}

export default ReviewsCarousel;
