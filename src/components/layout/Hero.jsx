function Hero({title = "", desc = "", bgImg = "", isProject = false}) {
  return (
    isProject 
    ?
    <section aria-labelledby="hero-title" className="hero-project" style={{ "--hero-image": `url(${bgImg})` }}>
        <div className="hero-content-project">
          <h1 id="hero-title">{title}</h1>
          <p>{desc}</p>
        </div>
      </section>
      :
      <section aria-labelledby="hero-title" className="hero">
        <div className="hero-content">
          <h1 id="hero-title">
            {title.map((title, index) => (
                <span key={index}>
                  {title}<br />
                </span>
            ))}
          </h1>

          {desc && <p>{desc}</p>}
        </div>
      </section>
  );
}

export default Hero;