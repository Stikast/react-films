function Header() {
  return (
    <nav className="deep-purple lighten-2">
      <div className="nav-wrapper">
        <p href="!#" className="brand-logo">
          Films
        </p>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/Stikast/react-films">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
