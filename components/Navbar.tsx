import React from 'react'
import styles from "../styles/Navbar.module.css";

import Link from 'next/link';
import Image from "next/image"
import Hamburger from './Hamburger';



const Navbar = () => {

 const [isOpen,setIsOpen]=React.useState(false);

 const toggleOpen=()=>{
  setIsOpen(!isOpen)
 }

 const open=()=>{
  setIsOpen(false)
 }

 React.useEffect(()=>{
  // window.addEventListener("resize",open);


    return () => window.removeEventListener("resize", open);
 

 },[])

  return (
    <header className={styles.header}>
      <div className ={styles.logobox}>
        <div className={styles.logo}> <img src="/logo.png" alt="" /></div>
      </div>
      <nav className={styles.navbar}>
        <ul className={isOpen===true ? styles.menu: styles.menuOpen}>
         
         
          <li className={styles.dropdown}>
            <Link className={styles.menuLink} href="#">Sobre Nós    &nbsp;<i  className={styles.down}/></Link>
              <div className={styles.dropdownContent}>
              <Link className={styles.menuLink} href="#">Quem&nbsp;somos</Link>
              <Link className={styles.menuLink} href="#">Estrutura&nbsp;Organizacional</Link>
              <Link className={styles.menuLink} href="#">Marcas</Link>
              <Link className={styles.menuLink} href="#">Fale Conosco</Link>
              </div>
            </li>
         
          <li className={styles.dropdown}>
            <Link className={styles.menuLink} href="#">Soluções    &nbsp; <i  className={styles.down}/></Link>
              <div className={styles.dropdownContent}>
              <Link className={styles.menuLink} href="#">Produtos&nbsp;de&nbsp;origem&nbsp;Animal</Link>
              <Link className={styles.menuLink} href="#">Compre Aqui</Link>
              </div>
            </li>

          <li className={styles.dropdown}>
            <Link className={styles.menuLink} href="#">Ação/Projeto    &nbsp;<i  className={styles.down}/></Link>
              <div className={styles.dropdownContent}>
              <Link className={styles.menuLink} href="#">Açougue&nbsp;Legal</Link>
              <Link className={styles.menuLink} href="#">Integrar&nbsp;é&nbsp;Somar</Link>
              </div>
            </li>
          <li className={styles.dropdown}>
            <Link className={styles.menuLink} href="#">Inovação    &nbsp; <i  className={styles.down}/> </Link>
              <div className={styles.dropdownContent}>
              <Link className={styles.menuLink} href="#">Projetos&nbsp;de&nbsp;Pesquisa</Link>
              <Link className={styles.menuLink} href="#">Projeto&nbsp;de Desenvolvimento&nbsp;Tecnologico</Link>
              </div>
            </li>
          <li className={styles.dropdown}>
            <Link className={styles.menuLink} href="#">Talentos &nbsp;<i  className={styles.down}></i></Link>
              <div className={styles.dropdownContent}>
              <Link className={styles.menuLink} href="#">Atividades de Estágio</Link>
              <Link className={styles.menuLink} href="#">Ciência e Tecnologia</Link>
              </div>
            </li>
          <li className={styles.dropdown}>
            <Link className={styles.menuLink} href="#">Central Multimídia   &nbsp;<i  className={styles.down}/></Link>
              <div className={styles.dropdownContent}>
              <Link className={styles.menuLink} href="#">Blog</Link>
              <Link className={styles.menuLink} href="#">Vídeos</Link>
              </div>
            </li>

         


          {/* <li><Link className={styles.menuLink} href="#">soluções</Link></li>
          <li><Link className={styles.menuLink} href="#">Acões / Projeto</Link></li>
          <li><Link className={styles.menuLink} href="#">Inovação</Link></li>
          <li><Link className={styles.menuLink} href="#">Talentos</Link></li>
          <li><Link className={styles.menuLink} href="#">Central Multimidia</Link></li> */}
        </ul>
      </nav>
      <Hamburger className={styles.hamburger} toggle={toggleOpen} active={isOpen} />
    </header>
  )
}

export default Navbar