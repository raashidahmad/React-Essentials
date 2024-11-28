export const Tabs = ({buttons, children, ButtonsContainer = "menu"}: any) => {
    return (
        <>
        <ButtonsContainer>
            {buttons}
        </ButtonsContainer>
        {children}
        </>
    )
}