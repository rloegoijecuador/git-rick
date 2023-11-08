import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import './styles/CardResidents.css'


const CardResidents = ({url}) => {

     const [resident,getResident]=useFetch(url)

     useEffect(() =>{
        getResident()
     },[]);

//console.log(resident);
  return (
    <article className="resident">
      <header className="resident__headre">
        <img  className="resident__image" src={resident?.image} alt="" />
        <div>
          <div className={`resident__satus-circle ${resident?.estatus}`}></div>
          <span className="resident__status-value">{resident?.estatus}</span>
        </div>
      </header>
      <article className="resident__body">
        <h3 className="resident__name">{resident?.name}</h3>
        <hr className="resident__separador"/>
        <ul className="resident__state">
          <li className="resident-state-leves"><span>species: <span></span>{resident?.species}</span></li>
          <li className="resident-state-leves"><span>origin: <span></span>{resident?.origin.name}</span></li>
          <li className="resident-state-leves"><span>episodes where apear: <span></span>{resident?.episode.length}</span></li>
        </ul>
      </article>
    </article>
  )
}

export default CardResidents