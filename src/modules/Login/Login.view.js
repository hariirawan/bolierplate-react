import React from "react";
import { Container, Row, Col } from "reactstrap";
import LoginBrandHolder from "./View/LoginBrandHolder";
import LoginForm from "./View/LoginForm";

function LoginView(props) {
  return (
    <div style={{ height: "100vh", display: "grid", alignItems: "center" }}>
      <Container>
        <Row>
          <Col md="8" sm="6">
            <LoginBrandHolder />
          </Col>
          <Col md="4" sm="6">
            <LoginForm {...props} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginView;
