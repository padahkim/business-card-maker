import { useEffect } from 'react';
import styles from './maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useNavigate } from 'react-router-dom';


const Maker = ( {authService} ) => {
  const onLogout = () => {
    authService.logout();
  };
  const navigate = useNavigate();

  useEffect(() => {
    authService
      .onAuthChange(user => {
        if (!user) {
          navigate('/');
        }
      });
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout}/>
      <Footer/>
    </section>
  )
}


export default Maker;