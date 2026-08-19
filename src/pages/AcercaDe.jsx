import './PageShared.css';
import './AcercaDe.css';

function AcercaDe() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="page-hero__tag">Acerca de</span>
          <h1>
            Pensamos <span className="text-gradient">diferente</span>,
            <br />
            por eso hacemos diferente
          </h1>
          <p className="page-hero__lead">
            Somos expertos en mkt digital desde lo más recóndito de Tlaxcala,
            cuna de la nación.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section acerca-intro">
        <div className="container">
          <p className="acerca-intro__texto">
            Somos especialistas en Marketing Digital. No prometemos viralidad mágica —
            prometemos entender tu negocio mejor que nadie y hacerlo notar.
          </p>
        </div>
      </section>

      {/* NUESTRO SUEÑO */}
      <section className="section acerca-bloque acerca-bloque--sueno">
        <div className="container acerca-bloque__inner">
          <span className="acerca-bloque__label">Nuestro sueño</span>
          <blockquote className="acerca-bloque__frase">
            "Que un día una marca originaria de un lugar de magueyes, pulque,
            duraznos y salterios en el oriente del estado de Tlaxcala sea
            recomendada en todos lados — y digan:{' '}
            <span className="text-gradient">'eso se nota que lo hizo Atípica'</span>."
          </blockquote>
        </div>
      </section>

      {/* NUESTRO OBJETIVO */}
      <section className="section acerca-bloque acerca-bloque--objetivo">
        <div className="container acerca-bloque__inner">
          <span className="acerca-bloque__label">Nuestro objetivo</span>
          <blockquote className="acerca-bloque__frase acerca-bloque__frase--grande">
            "Que nadie termine de trabajar con nosotros."
          </blockquote>
        </div>
      </section>
    </div>
  );
}

export default AcercaDe;
