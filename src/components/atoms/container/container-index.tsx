import React from 'react'
import * as Styled from './container-style';

import List from 'components/particles/list/list-index';
import Paragraph from 'components/particles/paragraph/paragraph-index';
import Text from 'components/particles/text/text-index';

export default function Container({...children}) {
  return (
    <Styled.StyledContainer>
      <Styled.StyledText as="h1" color="#0092D4">
        Lorem ipsum
      </Styled.StyledText>
      <Styled.StyledSubtitle as="h3">
        Lorem ipsum 🚀
      </Styled.StyledSubtitle>

      <Styled.StyledContent>
        <Text title='Lorem'/>
        <Styled.StyledCircle/>
        <Text title='Lorem'/>
        <Styled.StyledCircle/>
        <Text title='Lorem'/>
        <Styled.StyledCircle/>
        <Text title='Lorem'/>
      </Styled.StyledContent>
      
      <Paragraph title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Paragraph>
      <Paragraph title='Equipe'></Paragraph>

      <List/>
    </Styled.StyledContainer>
  )
}
