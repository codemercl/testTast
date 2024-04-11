interface IconProps extends React.ComponentProps<'img'> {
    children?: React.ReactNode;
}

export const Icon: React.FC<IconProps> = ({ children, ...props }) => {
    if (children) {
        return <>{children}</>;
    }
    return <img {...props} />;
};