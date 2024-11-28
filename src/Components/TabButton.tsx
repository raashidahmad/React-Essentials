export const TabButton = ({ children, ...props }: any) => {
    return (
        <li>
            <button className={props.isSelected ? 'active' : ''} {...props}>{children}</button>
        </li>
    );
}