var propuestas = null
//propuestas (titulo, propuesta, ramas, idCandidato, idPArtido)
function CargarPropuestas()
{
propuestas = [

//Ignacio peralta
Propuesta("Empleo", 'Programa "Manos a la obra" es una estrategia de compromisos y acciones para obtener empleos, una de las grandes demandas de los colimenses. Se impulsará una serie de acciones que permitirán atraer inversiones y generar opciones de trabajo, para que la población tenga una oportunidad de superación a través de un empleo digno y bien remunerado, también existe la necesidad que la gente que ya tiene empleo tenga un mejor salario y corresponda a su nivel de preparación, experiencia, habilidad y empeño.', temas.PLANEAMIENTO_URBANO, 0, 0),
Propuesta("Seguridad", 'El programa "Seguridad integral" jugará un papel fundamental en la estrategia de gobierno, así como en la definición de acciones y políticas públicas. Se invertirá en los cuerpos policíacos, para equiparlos y entrenarlos mejor, además de una serie de medidas para dar la certeza que se logrará el objetivo.', temas.SEGURIDAD, 0, 0),
Propuesta("Combate a la probreza", 'Se definirán acciones para generar las condiciones que eliminen la problemática de la falta de alimento, vivienda o servicios, a través de becas, programas sociales y ayuda alimentaria.', temas.ECONOMIA, 0, 0),
Propuesta("Infraestructura", 'Contar con más y mejor infraestructura de todo tipo. De comunicación, transporte, recreativa y productiva, que permita impulsar el desarrollo económico de Colima, así como la atracción de inversiones que conlleven a la generación de empleos. Con el Programa "Infraestructura para el desarrollo", se gestionará incrementar, ampliar y mejorar las carreteras, se impulsará el desarrollo portuario para que Manzanillo siga siendo el motor del crecimiento económico y se traduzca en efectos positivos en la calidad de vida de los colimenses.', temas.TRANSPORTE, 0, 0),
Propuesta("Campo", 'Se propondrá una serie de acciones que permitirán remediar las problemáticas relacionadas a plagas, financiamiento para la producción y comercialización y apoyar a los trabajadores a recuperar y sanar su principal fuente de ingresos. Buscando, por todos los medios, poner a su disposición las herramientas necesarias para dar un mayor valor agregado a sus productos, así como acceso a nuevos mercados.', temas.ECONOMIA, 0, 0),
Propuesta("Educación", 'Se asegurará que exista una formación de calidad con el programa "Educación para todos", para ello se apoyará al magisterio, de manera que puedan brindar un servicio óptimo a jóvenes y niños colimenses. Mientras se tengan mejores planes de estudio, se tendrá la posibilidad de que Colima pueda volver a ser un estado en crecimiento y con mayor competitividad a nivel nacional e internacional.', temas.EDUCACION, 0, 0),
Propuesta("Turismo", 'Se impulsará de manera decidida al sector turístico como una estrategia fundamental para el desarrollo económico de la entidad.', temas.ECONOMIA, 0, 0),
Propuesta("Salud", 'Priorizar el abasto de medicamentos y la mejora continua del sector salud, así como la existencia de personal médico que brinde servicios rápidos y de calidad, evitando las horas de espera por parte de los pacientes para ser atendidos, así como un trato digno a los mismos.', temas.SALUD, 0, 0),

// Jorge Luis preciado
Propuesta("Rescatar a Colima de la inseguridad", 'Se creará una policía con rostro humano. Se hará un frente común para combatir la drogadicción, y así reconstruir el tejido social.', temas.SEGURIDAD, 1, 0 ),
Propuesta("Mejor preparación de policias", 'La Policía de Colima será reconocida en todo México por su preparación, adiestramiento, equipamiento y por defender y respetar siempre los Derechos Humanos de todas las personas, sin importar su origen, condición social o económica.', temas.SEGURIDAD, 1, 0 ),
Propuesta("Sistema de respuesta inmediata", "Brindar atención pronta y oportuna a las llamadas de auxilio, denuncias y crisis en cuestión de segundos, aprovechando correctamente los avances tecnológicos, la geolocalización, mapas delincuenciales e inteligencia policíaca. Nunca más, un colimense recibirá auxilio de manera tardía", temas.SEGURIDAD, 1, 0 ),
Propuesta("Sin deudas", 'Se resolverá la crisis financiera del gobierno estatal y de los gobiernos municipales, además de darle viabilidad a la propuesta de desarrollo.', temas.ECONOMIA, 1, 0 ),
Propuesta("Más y mejores ingresos", 'Habrá orden, transparencia, eficiencia y control en el gasto, pero también una nueva e importante fuente de ingresos para el estado, a través de la riqueza que genera para el fisco federal el puerto de Manzanillo.', temas.ECONOMIA, 1, 0 ),
Propuesta("Transparencia", 'Habrá una revisión exhaustiva en el gasto del gobierno estatal desde 1997 a la fecha, pues el pueblo de Colima tiene todo el derecho de conocer la verdad, sólo así habrá justicia, los habitantes de Colima deben conocer la verdad', temas.ECONOMIA, 1, 0 ),
Propuesta("Justicia", 'Perseguir a funcionarios delincuentes, para destituirlos y hacerles que regresen los recursos a los ciudadanos.', temas.SOCIEDAD, 1, 0 ),
Propuesta("Fortalecimiento de la justicia", "Se instaurará en Colima el Sistema Estatal Anticorrupción, sostenido en cuatro pilares: la Auditoría Superior, la Contraloría del Estado, una Fiscalía Especializada en la materia y un Consejo Ciudadano de ética pública. Con este sistema, todos estarán atentos y al tanto del manejo, de la aplicación correcta de los recursos que son de los colimenses.", temas.SOCIEDAD, 1, 0 ),
Propuesta("Más oportunidad a familias colimenses", 'Ningún familiar ocupará la titularidad de organismos tan importantes como lo es el DIF. Se le devolverá el sentido para el cual fue creado: apoyar el desarrollo de las familias colimenses y no de las familias de los gobernantes', temas.SOCIEDAD, 1, 0 ),
Propuesta("Más transparencia", 'Terminar con la opacidad y discrecionalidad con la que se han manejado los recursos derivados del impuesto al 2 por ciento sobre nómina, el Sefidec; a través de un comité cuyas sesiones serán transmitidas vía internet, revisaremos que esos recursos se inviertan correctamente.', temas.ECONOMIA, 1, 0 ),
Propuesta("Apoyemos al turismo", 'Se gestionarán obras a fin de impulsar sector turistico en tres zonas: la volcánica, la de balnearios y la de playas. Se emprenderá el programa de promoción turística más importante que se haya realizado para difundir las bellezas naturales de Colima y los servicios que ofrecen nuestras tres zonas turísticas, así como el mega proyecto Nuevo Manzanillo, que será un relanzamiento de los sitios que colindan con este importante destino.', temas.ECONOMIA, 1, 0 ),
Propuesta("Queremos puros alumnos de 10", 'Se apoyará a los estudiantes para que solamente se preocupen por estudiar, para buscar incrementar el rendimiento de todos los jovenes.', temas.EDUCACION, 1, 0 ),
Propuesta("Bajo el mismo techo", 'Implementar el programa Bajo el mismo techo, el cual con gestiones ante la Federación será el programa de vivienda más importante en la historia de Colima, que se enfocará en ayudar a más de 30 mil familias de la entidad.', temas.VIVIENDA, 1, 0 ),
Propuesta("Buen uso de recursos", 'El futuro deseable es llegar a la cero emisión de contaminantes en Colima, el gobierno pondrá la primera piedra instrumentando políticas públicas y programas encaminados a que las generaciones futuras alcancen a disfrutar de una nueva realidad en materia ecológica', temas.MEDIO_AMBIENTE, 1, 0 ),
Propuesta("Equidad de genero", 'Que las mujeres aspiren a la igualdad en todos los cargos de los sectores público y privado para que la mujer se inserte en igualdad de condiciones y, sobre todo, de número a la actividad de nuestra organización social.', temas.ECONOMIA, 1, 0 ),
Propuesta("Un compromiso con los 10 municipios", 'En Armería, poner en funcionamiento el hospital regional; en Comala, cuidar el medio ambiente; en Colima, sacar vías del tren de la ciudad; en Coquimatlán, construir un gran polideportivo; en Cuauhtémoc, remodelar del centro histórico y mejorar la fisonomía de Quesería, En Manzanillo ampliar libramiento a cuatro carriles hasta la comunidad de El Naranjo; en Minatitlán, construir muro en el cerro Los Copales; en Ixtlahuacán, construir el hospital; en Tecomán, evitar inundaciones, y en Villa de Álvarez, gestionar un auditorio para 12 mil personas', temas.PLANEAMIENTO_URBANO, 1, 0 ),

//Martha Maria Zepeda 
Propuesta("Educación", "Garantizar alimentación, educación gratuita desde preescolar hasta nivel profesional.",  temas.EDUCACION, 2, 0),
Propuesta("Salud", "Mejorar los servicios de salud y abastecimiento de medicinas.",  temas.SALUD, 2, 0),
Propuesta("Derechos Humanos", "Procurar los derechos humanos de las personas.",  temas.DERECHOS_HUMANOS, 2, 0),
Propuesta("Inversión", "Promover la inversión, detonar con eficiencia al sector turístico.",  temas.ECONOMIA, 2, 0),
Propuesta("Seguridad", "Volver a Colima una entidad segura y reducir la deuda pública.",  temas.SEGURIDAD, 2, 0),
Propuesta("Eliminaremos el fuero constitucional", 'Las acciones contra el interés público, la corrupción, el tráfico de influencias y la malversación de fondos públicos serán tipificadas como delitos graves y sin derecho a fianza. Se eliminará el fuero constitucional, que ha sido la principal causa de la impunidad que existe en el estado y el país.',temas.INSTITUCIONAL,2, 0),
Propuesta("Sistema Estatal Anticorrupción", 'Se creará la figura de testigo social para observar todas las adquisiciones hechas por las entidades públicas, así como el Observatorio Ciudadano para tener un índice de transparencia y rendición de cuentas que orienten el ejercicio del gasto público.', temas.INSTITUCIONAL, 2, 0),
Propuesta("Declaración patrimonial obligatoria desde el primer día", 'La declaración patrimonial, fiscal y de conflicto de interés será obligatoria y pública desde el primer día que los funcionarios públicos asuman el cargo.', temas.INSTITUCIONAL, 2, 0),
Propuesta("Conversión del DIF a Secretaría de la Familia ",'La Secretaría de la Familia, tendrá mayores facultades que el DIF, donde se atenderá de manera amplia y plural el concepto de familia y se buscará una política pública que incida en favor de la familia colimense y la niñez',temas.SOCIEDAD, 2, 0),


//José Francisco Gallardo
Propuesta("Seguridad", 'Buscar el respeto de las autonomías comunitarias, la cuales son la base para restablecer la seguridad. No se trata de tener más policías o cárceles sino de hacer una sociedad organizada con base al respeto a los derechos humanos.',  temas.SEGURIDAD, 4, 0),

//Carlos Barbazán 
Propuesta("Todos juntos", 'Se Logrará una sinergia con las diferentes instituciones médicas como el IMSS, ISSSTE, Seguro Popular, con el objetivo de que se atienda cualquier emergencia de la población sin importar la institución', temas.SALUD, 5, 0),
Propuesta("Igualdad", 'Para las personas con capacidades diferentes se requiere tener una conexión con fundaciones con el fin de gestionar aparatos para que puedan mejorar su calidad de vida', temas.DERECHOS_HUMANOS, 5, 0),
Propuesta("Empleos", 'Atraer fuentes empleo con maquiladoras gracias a la instalación de dos empresas armadoras de vehículos a partir de julio en Colima, que brindarán 10 mil empleos.', temas.ECONOMIA, 5, 0),
Propuesta("Mayor seguridad", 'Los policías tendrán mayor capacidad y habrá más elementos porque en la actualidad son insuficientes. Se crearán escuelas de policías donde los agentes sean colimenses con la vocación de servir', temas.SEGURIDAD, 5, 0),
Propuesta("Educación gratuita", 'La educación debe ser gratuita y de tiempo completo, desde guarderías hasta primarias, donde deberán contemplar médicos que resguarden la integridad de los estudiantes.', temas.EDUCACION, 5, 0),
Propuesta("Deporte y cultura", 'Alejar a los jóvenes de situaciones que pongan en riesgo su vida como las adicciones', temas.PLANEAMIENTO_URBANO, 5, 0),


// Gerardo Galván
Propuesta("Adiós financiamientos", 'Acabar con los financiamientos a los partidos políticos y que las campañas le cuesten por igual a todos los involucrados, de tal forma que los recursos públicos sean usados en beneficio de la gente.', temas.ECONOMIA, 6, 0),
Propuesta("Mejorar seguridad, educación y salud", 'Se logrará con una actitud más responsable de parte de los funcionarios, generar una conciencia con valores que permitan que haya mejores policías, mejor trato o atención a la población, así como atender las necesidades de obra o de ayuda a los estudiantes.', temas.PLANEAMIENTO_URBANO, 6, 0),

// Leoncio Alfonso Morán
Propuesta("El primer eje", 'Implementar un correcto uso de los recursos, transparencia y rendición de cuentas.', temas.ECONOMIA, 7, 0),
Propuesta("El segundo eje", 'Recuperar la tranquilidad en los espacios públicos y políticas de prevención del delito.', temas.SEGURIDAD, 7, 0),
Propuesta("El tercer eje", 'Revocación del mandato, a los 3 años se hará una audiencia para poder revocar el mandato si no se hace un buen gobierno.', temas.SOCIEDAD, 7, 0),
Propuesta("El cuarto eje", 'Cambiar la historia con educación y cultura; útiles y uniformes escolares gratuitos; comedores, infraestructura para eventos de cultura y becas para estudiantes.', temas.EDUCACION, 7, 0),
Propuesta("El quinto eje", 'Ofrecer oportunidades y apoyos para grupos vulnerables.', temas.ECONOMIA, 7, 0),
Propuesta("El sexto eje", 'Dar un servicio de salud de calidad a los colimenses.', temas.SALUD, 7, 0),
Propuesta("El septimo eje", 'Ofrecer un desarrollo económico sustentable para el mantenimiento y creación Pymes, incentivando la creación de empleos formales al derogar el impuesto del 2 por ciento a la nómina.', temas.ECONOMIA, 7, 0),
Propuesta("El octavo eje", 'Tratar de invertir en la obra pública donde más se necesita.', temas.ECONOMIA, 7, 0),


// David Munro
Propuesta("Central de abastos", 'Fomentar la comercialización de los productos de los agricultores colimenses a través de la creación de una central de abastos, además de otorgarles apoyos financieros, asesoría legal y comercial por medio de consultores agropecuarios y asociaciones incentivadas por el gobierno', temas.ECONOMIA, 3, 0),
Propuesta("Comercialización nacional e internacional", 'Promovier bodegas construídas y administradas por el gobierno del estado, en dónde se apoyará con la comercialización nacional e internacional, logrando liquidez y pagando un salario justo para los trabajadores para con ello poder otorgarles seguridad social y vivienda incentivando su economía.', temas.ECONOMIA, 3, 0),
Propuesta("Carreras en formación de policías", 'Prestaciones y salarios adecuados para los policías. Contar con instituciones educativas tanto públicas o privadas que den carreras o licenciaturas en formación de policías y también en procuradores de justicia.', temas.SEGURIDAD, 3, 0),
Propuesta("Patrullaje día y noche", 'Promover el patrullaje día y noche en todas las colonias de todo el estado.', temas.SEGURIDAD, 3, 0),
Propuesta("Abasto de medicamentos", 'Garantizar el abasto de medicamentos a costo accesible y/o gratuitos para atender a la población no asegurada.', temas.SALUD, 3, 0),
Propuesta("Construccion de centros de salud", 'Adecuar y construir centros de salud en comunidades y zonas donde no se cuenta con las condiciones adecuadas y además tendrán profesionales de la salud que presten servicio todos los días de la semana otorgando a las comunidades rurales, ambulancias para el funcionamiento continuo de los servicios de salud.', temas.SALUD, 3, 0)





];
}
