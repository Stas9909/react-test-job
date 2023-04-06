import React from "react";
import './Nav.css';
import vector from "../../Assets/icon1/Vector.png";
import vector3 from "../../Assets/icon1/Vector3.png";
import vector1 from "../../Assets/icon1/Vector1.png";
import vector2 from "../../Assets/icon1/Vector2.png";
import vectorB from "../../Assets/icon1/Vector_B.png";
import vectorB1 from "../../Assets/icon1/Vector_B1.png";
import vectorB2 from "../../Assets/icon1/Vector_B2.png";
import vectorC from "../../Assets/icon1/Vector_C.png";
import vectorC1 from "../../Assets/icon1/Vector_C1.png";
import vectorC2 from "../../Assets/icon1/Vector_C2.png";
import vectorD from "../../Assets/icon1/Vector_D.png";
import vectorD1 from "../../Assets/icon1/Vector_D1.png";
import vectorD2 from "../../Assets/icon1/Vector_D2.png";
import vectorD3 from "../../Assets/icon1/Vector_D3.png";
import vectorD4 from "../../Assets/icon1/Vector_D4.png";
import vectorE from "../../Assets/icon1/Vector_E.png";
import vectorE1 from "../../Assets/icon1/Vector_E1.png";
import vectorE2 from "../../Assets/icon1/Vector_E2.png";
import vectorE3 from "../../Assets/icon1/Vector_E3.png";
import vectorF from "../../Assets/icon1/Vector_F.png";
import vectorF1 from "../../Assets/icon1/Vector_F1.png";
import vectorF2 from "../../Assets/icon1/Vector_F2.png";
import moreThenWhite from "../../Assets/moreThenWhite.png";
import moreThenBlue from "../../Assets/moreThenBlue.png";
import ava from "../../Assets/avatar.png";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="navWrapper">
        <div className="wrapperForHeader">
          <div className="divForHexagon">
            <div className="roundInTheMiddle"></div>
            <div className="rect rect1"></div>
            <div className="rect rect2"></div>
            <div className="rect rect3"></div>
          </div>
          <div className="divForHeader">
            <h1 className="header">Dashboard</h1>
          </div>
        </div>
        <div className="generalNavigation">
          <div className="divForNavBtn">
            <div className="divForIcons">
              <img className="vector" src={vector} alt="" />
              <img className="vector" src={vector3} alt="" />
              <img className="vector1" src={vector1} alt="" />
              <img className="vector2" src={vector2} alt="" />
            </div>
            <h4 className="headerInNav">Dashboard</h4>
          </div>
          <div className="divForNavBtn">
            <div className="divForIcons">
              <img className="vector" src={vector} alt="" />
              <img className="vector" src={vectorB} alt="" />
              <img className="vector" src={vectorB1} alt="" />
              <img className="vectorB2" src={vectorB2} alt="" />
            </div>
            <div className="divForElements">
              <h4 className="headerInNav">Product</h4>
              <div className="divForMoreThen">
                <img className="moreThen" src={moreThenBlue} alt="" />
              </div>
            </div>
          </div>
          <div className="divForNavBtn highlited">
            <div className="divForIcons">
              <img className="vector" src={vectorC} alt="" />
              <img className="vectorC1" src={vectorC1} alt="" />
              <img className="vector" src={vectorC2} alt="" />
            </div>
            <div className="divForElements">
              <h4 className="headerInNav">Customers</h4>
              <div className="divForMoreThen">
                <img className="moreThen" src={moreThenWhite} alt="" />
              </div>
            </div>
          </div>
          <div className="divForNavBtn">
            <div className="divForIcons">
              <img className="vector" src={vectorD} alt="" />
              <img className="vectorD1" src={vectorD1} alt="" />
              <img className="vectorD2" src={vectorD2} alt="" />
              <img className="vectorD3" src={vectorD3} alt="" />
              <img className="vectorD4" src={vectorD4} alt="" />
            </div>
            <div className="divForElements">
              <h4 className="headerInNav">Income</h4>
              <div className="divForMoreThen">
                <img className="moreThen" src={moreThenBlue} alt="" />
              </div>
            </div>
          </div>
          <div className="divForNavBtn">
            <div className="divForIcons">
              <img className="vector" src={vectorE} alt="" />
              <img className="vector" src={vectorE1} alt="" />
              <img className="vectorE2" src={vectorE2} alt="" />
              <img className="vectorE3" src={vectorE3} alt="" />
            </div>
            <div className="divForElements">
              <h4 className="headerInNav">Promote</h4>
              <div className="divForMoreThen">
                <img className="moreThen" src={moreThenBlue} alt="" />
              </div>
            </div>
          </div>
          <div className="divForNavBtn">
            <div className="divForIcons">
              <img className="vector" src={vectorF} alt="" />
              <img className="vectorF1" src={vectorF1} alt="" />
              <img className="vectorF2" src={vectorF2} alt="" />
            </div>
            <div className="divForElements">
              <h4 className="headerInNav">Help</h4>
              <div className="divForMoreThen">
                <img className="moreThen" src={moreThenBlue} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomNav">
        <div className="divForAva">
          <img className="ava" src={ava} alt="" />
        </div>
        <div className="divForPersonData">
          <h4 className="name">Evano</h4>
          <h4 className="position">Project Manager</h4>
        </div>
      </div>
    </nav>
  )
}

export default Nav;