import "./home.css";
import Img1 from "../../recursos/img/1m.png"
import Img2 from "../../recursos/img/2m.png"
import Img3 from "../../recursos/img/3m.png"
import Img4 from "../../recursos/img/4.png"
import Img5 from "../../recursos/img/5.png"
import Roja from "../../recursos/img/imagenroja(end).png"

function Home() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="Subtitulo text-center">Nuestros cursos</h2>
                        <p className="mt-5 Parrafo text-center">Ofrecemos cursos virtuales de arte gráfica y tipografía, nuestro principal enfoque es brindar herramientas <br /> que le permitan a los usuarios mejorar en sus creaciones artísticas.<br />
                            <br />Buscamos estimular la creatividad en los usuarios, ya que no solemos hacerlo normalmente.<br /><br /> Contamos con los siguientes cursos, en los que podrás adquirir las habilidades que se mencionan, <br /> y crecer tanto de forma artística, como de forma profesionalen tu campo elegido:</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <h2 className="mt-5 Subtitulo text-center">Categorías</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="Dato col">
                        <div className="Texto col-lg-6">
                            <h2 className="mt-5 Subtitulo text-center">Lettering</h2>
                            <p className="Parrafo">El lettering no tiene límites, exprésate y crea con esta herramienta tan artesanal.<br /><br />Disfruta aprendiendo sobre el lettering; el arte de crear a través de las formas, pensarías que el lettering son solo letras, pero no, debemos ver también el lettering como el uso de las formas.</p>
                        </div>
                        <div className="Imagen col-md-16">
                            <img src={Img1} alt="" className="rounded" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="Dato col">
                        <div className="Texto col-lg-6">
                            <h2 className="mt-5 Subtitulo text-center">Arte callejero</h2>
                            <p className="Parrafo">El arte callejero es una excelente expresión de las formas en que podemos manifestarnos en los espacios públicos y culturales.<br /><br />Aprendamos sobre esta técnica tan significativa en comunidades; puede usarse como una valiosa herramienta de trabajo e integración social.</p>
                        </div>
                        <div className="Imagen col-md-6">
                            <img src={Img2} alt="" className="rounded" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="Dato col">
                        <div className="Texto col-lg-6">
                            <h2 className="mt-5 Subtitulo text-center">Dibujo a lápiz con sombras</h2>
                            <p className="Parrafo">El dibujo a lápiz es una sofisticada forma de expresar; le da un toque realista al dibujo, agregándole profundidades . Este método brinda gran impacto visual y es una excelente forma de comenzar en el arte del dibujo.</p>
                        </div>
                        <div className="Imagen col-md-6">
                            <img src={Img3} alt="" className="rounded" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="Dato col">
                        <div className="Texto col-lg-6">
                            <h2 className="mt-5 Subtitulo text-center">Arte surrealista</h2>
                            <p className="Parrafo">Exploraremos lo inconsciente a través de creaciones que se basan en el pensamiento creativo y divergente. Se da un gran uso de imágenes abstractas, que cuentan con un significado profundo. Este apartado es uno de los módulos en el que podrás explorar más tu creatividad, y expresar algo mucho más personal.</p>
                        </div>
                        <div className="Imagen col-md-6">
                            <img src={Img4} alt="" className="rounded" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="Dato col">
                        <div className="Texto col-lg-6">
                            <h2 className="mt-5 Subtitulo text-center">Uso del color</h2>
                            <p className="Parrafo">Lograrás transmitir de forma asertiva tu mensaje, los colores tienen un significado y una connotación, conocer estos significados y saber mezclarlos de forma correcta resulta necesario para destacar lo mejor de nuestras obras.</p>
                        </div>
                        <div className="Imagen col-md-6">
                            <img src={Img5} alt="" className="rounded" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md">
                        <div className="imgfinal">
                            <img src={Roja} alt="Imagen" className="rounded" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;