export const TabButton = ({ children, onSelect, isSelected }: any) => {
    return (
        <li>
            <button className={isSelected ? 'active' : ''} onClick={onSelect}>{children}</button>
        </li>
    );
}