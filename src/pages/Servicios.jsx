import './PageShared.css';

const servicios = [
  { titulo: 'Marketing Digital',         emoji: '📈' },
  { titulo: 'Diseño Gráfico',            emoji: '🎨' },
  { titulo: 'Campañas con Meta Ads',     emoji: '🎯' },
  { titulo: 'Publicidad Impresa',        emoji: '🖨️' },
  { titulo: 'Marketing de Eventos',      emoji: '🎪' },
  { titulo: 'Branding',                  emoji: '✨' },
  { titulo: 'Producción Audiovisual',    emoji: '🎬' },
  { titulo: 'Redes Sociales',            emoji: '📱' },
  { titulo: 'Cursos',                    emoji: '🎓' },
  { titulo: 'IA',                        emoji: '🤖' },
  { titulo: 'SEO',                       emoji: '🔍' },
  { titulo: 'Desarrollo de Páginas Web', emoji: '💻' },
  { titulo: 'Invitaciones Digitales',    emoji: '💌' },
];

function Servicios() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="page-hero__tag">Servicios</span>
          <h1>
            Soluciones <span className="text-gradient">a tu medida</span>
          </h1>
          <p className="page-hero__lead">
            De la idea a la pantalla, del papel a la red.  Cubrimos todo lo que
            tu marca necesita para destacar.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cards-grid cards-grid--3">
            {servicios.map((s) => (
              <div className="service-card" key={s.titulo}>
                <div className="service-card__emoji">{s.emoji}</div>
                <h3>{s.titulo}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Servicios;
