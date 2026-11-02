import classes from './sect2Page1.module.scss'
import { Photo } from '../../../Photo'

export default function Section2(){
    const works = [
        {photo:Photo.work1, title:"Сделать дизайн интернет-магазина", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis..."},
        {photo:Photo.work2, title:"Верстка landing page", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis..."},
        {photo:Photo.work3, title:"Сделать дизайн сайта-каталога и посадить на какой нибудь ко...", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis..."},
        {photo:Photo.work4, title:"Продвижение instagram ", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis..."},
        {photo:Photo.work5, title:"Срочно! Нужен веб дизайнер!", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis..."}
    ];
    return(
        <>
            <section className={classes.section}>
                <div className={classes.container}>
                    <h2>Актуальные ворки</h2>
                    <div className={classes.works}>
                            {works.map((i, index) =>
                                <div className={classes.card} id='card'> 
                                    <div>
                                        <img src={i.photo} alt="" />
                                        <p className={classes.title}>{i.title}</p>
                                    </div>
                                    <p>{i.description}</p>
                                    <button>Посмотреть</button>
                                </div>
                            )}
                            <div className={classes.cardBth}>
                                <button>Смотреть все ворки</button>
                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}