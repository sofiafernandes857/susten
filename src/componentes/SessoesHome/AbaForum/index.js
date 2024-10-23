import './Forum.css'
import '../../../variaveis.css'
import Card from '../../elementos/Card'
import Botao from '../../elementos/Botao'

const AbaForum = () => {
    return(
        <section className='containerForum'>
            <h1>Junte-se à comunidade de apaixonados por velocidade!</h1>
            <p className='subtitulo'>Faça parte da nossa comunidade e compartilhe sua paixão pelo automobilismo.</p>
            <article className='cards'>
                <Card
                    imgSrc= {`${process.env.PUBLIC_URL}/imagens/foto-forum-1.svg`}
                    imgAlt="Foto do piloto Jordan King"
                    nome="Jordan King">
                        <p>
                            “Os carros da Fórmula E estão evoluindo rapidamente! A nova geração tem uma eficiência energética incrível.”
                        </p>
                </Card>
                <Card
                    imgSrc= {`${process.env.PUBLIC_URL}/imagens/foto-forum-2.svg`}
                    imgAlt="Foto do piloto Edoardo Mortara"
                    nome="Edoardo Mortara">
                        <p>
                            “Eu adoro as pistas urbanas da Fórmula E! Elas dão um toque único e aproximam a corrida do público.”
                        </p>
                </Card>
                <Card
                    imgSrc={`${process.env.PUBLIC_URL}/imagens/foto-forum-3.svg`}
                    imgAlt="Foto do piloto Nyck de Vries"
                    nome="Nyck de Vries">
                        <p>
                            “É impressionante como a Fórmula E está influenciando o desenvolvimento de carros elétricos comerciais.”
                        </p>
                </Card>
            </article>
            <Botao span="Fazer parte da comunidade"/>
        </section>
    )
}

export default AbaForum