
import { useNavigate } from "react-router-dom";
import style from "./NotFoundPage.module.css";
import error from "../../assets/NotFound/404.jpg";
 
 
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
    </div>
  );
}
 
export default NotFoundPage;
 