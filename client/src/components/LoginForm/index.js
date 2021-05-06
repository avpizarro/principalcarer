import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form, Icon } from "react-bulma-components";

function LoginForm({ username, password, changeUsername, changePassword, loginSubmit}) {

  return (
    <div
      className="is-container columns is-centered"
      style={{ margin: "20px", zIndex: "1000" }}
    >
      <div className="column is-8">
        <Form.Label size="medium">
          <span style={{ color: "#FA47C5" }}>Welcome</span>
        </Form.Label>
        <Form.Field>
          <Form.Control>
            <Form.Input
              placeholder="Username"
              value={username}
              onChange={changeUsername}
            />
            <Icon align="left" size="small">
              <FontAwesomeIcon icon="user" />
            </Icon>
            <Icon align="right" size="small">
              <FontAwesomeIcon icon="check" />
            </Icon>
          </Form.Control>
        </Form.Field>

        <Form.Field>
          <Form.Control>
            <Form.Input
              placeholder="Password"
              value={password}
              onChange={changePassword}
            />
            <Icon align="left" size="small">
              <FontAwesomeIcon icon="lock" />
            </Icon>
            <Icon align="right" size="small">
              <FontAwesomeIcon icon="check" />
            </Icon>
          </Form.Control>
        </Form.Field>

        <Form.Field>
          <Form.Control>
            <Button className="button" onClick={loginSubmit}>Login</Button>
          </Form.Control>
        </Form.Field>
      </div>
    </div>
  );
}

export default LoginForm;
