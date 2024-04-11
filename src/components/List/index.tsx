import React from 'react';
import styled from 'styled-components';
import { Title } from './Title';
import { Group } from './Group';

const WrapperStyped = styled.div`
    display: grid;
    width: 300px;
    gap: 10px;
    margin-top: 50px;
`;

const Wrapper: React.FC<& React.ComponentProps<'div'>> = ({
    className,
    children,
    ...rest
}) => {
    return (
        <WrapperStyped {...rest} className={className}>
            {children}
        </WrapperStyped>
    );
};

export const List = {
    Wrapper: Wrapper,
    Group: Group,
    Title: Title,
};