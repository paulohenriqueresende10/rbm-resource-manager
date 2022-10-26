import * as Styled from './main-style'
export interface MainPropsInterface
  extends React.HTMLAttributes<HTMLElement> {}

export default function Main({
    children,
    ...restProps
  }: MainPropsInterface){
    return(   
      <Styled.StyledMain {...restProps}>{children}</Styled.StyledMain>
    )
}