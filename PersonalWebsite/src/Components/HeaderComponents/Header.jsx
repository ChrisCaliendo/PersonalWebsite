import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", pathway: "/" },
  { name: "Skills", pathway: "/skills" },
  { name: "Experience", pathway: "/experience" },
  { name: "Projects", pathway: "/projects" },
  { name: "Contact", pathway: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <Link className="site-brand" to="/">
          <span className="site-brand-name">
            <span>Christian</span>
            <span>Caliendo</span>
          </span>
        </Link>

        <button
          className="site-menu-toggle"
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="site-navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? (
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
              <path
                d="m6 6 12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>

        <ul
          className={`site-nav-links${isOpen ? " is-open" : ""}`}
          id="site-navigation"
        >
          {navigation.map(({ name, pathway }) => (
            <li key={pathway}>
              <Link
                className="site-nav-link"
                to={pathway}
                aria-current={location.pathname === pathway ? "page" : undefined}
                onClick={() => setIsOpen(false)}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
