import * as Styled from "./example-atom-style";

import { Link } from "react-router-dom";
import React from "react";

export const ExampleAtom = (title:string) => {
  return (
      <Styled.StyledText as="h1" color="yellow">
        { title }
      </Styled.StyledText>

  );
}
