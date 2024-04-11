import React, { ReactNode } from "react";
import styled from "styled-components";

const WrapperStyled = styled.div`
    position: relative;
    display: inline-block;
`;

const IconStyled = styled.div`
    position: absolute;
    top: 12px;
    left: 12px;
    opacity: 0.2;
`;

const FieldStyled = styled.input`
    display: inline-block;
    background-color: #fbf7f7;
    border: 1px solid gray;
    height: 40px;
    border-radius: 5px;
    color: #000;
    padding-left: 40px;
`;

interface FieldProps extends React.ComponentProps<'input'> {
    icon: ReactNode;
}

export const Field: React.FC<FieldProps> = ({
    children,
    icon,
    ...props
}) => {
    return (
        <WrapperStyled>
            <IconStyled>{icon}</IconStyled>
            <FieldStyled {...props} />
        </WrapperStyled>
    );
};