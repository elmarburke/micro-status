import styled from 'styled-components'

const TextArea = styled.textarea`
  height: 5em;
  background-color: #363636;
  color: #dcdcdc;
  border: none;
  width: 100%;
  box-sizing: border-box;
  padding: .5em 3em;
  display: block;
  resize: none;
  font-size: 1em;

  &:focus {
    outline: none;
  }
`

export default TextArea
