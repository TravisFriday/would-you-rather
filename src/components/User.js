import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Image, Nav } from "react-bootstrap";

function User(props) {
  const { user } = props;
  return (
    <Fragment>
      <Nav.Link>{user.name}</Nav.Link>
      <Image
        className="avatar"
        src={user.avatarURL}
        roundedCircle
        style={styles.image}
        alt={`${user.name}' Avatar`}
      ></Image>
    </Fragment>
  );
}

const styles = {
  image: {
    maxHeight: 30,
    width: "auto",
    verticalAlign: "middle",
    paddingLeft: 10,
    paddingRight: 10,
  },
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};

function mapStateToProps({ users }, { id }) {
  return {
    user: users[id],
  };
}

export default connect(mapStateToProps)(User);
