
import { useNavigate } from "react-router-dom";
import style from "./NotFoundPage.module.css";
import error from "../../assets/NotFound/404.jpg";
import { Link } from "react-router-dom"
 
 
function NotFoundPage() {
  const navigate = useNavigate();
 
  return (
    <div className={style.notFoundPage}>
      <div>
        <img src={error} alt="404" />
      </div>
      <h2>Page Not Found</h2>
      <p>
        We&#10076;re sorry, the page you requested could not be found. Please go
        back to the homepage.
      </p>

      <Link to={'/'}>
        <button className="Go home"></button>
      </Link>
    </div>
  );
}
 
export default NotFoundPage;
 