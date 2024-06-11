
import { Link } from "react-router-dom";
const Header = () => {
    const Links = [
        {label: "Home Page", url: "/Home"},
        {label: "Contact Us", url: "/Contacts"},
        {label: "About Us", url: "/About"},
    ]
    return (
        <nav className="navbar">
            {Links.map(({ label, url}) => (
                <Link to={url} key={url}>
                    {label}
                </Link>
            ))}
        </nav>
    )
}



export default Header;