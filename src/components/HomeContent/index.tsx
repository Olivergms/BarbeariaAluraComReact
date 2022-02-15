
import './styles.scss';
import bannerImg from '../../assets/banner.jpg';
import  beneficiosImg  from '../../assets/beneficios.jpg'
import utensiliosImg from '../../assets/utensilios.jpg';

export function HomeContent(){
    return(
        <>
        <img src={bannerImg} className="banner" alt="Banner Barbearia Alura" />   
            <main>
                
                <section className="about-barbearia">
                    <h2 > Sobre a Barbearia Alura</h2>
                        
                    <div className="about-barbearia__content">
                        <img src={utensiliosImg} alt="Utensilios de um barbeiro." />
                            
                        <div >
                            <p>Localizada no coração da cidade a <strong>Barbearia Alura</strong> traz para o mercado o que há de melhor para o seu cabelo e barba. Fundada em 2019, a Barbearia Alura já é destaque na cidade e conquista novos clientes a cada dia.</p>
            
                            <p id="missao"><em>Nossa missão é: <strong>"Proporcionar auto-estima e qualidade de vida aos clientes"</strong>.</em></p>
                
                            <p>Oferecemos profissionais experientes e antenados às mudanças no mundo da moda. O atendimento possui padrão de excelência e agilidade, garantindo qualidade e satisfação dos nossos clientes.</p>
                        </div>
                            
                    </div>
                </section>            

                <section className="about-location">
                    <h3>Nosso estabelecimento</h3>
                    <p>Nosso estabelecimento está localizado no coração da cidade.</p>


                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.4483278365396!2d-46.63466568562861!3d-23.588249068469487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2b2ed7f3a1%3A0xab35da2f5ca62674!2sCaelum!5e0!3m2!1spt-BR!2sbr!4v1568814489656!5m2!1spt-BR!2sbr" ></iframe>

                </section>

            <section className="benefits">
                <h3 >Benefícios</h3>

                <div >
                    <ul >
                        <li >Atendimento aos Clientes</li>
                        <li>Espaço diferenciado</li>
                        <li >Localização</li>
                        <li >Profissionais Qualificados</li>
                        <li >Pontualidade</li>
                        <li >Limpeza</li>
                    </ul>
                    <img src={beneficiosImg} alt="Imagem Benefícios" />
                </div>

                <iframe src="https://www.youtube.com/embed/wcVVXUV0YUY" ></iframe> 

                
            </section>
        </main>
    </>
    );
}