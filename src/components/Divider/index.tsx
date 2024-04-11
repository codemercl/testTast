import { FC, ReactNode } from 'react'
import styled from 'styled-components';

type Props = {
    children: ReactNode;
}

const WrapperStyled = styled.div`
    margin: 20px 0;
    position: relative;
    text-align: center;
    width: 100%;

    &:after {
        content: "";
        position: absolute;
        left: 0;
        top: 20px;
        height: 1.5px;
        width: 100%;
        background: #E2E8F0;
        z-index: -1;
    }
`;

const TextStyled = styled.div`
    display: inline-block;
    z-index: 1;
    background: #fff;
    padding: 0 10px
`;

export const Divider: FC<Props> = ({ children }) => {
    return (
        <WrapperStyled>
            <TextStyled>
                {children}
            </TextStyled>
        </WrapperStyled>
    )
}
