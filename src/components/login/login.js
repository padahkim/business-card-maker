import { useEffect } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ authService }) => {
  const navigate = useNavigate();
  const goToMaker = (userId) => {
    navigate(
      '/maker',
      { state: {id: userId} });
  }

  const onLogin = (event) => {
    authService
      .login(event.currentTarget.textContent)
      .then(data => goToMaker(data.user.uid))  
      .catch((error) => {
        console.log(error)
      });
  }

  useEffect(() => {
    authService
      .onAuthChange(user => {
        user && goToMaker(user.uid);
      })
  })

  return (
    <section>
      <Header />
      <section className={styles.login}>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>Google</button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>Github</button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  )
}

export default Login;