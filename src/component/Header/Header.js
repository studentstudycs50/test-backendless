import tabs from '../../tabs.json';
import { NavLink } from "react-router-dom";
import HeaderStyled from './HeaderStyled'

const Header = () => {
    return(
        <HeaderStyled>
            <header role="banner">
                <nav className="header" role="navigation" aria-label="Navigation">
                    <ul className="header__list">
                        {tabs.map(({id, title}) => (
                            <li className="header__item" key={id}>
                                <NavLink className="header__item-link"
                                         to={id}
                                >
                                    {title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </HeaderStyled>
    )
}

export default Header
