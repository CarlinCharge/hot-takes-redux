import { connect } from 'react-redux';
import Messages from '../components/Messages';
import { deleteMessage } from '../actions/messages';

const mapStateToProps = ({ messages, users, auth }) => {
  return { messages, users, auth };
};

const mapDispatchToProps = () => {
  return {
    deleteMessage(id) {
      return () => deleteMessage(id);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
