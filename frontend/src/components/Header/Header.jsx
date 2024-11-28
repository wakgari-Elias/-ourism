
import React,{useRef,useEffect} from 'react'
import {Container,Row,Button} from 'reactstrap'
import {NavLink, Link} from 'react-router-dom'
import Logo from '../../assets/images/logo2.png'
import './header.css'


const nav__links=[
  {
    path: '/home',
    display:'Home'

  },
  {
      path: '/about',
    display:'About'

  },
  {
      path: '/tours',
    display:'Tours'
  }
]

const Header = () => {


 const headerRef = useRef(null);

  useEffect(() => {
    const stickyHeaderFunc = () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", stickyHeaderFunc);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", stickyHeaderFunc);
    };
  }, []);




  return (
  <header className='header' ref={headerRef}>
    <Container>
      <Row>
        <div className='nav__wrapper d-flex align-items-center
        justify-content-between'>
          {/* ==========Logo======= */}
          <div className='logo'>
            <img src={Logo} alt='logo'/>

          </div>
          {/* ======== Logo End ======= */}




          {/* ==========Menu Start ======= */}
          <div className='navigation'>
            <ul className='menu d-flex align-items-center gap-5 '>
              {
                nav__links.map((item,index)=>(
                  <li className='nav__item' key={index}>
                    <NavLink to ={item.path}
                        className={navClass=>
                          navClass.isActive ? "active__link" :
                          ""                       
                         }
                      >
                      {item.display}

                    </NavLink>

                  </li>
                ))
              }
              
            </ul>
          </div>
          


          {/* ==========Menu End ======= */}
          <div className='nav__right d-flex align-items-center gap-4'>
            
            <div className='nav__btns d-flex align-items-center gap-4'>
              <Button className='btn secondary__btn'>
                <Link to='/login'>Login</Link> </Button>
              <Button className='btn primary__btn'>
                <Link to='/login'>Register</Link> </Button>
                <span className='mobile__menu'>

                <i class="ri-menu-line"></i>
                </span>
          </div>
          </div>

        

        </div>
      </Row>
    </Container>
  </header>
  )
}

export default Header
                                                                                      