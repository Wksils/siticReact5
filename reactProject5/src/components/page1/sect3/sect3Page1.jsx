import classes from './sect3.module.scss'
import { Photo } from '../../../Photo'

export default function Section3(){
    const ppl = [
        {photo:Photo.user1, name:"Марина Королёва", status:"Разработчик PHP  ", count:"Выполено проектов: 65", stars:Photo.star1},
        {photo:Photo.user2, name:"Семён Сергеев", status:"Копирайтер", count:"Выполено проектов: 104", stars:Photo.star2},
        {photo:Photo.user3, name:"Ангелина Сорокина", status:"Дизайнер сайтов", count:"Выполено проектов: 25", stars:Photo.star3},
        {photo:Photo.user4, name:"Никита Зайцев", status:"Маркетолог", count:"Выполено проектов: 144", stars:Photo.star2},
        {photo:Photo.user5, name:"Наталья Захарова", status:"Motion дизайнер ", count:"Выполено проектов: 71", stars:Photo.star3}
    ];

    return(
        <>
            <section className={classes.section}>
                <div className={classes.container}>
                    <h2>Топ фрилансеров</h2>
                    <div className={classes.cards}>
                        {ppl.map((i, index) =>
                            <div className={classes.card}>
                                <div className={classes.topCont}>
                                    <img src={i.photo} alt="" />
                                    <div>
                                        <p className={classes.name}>{i.name}</p>
                                        <p className={classes.orange}>{i.status}</p>
                                        <p className={classes.count}>{i.count}</p>
                                        <img src={i.stars} alt="" />
                                    </div>
                                </div>
                                <button>Написать</button>
                            </div>
                        )}
                        <div className={classes.cardBth}>
                            <button>Посмотреть всех ТОП фрилансеров</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
