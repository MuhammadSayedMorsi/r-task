import React from 'react'
import styled from 'styled-components'

const Banner = styled.div`
  width: 100vw;
  height: 215px;
  background-image: url('https://images.unsplash.com/photo-1508739826987-b79cd8b7da12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80');
  /* paralax_effexts */
  background-size: 32%;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
`

const Banners = () => {
  return (
    <Banner />
  )
}

export default Banners