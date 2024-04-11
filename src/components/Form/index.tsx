import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { Field } from './Field';
import { Icon } from './Icon';

const RootContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;

    text-align: center;
    margin: 0 auto;
    gap: 10px;
    max-width: 300px;
    width: 100%;
`;

const Group: React.FC<{ orientation?: 'left' | 'right' } & React.ComponentProps<'form'>> = ({
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

export const Form = {
    Group: Group,
    Icon: Icon,
    Field: Field,
    Button: Button,
};
