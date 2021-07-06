import { useHistory } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";
import "./Back.css";

const BackBtn = () => {
  let history = useHistory();
  return (
    <>
      <button onClick={() => history.goBack()} className = "backBtn"><BiLeftArrowAlt /></button>
    </>
  );
};
export default BackBtn;