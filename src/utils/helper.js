export function formatQuestion(user, question, authedUser) {
  const { name, avatarURL } = user;
  const { id, optionOne, optionTwo, timestamp } = question;
  return {
    name,
    id,
    timestamp,
    optionOne,
    optionTwo,
    avatar: avatarURL,
    hasVoted:
      optionOne.votes.includes(authedUser) ||
      optionTwo.votes.includes(authedUser),
  };
}

export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}
