import { React, useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form, Icon } from "react-bulma-components";
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { register } from '../../features/auth/authSlice';

const SignUpForm = () =>
{
  const [formData, setFormData] = useState({
    name: "",
    relationship: "",
    email: "",
    password: "",
  })

  const { name, relationship, email, password } = formData;

  const dispatch = useDispatch();

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() =>
  {
    if (isError)
    {
      toast.error(message);
    }
  // }, [isError]);
  }, []);

  const onChange = (e) =>
  {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log("formData:", formData);
  }

  const onSubmit = (e) =>
  {
    e.preventDefault();
    const userData = {
      name,
      relationship,
      email,
      password
    }
    dispatch(register(userData));
  }

  if (isSuccess || user) 
  {
    return (
      <div style={{ color: "white" }} className="has-text-centered">
        <span className="mt-0 is-size-4">
          Welcome {user.name}! 😊
        </span>
      </div>
    )
  } else
  {

    return (
      <form
        className="is-container columns is-centered"
        style={{ margin: "20px", zIndex: "1000" }}
      >
        <div className="column is-8">
          <Form.Label size="medium">
            <span

              style={{ color: "#FA47C5", textAlign: "center" }}
            >
              Sign Up to accompany Nina:
            </span>
          </Form.Label>
          <Form.Field>
            <Form.Control>
              <Form.Input
                type="text"
                id="name"
                name="name"
                value={name}
                placeholder="Enter your name"
                onChange={onChange}
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
                <Form.Select id="relationship" type="text" name="relationship" value={relationship} onChange={onChange}>
                  <option value="select-dropdown">
                    What is your relationship to Nina?
                  </option>
                  <option value="Family">Family</option>
                  <option value="Friend">Friend</option>
                  <option value="Carer">Carer</option>
                  {/* </select> */}
                </Form.Select>
              </Form.Control>
            </Form.Field>
          </Form.Field>
          <Form.Field>
            <Form.Control>
              <Form.Input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                onChange={onChange}
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
                type="password"
                id="password"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={onChange}
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
              <Button className="button" onClick={onSubmit}>
                Sign Up
              </Button>
            </Form.Control>
          </Form.Field>
        </div>
      </form>
    );
  }
}

export default SignUpForm;
