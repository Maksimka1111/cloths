import classes from './mainPage.module.css'
import { useLayoutEffect } from 'react';
import { YMaps, Map } from '@pbe/react-yandex-maps';

const Contacts = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <div className={classes.Main}>
            <div className={classes.App}>
                <h1>Наши контакты</h1>
            </div>
            <div className={classes.SomeBlock2}>
                <p>Наше производство находится в г. Павлово, ул. Чапаева, д. 43, Нижегородская область, Российская федерация</p>
            </div>
            <div className={classes.Lists}>
            <div className={classes.Map}>
                    <YMaps>
                        <div>
                            <Map width='759px' height='590px'  defaultState={{ center: [55.966594, 43.082887], zoom: 17 }} />
                        </div>
                    </YMaps>
                </div>
                <div className={classes.ListItem}>
                    <h3>E-mail</h3>
                    <a href="mailto:13oe06@inbox.ru" target='blank'>13oe06@inbox.ru</a>
                    <h3>Производство</h3>
                    <a href="tel:+79648303009">+7-903-058-80-88</a>
                    <p><a href='https://wa.me/+79030588088' target='blank'>Написать в WhatsApp</a></p>
                    <h3>Cотрудничество </h3>
                    <a href="tel:+79202944449" target='black'>+7-920-294-44-49</a>
                    <p><a href='https://wa.me/+79202944449' target='blank'>Написать в WhatsApp</a></p>
                </div>
            </div>
            <div className={classes.SomeBlock2}>
                <p>РЕЖИМ РАБОТЫ:</p>

                <p>Вторник – суббота: 8:00–17:00</p>

                <p>Понедельник, Воскресенье: выходной</p>
            </div>
        </div>
    )
}

export default Contacts