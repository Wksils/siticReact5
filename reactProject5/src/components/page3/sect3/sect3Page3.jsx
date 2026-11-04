import classes from './sect3Page3.module.scss'
import { Photo } from '../../../Photo'

export default function Section3(){
    const cards = [
        {photo: Photo.nikita, name:"Никита Евреев", stars: Photo.star2, desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. "},
        {photo: Photo.nikita, name:"Никита Евреев", stars: Photo.star2, desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. "},
        {photo: Photo.nikita, name:"Никита Евреев", stars: Photo.star2, desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. "},
        {photo: Photo.nikita, name:"Никита Евреев", stars: Photo.star2, desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. "},
        {photo: Photo.nikita, name:"Никита Евреев", stars: Photo.star2, desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. "},
        {photo: Photo.nikita, name:"Никита Евреев", stars: Photo.star2, desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. "}
    ];
    return(
        <>
            <section className={classes.section}>
                <div className={classes.container}>
                    <div className={classes.title}>
                        <h2>Отзывы</h2>
                        <div>
                            <p style={{color: '#1DBF73'}}>Положительные (65)</p>
                            <p>Отрицательные(10)</p>
                        </div>
                    </div>
                    <div className={classes.cards}>
                        {cards.map((i) =>
                            <div className={classes.card}>
                                <div className={classes.person}>
                                    <img src={i.photo} alt="" />
                                    <div>
                                        <p>{i.name}</p>
                                        <img src={i.stars} alt="" />
                                    </div>
                                </div>
                                <p>{i.desc}</p>
                            </div>
                        )}
                    </div>
                    <button>Загрузить еще</button>
                </div>
            </section>
        </>
    )
}