import classes from './footer.module.scss'
import { NavLink } from 'react-router-dom'
import { Photo } from '../../Photo'

export default function Footer(){
    const active = ({isActive}) => `${classes.navlink} ${isActive ? classes.active : ""}`
    return(
        <>
            <footer>
                <div className={classes.container}>
                    <div className={classes.topCont}>
                        <ul>
                            <li><p>Топ категории</p></li>
                            <li><NavLink>Тексты и переводы</NavLink></li>
                            <li><NavLink>Разработка</NavLink></li>
                            <li><NavLink>Дизайн</NavLink></li>
                            <li><NavLink>Аудио, видео монтаж</NavLink></li>
                            <li><NavLink>Соцсети и реклама</NavLink></li>
                            <li><NavLink>Бизнес и жизнь</NavLink></li>
                            <li><NavLink>SEO и оптимизация</NavLink></li>
                        </ul>
                        <ul>
                            <li><p>О Проекте</p></li>
                            <li><NavLink>О Нас</NavLink></li>
                            <li><NavLink>Как Это Работает</NavLink></li>
                            <li><NavLink>Политика Приватности</NavLink></li>
                            <li><NavLink>Правила Пользования </NavLink></li>
                            <li><NavLink>Пресса о нас</NavLink></li>
                        </ul>
                        <ul>
                            <li><p>Поддержка</p></li>
                            <li><NavLink>Контакты</NavLink></li>
                            <li><NavLink>Политика Безопасности</NavLink></li>
                            <li><NavLink>FAQ</NavLink></li>
                        </ul>
                        <div className={classes.endDiv}>
                            <p>Follow</p>
                            <div>
                                <img src={Photo.facebook} alt="" />
                                <img src={Photo.twitter} alt="" />
                                <img src={Photo.insta} alt="" />
                                <img src={Photo.linkedin} alt="" />
                            </div>
                        </div>
                    </div>
                    <p className={classes.niz}>Copyright @ 2021  |  WorkTap – Worktap.KZ. All Rights Reserved</p>
                </div>
            </footer>
        </>
    )
}