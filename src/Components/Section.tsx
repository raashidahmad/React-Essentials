export const Section = ({ title, children, ...props }: any) => {
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}