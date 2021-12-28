import { useEffect, useState } from 'react';
import styles from './maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import { useNavigate } from 'react-router-dom';

const Maker = ( {authService} ) => {
  
  const [cards, setCard] = useState([
    {
      id:'1',
      name:'Ellie',
      company:'Samsung',
      theme:'dark',
      title: 'Software Engineer',
      email: 'eliie@gmail.com',
      message:'go for it',
      fileName:'ellie',
      fileURL:null,
    },
    {
      id:'2',
      name:'pdk',
      company:'SI',
      theme:'light',
      title: 'Software Engineer',
      email: 'pdk@gmail.com',
      message:'go for it',
      fileName:'ellie',
      fileURL: null,
    },  
    {
      id:'3',
      name:'Tete',
      company:'my house',
      theme:'colorful',
      title: 'cute dog',
      email: 'eliie@dogmail.com',
      message:'wooohwowow!',
      fileName:'dog',
      fileURL:'dogcute.com'
    }
  ])

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
          <Editor className={styles.editor} cards={cards}/>
          <Preview className={styles.preview} cards={cards}/>
        </div>
      <Footer/>
    </section>
  )
}

export default Maker;