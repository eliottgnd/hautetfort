import '../styles/Quote.css';

const Quote = () => {
  return (
    <section className="quote-section">
      <figure className="quote-container">
        <svg className="quote-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 14">
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
        </svg>
        <blockquote className="quote-text">
          <p className="quote-content">"On naît poète, on devient orateur"</p>
        </blockquote>
        <figcaption className="quote-author">
          <img className="author-image" src="/assets/images/Ciceron.jpg" alt="Ciceron" />
          <div className="author-info">
            <cite className="author-name">CICERON</cite>
            <cite className="author-title">Homme d'État & Philosophe Romain</cite>
          </div>
        </figcaption>
      </figure>
    </section>
  );
};

export default Quote; 