import React from "react";
import CardView from "./view/Card.view";
import { Row, Col, Card, CardBody } from "reactstrap";
import ChartView from "./view/Chart.view";

export default function Beranda(props) {
  return (
    <div>
      <Row className="mb-2">
        <CardView col="col-sm-4" />
        <CardView col="col-sm-4" />
        <CardView col="col-sm-4" />
      </Row>
      <Row>
        <Col>
          <Row>
            <CardView col="col-sm-12" />
          </Row>
        </Col>
        <Col className="col-sm-3">
          <Row>
            <CardView col="col-sm-12" />
            <CardView col="col-sm-12" />
            <CardView col="col-sm-12" />
          </Row>
        </Col>
      </Row>
    </div>
  );
}
