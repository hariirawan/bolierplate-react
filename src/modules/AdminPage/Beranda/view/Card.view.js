import React from "react";
import { Col, Card, CardBody } from "reactstrap";

export default function CardView(props) {
  return (
    <Col className={props.col}>
      <Card className="card-1">
        <CardBody>Hallo</CardBody>
      </Card>
    </Col>
  );
}
