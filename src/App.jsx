import { useState } from "react";
import "./app.scss";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";
import data from "./constants/data.json";
function Card(props) {
  const [toggle, setToggle] = useState(props.toggle);

  return (
    <div className="continer">
      <div className="box">
        <div className="title">
          <h4>{props.name}</h4>
          <div>
            <div className={toggle ? "pro green" : "pro red"}>
              {toggle ? <FaLongArrowAltUp /> : <FaLongArrowAltDown />}
            </div>
            <p className={toggle ? "pro green" : "pro red"}>{props.content}%</p>
          </div>
        </div>
        <div className="mainTitle">
          <div className={`logo `}>
            <img src={props.logo} alt="No internet" />
            {/* <BsArrowUpRightCircleFill style={{ color: "red" }} /> */}
          </div>
          <h1>{props.amount}</h1>
        </div>
      </div>
    </div>
  );
}
function App() {
  return (
    <>
      <div className="main_continer">
        {data.map((item, index) => (
          <Card
            key={item.index}
            toggle={item.toggle}
            name={item.name}
            content={item.content}
            amount={item.amount}
            logo={item.logo}
          />
        ))}
      </div>
      {/* <Card /> */}
    </>
  );
}

export default App;
