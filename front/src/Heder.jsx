import "./heder.css";
export const Heder = (props) => {
  const { setDelete, onClick, scoreList, dis,  setId } = props;
  return (
    <div className="heder">
      {!dis && (
        <div>
          <h1>国名タイピング</h1>
          <button className="del" onClick={onClick}>
            国名の変更
          </button>
          <div className="list">
            {scoreList.map((ele, index) => (
              <button
                className="waku"
                key={index}
                onClick={() => {
                  setId(ele.id);
                }}
              >
                {ele.name}
                <br></br>
                {ele.score}
                <br></br>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
