const style = {
    headerDiv: {
        background: "grey"
    },
    spanDiv: {
        justifyContent: "right"
    },
    a: {
        textDecoration: "underline"
    }
}

const Header = () => {
    return (
        <>
            <header style={style.headerDiv}>
                <nav>
                    <h1>Dimitri Nakos
                        <span style={style.spanDiv}>
                            <a style={style.a} href="#">Projects </a>
                            <a style={style.a} href="#">About </a>
                            <a style={style.a} href="#">Contact </a>
                        </span>
                    </h1>
                </nav>
            </header>
        </>
    )
}

export default Header;