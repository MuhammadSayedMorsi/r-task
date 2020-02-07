import React from 'react'
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import styled from 'styled-components'


const MobileCardWrapper = styled.div`
    height: 480px;
    width: 300px;
    font-size: 20px;
    border: .5px solid rgba(207,208,212,.5);
    border-radius: .3125rem;
    background-color: #f6f6f6;
    line-height: 1.5em;
  .photolayer {
    height: 60%;
    margin: 0 1px;
    padding: 0 10px;
    background-color: #FFF;
    img {
      height: 100%;
      display: block;
      margin: 0 auto;
    }
  }

  .mobile-content {
    margin-top: 20px;
    margin-left: 25px;
    h3,h6,p {
      margin: 0;
      padding: 0;
    }
    .title-phone {
      font-size: 15px;
      color: #B4B4B4
    }
    h6 {
      font-size: 17px;
      color: #000;
      margin-bottom: 10px;
    }
    .start_price {
      font-size: 15px;
      font-weight: bold;
      color: #000;

    }

    .last_line {
      display: flex;
      justify-content: space-between;
      margin-right: 40px;
      p {
        color: #54B8E9;
        font-weight: bold;
        font-size: 18px;
      }

      .MuiSvgIcon-root {
        fill: #A8ABB7;
      }
    }
  }
`
const MobileCard = () => {
  return (
    <MobileCardWrapper>
      <div className="photolayer">
        <img src="https://shop.jo.zain.com/media/4932/Huawei-MediaPad-T3-7_1.jpg" />
      </div>
      <div className="mobile-content">
        <h3 className="title-phone">Apple</h3>
        <h6><strong>IPhone XR</strong></h6>
        <h6 className="start_price">Start From:</h6>
        <div className="last_line">
          <p>70 JD/Month</p>
          <div className="transfer">
            <SyncAltIcon />
          </div>
          <div className="shopping-cart">
            <ShoppingCartIcon />
          </div>
        </div>
      </div>
    </MobileCardWrapper>
  )
}

export default MobileCard;