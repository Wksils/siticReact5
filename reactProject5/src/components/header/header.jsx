import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { Photo } from '../../Photo'
import { useState } from 'react';
import Modal1 from '../../modals/modal1/modal1';
import classes from'./header.module.scss'

export default function Header(){
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const active = ({isActive}) => `${classes.navlink} ${isActive ? classes.active : ""}`
    return(
        <>
            <header>
                <nav>
                    <div className={classes.rightNav}>
                        <img src={Photo.worktap} alt="" />
                        <div>
                            <NavLink to='/Page2' className={active}>Биржа</NavLink>
                            <NavLink>Ворки</NavLink>
                            <NavLink>Конкурсы</NavLink>
                            {location.pathname !== '/Page2' && location.pathname !== '/Page3' && (
                                <NavLink>Создать ворк</NavLink>
                            )}
                            <NavLink>Создать заказ</NavLink>
                        </div>
                    </div>
                    {location.pathname === '/' && (
                        <div className={classes.leftNav}>
                            <button>Регистрация</button>
                            <button onClick={() => setOpen(true)} className={classes.voiti}>Войти</button>
                            {open && (
                                <Modal1 onClose={() => setOpen(false)}>
                                    <button>asd</button>
                                </Modal1>
                            )}
                        </div>
                    )}
                    {(location.pathname === '/Page2' || location.pathname === '/Page3') &&(
                        <div className={classes.profile}>
                            <div className={classes.imgs}>
                                <img src={Photo.star} alt="" />
                                <img src={Photo.bell} alt="" />
                                <img src={Photo.mes} alt="" />
                            </div>
                            <div className={classes.person}>
                                <NavLink to='/Page3' className={active}>Ернар Ибрагимов</NavLink>
                                <img src={Photo.ava} alt="" />
                                <img src={Photo.strelkaVniz} alt="" className={classes.strelka}/>
                            </div>
                        </div>
                    )}
                </nav>
            </header>
        </>
    )
}