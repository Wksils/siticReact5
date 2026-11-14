import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Photo } from '../../Photo';
import Modal1 from '../../modals/modal1/modal1';
import classes from './header.module.scss';

export default function Header() {
  // Храним название открытого окна: 'register', 'login' или null
  const [activeModal, setActiveModal] = useState(null);
  const location = useLocation();

  const active = ({ isActive }) => `${classes.navlink} ${isActive ? classes.active : ''}`;

  return (
    <header>
      <nav>
        <div className={classes.rightNav}>
          <img src={Photo.worktap} alt="Worktap" />
          <div>
            <NavLink to="/Page2" className={active}>Биржа</NavLink>
            <NavLink to="/works" className={active}>Ворки</NavLink>
            <NavLink to="/contests" className={active}>Конкурсы</NavLink>
            {location.pathname !== '/Page2' && location.pathname !== '/Page3' && (
              <NavLink to="/create-work" className={active}>Создать ворк</NavLink>
            )}
            <NavLink to="/create-order" className={active}>Создать заказ</NavLink>
          </div>
        </div>

        {location.pathname === '/' && (
          <div className={classes.leftNav}>
            <button onClick={() => setActiveModal('register')}>Регистрация</button>
            <button onClick={() => setActiveModal('login')} className={classes.voiti}>Войти</button>

            {activeModal === 'register' && (
              <Modal1 className={classes.Modaa} onClose={() => setActiveModal(null)}>
                <div className={classes.contain}>
                  <img src={Photo.worktap} alt="Worktap" />
                  <div className={classes.modalInfo}>
                    <p>Давайте создадим Вам аккаунт</p>
                    <h3>Заполните все поля</h3>
                    <div className={classes.modalDiv}>
                      <p>Ваше имя</p>
                      <input placeholder="Имя" type="text" />
                      <p>Ваша фамилия</p>
                      <input placeholder="Фамилия" type="text" />
                      <p>E-mail</p>
                      <input placeholder="E-mail" type="email" />
                      <p>Телефон номер</p>
                      <input placeholder="Телефон" type="tel" />
                      <p>Пароль</p>
                      <input placeholder="Пароль" type="password" />
                      <p>Повторите пароль</p>
                      <input placeholder="Пароль" type="password" />
                      <div className={classes.checkboxes}>
                        <label>
                          <input type="checkbox" name="role" value="executor" /> Я исполнитель
                        </label>
                        <label>
                          <input type="checkbox" name="role" value="customer" /> Я заказчик
                        </label>
                      </div>
                      <button>Зарегистрироваться</button>
                      <p className={classes.a}>
                        У Вас есть аккаунт?{' '}
                        <span
                          style={{ color: '#FBA457', cursor: 'pointer' }}
                          onClick={() => setActiveModal('login')}
                        >
                          Войдите
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Modal1>
            )}

            {activeModal === 'login' && (
              <Modal1 className={classes.Modaa} onClose={() => setActiveModal(null)}>
                <div className={classes.contain}>
                  <img src={Photo.worktap} alt="Worktap" />
                  <div className={classes.modalInfo2}>
                    <p>Добро пожаловать!</p>
                    <h3>Войдите в свой аккаунт</h3>
                    <div className={classes.modalDiv}>
                      <p>E-mail</p>
                      <input placeholder="E-mail" type="email" />
                      <p>Пароль</p>
                      <input placeholder="Пароль" type="password" />
                      <div>
                        <label className={classes.checkboxes}>
                            <input type="checkbox" name="remember" /> Запомнить меня
                        </label>
                        <NavLink to="/forgot-password" style={{ color: '#FBA457' }}>
                            Забыли пароль?
                        </NavLink>
                        </div>
                      <button>Войти</button>
                      <button className={classes.google}>Или войдите с помощю Google</button>
                      <p className={classes.a}>
                        У Вас все еще нет аккауна?{' '}
                        <span
                          style={{ color: '#FBA457', cursor: 'pointer' }}
                          onClick={() => setActiveModal('register')}
                        >
                          Зарегистрируйтесь бесплатно!
                        </span>
                        </p>
                    </div>
                  </div>
                </div>
              </Modal1>
            )}
          </div>
        )}

        {(location.pathname === '/Page2' || location.pathname === '/Page3') && (
          <div className={classes.profile}>
            <div className={classes.imgs}>
              <img src={Photo.star} alt="Избранное" />
              <img src={Photo.bell} alt="Уведомления" />
              <img src={Photo.mes} alt="Сообщения" />
            </div>
            <div className={classes.person}>
              <NavLink to="/Page3" className={active}>Ернар Ибрагимов</NavLink>
              <img src={Photo.ava} alt="Аватар" />
              <img src={Photo.strelkaVniz} alt="Меню" className={classes.strelka} />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
