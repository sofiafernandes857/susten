import Banner from '../elementos/Banner';
import AbaForum from '../SessoesHome/AbaForum';
import Footer from '../Footer';
import Header from '../Header';
import SessaoBPM from '../SessoesHome/SessaoBPM';
import SessaoFormulaE from '../SessoesHome/SessaoFormulaE';
import SessaoImpactos from '../SessoesHome/SessaoImpactos';
import SessaoRecompensas from '../SessoesHome/SessaoRecompensas';
import SessaoSolucao from '../SessoesHome/SessaoSolucao';
import SessaoSustenrace from '../SessoesHome/SessaoSustenrace';
import SessaoUniao from '../SessoesHome/SessaoUniao';
import CarroHome from '../SessoesHome/CarroHome';
import SustenStore from '../SessoesHome/SustenStore';

function Home() {
    return (
        <div className="Home">
            <section id='home'>
                <Header />
            </section>
            <Banner />
            <section id='formulaE'>
                <SessaoFormulaE />
            </section>
            <section id='impactos'>
                <SessaoImpactos />
            </section>
            <section id='sustenrace'>
                <SessaoSustenrace />
            </section>
            <section>
                <SessaoUniao />
            </section>
            <section id='produtos'>
                <SessaoSolucao />
            </section>
            <section>
                <SessaoRecompensas />
            </section>
            <section id='carro'>
                <CarroHome />
            </section>
            <section id='store'>
                <SustenStore />
            </section>
            <section id="bpm">
                <SessaoBPM />
            </section>
            <section id='forum'>
                <AbaForum />
            </section>
            <Footer />
        </div>
    );
}

export default Home;
