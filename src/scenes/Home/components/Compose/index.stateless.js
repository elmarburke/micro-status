import React from 'react'
import ContentWrapper from '../ContentWrapper'
import ComposeFooter from './components/ComposeFooter'
import SendButton from './components/SendButton'
import TextArea from './components/TextArea'

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
        <ComposeFooter>
          <SendButton>Teilen</SendButton>
        </ComposeFooter>
      </form>
    </ContentWrapper>
  )
}
Compose.propTypes = {
  onSubmit: React.PropTypes.func.isRequired
}

export default Compose
