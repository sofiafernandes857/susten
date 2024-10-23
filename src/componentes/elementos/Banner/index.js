import './Banner.css'

const Banner = () => {
    return (
        <section className='banner'>
            <img src= {`${process.env.PUBLIC_URL}/imagens/img-header.svg`} alt='Imagem da pista de corrida, toda azul e com muitas luzes' />
        </section>
    )
}

export default Banner;