import { FC, ReactNode } from "react"
import styled from "styled-components";

type Props = {
    children: ReactNode
}

const WrapperStyped = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
`;

export const Layout: FC<Props> = ({ children }) => {
    return (
        <WrapperStyped>{children}</WrapperStyped>
    )
}
