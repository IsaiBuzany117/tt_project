import Homelayout from 'components/layouts/homelayout'

const Privacidad = () => {
    return (
        <Homelayout title='Política de Privacidad'>
            <h1 className='text-center text-2xl pt-4 pb-2'>Política de Privacidad de BLOCKHEALTH</h1>
            <div className='px-72 py-4'>
                <h2 className='py-1 font-bold text-lg'>Introducción</h2>
                <p>
                    BLOCKHEALTH es un prototipo de sistema enfocado en la gestión de expedientes médicos,
                    que requiere recopilar diferentes datos de carácter personal de los usuarios, para su
                    funcionamiento óptimo.
                    Los datos proporcionados por nuestros usuarios estarán clasificados en dos grupos.
                </p>
                <span className='py-1 italic font-semibold'>Datos personales relacionados con la cuenta creada</span>
                <p className='pl-16'>Si una persona desea crear una cuenta en nuestro prototipo deberá proporcionar datos
                    personales como su nombre, fecha y estado de nacimiento, nacionalidad, sexo y
                    CURP; así mismo, datos de dirección y contacto como entidad, municipio y
                    localidad de referencia, correo electrónico, contraseña y teléfono.
                    <br />
                    En el caso específico de los médicos, se pedirán datos relacionados al área médica,
                    como su especialidad, años de experiencia, cédula profesional, cédula profesional de
                    la especialidad, ubicación del consultorio y el precio de la consulta.
                </p>
                <span className='py-1 italic font-semibold'>Datos personales que serán integrados y almacenados en el expediente médico.</span>
                <p className='pl-16'>
                    Si un usuario desea generar su expediente, tendrá que acudir a consulta con alguno de
                    nuestros médicos registrados, para que, por medio de un interrogatorio, el médico
                    ingrese información del paciente referente a su identificación y estado de salud a
                    nuestro prototipo.
                </p>
                <br />
                <h2 className='py-1 font-bold text-lg'>Legalidad y tratamiento de los datos recopilados</h2>
                <span className='py-1 italic font-semibold'>Datos personales relacionados con la cuenta creada</span>
                <p>
                    Los datos mencionados, a excepción de la contraseña, son los datos mínimos requeridos para
                    la identificación de personas de acuerdo con la NOM-024-SSA3-2012, Del expediente
                    clínico electrónico, por esta razón son los mínimos obligatorios para poder dar de alta a un
                    usuario en nuestro prototipo.
                    <br />
                    Debido a que actualmente solo se aceptarán médicos de manera individual, es decir que no
                    se manejarán instituciones o clínicas en general, los datos relacionados al área médica son
                    una adecuación de los datos Exclusivos para prestadores de servicios de salud federales,
                    abordados en la NOM-024-SSA3-2012.
                    <br />
                    Este grupo de datos será almacenado en una base de datos con la finalidad de identificar a
                    nuestros usuarios y asegurar que cuenten con un solo expediente, ya que solo podrán
                    registrarse una vez. Esta base de datos será utilizada para los procesos relacionados con la
                    cuenta, como el login, confirmación, configuración de cuenta y cambio de contraseña.
                </p>
                <br />
                <span className='py-1 italic font-semibold'>Datos personales que serán integrados y almacenados en el expediente médico</span>
                <p>
                    Los datos que se encuentren en esta sección deben cumplir obligatoriamente con el apartado
                    6.1 de la Norma NOM-004-SSA3-2012, del expediente clínico, de lo contrario el expediente
                    no podrá generarse, y aunque los apartados 6.2 y 6.3 de la misma Norma, estarán igualmente
                    contemplados en el diseño del expediente, quedarán a consideración del médico. Es
                    importante mencionar que, una vez que todos los datos se hayan ingresado y el expediente
                    se haya creado, el paciente recibirá un código de acceso de un solo uso que podrá compartir
                    si así lo requiere/desea.
                    <br />
                    A diferencia de los datos relacionados con la cuenta, estos serán almacenados en la cadena
                    de bloques (blockchain), por lo que se encontrarán resguardados y no serán modificables, a
                    menos que el paciente (titular del expediente) dé su previa autorización, de esta manera se
                    realizará una transacción para efectuar el cambio.

                </p>
                <br />
                <h2 className='py-1 font-bold text-lg'>Uso de cookies</h2>
                <p>
                    Nuestro prototipo requiere hacer uso de un identificador para autenticar el inicio de sesión,
                    es decir que por motivos de seguridad se almacenará este dato en el navegador para verificar
                    que solo usuarios registrados puedan acceder y hacer uso de este, a excepción de la página
                    principal y búsqueda de médicos, las cuales son públicas.
                    <br />
                    Al ser un proceso obligatorio, el no aceptar la presente Política de Privacidad, hará que el
                    usuario no pueda usar las demás funcionalidades.
                </p>
                <br />
                <h2 className='py-1 font-bold text-lg'>Derechos ARCO y plazo de conservación</h2>
                <p>
                    Los usuarios tendrán acceso libre a su información, a menos que exista un problema técnico
                    o su cuenta haya sido bloqueada por motivos de seguridad. En el primer caso, se le notificará
                    al usuario el tiempo estimado en que se reparará y en el caso particular de las actualizaciones
                    que requieran que el prototipo deje de operar temporalmente se le informará por lo menos
                    una semana antes. En el segundo caso, se le enviará un correo electrónico para informarle la
                    razón de la suspensión y la forma en que puede reactivarla.
                    <br />
                    Si se requiere hacer algún cambio en los datos de la cuenta, estos podrán ser modificados en
                    la sección Configuración de cuenta, sin embargo, algunos datos como el nombre, la fecha de
                    nacimiento, nacionalidad, sexo, especialidad, CURP y cédulas, no podrán ser editados
                    directamente en esta interfaz, por lo que se le pide a los usuarios verificarlos con detenimiento
                    antes de darse de alta, ya que en caso de error en la captura tendrá que solicitar su corrección
                    vía correo electrónico al equipo técnico indicando el motivo para su cambio.
                    <br />
                    La cuenta podrá cancelarse si el usuario así lo desea en cualquier momento, eliminándose
                    todo registro de nuestra base de datos de manera definitiva en un plazo de 3 meses; una vez
                    pasado ese tiempo, no podrá acceder con sus credenciales y deberá registrarse nuevamente.
                    En el caso particular del acceso al expediente médico, en primera instancia, solo lo tendrán
                    el paciente y el médico que lo haya creado, sin embargo, si otro médico requiere acceder, el
                    paciente le compartirá el código de un solo uso y nuestro prototipo generará automáticamente
                    otro código por seguridad. Cabe aclarar que el médico podrá sugerir cambios o
                    actualizaciones al expediente, siempre que le sean notificados al paciente.
                    <br />
                    Es importante señalar que al eliminar su cuenta y debido a la naturaleza de la cadena de
                    bloques, el usuario no podrá eliminar su expediente de la cadena, sin embargo, podrá elegir
                    que ya no se pueda acceder a el.
                    Para ambos grupos de datos si el usuario se opone a algún tratamiento de los antes descritos
                    y ya tiene una cuenta creada, deberá enviar un correo con los motivos por los cuales se opone;
                    si es posible resolver la situación se realizarán las acciones necesarias, pero si interfieren con
                    la funcionalidad del prototipo, ya no podrá hacer uso de este, por lo que la cuenta y los datos
                    deberán ser eliminados para evitar mayor conflicto.

                </p>
                <br />
                <h2 className='py-1 font-bold text-lg'>Seguridad</h2>
                <p>
                    Una de las medidas de seguridad utilizadas en nuestro prototipo es el cifrado de la
                    información, el cual es aplicado a la información de las cuentas de los usuarios y a la hora de
                    guardar nuestro expediente médico, este último al estar en la cadena de bloques cuenta con
                    otra protección gracias a la forma en que ésta funciona.
                    También se aplica la autenticación al iniciar sesión, por lo que solo personas registradas
                    podrán acceder a su información y a las demás funcionalidades del prototipo. Así mismo, el
                    expediente solo podrá ser accedido por aquellos que cuentan con la autorización del titular
                    (paciente), como está descrito en el apartado anterior.
                    En caso de olvido o extravío de la contraseña, el usuario deberá dirigirse al apartado
                    <span className='italic'> ¿Olvidaste tu contraseña?</span>, para que el equipo técnico se comunique a través del correo
                    registrado. Por motivos de seguridad no se compartirán datos personales o de contacto, así
                    que es importante que el usuario recuerde el correo registrado.
                </p>
                <br />
                <h2 className='py-1 font-bold text-lg'>Tipos de usuarios y responsabilidades</h2>
                <p>
                    Nuestros usuarios deben de contar con 18 años cumplidos o más para poder usar una cuenta
                    en nuestro prototipo. En caso de que un menor de edad requiera usarlo, el padre o tutor será
                    el encargado y responsable de la cuenta creada.
                    En nuestro prototipo existirán 2 tipos de usuarios:
                </p>
                <span className='py-1 italic font-semibold'>Paciente</span>
                <p className='pl-16'>
                    Se registrará en el formulario <span className='italic'>Regístrate como Paciente</span> y contará con las vistas de
                    página principal, búsqueda de médicos, inicio, configuración de cuenta, recuperación
                    o modificación de contraseña, datos generales y expediente médico.
                </p>
                <span className='py-1 italic font-semibold'>Médico</span>
                <p className='pl-16'>
                    Se registrará en el formulario <span className='italic'>Regístrate como Médico</span> y contará con las vistas de
                    página principal, búsqueda de médicos, inicio, configuración de cuenta, recuperación
                    o modificación de contraseña, datos generales, expediente médico, creación del
                    expediente médico y vista para pedir acceso al expediente médico.
                </p>
                <p>
                    Así como el equipo técnico tiene la responsabilidad de cuidar y proteger los datos, el usuario
                    es responsable de la veracidad de estos, por lo que, si se ingresa información falsa, la cuenta
                    se suspenderá y se eliminará de los registros, negando el acceso en un futuro.
                    En cuanto a la contraseña elegida, el usuario no deberá bajo ningún motivo compartirla a
                    otras personas, ya sea por medios físicos o virtuales (correo electrónico, redes sociales, etc.),
                    ya que, si lo hace, BLOCKHEALTH se deslinda de cualquier responsabilidad. Cabe aclarar
                    que, si se detecta actividad inusual, la cuenta será suspendida inmediatamente y solo el
                    usuario registrado podrá reactivarla.
                    Si se sospecha que alguien ha robado información o la cuenta ha sido vulnerada, en primera
                    instancia el usuario podrá cambiar la contraseña por medio de nuestro apartado <span className='italic'>¿Olvidaste
                        tu contraseña?</span>. Si esta acción no es suficiente, puede contactar al equipo técnico vía correo
                    electrónico o teléfono.
                    En el caso particular de los usuarios médicos, se les pide discreción con los datos de los
                    pacientes, puesto que, al hacer un mal uso de estos, se incurrirá en una falta legal y tanto
                    BLOCKHEALTH como el o los pacientes podrán tomar acciones legales.
                </p>
                <h2 className='py-1 font-bold text-lg'>Contacto</h2>
                <p>
                    En caso de que nuevas cookies sean integradas en nuestros procesos, o la presente Política
                    de Privacidad se actualice, se informará a nuestros usuarios de los cambios por medio de
                    notificaciones en el prototipo y vía correo electrónico.
                    Para aclarar dudas relacionadas tanto con el uso del prototipo como el manejo de la
                    información, así como algún problema técnico o de seguridad, los usuarios podrán
                    contactarnos vía:
                    <br />
                    <br />
                    Correo electrónico:
                    <br />
                    <span className='pl-8'>idd.ttsalud@gmail.com</span> 
                    <br />
                    Teléfono:
                    <br />
                    <span className='pl-8'>Buzany Ramírez Oscar Isai. [55 6119 2639]</span>
                    <br /> 
                    <span className='pl-8'>Ordoñez Castro Dayann. [55 3680 7432]</span> 
                    <br />
                    <span className='pl-8'>Santamaria Arcos Diana. [55 2676 1907]</span> 
                </p>
            </div>
        </Homelayout>
    )
}

export default Privacidad