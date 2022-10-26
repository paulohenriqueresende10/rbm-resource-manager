import * as Styled from "./example-atom-style";

import { Link } from "react-router-dom";
import React from "react";

export default function ExampleAtom() {
  return (
      <Styled.StyledText as="h1" color="yellow">
        Example
      </Styled.StyledText>

  );
}
