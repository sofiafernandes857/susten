import './Recompensas.css'
import '../../../variaveis.css'

const SessaoRecompensas = () => {
    return (
        <section className='containerReco'>
            <h2>E o melhor de tudo:</h2>
            <h1>Você pode ganhar premiações por suas ideias!!!</h1>
            <article className='textosPremios'>
                <p className='p1'>
                    Caso você tenha alguma ideia de inovação e melhoria para a Fórmula E, você tem a oportunidade de enviá-las às escuderias da competição e concorrer a prémios.
                </p>
                <p className='p2'>
                    Se a sua ideia for escolhida em algum momento, além da premiação em dinheiro, você ainda pode receber o convite para participar da implementação dessa melhoria.
                </p>
                <p className='pBorda'>
                    Já imaginou estar ao lado dos engenheiros e mecânicos da Fórmula E e, depois, assistir os carros correndo com uma ideia sua? Um sonho, não é mesmo?
                </p>
                <img src= {`${process.env.PUBLIC_URL}/imagens/ilustracao-tech.svg`}/>
            </article>
        </section>
    )
}

export default SessaoRecompensas