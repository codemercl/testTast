import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { Field } from './Field';
import { Group } from './Group';
import { Header } from './Header';
import { Text } from './Text';

const RootContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    text-align: center;
    margin: 0 auto;
    gap: 10px;

    border: 1px solid #E2E8F0;
    border-radius: 5px;
    padding: 20px;
`;

const Wrapper: React.FC<{ orientation?: 'left' | 'right' } & React.ComponentProps<'div'>> = ({
    className,
    children,
    ...rest
}) => {
    return (
        <RootContainer {...rest} className={className}>
            {children}
        </RootContainer>
    );
};

export const Sign = {
    Wrapper: Wrapper,
    Group: Group,
    Header: Header,
    Text: Text,
    Field: Field,
    Button: Button,
};
