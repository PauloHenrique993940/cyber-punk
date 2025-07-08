import "../styles/Footer.css";

const curretYeans = new Date();
const anos = curretYeans.getFullYear();
const autor = "Paulo Henrique";
const email = "paulohenriqueferreirafranca2@gmail.com";

function Footer() {
  return (
    <footer className="cyber-footer">
      <div className="footer-links">
        <div className="footer-column">
          <h3>Empresa</h3>
          <a href="#">Sobre Nós</a>
          <a href="#">Carreiras</a>
          <a href="#">Imprensa</a>
        </div>
        <div className="footer-column">
          <h3>Suporte</h3>
          <a href="#">Ajuda</a>
          <a href="#">FAQs</a>
          <a href="#">Contato</a>
        </div>
        <div className="footer-column">
          <h3>Legal</h3>
          <a href="#">Termos de Uso</a>
          <a href="#">Política de Privacidade</a>
          <a href="#">Cookies</a>
        </div>
      </div>
      <p className="copyright">&copy; <span>{anos}</span> CyberPunk. Todos os direitos reservados.</p>
      <p>Email: {email}</p>
      <p>{autor}</p>
    </footer>
  );
}

export default Footer;
