import '../styles/About.css';

const About = () => {
  const points = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="about-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      title: "Expression et Identité",
      description: "L'art oratoire comme moyen d'oser et d'assumer son identité face au regard de l'autre."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="about-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Compétences Clés",
      description: "Développement de l'audace, la créativité et l'esprit critique pour une communication impactante."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="about-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Accompagnement Personnalisé",
      description: "Un suivi adapté pour trouver les mots justes et la bonne posture dans chaque situation."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="about-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Impact et Conviction",
      description: "Développez votre capacité à convaincre et à avoir un impact réel dans vos interventions."
    }
  ];

  return (
    <section id="apropos" className="about-section">
      <div className="about-container">
        <h2 className="section-title">
          À propos
        </h2>
        
        <p className="about-description">
          L'association Haut & Fort a pour but d'aider chacun et chacune à exprimer ses idées, en transmettant les clés de compréhension logique et émotionnelle de l'autre.
        </p>

        <div className="about-points">
          {points.map((point, index) => (
            <div key={index} className="about-point">
              <div className="about-icon-container">
                {point.icon}
              </div>
              <div className="about-point-content">
                <h3 className="about-point-title">
                  {point.title}
                </h3>
                <p className="about-point-description">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 