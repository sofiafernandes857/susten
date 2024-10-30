import './Footer.css'
import LinksLinkedin from '../elementos/LinksLinkedin'
import '../../variaveis.css'

const Footer = () => {
    return (
        <footer className='footer'> 
            <section className='sessaoLinks'>
                <article className='redesSociais'>
                    <LinksLinkedin 
                        linkRede="https://www.linkedin.com/in/bruna-candeias-566a18269?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BweGP6I2BSJK3NJA93IqF0A%3D%3D"
                        nome="Bruna Candeias"
                    />
                    <LinksLinkedin 
                        linkRede="https://www.linkedin.com/in/sofia-fernandes-f?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B5k5ey7IPTnGP8%2FL5g5BnSw%3D%3D"
                        nome="Sofia Fernandes"
                    />
                    <LinksLinkedin 
                        linkRede="https://www.linkedin.com/in/ali-andrea-0b41522ab?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkLEU9NxOR4%2BsHpdUg34VbA%3D%3D"
                        nome="Ali Andrea"
                    />
                    <LinksLinkedin 
                        linkRede="https://www.linkedin.com/in/laurasdc?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BK8oBk%2FNqQ%2F6MZIPuKy5gdQ%3D%3D"
                        nome="Laura Souza"
                    />
                </article>
                <article className='linksSite'>
                    <a href='#formulaE'>Fórmula E</a>
                    <a href='#impactos'>Impactos da Corrida</a>
                    <a href='#sustenrace'>Sustenrace</a>
                    <a href='#produtos'>Produtos</a>
                    <a href='#carro'>Carro 3D</a>
                    <a href='#store'>SustenStore</a>
                    <a href='#bpm'>Batimentos Cardíacos</a>
                    <a href='#forum'>Fórum</a>
                </article>
            </section>
            <section className='direitos'> 
                <p>
                    SustenRace © 2024.  Todos os  direitos  reservados.
                </p>
            </section>
        </footer>
    )
}

export default Footer