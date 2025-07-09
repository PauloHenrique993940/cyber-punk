import "../styles/Testimonials.css";
function Testimonials() {
  const testemoldial = [
    {
      nome: "– Aiko, Hacker Freelance",
      relato: "Nunca experimentei nada tão imersivo. Parece que entrei em outra dimensão!"
    },
    {
      nome: " Zero, Engenheiro de Códigos",
      relato: "O futuro chegou. Implantes neurais e realidades paralelas em um só lugar"
    }
  ]
  return (
    <section className="testimonials-section">
      <h2>O que os usuários dizem</h2>
      <div className="testimonial">
        {testemoldial.map((item, index) => (
          <p key={index}>
            <span>{item.relato}</span>
            <strong>{item.nome}</strong>
          </p>
        ))}
        
      </div>
      
    </section>
  );
}

export default Testimonials;
