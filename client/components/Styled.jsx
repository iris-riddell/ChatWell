import styled, { css } from 'styled-components'

export const GridForm = styled.form`
  width: 50%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto 1fr;
`

export const HelpButton = styled.button`
  font-size: 1.1rem;
  font-weight: bold;
  box-shadow: 0px 5px 5px #888888;
  background-color: #80ced6;
  border: none;
  width: 1000px;
  height: 80px;
  text-align: center;
  border-radius: 40px;
  padding: 10px;
  display: block;
  max-width: 600px;
  margin: auto;
`
// font-family: ${(props) => props.theme.font};

export const GetHelpButton = styled.button`
  font-size: 1.1rem;
  font-weight: bold;
  box-shadow: 0px 5px 5px #888888;
  background-color: #009999;
  border: none;
  width: 1000px;
  height: 80px;
  text-align: center;
  border-radius: 40px;
  padding: 10px;
  display: block;
  max-width: 600px;
  margin: auto;
`

export const ColOne = styled.span`
  grid-column: 1;
`

export const ColTwo = styled.input`
  grid-column: 2;
`


export const ScrollDiv = styled.div`
 background: #5cb0d9;
 color: white;
 padding: 15px;
 width: 30%;
 height: 70vh;
 overflow: scroll;
 margin-inline-start: 35vw;
 `
 
export const Button = styled.button`
  grid-column: 2;
  width: 50%;
`

