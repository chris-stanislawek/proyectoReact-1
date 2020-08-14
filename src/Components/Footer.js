import React from 'react';
import '../assets/styles/Components/Footer.scss'

const Footer = () => {
    return (
        // <div className="footer">
        //     <div className="content">



        //         <ul> 
        //         <li> <a href="/blog"> Blog </a> </li>
        //         <li> <a href="/politica"> Politica de privacidad </a></li>
        //         <li> <a href="/preguntasfrecuentes"> Preguntas frecuentes </a></li>
        //         <li> <a href="/contactanos"> Contactanos </a></li>
        //         </ul>


        //         <p> Seleccionamos trabajos remotos en el departamento de Desarollo Web</p>

        //        <p> 2020 </p>


        <footer className="page-footer font-small blue pt-4">


            <div class="container-fluid text-center text-md-left">

                {/* //</div> Grid row */}
                <div className="row">

                    {/* <!-- Grid column --> */}
                    <div className="col-md-6 mt-md-0 mt-3">

                        {/* <!-- Content --> */}
                        <h5 className="text-uppercase">Remote Unicorns</h5>
                        <p>Seleccionamos trabajos remotos en el departamento de Desarrollo Web</p>

                    </div>
                    {/* <!-- Grid column --> */}

                    <hr className="clearfix w-100 d-md-none pb-3" />

                    {/* <!-- Grid column --> */}
                    <div className="col-md-3 mb-md-0 mb-3">

                        {/* <!-- Links --> */}
                        <h5 className="text-uppercase">Links</h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="#!">Blog</a>
                            </li>
                            <li>
                                <a href="#!">FAQ</a>
                            </li>
                        </ul>

                    </div>
                    {/* <!-- Grid column --> */}

                    {/* <!-- Grid column --> */}
                    <div className="col-md-3 mb-md-0 mb-3">

                        {/* <!-- Links --> */}
                        <h5 className="text-uppercase">Links</h5>

                        <ul class="list-unstyled">

                            <li>
                                <a href="#!">Política de Privacidad</a>
                            </li>
                            <li>
                                <a href="#!">Contacto</a>
                            </li>
                        </ul>

                    </div>
                    {/* <!-- Grid column --> */}


                    {/* <!-- Grid row --> */}

                </div>



                <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://mdbootstrap.com/"> RemoteUnicorns</a>
                </div>
            </div>

        </footer>





    )
}

export default Footer;
