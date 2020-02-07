import React, { Component } from 'react'
import styled from 'styled-components'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'


const Nav = styled.nav`
  display: flex;
  position: relative;
  margin-left: 35px;
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    li {
      list-style: none;
      margin-right: 40px;
      display: flex;
      a {
        font-size: 20px;
        text-decoration:none;
        color: #fff;
      }
      span {
          margin-top: 2px;
          transition: all .4s ease-in-out;
        }
        &:hover {
          span {
            transform: rotate(180deg);
            opacity: .8;
          }
        }
  ul {
    position: absolute;
    width: 900px;
    height: 1000px;
    left: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    background-color: #F9FAFD;
    box-shadow: 0 10px 6px 0 rgba(79,79,79,.24);
  }
  }
  }

`

const DropDown = () => {
  return (
    <Nav>
      <ul>
        <li>
          <a href="#" className="link_show">Devices</a>
          <span><ArrowDropDownIcon /></span>
        </li>
        <li>
          <a href="#">Home </a>
          <span><ArrowDropDownIcon /></span>

        </li>
        <li>
          <a href="#">Accessories</a>
          <span><ArrowDropDownIcon /></span>
        </li>
      </ul>
    </Nav>
  )
}


export default DropDown;