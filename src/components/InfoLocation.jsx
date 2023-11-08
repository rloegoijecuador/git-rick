import './styles/infolocation.css'

const InfoLocation = ({location}) => {
  return (
    <article className='location'>
        <h2 className='location__name'>{location?.name}</h2>
        <ul className='location__info'>
            <li className='location__lavel'><span className='location__value'>type: <span></span>{location?.type}</span></li>
            <li className='location__lavel'><span className='location__value'>dimension: <span></span>{location?.dimension}</span></li>
            <li className='location__lavel'><span className='location__value'>population: <span></span>{location?.residents.length}</span></li>
        </ul>
    </article>
  )
}

export default InfoLocation