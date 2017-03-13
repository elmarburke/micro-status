import React from 'react'
import styled from 'styled-components'
import ContentWrapper from './ContentWrapper'

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

const ComposeBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: .5em 3em;
`

const SendButton = styled.button`
  background-color: #363636;
  border: #9b58b5 2px solid;
  border-radius: 4px;
  padding: .25em 1em;
  color: #dcdcdc;
  font-size: 1em;
  &:focus {
    outline: none;
  }
`

const Compose = ({ onSubmit }) => {
  let ref
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(ref.value)
    ref.value = ''
  }

  return (
    <ContentWrapper>
      <form onSubmit={handleSubmit}>
        <TextArea
          type='text'
          placeholder='Was passiert gerade?'
          innerRef={_ref_ => { ref = _ref_ }}
        />
        <ComposeBottom>
          <SendButton>Teilen</SendButton>
        </ComposeBottom>
      </form>
    </ContentWrapper>
  )
}
Compose.propTypes = {
  onSubmit: React.PropTypes.func.isRequired
}

export default Compose
