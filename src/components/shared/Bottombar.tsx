import { bottombarLinks } from '@/constants';
import { NavLink, useLocation } from 'react-router-dom';


const Bottombar = () => {
  const { pathname } = useLocation();

  return (
    <section className="bottom-bar">
      {bottombarLinks.map((link) => {
            const isActive = pathname === link.route;

            return (
              
                <NavLink to={link.route} 
                className={`${isActive && 'bg-primary-500 rounded-[10px]'}
                flex-center flex-col gap-1 p-2 transition`} key={link.label} >
                  
                  <img src={link.imgURL} 
                  alt={link.label} 
                  className={`${isActive && 'invert-white'}`}
                  height={16}
                  width={16}/>
                  
                  <p className="tiny-medium text-light-2">
                    {link.label}
                  </p>
                </NavLink>
              
            )
          })}
    </section>
  )
}

export default Bottombar;