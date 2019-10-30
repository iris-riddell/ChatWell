import styled, { css } from 'styled-components'

export const GridForm = styled.form`
  width: 50%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto 1fr;
`
export const Header = styled.title`
/* width: 100%;
height: 160px; */
text-align: center;
/* background-image: url('/images/image11.jpg'); */
border: none;
border-radius: none;
padding:26px;
font-weight:lighter;
  text-align:center;
  display:block;
  margin:0px;
  background-color: #80ced6;
`

export const Background = styled.div`
background-image: url('/images/images7.jpg');
height: 70vh;
background-repeat: no-repeat;
background-size: cover;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
${(props) => props.color && css` background: ${props => props.theme[props.background]};
`} 
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

