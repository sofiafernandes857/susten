import './Caixa.css'
import '../../../variaveis.css'

const CaixaImgText = (props) => {
    return (
        <article
            className= "caixaImg">
                <img src={props.imgSrc} alt={props.imgAlt} />
                <p>
                    {props.children}
                </p>
        </article>
    )
}

export default CaixaImgText