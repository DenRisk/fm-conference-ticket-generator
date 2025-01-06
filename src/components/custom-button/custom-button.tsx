
export type CustomButtonProps = {
    children: React.ReactNode,
    type?: 'button' | 'submit' | 'reset',
    fullWidth?: boolean,
    onClick?: () => void,
    disabled?: boolean,
    maxWidth?: number
}

export default function CustomButton({children, type, fullWidth, onClick, disabled, maxWidth}: CustomButtonProps) {
    return (
        <button
            disabled={disabled}
            className={`bg-primary-500 text-neutral-900 rounded-[12px] pt-4 pb-4 pl-6 pr-6 text-custom-5-bold hover:bg-primary-700 focus-visible:bg-primary-700 text-center disabled:bg-neutral-500 ${fullWidth ? 'w-full' : ''}`}
            onClick={onClick}
            style={{ maxWidth: `${maxWidth}px` }}
            type={type}
        >
            {children}
        </button>
    )
}