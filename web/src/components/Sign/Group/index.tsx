import styled from "styled-components";

const GroupStyled = styled.div`
`;

export const Group: React.FC<React.ComponentProps<'div'>> = ({
    children,
    ...props
}) => {
    return <GroupStyled {...props}>{children}</GroupStyled>;
};