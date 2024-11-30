import { Link } from "react-router-dom";
import "./button.css";

function Button() {
  return (
    <Link to={"/contact"} className="button button--pandora">
      <span>Let&apos;s talk</span>
    </Link>
  );
}

export default Button;
