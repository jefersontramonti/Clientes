import Logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={Logo} alt="DSMeta"/>
                <h1>JST</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.linkedin.com/in/jeferson-tramonti-38a221182/"> @JefersonTramonti</a>
                </p>
            </div>
        </header>
    );
}

export default Header;