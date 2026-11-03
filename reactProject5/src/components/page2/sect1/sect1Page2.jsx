import { Photo } from '../../../Photo'
import classes from './sect1Page2.module.scss'

export default function Section1(){
    return(
        <>
            <section className={classes.section}>
                <div className={classes.container}>
                    <h1>Ищите и находите подходящую работу среди <br /><span style={{color: '#1DBF73'}}>10,000+</span> проектов и покажите на что Вы способны!</h1>
                    <div className={classes.text}>
                        <input type="text" placeholder='Какую работу ищите?' />
                        <button>Найти</button>
                    </div>
                    <div className={classes.choose}>
                        <button>Тексты и переводы </button>
                        <button>Разработка</button>
                        <button>Дизайн</button>
                        <button>Аудио, видео монтаж </button>
                        <button>SEO и оптимизация</button>
                        <button>Бизнес и жизнь</button>
                        <button>Соцсети и реклама</button>
                        <button>Все категории</button>
                    </div>
                    <h2>Ниже все заказы по <span style={{color: '#1DBF73'}}>дизайну</span></h2>
                    <img src={Photo.strelkaVnizZel} alt="" />
                </div>
            </section>
        </>
    )
}