import classes from './sect1Style.module.scss'
import { Photo } from '../../../Photo'

export default function Section1(){
    return(
        <>
            <section className={classes.section}>
                <div className={classes.container}>
                    <div className={classes.left}>
                        <h1>Покупайте фриланс-услуги в <span style={{color: '#1DBF73'}}>два клика</span></h1>
                        <p className={classes.vorki}>Ворк — единица работы продавца, которую можно купить как товар в магазине </p>
                        <div className={classes.text}>
                            <input type="text" placeholder='Что нужно сделать?' />
                            <button>Найти</button>
                        </div>
                        <div className={classes.choose}>
                            <p>Выберите рубрику, чтобы начать</p>
                            <div>
                                <button>Тексты и переводы </button>
                                <button>Разработка</button>
                                <button>Дизайн</button>
                                <button>Аудио, видео монтаж </button>
                                <button>SEO и оптимизация</button>
                                <button>Бизнес и жизнь</button>
                                <button>Соцсети и реклама</button>
                                <button>Все категории</button>
                            </div>
                        </div>
                    </div>
                    <div className={classes.right}>
                        <img src={Photo.manS1P1} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}