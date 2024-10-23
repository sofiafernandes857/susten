import './Card.css'
import '../../../variaveis.css'

const Card = (props) => {
    return (
        <article className='card'>
            <img 
                src={props.imgSrc}
                alt={props.imgAlt}/>
            <p className='nome'>{props.nome}</p>
            <p className='conteudo'>{props.children}</p>
        </article>
    )
}

export default Card