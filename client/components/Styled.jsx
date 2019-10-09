import styled from 'styled-components'

export const GridForm = styled.form`
  width: 50%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto 1fr;
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

