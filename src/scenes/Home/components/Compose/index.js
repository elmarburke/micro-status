import React, { PureComponent, PropTypes } from 'react'
import ContentWrapper from '../../../../components/ContentWrapper'
import ComposeFooter from './components/ComposeFooter'
import SendButton from './components/SendButton'
import TextArea from './components/TextArea'

class Compose extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  render () {
    const { onSubmit } = this.props
    let ref
    const handleSubmit = (e) => {
      e.preventDefault()
      onSubmit(ref.value)
      ref.value = ''
    }

    return (
      <ContentWrapper noPadding>
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
}

export default Compose
