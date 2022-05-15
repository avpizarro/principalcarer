/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from '../../features/auth/authSlice';
import { FaSignOutAlt } from 'react-icons/fa';
import Brand from "../../images/brand.png";


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
        class="navbar is-transparent"
        role="navigation"
        aria-label="dropdown navigation"
      >
        <a class="navbar-item">
          <img src={Brand} alt="Logo" />
        </a>

        <div class="navbar-item has-dropdown is-active" style={{ color: "black" }}
        >
          <a class="navbar-link" onClick={props.closeMobileNavigation}         style={{ color: "black" }}
>Menu</a>

          <div class="navbar-dropdown is-boxed">
            {!user ? 
            <div className="navbar-item">
              <div className="buttons">
                <a className="button" onClick={props.showSignUpForm} style={{ color: "black" }}
                >
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light" onClick={props.showLoginForm} style={{ color: "black" }}>
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
            <a class="navbar-item" style={{ color: "black" }}
            >Documents</a>
            <a class="navbar-item" style={{ color: "black" }}
            >About</a>
            <a className="navbar-item" style={{ color: "black" }}
            >Jobs</a>
            <a className="navbar-item" style={{ color: "black" }}
            >Contact</a>
            <hr className="navbar-divider"></hr>
            <a className="navbar-item" style={{ color: "black" }}
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
          {!user ? 
            <div className="navbar-item">
              <div className="buttons">
                <a className="button" onClick={props.showSignUpForm} style={{ color: "black" }}
                >
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light" onClick={props.showLoginForm} style={{ color: "black" }}>
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
