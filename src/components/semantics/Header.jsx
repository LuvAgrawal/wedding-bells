import { Link } from 'react-router-dom'
import { navData } from '../../assets/data/semanticsData'
import logo from '../../assets/images/logo.png'

const Header = () => {
    return (
        <>
            <header>
                <div className="logo">
                    <img src={logo} alt="Wedding Bells Logo" />
                </div>
                <div className="nav">
                    <ul>
                        {navData.map((item, index) => (
                            <>
                                <li key={index}>
                                    <Link to={item.link}>{item.title}</Link>
                                </li>
                            </>
                        ))}
                    </ul>
                </div>
                <div className="socials">
                    <ul>
                        {socialsData.map((item, index) => (<>
                            <li key={index}>
                                <Link to={item.link} target="_blank" rel="noopener noreferrer">{item.logo}</Link>
                            </li>
                        </>))}
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header