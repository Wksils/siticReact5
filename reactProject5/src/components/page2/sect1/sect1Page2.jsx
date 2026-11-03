import classes from './sect1Page2.module.scss'

export default function Section1(){
    return(
        <>
            <section className={classes.section}>
                <div className={classes.container}>
                    <h1></h1>
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
                </div>
            </section>
        </>
    )
}