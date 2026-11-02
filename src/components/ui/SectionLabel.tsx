type Props = {
    number: string;
    label: string;
    tone?: "light" | "dark";
}

export function SectionLabel({ 
    number, 
    label,
    tone ="light"
}: Props) {
   const color = tone ==="dark" ? "text-sage" : "text-rose-deep";
   return (
    <p className={`font-mono text-medium font-semibold ${color}`}>
        {number} / {label}
    </p>
   )
}