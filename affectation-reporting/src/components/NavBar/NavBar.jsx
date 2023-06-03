import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/app_logo-r.png";

export const NavBar = () => {
   
    const items = [
        { route:'/about-us', name:'Tematica'},
        { route:'/home',     name:'Afectados'},
        { route:'/stats',    name:'Estadisticas'},
        { route:'/map',      name:'Mapa'}
    ];
    const pathName = window.location.pathname;
    console.log('pathName: ',pathName);
    return (
        <header className={style.container}>
            <div className={style.logo}>
               <Link to='/' ><img src={Logo} alt="Logo" width={190}/></Link>
            </div>
            <div className={style.links}>
                {
                    items?.map((item, index) => (
                        <Link to={item.route} key={index} className={pathName===item.route?style.bgWhite:null} >{item.name}</Link>
                    ))
                }
            </div>
        </header>
    )
}