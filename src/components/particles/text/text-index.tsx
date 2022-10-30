import { ReactNode } from 'react';
import * as Styled from './text-style'

export type TextProps = {
    children: ReactNode;
    fontSize?: string;
	fontWeight?: string;
	color?: string;
	as: "h1" | "h2" | "h3" | "p" | "span" | "label";
	decoration?: "underline" | "line-through" | "none";
	margin?:string;
    lineHeight?: string;
    padding?: string;
}

export default function Text(props: TextProps) {
    return (
     <Styled.StyledText {...props}>{props.children}</Styled.StyledText>
    )
  }
