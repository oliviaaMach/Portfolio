import "./Section.css"

type SectionVariant = "primary-bg" | "secondary-bg"

type SectionProps = {
    children: React.ReactNode
    variant?: SectionVariant
    className?: string
    id?: string
}

export default function Section({
    children,
    variant= "primary-bg",
    className= "",
    id,
}: SectionProps) {
    return (
        <section id={id} className={`section section--${variant} ${className}` }>
            <div className="section__inner">
                {children}
            </div>
        </section> 
    )
}