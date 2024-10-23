import './Links.css'

const LinksLinkedin = (props) => {
    return (
        <p className='containerLinks'>
            <a href={props.linkRede} target='_blank'>
                <span className='spanIcon'>
                <img 
                    src= {`${process.env.PUBLIC_URL}/imagens/icon-linkedin.svg`}
                    alt="ícone da logo do linkedin"
                    className='icon'
                />
                </span>
                <span>{props.nome}</span>
            </a>
        </p>
    )
}

export default LinksLinkedin