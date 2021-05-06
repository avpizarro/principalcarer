import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form, Icon } from "react-bulma-components";

function SignUpForm({ fullName, relationship, username, password, changeFullName, changeRelationship, changeUsername, changePassword, signUpSubmit}) {

  return (
    <form
      className="is-container columns is-centered"
      style={{ margin: "20px", zIndex: "1000"}}
    >
      <div className="column is-8">
        <Form.Label size="medium">
          <span
            className="ml-6"
            style={{ color: "#FA47C5", textAlign: "justify" }}
          >
            Sign Up to accompany Nina:
          </span>
        </Form.Label>
        <Form.Field>
          <Form.Control>
            <Form.Input
              placeholder="Username"
              value={fullName}
              onChange={changeFullName}
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
          <Form.Field kind="group">
            <Form.Control>
              <Form.Select
                value={relationship}
                onChange={changeRelationship}
              >
                <option value="select-dropdown">
                  What is your relationship to Nina?
                </option>
                <option value="with-options">Family</option>
                <option value="with-options">Friend</option>
                <option value="with-options">Carer</option>
              </Form.Select>
            </Form.Control>
          </Form.Field>
        </Form.Field>
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
            <Button className="button" onClick={signUpSubmit}>Sign Up</Button>
          </Form.Control>
        </Form.Field>
      </div>
    </form>
  );
}

export default SignUpForm;
