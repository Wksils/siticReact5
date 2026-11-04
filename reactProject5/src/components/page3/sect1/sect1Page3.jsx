import classes from "./sect1Page3.module.scss"
import { Photo } from "../../../Photo"

export default function Section1(){
    return(
        <>
            <section className={classes.section}>
                <div className={classes.container}>
                    <button className={classes.btn}>
                        <div>
                            <p>Быстрый поиск ворков</p>
                            <p>&gt;</p>
                        </div>
                    </button>
                    <div className={classes.left}>
                        <h4>Дизайнер </h4>
                        <h1><span style={{color: '#1DBF73'}}>Ернар</span> Ибрагимов</h1>
                        <p>Работаю дизайнером с 1999 года. <br /> Был опыт в газетах, журналах, типографиях, рекламных агентствах, издательских домах... Порядка 8 лет, занимаюсь логотипами и фирменными стилями.</p>
                        <div className={classes.choose}>
                            <button>Figma</button>
                            <button>Adobe photoshop</button>
                            <button>Adobe illustrator</button>
                            <button>Corel draw</button>
                            <button>Adobe After Effects</button>
                            <button>HTML/CSS</button>
                        </div>
                        <div className={classes.info}>
                            <p>Показать подробную информацию</p>
                            <img src={Photo.strelkaVniz} alt="" />
                        </div>
                    </div>
                    <div className={classes.right}>
                        <img src={Photo.ernar} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}