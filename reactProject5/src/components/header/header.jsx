import { NavLink } from 'react-router-dom'
import { Photo } from '../../Photo'
import classes from'./header.module.scss'

export default function Header(){
    const active = ({isActive}) => `${classes.navlink} ${isActive ? classes.active : ""}`
    return(
        <>
            <header>
                <nav>
                    <div className={classes.rightNav}>
                        <img src={Photo.worktap} alt="" />
                        <div>
                            <NavLink>Биржа</NavLink>
                            <NavLink>Ворки</NavLink>
                            <NavLink>Конкурсы</NavLink>
                            <NavLink>Создать ворк</NavLink>
                            <NavLink>Создать заказ</NavLink>
                        </div>
                    </div>
                    <div className={classes.leftNav}>
                        <button>Регистрация</button>
                        <button>Войти</button>
                    </div>
                </nav>
            </header>
        </>
    )
}