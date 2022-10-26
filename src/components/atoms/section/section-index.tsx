import React from 'react'
import * as Styled from './section-style'

export interface SectionPropsInterface
  extends React.HTMLAttributes<HTMLElement> {}

export default function Section({
    children,
    ...restProps
  }: SectionPropsInterface) {
  return (
    <Styled.StyledSection {...restProps}>{children}</Styled.StyledSection>
  )
}
