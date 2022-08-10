import { Link } from "react-router-dom";
import home from "../imagenes/home.png"
import "../css/global.css"

export default function Footer() {
    return <div>
      <Link to="/">
              <button className="btn-homeF"><img src={home} alt="logo casa"  height ="40" width="80" ></img></button>
            </Link>
    </div>
  }