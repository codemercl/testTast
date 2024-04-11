import styled from "styled-components";

const TextStyled = styled.p`
    margin: 10px 0;
`;

export const Text: React.FC<React.ComponentProps<'p'>> = ({
    children,
    ...props
}) => {
    return <TextStyled {...props}>{children}</TextStyled>;
};