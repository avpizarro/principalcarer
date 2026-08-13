/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from '../../features/auth/authSlice';
import { FaSignOutAlt } from 'react-icons/fa';
import Brand from "../../images/brand.png";
import ThemeToggle from "../ThemeToggle";


const Navbar = (props) =>
{
  const dispatch = useDispatch();

  const { user } = useSelector(
    (state) => state.auth
  )

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
  }

  if (props.mobileNavigation)
  {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="dropdown navigation"
      >
        <a className="navbar-item">
          <img src={Brand} alt="Logo" />
        </a>

        <div className="navbar-item has-dropdown is-active" style={{ color: "var(--color-text)" }}
        >
          <a className="navbar-link" onClick={props.closeMobileNavigation}         style={{ color: "var(--color-text)" }}
>Menu</a>

          <div className="navbar-dropdown is-boxed">
            <div className="navbar-item">
              <ThemeToggle />
            </div>
            {!user ?
            <div className="navbar-item">
              <div className="buttons">
                <a className="button" onClick={props.showSignUpForm} style={{ color: "var(--color-text)" }}
                >
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light" onClick={props.showLoginForm}>
                  Log in
                </a>
              </div>
            </div> :
            <div className="navbar-item">
            <div className="buttons">
              <a className="button btn-logout" onClick={onLogout}
              >
                <FaSignOutAlt style={{margin:"8px"}}/> Logout
              </a>
            </div>
          </div>
            }
            <a className="navbar-item" style={{ color: "var(--color-text)" }}
            >Documents</a>
            <a className="navbar-item" style={{ color: "var(--color-text)" }}
            >About</a>
            <a className="navbar-item" style={{ color: "var(--color-text)" }}
            >Jobs</a>
            <a className="navbar-item" style={{ color: "var(--color-text)" }}
            >Contact</a>
            <hr className="navbar-divider"></hr>
            <a className="navbar-item" style={{ color: "var(--color-text)" }}
            >Report an issue</a>
          </div>
        </div>
      </nav>
    );
  } else
  {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src={Brand} alt="Logo" />
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="true"
            data-target="navbarBasicExample"
            onClick={props.showMobileNavigation}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">Home</a>

            <a className="navbar-item">Documents</a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Jobs</a>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider"></hr>
                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
          <div className="navbar-item">
            <ThemeToggle />
          </div>
          {!user ?
            <div className="navbar-item">
              <div className="buttons">
                <a className="button" onClick={props.showSignUpForm} style={{ color: "var(--color-text)" }}
                >
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light" onClick={props.showLoginForm}>
                  Log in
                </a>
              </div>
            </div> : 
            <div className="navbar-item">
            <div className="buttons">
              <a className="button btn-logout" onClick={onLogout}
              >
                <FaSignOutAlt style={{margin:"8px"}}/> Logout
              </a>
            </div>
          </div>
            }
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
