import styled from "styled-components";

const ButtonStyled = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 40px;
    width: 100px;
    border-radius: 5px;
    color: #fff;

    background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
    box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
`;

export const Button: React.FC<React.ComponentProps<'button'>> = ({
    children,
    ...props
}) => {
    return <ButtonStyled {...props}>{children}</ButtonStyled>;
};