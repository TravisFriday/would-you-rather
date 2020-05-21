import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";
import CountUp from "react-countup";

function Leaderboard(props) {
  const { users } = props;
  return (
    <Fragment>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Profile Picture</th>
            <th>User</th>
            <th>Questions Asked</th>
            <th>Questions Answered</th>
            <th>Total Score</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={user.avatarURL}
                  className="avatar"
                  alt={`Avatar of ${user.name}`}
                />
              </td>
              <td>{user.name}</td>
              <td>
                <CountUp start={0} end={user.questions.length} duration={1.5} />
              </td>
              <td>
                <CountUp
                  start={0}
                  end={Object.keys(user.answers).length}
                  duration={1.5}
                />
              </td>
              <td>
                {" "}
                <b>
                  <CountUp
                    start={0}
                    end={
                      user.questions.length + Object.keys(user.answers).length
                    }
                    duration={1.5}
                  />
                </b>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Fragment>
  );
}

Leaderboard.propTypes = {
  users: PropTypes.array.isRequired,
};

function mapStateToProps({ users }) {
  const userScore = (user) =>
    Object.keys(user.answers).length + user.questions.length;
  return {
    users: Object.values(users).sort((a, b) => userScore(b) - userScore(a)),
  };
}

export default connect(mapStateToProps)(Leaderboard);
