import classes from './mainPage.module.css'
import img1 from './images/3.jpg'
import brand1 from './images/brand1.jpg'
import brand2 from './images/brand2.jpg'
import brandSl1 from './images/brandSl1.jpg'
import brandSl2 from './images/brandSl2.jpg'
import brandSl3 from './images/brandSl3.jpg'
import brandSl4 from './images/brandSl4.jpg'
import brandSl5 from './images/brandSl5.jpg'
import brandSl6 from './images/brandSl6.jpg'
import brandSl7 from './images/brandSl7.jpg'
import brandSl8 from './images/brandSl8.jpg'
import brandSl9 from './images/brandSl9.jpg'
import brand12 from './images/brand12.jpg'
import { useLayoutEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Brand = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
      };
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <div className={classes.Main}>
            <div className = {classes.App}>
                <h1>ОЕ’0613</h1>
            </div>
            <div className={classes.SomeBlock2}>
                    <h3>ОЕ’0613 - Наш бренд одежды для женщин и подростков.</h3>
                    <p>Наши изделия отшиты из премиального футера качество компакт пенье (Турция).</p>

                        <p>Мы выдерживаем высокий уровень качества на любых объемах.</p>

                        <p>Наше производство находится в Нижегородской области город Павлово!</p>
            </div>
            <div className={classes.Cards}>
                <div className={classes.Card2}>
                <img src={img1} alt="123" />
                </div>
                <div className={classes.CardText}>
                    <strong> Создайте свой бренд одежды вместе с нами! </strong>
                    <p>Если у вас есть своя линия одежды , или вы бы хотели составить свой бренд одежды мы готовы помочь вам в этом!</p>
                    <p>Мы можем сделать ваши модели на основе наших лекал и разработок! И внести любые ваши изменения.</p>
                    <p>Также мы работаем с лекалами и тканями заказчика.</p>
                </div>
            </div>
            <h1>Наши работы</h1>
            <div className={classes.Cards}>
                <div className={classes.Slider}>
                    <Slider {...settings}>
                        <div>
                            <img src={brand1} />
                        </div>
                        <div>
                            <img src={brand12}/>
                        </div>
                    </Slider>
                </div>
                <div className={classes.CardText}>
                    <strong> Штаны палаццо женские. </strong>
                    <p>Представлены в 6-ти размерах С 42 по 52 (S-3XL).          
                        Штаны представлены в 2-х расцветках :    
                        чёрные (футер 2-х нитка компакт пенье состав 70%хб.,30%пэ.,).            
                        Молочные (футер 2-х нитка компакт пенье 95%хб 5% лайкра ).
                        </p>
                </div>
            </div>
            <h2></h2>
            <div className={classes.Cards}>
                <div className={classes.Card2}>
                    <img src={brand2} alt="123" />
                </div>
                <div className={classes.CardText}>
                <strong> Свитшот женский </strong>
                    <p>Оверсайз укороченный ,утепленный с начесом, специально созданный для девушек и женщин.
                        Стильный рукав и удобные манжеты .Свитшот пошит из футера 3-х нитка начёс качество компакт пенье .Состав 70%хб.30%пэ.,
                        Представлен в пяти цветах , 2-х размерах S-M (40-46).,L-XL(48-54).,
                        </p>
                </div>
            </div>
            <h2></h2>
            <div className={classes.Cards}>
                <div className={classes.Slider}>
                    <Slider {...settings}>
                        <div>
                            <img src={brandSl1} />
                        </div>
                        <div>
                            <img src={brandSl2}/>
                        </div>
                    </Slider>
                </div>
                <div className={classes.CardText}>
                <strong>Футболка женская в стиле  оверсайз. </strong>
                    <p>Представлена в 2-х цветах ( молочный , чёрный). Состав: 95% хлопок .,5% лайкра .,      
                         Размер единый :42-50.
                        </p>
                </div>
            </div>
            <h2></h2>
            <div className={classes.Cards}>
                <div className={classes.Slider}>
                    <Slider {...settings}>
                        <div>
                            <img src={brandSl4} />
                        </div>
                        <div>
                            <img src={brandSl3}/>
                        </div>
                    </Slider>
                </div>
                <div className={classes.CardText}>
                <strong>Лонгслив женский. </strong>
                    <p>Представлен в 2-х размерах :         42-46(S-M).,48-52(L-XL).           
                        Состав : 95%хлопок .,5% лайкра .                              
                        Лонгслив сшит швами наружу , что делает его стильным и неповторимым !
                        </p>
                </div>
            </div>
            <h2></h2>
            <div className={classes.Cards}>
                <div className={classes.Slider}>
                    <Slider {...settings}>
                        <div>
                            <img src={brandSl5} />
                        </div>
                        <div>
                            <img src={brandSl6}/>
                        </div>
                    </Slider>
                </div>
                <div className={classes.CardText}>
                <strong>Свитшот женский укороченный. </strong>
                    <p>Представлен в 2-х размерах  :        S-M(42-46).     L-XL (48-52).,                 
                        Ткань футер 3 нитки диагональ (качество компакт пенье )       
                        Состав: 70%хлопок .,30% пэ.
                        </p>
                </div>
            </div>
        <h2></h2>
            <div className={classes.Cards}>
                <div className={classes.Slider}>
                    <Slider {...settings}>
                        <div>
                            <img src={brandSl7} />
                        </div>
                        <div>
                            <img src={brandSl8}/>
                        </div>
                        <div>
                            <img src={brandSl9}/>
                        </div>
                    </Slider>
                </div>
                <div className={classes.CardText}>
                <strong>Худи женское  оверсайз. </strong>
                    <p> Карманы в боковых швах!
                        Представлено в 3-х размерах:             
                        Xs.,S.,M.,         
                        Выполнено из футера 3 нитки начёс (качество компакт пенье ) Состав : 70%хлопок 30%пэ.
                        </p>
                </div>
            </div>
        </div>
    )
}

export default Brand;