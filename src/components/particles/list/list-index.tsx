import * as Styled from './list-style';

const items = ["🚀 Lorem Ipsum", "🚀 Lorem Ipsum", "🚀 Lorem Ipsum", "🚀 Lorem Ipsum", "🚀 Lorem Ipsum", "🚀 Lorem Ipsum", "🚀 Lorem Ipsum"]

export default function List() {
    return (
        <Styled.StyledList>
            {items.map((item, index) => (
                <Styled.StyledLi key={index}>
                    {item}
                </Styled.StyledLi>
            ))}
        </Styled.StyledList>
    )
}