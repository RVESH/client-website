import {
  Search,
  ShoppingBag,
} from "lucide-react";

import {
  NavLink,
  useNavigate,
} from "react-router-dom";

import { useCart } from "../../context/CartContext";
import { site } from "../../data/site";

import "./Header.scss";

const links = [
  {
    label: "Home",
    to: "/",
    end: true,
  },
  {
    label: "Shop",
    to: "/shop",
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
  const { cartCount } =
    useCart();

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
          aria-label="Primary"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="store-header__actions">

          <button
            type="button"
            aria-label="Search products"
            onClick={() =>
              navigate("/shop")
            }
          >
            <Search
              size={18}
              strokeWidth={1.7}
            />
          </button>

          <button
            type="button"
            aria-label="Shopping cart"
            onClick={() =>
              navigate("/cart")
            }
          >
            <ShoppingBag
              size={18}
              strokeWidth={1.7}
            />

            {cartCount > 0 && (
              <span>
                {cartCount}
              </span>
            )}
          </button>

        </div>
      </div>
    </header>
  );
}