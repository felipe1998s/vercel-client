import React from 'react'
import style from './Loading.module.css'
const Loading = () => {
  return (
    <div className={style.block}>
      <img src="https://api.clubpasaportepremium.com//img/icons/cargando.gif" alt="loader"/>
      <h2>Cargando...</h2>
    </div>
  )
}

export default Loading