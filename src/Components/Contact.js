import {useNavigate} from "react-router-dom"
const Contact = () => {
const rev = useNavigate();
rev('/')
  return (
    <>
      <h1>i am Contact</h1>
    </>
  );
};
export default Contact;