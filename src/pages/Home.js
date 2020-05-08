import React, { Component } from "react";
// import NavigationBar from "../components/NavigationBar";
import { connect } from "react-redux";
import Questions from "../components/Questions";
import { Tabs, Tab } from "react-mdl";
import { ListGroup } from "react-bootstrap";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  }

  toggleTab() {
    if (this.state.activeTab === 0) {
      return (
        <ListGroup style={{ textAlign: "center", border: "none" }}>
          {this.props.questionIds.map((id) => (
            <Questions key={id} />
          ))}
        </ListGroup>
      );
    } else {
      return (
        <div>
          <ListGroup style={{ textAlign: "center", border: "none" }}>
            {this.props.questionIds.map((id) => (
              <Questions key={id} />
            ))}
          </ListGroup>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab style={{ color: "black", background: "white" }}>
            Answered Questions
          </Tab>
          <Tab style={{ color: "black", background: "white" }}>
            Unanswered Questions
          </Tab>
        </Tabs>
        <div>{this.toggleTab()}</div>
      </div>
    );
  }
}

function mapStateToProps({ questions }) {
  return {
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
  };
}

export default connect(mapStateToProps)(Home);
