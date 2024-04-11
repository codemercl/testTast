import styled from "styled-components";

const HeaderStyled = styled.h1`
    font-size: 35px;
`;

export const Header: React.FC<React.ComponentProps<'h1'>> = ({
    children,
    ...props
}) => {
    return <HeaderStyled {...props}>{children}</HeaderStyled>;
};