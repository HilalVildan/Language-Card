import {language} from "../../helpers/data.js"
import Item from "../item/Item";
import "./MyCard.css"

const MyCard = () => {
  return (
    <div className="container">
      <h1>Languages</h1>
      <div className="card-container">
        {language.map((a, index) => {
          return <Item data={a} key={index} />
        })}
      </div>
    </div>
  );
};

export default MyCard;
