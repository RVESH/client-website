import { Search } from "lucide-react";
import {
  NavLink,
  useNavigate,
} from "react-router-dom";

import { site } from "../../data/site";

import "./Header.scss";

const links = [
  {
    label: "Home",
    to: "/",
    end: true,
  },
  {
    label: "Collection",
    to: "/collection",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="store-header">
      <div className="store-header__inner">
        <NavLink
          to="/"
          end
          className="store-header__brand"
        >
          {site.name}
        </NavLink>

   <nav
  className="store-header__nav"
  aria-label="Primary navigation"
>
  <NavLink to="/" end>
    Home
  </NavLink>

  <NavLink to="/collection">
    Collection
  </NavLink>

  <NavLink to="/about">
    About
  </NavLink>

  <NavLink to="/contact">
    Contact
  </NavLink>
</nav>

        <div className="store-header__actions">
          <button
            type="button"
            aria-label="Search products"
            onClick={() =>
              navigate("/collection")
            }
          >
            <Search
              size={18}
              strokeWidth={1.7}
            />
          </button>
        </div>
      </div>
    </header>
  );
}