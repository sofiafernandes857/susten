import EstruturaImpactos from "../../elementos/EstruturaImpactos"
import './Impactos.css'
import '../../../variaveis.css'

const SessaoImpactos = () => {
    return (
        <section className="containerImpactos">
            <h1>A Fórmula E é o Futuro!</h1>
            <EstruturaImpactos
                imgSrc= {`${process.env.PUBLIC_URL}/imagens/img-sustentabilidade.svg`}
                imgAlt= "Foto de lâmpadas">
                    <article>
                        <h2>Sustentabilidade</h2>
                        <p>A Fórmula E está mudando o futuro dos carros de corrida, devido a sustentabilidade que oferece, usando motores elétricos.</p>
                    </article>
            </EstruturaImpactos>
            <EstruturaImpactos
                imgSrc= {`${process.env.PUBLIC_URL}/imagens/img-inovacao.svg`}
                imgAlt= "Foto de livros">
                    <article>
                        <h2>Inovação</h2>
                        <p>É o que a Fórmula E representa, sempre inovando com seus carros elétricos e baterias de alta performance.</p>
                    </article>
            </EstruturaImpactos>
            <EstruturaImpactos
                imgSrc= {`${process.env.PUBLIC_URL}/imagens/img-competitividade.svg`}
                imgAlt= "Foto ">
                    <article>
                        <h2>Competitividade</h2>
                        <p>Um dos fatores que torna a categoria mais emocionante e divertida. Usando carros de alto desempenho, focando na eficiência.</p>
                    </article>
            </EstruturaImpactos>
        </section>
    )
}

export default SessaoImpactos