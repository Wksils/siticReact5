import classes from './sect5Page1.module.scss'
import { Photo } from '../../../Photo'

export default function Section5(){
    return(
        <>
            <section className={classes.section}>
                <div className={classes.container}>
                    <div className={classes.info}>
                        <h2>Как WorkTap помогает бизнесу?</h2>
                        <div className={classes.cardInfo}>
                            <div>
                                <img src={Photo.creditCard} alt="" />
                                <p>Оплачивайте с р/с или карты компании</p>
                            </div>
                            <div>
                                <img src={Photo.money} alt="" />
                                <p>Экономьте до 87% бюджета на фрилансе</p>
                            </div>
                            <div>
                                <img src={Photo.clock} alt="" />
                                <p>Экономьте до 75% времени на решении фриланс задач</p>
                            </div>
                        </div>
                        <p>WorkTap — быстро, просто и безопасно!</p>
                        <button>Начать!</button>
                    </div>
                </div>
            </section>
        </>
    )
}