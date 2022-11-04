import * as Styled from './wrapper-style'
export interface WrapperPropsInterface
  extends React.HTMLAttributes<HTMLElement> {}

export default function Wrapper({
    children,
    ...restProps
  }: WrapperPropsInterface){
    return(   
      <Styled.StyledWrapper {...restProps}>{children}</Styled.StyledWrapper>
    )
}