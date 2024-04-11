import styled from "styled-components";

const TextStyled = styled.div`
    display: inline-block;
`;

export const Title: React.FC<React.ComponentProps<'div'>> = ({
    children,
    ...props
}) => {
    return <TextStyled {...props}>{children}</TextStyled>;
};