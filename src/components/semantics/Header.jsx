import { Link } from 'react-router-dom'
import { navData, socialsData } from '../../assets/data/semanticsData'
import logo from '../../assets/images/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <header className='sticky top-0 left-0 z-50 w-full flex items-center justify-between py-2 px-4 shadow-md rounded-b-lg bg-white'>
                <div className="logo">
                    <a href='/'><img src={logo} className='h-[10dvh]' alt="Wedding Bells Logo" /></a>
                </div>
                <div className="nav hidden lg:block">
                    <ul className='flex items-center justify-center'>
                        {navData.map((item, index) => (
                            <li key={index} className='px-5'>
                                <Link to={item.link}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden lg:block">
                    <ul className='flex items-center justify-center'>
                        {socialsData.map((item, index) => (
                            <li key={index} className='px-2'>
                                <a href={item.link} target="_blank" rel="noopener noreferrer">{item.logo}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="menu-icon lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <ArrowBackIcon /> : <MenuIcon />}
                </div>
            </header>
            {isOpen && <ul className='fixed z-999 top-[13dvh] w-full uppercase font-[Roboto Slab] h-screen bg-[#00000055] lg:hidden' onClick={() => setIsOpen(false)}>
                {navData.map((item, index) => (
                    <li key={index} className='bg-[#f8f8f8] p-2 border-b font-semibold border-gray-300'>
                        <a href={item.link}>{item.title}</a>
                    </li>
                ))}
            </ul>}
        </>
    )
}

export default Header