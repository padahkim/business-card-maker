import { useEffect } from 'react';
import styles from './maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
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
        <div className={styles.container}>
          <Editor className={styles.editor}/>
          <Preview className={styles.preview}/>
        </div>
      <Footer/>
    </section>
  )
}

export default Maker;