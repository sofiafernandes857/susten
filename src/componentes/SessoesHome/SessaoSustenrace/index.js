import './Sustenrace.css'
import '../../../variaveis.css'

const SessaoSustenrace = () => {

    return (
        <section className='containerSustenrace'>
            <h1>E onde entra a Sustenrace nessa história?</h1>
            <article 
                className= 'caixaObjetivo'
                >
                <img src= {`${process.env.PUBLIC_URL}/imagens/logo-sustenrace.png`}/>
                <p>
                    O nosso objetivo é proporcionar <strong>experiências inovadoras</strong> e envolventes por meio da interatividade com as corridas.
                </p>
            </article>
        </section>
    )
}

export default SessaoSustenrace
