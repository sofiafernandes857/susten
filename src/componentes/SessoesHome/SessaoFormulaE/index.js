import './SessaoFormulaE.css'
import '../../../variaveis.css'

const SessaoFormulaE = () => {
    return (
        <section className='containerFormula'>
            <article className='textoFormula'>
                <h1>O que é a Fórmula E?</h1>
                <p>A Fórmula E é um campeonato mundial de automobilismo, organizado pela FIA, em que os carros são elétricos e as corridas acontecem em circuitos urbanos. O ponto de destaque é que os carros elétricos utilizados na competição não emitem poluentes atmosféricos durante o seu funcionamento, o que desempenha um papel crucial na redução da poluição do ar e na luta contra as mudanças climáticas.</p>
            </article>
            <div className='containerImg'>
                <img 
                    src={`${process.env.PUBLIC_URL}/imagens/img-formulaE.svg`}
                    alt='Foto de um carro da fórmula E vermelho'
                    className='imgFormula'/>
            </div>
            
        </section>
    )
}

export default SessaoFormulaE