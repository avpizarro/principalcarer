import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form, Icon } from "react-bulma-components";

function LoginForm(props) {

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
              value={props.username}
              onChange={props.setUsername}
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
              value={props.password}
              onChange={props.setPassword}
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
            <Button ClassName="button is-success" onClick={props.SignUpSubmit}>Login</Button>
          </Form.Control>
        </Form.Field>
      </div>
    </div>
  );
}

export default LoginForm;
