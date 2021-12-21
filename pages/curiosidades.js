import style from '../styles/curiosidades.module.css'
import Image from 'next/image'

export default function Curiosidades() {
    return (
        <>
            <div className={style.curiosidades}>
                <h1>Curiosidades</h1>
                <div className={style.curiosidades_content}>

                    <div className={style.curiosidades_item}>
                        <h1>Engenheiros do MIT produzem bateria de fibra flexível mais longa do mundo</h1>
                        <div className={style.curiosidades_item_content}>
                            <Image
                                src="/images/cientista.jpg"
                                width={300}
                                height={300}
                                className={style.curiosidades_img}
                            />
                              <div className={style.curiosidades_txt}>
                            <p>A bateria de íons de lítio recarregável, na forma de uma fibra ultra longa de 140 metros,
                                pode ser fiada como um tecido e permitir uma ampla variedade de dispositivos eletrônicos
                                vestíveis. Além disso, a técnica pode ser utilizada para produzir baterias impressas em 3D
                                em praticamente qualquer formato, bem como dispositivos cujas baterias funcionem como peças
                                estruturais. As informações são do site MIT News.</p>
                                </div>
                        </div>
                    </div>

                    <div className={style.curiosidades_item}>
                        <h1>Cientistas conseguem ver como raios se formam dentro de nuvens pela primeira vez</h1>
                        <div className={style.curiosidades_item_content}>
                            
                            <div className={style.curiosidades_txt}>
                            <p>A LOFAR, uma rede de milhares de pequenos radiotelescópios na Holanda, utilizada para estudar
                                estrelas e galáxias distantes, conseguiu captar cerca de um milhão de pulsos de rádio que
                                emanavam de relâmpagos durante uma tempestade. A partir dos dados obtidos, os cientistas
                                conseguiram reconstruir pela primeira vez uma imagem 3D de um raio se formando. As informações
                                são do site Quanta Magazine.</p>
                                </div>
                                <Image
                                src="/images/raios.jpg"
                                width={300}
                                height={300}
                                className={style.curiosidades_img}
                            />
                        </div>
                    </div>

                    <div className={style.curiosidades_item}>
                        <h1>TikTok supera Google e torna-se site mais popular do mundo em 2021</h1>
                        <div className={style.curiosidades_item_content}>
                            <Image
                                src="/images/tiktok.png"
                                width={300}
                                height={300}
                                className={style.curiosidades_img}
                            />

                            <div className={style.curiosidades_txt}>
                                <p>No ano passado, a rede social havia ficado em sétimo lugar em tráfego. Os acessos ao Google
                                    contabilizam acessos a subpáginas como Maps, Tradutor, Fotos, Flights, Livros, Notícias,
                                    entre outros. O domínio do Facebook ficou em terceiro lugar geral. As informações são do
                                    blog da Cloudflare.</p>
                            </div>
                        </div>

                    </div>

                    <div className={style.curiosidades_item}>
                        <h1>Cientistas desenvolvem nova técnica de fabricação que pode criar enxame de drone-insetos</h1>
                        <div className={style.curiosidades_item_content}>

                            <div className={style.curiosidades_txt}>
                                <p>Os servomecanismos que impulsionam esses microrrobôs, “músculos artificiais” que batem rapidamente como asas de um inseto, agora suportam 80% mais carga útil. Esses pequenos drones têm como potencial a polinização de plantações ou auxiliar em operações de resgate em meio a escombros de um prédio desabado. As informações são do site MIT News.</p>
                            </div>
                        
                            <Image
                                src="/images/droneinseto.jpg"
                                width={300}
                                height={300}
                                className={style.curiosidades_img}
                            />

                        </div>

                    </div>

                </div>
                <p>Referências: Filipe Deschamps Newsletter</p>
            </div>
        </>
    )
}