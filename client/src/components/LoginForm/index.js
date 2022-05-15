import { React, useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { Button, Form, Icon } from "react-bulma-components";
import { toast } from 'react-toastify';
import { login, reset } from '../../features/auth/authSlice';

const LoginForm = () =>
{
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const { email, password } = formData;

  const dispatch = useDispatch();

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() =>
  {
    if (isError)
    {
      toast.error(message);
    }
    dispatch(reset());
  }, [isError]);

  const onChange = (e) =>
  {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) =>
  {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

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
                type="email"
                id="email"
                placeholder="Enter your email"
                name="email"
                value={email}
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
                name="password"
                placeholder="Enter your password"
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
              <Button className="button" onClick={onSubmit}>Login</Button>
            </Form.Control>
          </Form.Field>
        </div>
      </div>
    );
  }
}

export default LoginForm;
