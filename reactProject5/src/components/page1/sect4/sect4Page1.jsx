import classes from './sect4Page1.module.scss'
import { Photo } from '../../../Photo'

export default function Section4(){
    return(
        <>
            <section className={classes.section}>
                <div className={classes.container}>
                    <h2>Как решать задачи на WorkTap?</h2>
                    <p>Идеально подходит для бизнеса и частных лиц</p>
                    <div className={classes.tasks}>
                        <div>
                            <img src={Photo.task1} alt="" />
                            <h3>Выберите услугу</h3>
                            <p>В супермаркете WorkTap представлен широкий выбор услуг от квалифицированных специалистов.</p>
                        </div>
                        <div>
                            <img src={Photo.task2} alt="" />
                            <h3>Оплатите</h3>
                            <p>Деньги будут перечислены продавцу после того, как он выполнит работу, и вы её одобрите. </p>
                        </div>
                        <div>
                            <img src={Photo.task3} alt="" />
                            <h3>Получите результат</h3>
                            <p>Наш супермаркет гарантирует вам возврат средств в полном объёме в случае невыполнения заказа.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}