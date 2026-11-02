import { Fragment } from "react/jsx-runtime";
import { stack } from "../../data/about";

export function StackStrip() {
    return (
        <div className="bg-ink px-5 py-4 text-white 
                        md:px-8 md:py-6">
            <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center  gap-x-4 gap-y-2
                            font-display text-large font-medium
                            md:gap-x-9 md:text-large">
                {stack.map((tech, i) => (
                    <Fragment key={tech}>
                        {i > 0 && (
                            <li aria-hidden="true" 
                                className="text-sage">✦</li>
                        )}
                        <li>{tech}</li>
                    </Fragment>
                ))}
            </ul>
        </div>
    )
}