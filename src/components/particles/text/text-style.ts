import styled from "styled-components";
import { TextProps } from 'components/particles/text/text-index'

export const StyledText = styled.span<TextProps>`
    color: ${({color}) => color};
	font-size: ${({fontSize}) => fontSize};
	font-weight: ${({fontWeight}) => fontWeight};
	text-decoration: ${({decoration}) => decoration};
	margin: ${({margin}) => margin};
    line-height: ${({lineHeight}) => lineHeight};
    padding: ${({padding}) => padding};
`;