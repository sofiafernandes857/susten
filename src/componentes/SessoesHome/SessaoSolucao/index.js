import CaixaImgText from '../../elementos/CaixaImgText'
import './Solucao.css'
import '../../../variaveis.css'

const SessaoSolucao = () => {
        return (
            <section className='containerSolucao'>
                <h2>Aqui você pode:</h2>
                <article className='caixas'>
                    <CaixaImgText
                            imgSrc= {`${process.env.PUBLIC_URL}/imagens/icon-search.svg`}
                            imgAlt='icone de uma lupa de pesquisar'>
                        <p>
                            Explorar o carro da Fórmula E e entender seu funcionamento, as especificações de suas peças, as inovações por trás do automóvel e as novas tecnologias criadas.
                        </p>
                    </CaixaImgText>
                    <CaixaImgText
                        imgSrc= {`${process.env.PUBLIC_URL}/imagens/icon-compare.svg`}
                        imgAlt='icone que representa a comparação entre dois elementos'>
                        <p>
                            Comparar os carros da Fórmula E e Fórmula 1, entender suas diferenças e semelhanças. 
                        </p>
                    </CaixaImgText>
                </article>
            </section>
        )
}

export default SessaoSolucao