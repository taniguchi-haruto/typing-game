import { useEffect, useState } from "react";
import "./App.css";
import { Heder } from "./Heder";
import { useRef } from "react";
import { Start } from "./Start";

function App() {
  // const [count, setCount] = useState(0)
  const [list, setList] = useState([]);
  const [start, setStart] = useState("start");
  const [display, setDisplay] = useState(true);
  const [country, setCountry] = useState("");
  const [value, setValue] = useState("");
  const [index, setIndex] = useState(0);
  const [user, setUser] = useState();
  const [ref, setRef] = useState();
  const [scoreList, setScoreList] = useState([]);
  const [dele, setDelete] = useState();
  const [dis, setDis] = useState(true);
  const [dis1, setDis1] = useState(false);
  const [id, setId] = useState();
  const [end, setEnd] = useState(false);

  const userName = useRef();
  useEffect(() => {
    getList();
  }, []);
  useEffect(() => {
    if (index >= list.length && list.length > 0) {
      setEnd(true);
    }
  }, [index, list]);

  const getList = () => {
    fetch("/api/country")
      .then((res) => res.json())
      .then((data) => setList(data));
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
    if (e.target.value === list[index].name) {
      setIndex((e) => e + 1);
      setValue((e.target.value = ""));
    }
  };
  const postUser = async (data) => {
    const body = { name: data.current.value };
    console.log(body);
    await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };
  const getScore = () => {
    fetch("/api/country")
      .then((res) => res.json())
      .then((data) => setScoreList(data));
  };
  const deletion = async () => {
    await fetch(`/api/country/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(id),
    });
  };
  // const exitScreen = () => {
  //   if (index >= list.length) {
  //     console.log(index)
  //     console.log(list.length)
  //     console.log("End of list");
  //   setEnd(!end);
  //   }
  // };

  return (
    <>
      {dis1 && (
        <button className="batu" onClick={deletion}>
          ❌
        </button>
      )}
      <Heder
        setDelete={setDelete}
        onClick={() => {
          getScore(), setDis(!dis), setDis1(!dis1);
        }}
        scoreList={scoreList}
        // click={getEle}
        setId={setId}
      ></Heder>
      {display && dis && (
        <input
          type="text"
          placeholder="user name here..."
          ref={userName}
        ></input>
      )}
      <>
        {display && dis && (
          <Start
            onClick={() => {
              setDisplay(!display);
              postUser(userName);
            }}
            start={start}
            list={list}
          ></Start>
        )}
      </>
      {!display && dis && !end && (
        <div className="mondai">
          <div>
            <h4>{list[index]?.name}</h4>
            <p>{index + 1}/10個中</p>
            <input
              className="input"
              type="text"
              placeholder="Type here..."
              value={value}
              onChange={handleInputChange}
              style={{ outline: "none" }}
            />
            <h4>
              {value.split("").map((ele, index) => (
                <span
                  id="bun"
                  key={index}
                  style={{ opacity: index === value.length - 1 ? 1 : 0.5 }}
                >
                  {ele}
                </span>
              ))}
            </h4>
          </div>
        </div>
      )}
      <div className="imu">
        {!end && (
          <img src="../img/めっちゃ好きやぁぁぁ！_gifmagazine.gif"></img>
        )}
        {end && (
          <>
            <h2>終了です！</h2>
            <img src="../img/たららったたたた～！_gifmagazine.gif"></img>
          </>
        )}
      </div>
    </>
  );
}

export default App;
