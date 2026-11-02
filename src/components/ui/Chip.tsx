type Props = {
    label: string;
    active: boolean;
    onClick: () => void;
};

export function Chip({
    label, 
    active,
    onClick
}: Props) {
    return (
        <button
        type="button"
        onClick={onClick}
        aria-pressed={active}
        className={`min-h-11 rounded-full border-2 border-ink px-4.5 py-3 
                    text-medium font-semibold transition 
                    ${active ? "bg-ink text-white" : "bg-paper text-ink hover:bg-blush"}`} >
            {label}
        </button>
    )
}