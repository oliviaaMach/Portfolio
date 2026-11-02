type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: "primary" | "secondary" | "outline"
};

const styles = {
    primary: "bg-rose text-ink hover:bg-rose/70",
    secondary: "bg-night",
    outline: "bg-paper text-ink border-2 border-ink hover:bg-paper-light",
};

export function Button ({
    variant ="primary",
    className="",
    ...props
}: Props) {
    return (
        <>
            <a className={`inline-flex min-h-11 items-center 
                            rounded-btn font-semibold transition px-5
                            ${styles[variant]} ${className}`}   
                            {...props }/>
        </>
    )
}