import { Link } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React MeetUps</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All MeetUps</Link>
          </li>
          <li>
            <Link to="/new">New MeetUps</Link>
          </li>
          <li>
            <Link to="/favorite">Favorite MeetUps</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
