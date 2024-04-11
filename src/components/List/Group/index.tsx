import styled from "styled-components";

const GroupStyped = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    border-radius: 5px;
    box-shadow: transparent 0 0 0 3px,rgba(18, 18, 18, .1) 0 6px 20px;
    padding: 15px 20px;
    cursor: grab;
`;

export const Group: React.FC<& React.ComponentProps<'div'>> = ({
    className,
    children,
    ...rest
}) => {
    return (
        <GroupStyped {...rest} className={className}>
            {children}
        </GroupStyped>
    );
};