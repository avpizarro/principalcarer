import React from 'react';
import FileUpload from "../FileUpload";
import ExpandButton from "../ExpandButton";
import "./style.css";

function Home({ children, showHome, ExpandComponent, CloseComponent })
{
  if (!showHome)
  {
    return (
      <div className="home" id="home">
        <div
          className="columns is-container is-centered is-mobile is-multiline"
          style={{ margin: "auto", marginTop: "3px", width: "90%" }}
        >
          <div
            className="column is-12 has-text-weight-bolds"
            style={{ color: "black", textAlign: "center" }}
          >
            <div>
              <div>Home</div>
            </div>
          </div>
        </div>
        <ExpandButton ExpandComponent={ExpandComponent} />
      </div>
    );
  }

  return (
    <div className="home" id="home">
      <div
        className="columns is-container is-centered is-mobile is-multiline"
        style={{ margin: "auto", marginTop: "3px" }}
      >
        <div
          className="column is-12 has-text-weight-bolds"
          style={{ color: "black", textAlign: "center" }}
        >
          <div>
            <div>Home</div>
            <FileUpload />
            {children}
          </div>
        </div>
      </div>
      <ExpandButton CloseComponent={CloseComponent} Expand={showHome} />
    </div>
  );
}

export default Home;
