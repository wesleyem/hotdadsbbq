import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faGhost } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-light py-5">
      <div className="container px-4 px-lg-5">
        <div className="small text-center text-muted">
          Copyright &copy; 2023 - Hot Dads BBQ |
          <FontAwesomeIcon icon={faCode} />
          &nbsp;with&nbsp;
          <FontAwesomeIcon icon={faGhost} />
          &nbsp;by&nbsp;
          <a href="https://github.com/wesleyem">@wesleyem</a>
        </div>
      </div>
    </footer>
  );
}
