import './Bpm.css'
import '../../../variaveis.css'
import Barras from '../../graficos/Barras'
import Botao from '../../elementos/Botao'

const SessaoBPM = () => {
    
    return (
        <section className='containerBPM'>
            <Barras />
            <article className='textoBPM'>
                <h1>Acompanhe a emoção!</h1>
                <p>
                    Veja em tempo real como os batimentos cardíacos dos espectadores reagem às emoções intensas da corrida! O gráfico mostra os picos de adrenalina durante os momentos mais emocionantes da Fórmula E.
                </p>
            </article>
            <div className='botaoBPM'>
                <Botao 
                    span="Ver mais detalhes"
                />
            </div>
        </section>
    )
}

export default SessaoBPM