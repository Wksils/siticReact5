import classes from './sect2Page2.module.scss'
import { Photo } from '../../../Photo'

export default function Section2(){
    const card = [
        {title:"Нужно сделать Дизайн сайта по тематике авто", name:"Екатерина Иванова", projects:"Размещено проектов на бирже: 25", stars:Photo.star2, reviews:"15 отзывов", price:"Бюджет: 50 000 тенге", time:"4 часа 28 минут назад", photo:Photo.user1, offers:"Предложений: 50"},
        {title:"Нужно сделать Дизайн сайта по тематике авто", name:"Екатерина Иванова", projects:"Размещено проектов на бирже: 25", stars:Photo.star2, reviews:"15 отзывов", price:"Бюджет: 50 000 тенге", time:"4 часа 28 минут назад", photo:Photo.user1, offers:"Предложений: 50"},
        {title:"Нужно сделать Дизайн сайта по тематике авто", name:"Екатерина Иванова", projects:"Размещено проектов на бирже: 25", stars:Photo.star2, reviews:"15 отзывов", price:"Бюджет: 50 000 тенге", time:"4 часа 28 минут назад", photo:Photo.user1, offers:"Предложений: 50"},
        {title:"Нужно сделать Дизайн сайта по тематике авто", name:"Екатерина Иванова", projects:"Размещено проектов на бирже: 25", stars:Photo.star2, reviews:"15 отзывов", price:"Бюджет: 50 000 тенге", time:"4 часа 28 минут назад", photo:Photo.user1, offers:"Предложений: 50"},
        {title:"Нужно сделать Дизайн сайта по тематике авто", name:"Екатерина Иванова", projects:"Размещено проектов на бирже: 25", stars:Photo.star2, reviews:"15 отзывов", price:"Бюджет: 50 000 тенге", time:"4 часа 28 минут назад", photo:Photo.user1, offers:"Предложений: 50"},
        {title:"Нужно сделать Дизайн сайта по тематике авто", name:"Екатерина Иванова", projects:"Размещено проектов на бирже: 25", stars:Photo.star2, reviews:"15 отзывов", price:"Бюджет: 50 000 тенге", time:"4 часа 28 минут назад", photo:Photo.user1, offers:"Предложений: 50"},
        {title:"Нужно сделать Дизайн сайта по тематике авто", name:"Екатерина Иванова", projects:"Размещено проектов на бирже: 25", stars:Photo.star2, reviews:"15 отзывов", price:"Бюджет: 50 000 тенге", time:"4 часа 28 минут назад", photo:Photo.user1, offers:"Предложений: 50"},
        {title:"Нужно сделать Дизайн сайта по тематике авто", name:"Екатерина Иванова", projects:"Размещено проектов на бирже: 25", stars:Photo.star2, reviews:"15 отзывов", price:"Бюджет: 50 000 тенге", time:"4 часа 28 минут назад", photo:Photo.user1, offers:"Предложений: 50"},
        {title:"Нужно сделать Дизайн сайта по тематике авто", name:"Екатерина Иванова", projects:"Размещено проектов на бирже: 25", stars:Photo.star2, reviews:"15 отзывов", price:"Бюджет: 50 000 тенге", time:"4 часа 28 минут назад", photo:Photo.user1, offers:"Предложений: 50"},
        {title:"Нужно сделать Дизайн сайта по тематике авто", name:"Екатерина Иванова", projects:"Размещено проектов на бирже: 25", stars:Photo.star2, reviews:"15 отзывов", price:"Бюджет: 50 000 тенге", time:"4 часа 28 минут назад", photo:Photo.user1, offers:"Предложений: 50"}
    ];
    return(
        <>
            <section className={classes.section}>
                <div className={classes.container}>
                    <div className={classes.head}>
                        <h2>65 проектов по дизайну</h2>
                        <div>
                            <input type="text" placeholder='Минимальная цена'/>
                            <p>-</p>
                            <input type="text" placeholder='Максимальная цена'/>
                            <button>По возрастанию цены  v</button>
                        </div>
                    </div>
                    <div className={classes.main}>
                        {card.map((i) =>
                            <div className={classes.card}>
                                <div className={classes.left}>
                                    <h3>{i.title}</h3>
                                    <div className={classes.info}>
                                        <img src={i.photo} alt="" />
                                        <div className={classes.asd}>
                                            <p>{i.name}</p>
                                            <p>{i.projects}</p>
                                            <div>
                                                <img src={i.stars} alt="" />
                                                <p>{i.reviews}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.right}>
                                    <div className={classes.top}>
                                        <h3>{i.price}</h3>
                                        <p>{i.time}</p>
                                    </div>
                                    <p>{i.offers}</p>
                                </div>
                            </div>
                        )}
                    </div>
                    <button className={classes.dsa}>Загрузить еще</button>
                </div>
            </section>
        </>
    )
}