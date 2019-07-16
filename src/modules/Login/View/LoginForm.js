import React, { useState } from "react";
import {
  Col,
  Card,
  CardBody,
  FormGroup,
  Label,
  Input,
  Button,
  Spinner
} from "reactstrap";
import { Redirect, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Login.actions";

function LoginForm(props) {
  const [fields, setfields] = useState({ email: "", password: "" });
  const data = useSelector(state => state.login);
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = () => {
    setloading(true);
    dispatch(login(fields)).then(res => {
      if (res.status_code !== 200) {
        setloading(false);
      }
    });
  };

  const { from } = props.location.state || { from: { pathname: "/" } };
  if (data.login) {
    return <Redirect to={from} />;
  }
  return (
    <Card>
      <CardBody>
        <div
          className="pl-2 mb-3 text-danger"
          style={{ borderLeft: "3px solid #dc3545" }}
        >
          <h2>Sign In</h2>
        </div>

        <FormGroup>
          <Label>Username / E-Mail</Label>
          <Input
            value={fields.email}
            onChange={e => setfields({ ...fields, email: e.target.value })}
            name="email"
          />
        </FormGroup>

        <FormGroup>
          <Label>Password</Label>
          <Input
            value={fields.password}
            onChange={e => setfields({ ...fields, password: e.target.value })}
            name="password"
          />
        </FormGroup>

        <FormGroup row>
          <Col sm="auto">
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />
                Check me out
              </Label>
            </FormGroup>
          </Col>
          <Col className="text-right">
            <Label>Forgot password?</Label>
          </Col>
        </FormGroup>

        <Button
          block
          color="danger"
          onClick={() => handleLogin()}
          disabled={loading}
        >
          {loading ? <Spinner size="sm" /> : null} Sign In
        </Button>
      </CardBody>
    </Card>
  );
}

export default withRouter(LoginForm);
