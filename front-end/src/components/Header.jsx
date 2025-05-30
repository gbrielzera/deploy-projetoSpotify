import logoSpotify from "../assets/logo/spotify-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logoSpotify} alt="Logo do Spotify" />
      </Link>

      <Link to="/" className="header__link">
        <h1>Lavignefy</h1>
      </Link>
    </div>
  );
};

export default Header;
