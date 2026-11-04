import classes from './sect2Page3.module.scss'
import { Photo } from '../../../Photo';

export default function Section2(){
    const cards = [
        {img: Photo.siteDesign, title:"Дизайн сайта", price:"50 000 тенге"},
        {img: Photo.siteDesign, title:"Дизайн сайта", price:"50 000 тенге"},
        {img: Photo.siteDesign, title:"Дизайн сайта", price:"50 000 тенге"},
        {img: Photo.siteDesign, title:"Дизайн сайта", price:"50 000 тенге"},
        {img: Photo.siteDesign, title:"Дизайн сайта", price:"50 000 тенге"},
        {img: Photo.siteDesign, title:"Дизайн сайта", price:"50 000 тенге"},
        {img: Photo.siteDesign, title:"Дизайн сайта", price:"50 000 тенге"},
        {img: Photo.siteDesign, title:"Дизайн сайта", price:"50 000 тенге"},
        {img: Photo.siteDesign, title:"Дизайн сайта", price:"50 000 тенге"},
        {img: Photo.siteDesign, title:"Дизайн сайта", price:"50 000 тенге"},
        {img: Photo.siteDesign, title:"Дизайн сайта", price:"50 000 тенге"}
    ];
    return(
        <>
            <section className={classes.section}>
                <div className={classes.container}>
                    <h2>Мой ворки</h2>
                    <div className={classes.cardCont}>
                        <div className={classes.card}>
                            <button>
                                <div>
                                    <img src={Photo.plus} alt="" />
                                    <h3>Создать ворк</h3>
                                </div>
                            </button>
                        </div>
                        {cards.map((i) =>
                            <div className={classes.card}>
                                <img src={i.img} alt="" />
                                <div className={classes.cardDiv}>
                                    <p className={classes.title}>{i.title}</p>
                                    <p className={classes.price}>{i.price}</p>
                                </div>
                            </div>
                        )}
                    </div>
                    <button>Загрузить еще</button>
                </div>
            </section>
        </>
    )
}