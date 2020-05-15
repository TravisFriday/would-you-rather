import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

const ErrorPage = ({ history }) => (
  <Card>
    <Card.Header>Error: 404</Card.Header>
    <Card.Body>
      <Card.Title>Page Not Found</Card.Title>
      <Button size="small" onClick={() => history.push("/")}>
        Go to Login
      </Button>
    </Card.Body>
  </Card>
);

ErrorPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default ErrorPage;
