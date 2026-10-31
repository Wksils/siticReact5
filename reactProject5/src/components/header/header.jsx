import { Link } from 'react-router-dom'
import { Photo } from '../../Photo'
import './header.scss'

export default function Header(){
    return(
        <>
            <header>
                <nav>
                    <div className="rightNav">
                        <img src={Photo.worktap} alt="" />
                        <div>
                            <Link>Биржа</Link>
                            <Link>Ворки</Link>
                            <Link>Конкурсы</Link>
                            <Link>Создать ворк</Link>
                            <Link>Создать заказ</Link>
                        </div>
                    </div>
                    <div className='leftNav'>
                        <button>Регистрация</button>
                        <button>Войти</button>
                    </div>
                </nav>
            </header>
        </>
    )
}