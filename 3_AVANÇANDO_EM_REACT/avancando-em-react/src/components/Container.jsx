const Container = ({children, prop}) => {
    return (
        <>
            <h2>Este é o container</h2>
            {children}

            <h3>esta é a prop: {prop}</h3>
        </>
    )
}

export default Container