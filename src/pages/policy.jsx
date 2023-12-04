import React from 'react';

const AvisoPrivacidad = () => {
    return (
        <div className="w-full flex flex-col items-center  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-200 dark:border-gray-700">
            <form className="space-y-6" action="#">
                <h5 className="text-xl font-medium text-gray-900 dark:text-dark">Aviso de Privacidad</h5>

                <div>
                    <p>
                        <strong>¿Quiénes somos?</strong>
                        <br />
                        EntrenAT
                        <br />
                        Carretera Tuxtla Gutiérrez. - Portillo Zaragoza Km 21+500
                        <br />
                        Col. Las Brisas; CP.29150.
                        <br />
                        Suchiapa, Chiapas, México
                    </p>
                </div>

                <div>
                    <p>
                        <strong>¿Para qué fines utilizaremos sus datos personales?</strong>
                    </p>
                    <p>
                        Los datos personales que recabamos de usted, los
                        utilizaremos para las siguientes finalidades que son
                        necesarias para el servicio que solicita.
                        Finalidad principal A: Generar un historial basado en los datos sobre las
                        “Marcas” dadas, estableciendo parámetros de avance y progreso a lo largo
                        de los meses, gracias a ello podremos generar un perfil general sobre el
                        progreso y evolución del usuario en sus rutinas
                        Finalidad principal B: En base a los datos Biométricos dados y perfil de
                        salud podremos estimar su posición actual con respecto a organizaciones
                        que establecen medidas para la salud, tales como IMC, 1RM, PR - M, PR -
                        (10), teniendo una visión más clara sobre la salud general actual del usuario
                        (Consulte a su médico, no nos hacemos responsables de datos y perfiles
                        generados para el usuario erróneos dados por datos inventados por el
                        usuario en el uso de esta aplicación, estimamos y automatizamos datos que
                        no no dictan enfermedades congénitas, hereditarias y adquiridas por una
                        mala salud, solo damos datos actuales en base a un “ promedio” de salud)
                        De manera adicional, utilizaremos su información personal
                        para las siguientes finalidades que no son necesarias
                        para el servicio solicitado, pero que nos permiten y
                        facilitan brindarle una mejor atención:
                        Finalidad secundaria A : Recolectar los perfiles (datos personales, records,
                        notas, estadísticas y marcas) generados por el uso de la aplicación para uso
                        en métricas y estadísticas de la aplicación, mayor enfoque y uso
                        indiscriminado

                    </p>

                    <p>

                        <strong>
                            Mecanismo de negativa previa al tratamiento de informacion.
                        </strong>

                        <p>Comunicación Escrita: Envíenos una carta indicando su negativa y
                            proporcionando la siguiente información: datos de identificación, como
                            nombre completo, dirección y número de identificación.
                            Importante
                            En caso de Solicitar la negativa después de el uso de la aplicación e
                            ingresión de “marcas” como máximo un día, no será aceptada. La aplicación
                            de negativa no podrá ser un motivo para que le neguemos los servicios
                            dados por esta aplicación.
                            Para conocer mayor información sobre los términos y condiciones en
                            que serán tratados sus datos personales, así como los terceros con
                            quienes compartimos su información personal y la forma en que podrá
                            ejercer sus derechos ARCO, puede consultar el Aviso de Privacidad
                            Integral de EntrenAT.</p>


                    </p>
                </div>

                <div>
                    <p>
                        <strong>Medios para Consultar:</strong>
                        <br />
                        Sitio Web: Visite nuestro sitio web oficial en EntrenAt.com y encuentre el Aviso de Privacidad Integral en la sección de políticas o términos y condiciones
                    </p>
                </div>


            </form>
        </div>
    );
};

export default AvisoPrivacidad;
