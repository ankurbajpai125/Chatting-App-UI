import React, { useState } from "react";
import "./main.css";
import { contacts } from "./datajson";
import { useRef } from "react";
import Nav from "./nav";

const Main = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [serachResult, setSearchResult] = useState([]);

  const inputEl = useRef("");

  const getSearchterm = () => {
    setSearchTerm(inputEl.current.value);
  };
  // console.log(searchTerm);
  const setres = () => {
    if (searchTerm === "") {
      setSearchResult(contacts);
    } else {
      const newcontactList = contacts.filter((cont) => {
        // return Object.values(cont).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
        return cont.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
      // // data.name.length>=9?data.name.slice(0,7)+"..":data.nam
      for (var i = 0; i < newcontactList.length; i++) {
        newcontactList[i].name =
          newcontactList[i].name.length >= 9
            ? newcontactList[i].name.slice(0, 6) + ".."
            : newcontactList[i].name;
        newcontactList[i].message =
          newcontactList[i].message.length >= 18
            ? newcontactList[i].message.slice(0, 16) + "..."
            : newcontactList[i].message;
      }
      setSearchResult(newcontactList);
    }
  };

  return (
    <>
      <Nav />
      <div className="all">
        <div className="main">
          <header className="header">
            <div className="msg">
              Messages
              <h3
                className="unread"
                style={{
                  position: "relative",
                  fontSize: "1.3rem",
                  height: "25px",
                  top: "-24px",
                  left: "65px",
                  width: "23px",
                  background: " rgb(239, 186, 86)",
                  borderRadius: "50%",
                }}
              >
                2
              </h3>
            </div>
            <div style={{ position: "relative", left: "25px" }}>
              <i className="fa fa-search search" aria-hidden="true"></i>
              <input
                className="Sright"
                type="search"
                placeholder="Search"
                onChange={() => {
                  getSearchterm();
                  setres();
                }}
                ref={inputEl}
              />
            </div>
          </header>
          <div className="outside">
            {searchTerm.length < 1 ? (
              contacts.map((data) => (
                <>
                  <div div className="container">
                    <div>
                      <img
                        className="left"
                        src={data.image}
                        alt="Girl in a jacket"
                      />
                    </div>
                    <div className="mid">
                      <h2
                        style={{
                          position: "relative",
                          top: "0",
                          left: "-8px",
                          display: "flex",
                          justifyContent: "left",
                          fontFamily: "  'Kanit', sans-serif",
                        }}
                      >
                        {data.name.length >= 8
                          ? data.name.slice(0, 6) + ".."
                          : data.name}
                      </h2>
                      <p
                        style={{
                          position: "relative",
                          top: "5px",
                          left: "-8px",
                          display: "flex",
                          justifyContent: "left",
                        }}
                      >
                        {data.message.length >= 18
                          ? data.message.slice(0, 16) + "...."
                          : data.message}
                      </p>
                    </div>
                    <div className="right">
                      <div
                        className="time"
                        style={{
                          color: "gray",
                          position: "relative",
                          top: "3px",
                        }}
                      >
                        {data.time}
                      </div>
                      <h3
                        className="unread"
                        style={{
                          position: "relative",
                          top: "13px",
                          left: "17px",
                          width: "20px",
                          background: "rgb(227, 239, 239)",
                          borderRadius: "50%",
                        }}
                      >
                        {data.unread}
                      </h3>
                    </div>
                  </div>
                  <hr style={{ margin: 0, padding: 0 }} />
                </>
              ))
            ) : serachResult.length > 0 ? (
              serachResult.map((data) => (
                <>
                  <div div className="container">
                    <div>
                      <img
                        className="left"
                        src={data.image}
                        alt="Girl in a jacket"
                      />
                    </div>

                    <div className="mid">
                      <h3
                        style={{
                          position: "relative",
                          top: "0",
                          left: "-8px",
                          fontFamily: "'Roboto', sans-serif;",
                          display: "flex",
                          justifyContent: "left",
                        }}
                      >
                        {" "}
                        {data.name}
                      </h3>
                      <span
                        style={{
                          position: "relative",
                          top: "5px",
                          left: "-8px",
                          display: "flex",
                          justifyContent: "left",
                        }}
                      >
                        {data.message}
                      </span>
                    </div>
                    <div className="right">
                      <div
                        className="time"
                        style={{ position: "relative", top: "3px" }}
                      >
                        {data.time}
                      </div>
                      <h3
                        className="unread"
                        style={{
                          position: "relative",
                          top: "13px",
                          left: "17px",
                          width: "20px",
                          background: "rgb(227, 239, 239)",
                          borderRadius: "50%",
                        }}
                      >
                        {data.unread}
                      </h3>
                    </div>
                  </div>
                  {/* {console.log(data.image)} */}
                  <hr style={{ margin: 0, padding: 0 }} />
                </>
              ))
            ) : (
              <h1
                style={{
                  border: "2px solid red",
                  background: "white",
                  color: "black",
                }}
              >
                {" "}
                User Not Found
              </h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
