import styled from 'styled-components'

const ContentWrapper = styled.div`
  max-width: 600px;
  box-sizing: border-box;
  margin: 0 auto;
  background-color: #363636;
  border-bottom: 2px solid #4a4a4a;
  color: #dcdcdc;
  ${({noPadding}) => noPadding ? '' : 'padding: 1em 3em;'}

  &:last-child {
    border-bottom: none;
  }
`

export default ContentWrapper
