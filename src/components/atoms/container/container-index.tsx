import React from 'react'
import * as Styled from './container-style';
import List from 'components/particles/list/list-index';
import Text from 'components/particles/text/text-index';

export default function Container() {
  return (
    <Styled.StyledContainer>
      <Text 
        as="h1" 
        color="#0092D4"
        fontWeight="700"
        fontSize="62.1797px"
        lineHeight="93px"
      >
        Lorem ipsum
      </Text>
      <Text 
        as="h3"
        fontWeight="400"
        fontSize="31.0898px"
        lineHeight="31px"
      >
        Lorem ipsum 🚀
      </Text>

      <Styled.StyledContent>
        <Text
          color='#0092D4'
          as='p'
        >
          Lorem
        </Text>
        <Styled.StyledCircle/>
          <Text
            color='#0092D4'
            as='p'
          >
            Lorem
          </Text>
        <Styled.StyledCircle/>
          <Text
              color='#0092D4'
              as='p'
          >
              Lorem
          </Text>
        <Styled.StyledCircle/>       
      </Styled.StyledContent>     
      <Text
       as="p"
       padding="1rem 0"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </Text>
      <Text
        as="p"
        padding="1rem 0"
      >
        Equipe
      </Text>
      <List/>
    </Styled.StyledContainer>
  )
}
