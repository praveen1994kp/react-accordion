import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

export const Accordion = styled.div`
  --transition-setting: 0.35s ease-out;
  overflow-y: hidden;
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 50%);
  margin: 1rem;
  border-radius: 0.5rem;
  transition: box-shadow 0.25s;

  &:hover {
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 50%);
  }
  &:focus-within {
    box-shadow: 0 0 0.75rem rgba(0, 0, 0, 50%);
  }
`
const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;
`

const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  padding: 0.25rem;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &::after {
    content: ${(props) => (props.showCarat ? '^' : '')};
    transform: rotate(90deg);
    margin-right: 1rem;
    transition: transform var(--transition-setting);
  }
  ${HiddenInput}:checked + &::after {
    transform: rotate(0deg);
  }
`

const CONTENT_PADDING = '0.5rem'

function calculateAccordionHeight(props) {
  const { maxHeight = 10 } = props

  return `calc(${maxHeight}px + ${CONTENT_PADDING})`
}

const StyledAccordionContent = styled.div`
  max-height: 0;
  overflow-y: hidden;
  opacity: 0;
  transition: all var(--transition-setting);

  ${HiddenInput}:checked ~ & {
    overflow-y: hidden;
    opacity: 1;
    max-height: ${calculateAccordionHeight};
  }
`

const StyledContentContainer = styled.div`
  padding: ${CONTENT_PADDING};
`

export function AccordionContent(props) {
  const { children } = props
  const [maxHeight, setMaxHeight] = useState(20)
  const contentEl = useRef(null)

  const calcContentHeight = () => {
    contentEl &&
      contentEl.current &&
      setMaxHeight(contentEl.current.clientHeight)
  }

  useEffect(calcContentHeight, [children])

  return (
    <StyledAccordionContent maxHeight={maxHeight}>
      <StyledContentContainer ref={contentEl}>
        {children}
      </StyledContentContainer>
    </StyledAccordionContent>
  )
}

export function AccordionHeader(props) {
  const { id, children, showCarat = false, name } = props

  const getAccordionController = () => {
    if (name) return <HiddenInput type='radio' id={id} name={name} />
    return <HiddenInput type='checkbox' id={id} />
  }

  return (
    <React.Fragment>
      {getAccordionController()}
      <StyledLabel htmlFor={id} showCarat={showCarat}>
        {children}
      </StyledLabel>
    </React.Fragment>
  )
}
