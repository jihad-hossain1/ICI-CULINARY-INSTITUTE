import { Link } from "react-router-dom";
import logo from "../../assets/react.svg";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img
          src={logo}
          className="hidden md:block"
          width="100"
          height="100"
          alt=""
        />
      </Link>
    </div>
  );
};

export default Logo;
