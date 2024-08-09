import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
const Message = () => {
  const message = useSelector(state => state.taskmanager.showMessage);
  return (
    <Alert variant={message.variant}>
      {message.title}
    </Alert>
  );
};
export default Message;
