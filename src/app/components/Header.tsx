
import "../styles/Header.css"

function Header() {
    return (
        <header className="cyberpunk-header">
            <h5 className="logo">Cyber.Game</h5>
            <nav className="nav-links">
                <a href="#">Universo</a>
                <a href="#">Cidade</a>
                <a href="#">Batalhas</a>
                <a href="#">Contactos</a>
            </nav>
            <button className="cta-button">Get Started Free</button>
        </header>
    );
}

export default Header;
