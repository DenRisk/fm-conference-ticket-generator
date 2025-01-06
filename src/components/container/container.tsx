type ContainerProps = {
    children: React.ReactNode
}

function Container({ children }: ContainerProps) {
    return <div className="max-w-screen-lg mx-auto px-4 sm:px-8 lg:px-16">{children}</div>;
}

export default Container;