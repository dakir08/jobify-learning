import { Link } from "react-router-dom";
import main from "../assets/images/main.svg";
import { LandingPage } from "../components/wrappers/LandingPage";
import { Logo } from "../components/wrappers/Logo";

export const Landing = () => {
  return (
    <LandingPage>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* Info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby kogi pop-up bicycle rights food truck tonx, deep v craft
            beer hell of adaptogen prism trust fund ugh pok pok crucifix.
            Flannel chillwave woke master cleanse ascot before they sold out
            dreamcatcher stumptown taxidermy. Chia meh fashion axe thundercats,
            gentrify tofu next level chillwave. Sustainable praxis blue bottle
            knausgaard DSA literally.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </LandingPage>
  );
};
