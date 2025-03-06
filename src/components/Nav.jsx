import { useState } from "react";
import { NavLink,Link } from "react-router-dom";
import styled from 'styled-components';
import '../styles.css';

// https://dev.to/elijahtrillionz/complete-guide-on-how-to-use-styled-components-in-react-360c

const Navigation = styled.header`
  border-bottom: 10px solid #2222;
  z-index:1;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:0px 100px 0px;
  height : 120px;
  // background:rgb(54, 227, 152);

  .logo a{
    color:#333;
    font-size:2em;
    text-decoration:none;
  }

  .nav{
    display:flex;
    ul {
      display:flex;

      li{
        padding:0px 10px;
        color:#333;
      }

      a{
        text-decoration:none;
      }
    }
  }

  a.active {
    border-bottom:3px solid #e6e6e6
    padding-bottom:0.3em;
  }

  .fa-bars{
    display:none;
  }

  .active_style{
     background: #8a2be2;
  }

  .none{
      background:#a52a2b;
  }

  @media only screen and (max-width:580px) {
    height:auto;
    min-height:100px;
    justify-content:center;
    flex-direction: column;
    padding-top:1em;

    .nav{
      text-align:center;
    }

    .fa-bars{
      display:inline-block;
      position:absolute;
      top:10px;
      right:10px;
      cursor:pointer;
    }



    ul.collapsed{
      margin-top:1em;
      display:none;
      width:100vw;

      &.is-expanded{
        display:block;
      }
    }

    li{
      border-top:1px solid #ccc;
      padding:1em;
      transition:0.3s;

      &:hover{
        background:#e6e6e6;
      }
    }


  }

`;

export default function Nav(){
  const [isExpanded, setIsExpanded]=useState(true);
  const [isActive, setIsActive]=useState(false);
  return(
    <Navigation>
      <div className="active_style"> test </div>
      <div className="logo">
        <Link to="/"> Preecha.io </Link>
      </div>
      <nav className="nav">
        <i
          className="fa fa-bars"
          aria-hidden="true"
          onClick={()=>setIsExpanded(!isExpanded)}
        >
        </i>
        <ul className={`collapsed ${isExpanded ? "is-expanded":""}`}>
          {/* <NavLink  activeClassName="active" to="/home"> */}
          <NavLink activeClassName="active" to="/" >
              <li> Home </li>
          </NavLink>
          <NavLink  to="/about">
              <li> About </li>
          </NavLink>
          <NavLink   to="/contact">
              <li> Contact </li>
          </NavLink>
        </ul>
      </nav>
    </Navigation>
  )
}