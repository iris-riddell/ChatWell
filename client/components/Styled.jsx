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
font-size: 20px;
border: none;
border-radius: none;
padding:26px;
font-weight: bold;
text-align:center;
display:block;
margin:0px;
background-color: #80ced6;
`

export const HeaderTag = styled.h1`
background-image: url('/images/images8.jpg');
font-family: 'Liu Jian Mao Cao', cursive;
color: '#090934';
font-size: 5.3rem;
border: none;
border-radius: none;
padding:21px;
font-weight:lighter;
text-align:center;
display:block;
margin:0px;
opacity: 5px;
/* background-color:#f6d8ac; */
/* background: ${props => (props.primary ? 'red' : 'green')}; */
${(props) => props.color && css` background: ${props => props.theme[props.color]};
`}
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
  box-shadow: 0px 5px 5px #006745;
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
&:hover {
  background: #a3cfae;
}
`
// font-family: ${(props) => props.theme.font};
// ${(props) => props.font && css` background: ${props => props.theme[props.font]};
// `}
/* background: ${props => (props.primary ? 'red' : 'green')}; */
// ${(props) => props.color && css` background: ${props => props.theme[props.color]};
// `}

export const GetHelpButton = styled.button`
  font-size: 1.1rem;
  font-weight: bold;
  box-shadow: 0px 5px 5px #006745;
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
  &:hover {
  background: #a3cfae;
}
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

