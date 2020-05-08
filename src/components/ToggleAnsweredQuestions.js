import React, { Component } from "react";
import { ListGroup, Card, Button, Image } from "react-bootstrap";
import { connect } from "react-redux";

class ToggleAnsweredQuestions extends Component {
  render() {
    const { answered } = this.props;

    console.log(this.props);
    if (answered === 0) {
      return (
        <ListGroup style={{ textAlign: "center", border: "none" }}>
          <ListGroup.Item style={{ border: "none" }}>
            <Card style={{ width: "40rem", margin: "auto" }}>
              <Image
                src="https://tylermcginnis.com/would-you-rather/sarah.jpg"
                roundedCircle
                style={{ width: 50, margin: "auto", marginTop: "10px" }}
              />
              <Card.Body>
                <Card.Title>Would you rather ...</Card.Title>
                <Card.Text style={{ textAlign: "left" }}>a....</Card.Text>
                <Button variant="primary">View Poll</Button>
              </Card.Body>
            </Card>
          </ListGroup.Item>
          <ListGroup.Item style={{ border: "none" }}>
            <Card style={{ width: "40rem", margin: "auto" }}>
              <Image
                src="https://tylermcginnis.com/would-you-rather/sarah.jpg"
                roundedCircle
                style={{ width: 50, margin: "auto", marginTop: "10px" }}
              />
              <Card.Body>
                <Card.Title>Would you rather ...</Card.Title>
                <Card.Text style={{ textAlign: "left" }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">View Poll</Button>
              </Card.Body>
            </Card>
          </ListGroup.Item>
          <ListGroup.Item style={{ border: "none" }}>
            <Card style={{ width: "40rem", margin: "auto" }}>
              <Image
                src="https://tylermcginnis.com/would-you-rather/sarah.jpg"
                roundedCircle
                style={{ width: 50, margin: "auto", marginTop: "10px" }}
              />
              <Card.Body>
                <Card.Title>Would you rather ...</Card.Title>
                <Card.Text style={{ textAlign: "left" }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">View Poll</Button>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        </ListGroup>
      );
    } else {
      return <div>Nada</div>;
    }
  }
}
export default ToggleAnsweredQuestions;

// function mapStateToProps({ questions }) {
//   return {
//     questionIds: Object.keys(questions).sort(
//       (a, b) => questions[b].timestamp - questions[a].timestamp
//     ),
//   };
// }

// export default connect(mapStateToProps)(ToggleAnsweredQuestions);
