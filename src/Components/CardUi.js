import React from 'react'
import CheckIcon from '@material-ui/icons/Check'
import styled from 'styled-components'

const Card = styled.div`
  width: 348px;
  height: 600px;
  background-color: #fff;
  border: .5px solid #CFD0D4;
  border-radius: 30px;
  article {
    background-color: #54b8e9;
    padding-top: 1px;
    border: none;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
  }
  h3 {
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    text-align: center;
  }
  span {
    font-size: 15px;
    color: #fff;
    font-weight: bold;
    text-align: center;
    display: block;
    padding-bottom: 15px;
  }
  div {
    font-size: .9375rem;
    color: #333;
    padding: 2px 11px;
    border-bottom: .5px solid #CFD0D4;
    &:last-child {
      border-bottom: none;
    }
    h4 {
      display: flex;
      .MuiSvgIcon-root {
        margin-right: 10px;
      }
    }
  }

  button {
    width: 40%;
    padding: 8px 17px;
    margin-right: 10px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    background-color: #fff;
    border: 1px solid #54b8e9;
    color: #54b8e9;
    font-size: 14px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      background-color: #54b8e9;
      color: #fff;
    }
    &:focus {
      background-color: #54b8e9;
      border: none;
      outline: none;
      color: #fff;
    }
  }
  h6 {
    font-size: 11px;
    color: #54b8e9;
    text-align: center;
    display: block;
    margin: 20px 0 0 0;
    text-decoration: underline;
    cursor: pointer;
  }

  &:hover {
    box-shadow: 0 17px 59px -30px rgba(0,0,0,.75);
    transition: all .5s ease-in-out;
  }

  div:last-child {
    margin-top: 120px;
    text-align: center;
  }
`

const Wrapper = styled.div`
  margin-top: 10px;
`

const CardUI = (props) => {
  console.log(props)
  return (
    <div>
      <Wrapper>
        <Card>
          <article>
            <h3>{props.title}</h3>
            <span>10 JOD</span>
          </article>
          <div>
            <h4>
              <CheckIcon />
              {props.details}</h4>
          </div>
          <div>
            <h4>
              <CheckIcon />
              {props.details}</h4>
          </div>
          <div>
            <h4>
              <CheckIcon />
              Local Minutes: Unlimited</h4>
          </div>
          <div>
            <h4>
              <CheckIcon />
              Local Minutes: Unlimited</h4>
          </div>
          <div>
            <button onClick={props.toggle}>Plans Only</button>
            <button>With Device</button>
            <h6>see all Benefit detail</h6>
          </div>
        </Card>

      </Wrapper>
    </div>
  )
}

export default CardUI