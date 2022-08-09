import React from 'react'
import './nav.css'
import { Hdata } from './headerdata';

// console.log(Hdata);
const Nav = () => {
  return (
    <>
    <div className="navb">
      <span className="cont" >New Connections  <h3 className="unread" style={{ position: "relative", fontSize: "1.3rem", height: "25px", top: '-24px', left: "105px", width: '23px', background: " rgb(239, 186, 86)", borderRadius: "50%" }}>2</h3></span>

      <div className="scrollmenu">
        {
          Hdata.map(data => (
            <div className="items">
              <img className="item" src={(data.image)} alt="Loading" />
              <p style={{ color: "gray", marginRight: "20px",    fontFamily:" 'Ubuntu', sans-serif"}}>{data.name}</p>
            </div>
          ))
        }


      </div>
      </div>
    </>

  )
}
export default Nav;
