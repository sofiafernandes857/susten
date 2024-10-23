import './Botao.css'
import '../../../variaveis.css'
import { Link } from 'react-router-dom'

const Botao = (props) => {
    return (
        <Link to={props.rota} className='linkBotao'>
            <button type='button' className='botao'>
                <span>{props.span}</span>
                <img src= {`${process.env.PUBLIC_URL}/imagens/icon-seta.svg`} 
                    alt="Icone de seta" />
            </button>
        </Link>
    )
}

export default Botao