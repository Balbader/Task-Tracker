const Header = (props) => {
    return (
        <header>
            <h1>{props.title} {props.name}, we are glad to see that you are only {props.age} years old</h1>
        </header>
    )
}

export default Header
