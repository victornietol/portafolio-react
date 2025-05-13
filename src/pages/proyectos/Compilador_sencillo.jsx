import { Helmet } from 'react-helmet-async';
import { useOutletContext } from "react-router-dom";
import { useEffect } from 'react';

function Compilador_sencillo() {
    const { setModalSrc, openModal } = useOutletContext();

    const handleImageClick = (url) => {
        setModalSrc(url);
        openModal();
    };

    useEffect(() => {
        hljs.highlightAll();
        hljs.initLineNumbersOnLoad();
    }, []);

    return (
        <>
            <Helmet>
                <title>Compilador sencillo con Python | Portafolio</title>
            </Helmet>

            <div className="mt-5 mb-4">
                <h1 className="display-4 text-center">Compilador sencillo con Python</h1>
            </div>

            <div className="container">
                <div className="row">
                    <section className="col-md-6 col-lg-4 card card-body m-1 d-flex flex-column align-items-center justify-content-center bg-light">
                        <div className="px-md-5 text-center">
                            <h3>Tecnologías empleadas</h3>
                            <p>
                                <i className="bi bi-code-slash"></i> Python
                                <br></br>
                                <i className="bi bi-gear-fill"></i> Tkinter • ply.lex • ply.yacc
                            </p>
                        </div>
                    </section>
                    
                    <section className="col-md-6 col-lg-4 card card-body m-1 d-flex flex-column align-items-center justify-content-center bg-light">
                        <div className="px-md-5 text-center">
                            <h3>Repositorio</h3>
                            <p>
                                <i className="bi bi-github"></i>
                                <br></br>
                                <a className="text-break w-100" href="https://github.com/victornietol/Proyectos/tree/main/Proyecto_Compiladores/Versiones_gui/Actualizacion_21_05_2023" target="_blank" rel="noopener noreferrer">
                                    https://github.com/victornietol/Proyectos/tree/main/Proyecto_Compiladores/Versiones_gui/Actualizacion_21_05_2023
                                </a>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            
            <section className="card card-body mt-2">
                <div className="px-md-5 text-center">
                    <h3 className="pb-3 pt-3" style={{textAlign: "start"}}>Descripción del sistema</h3>
                    <p style={{textAlign: "justify"}}>
                        Este proyecto académico se realizó con el objetivo de conocer el proceso de construcción de un compilador a través de dos elementos tradicionales como lo son el Analizador Léxico y Sintáctico, además de su implementación con herramientas disponibles que proporciona Python.
                    </p>
                    <p style={{textAlign: "justify"}}>
                        Dicho sistema, correspondiente a un pequeño ejemplo básico de compilador, acepta instrucciones para hacer operaciones aritméticas, mezclar colores primarios (rojo, amarillo, azul) y hacer conversiones entre grados Celsius, Fahrenheit y Kelvin.
                    </p>
                    <p style={{textAlign: "justify"}}>
                        Para ingresar una operación aritmética se debe hacer de la forma "<code className="bg-light">Operacion[&lt;OPERACION A REALIZAR&gt;];</code>" , como en el siguiente ejemplo:
                            <br></br>
                            <br></br>
                            <code className="bg-light">Operacion[(14+4)*3];</code>
                    </p>
                    <p style={{textAlign: "justify"}}>
                        Para ingresar una mezcla de colores se debe hacer de la forma "<code className="bg-light">Mezcla[&lt;COLOR PRIMARIO&gt;+&lt;COLOR PRIMARIO&gt;];</code>" , como en el siguiente ejemplo:
                            <br></br>
                            <br></br>
                            <code className="bg-light">Mezcla[amarillo+azul];</code>
                    </p>
                    <p style={{textAlign: "justify"}}>
                        Para ingresar una conversión entre grados se debe hacer de la forma "<code className="bg-light">Conversion[&lt;ESCALA ORIGINAL&gt; (&lt;VALOR NUMERICO EN DECIMAL O ENTERO&gt;) a &lt;ESCALA OBJETIVO&gt;];</code>" , como en el siguiente ejemplo:
                            <br></br>
                            <br></br>
                            <code className="bg-light">Conversion[celsius (20) a fahrenheit];</code>
                    </p>
                    <p style={{textAlign: "justify"}}>
                        Para poder ingresar las entradas al compilador, estas se deben escribir en el archivo "entrada.txt" que se encuentra dentro del archivo del programa, este archivo se puede abrir dando click en el boton "Modificar" o abriéndolo manualmente. Cada instrucción debe estar separada por un salto de linea como en los ejemplos que ya trae predefinidos dicho archivo. Una vez teniendo las instrucciones deseadas en el archivo de texto, solo hay que dar click al boton "Iniciar" en la interfaz del programa y el resultado se mostrará en la caja de texto que se encuentra arriba de dicho boton. Cabe mencionar que el resultado tendra la siguiente forma:
                        <br></br>
                        <br></br>
                        <code className="bg-light">
                            "Instrucción: &lt;INSTRUCCIÓN EJECUTADA&gt;"
                            <br></br>
                            "El resultado es: &lt;RESULTADO DE LA INSTRUCCIÓN&gt;"
                        </code>
                    </p>
                    <p style={{textAlign: "justify"}}>
                        A continuación, se muestra un ejemplo del archivo "entrada.txt" cargado en el sistema y el resultado que genera.
                    </p>
                    <img src="/proyectos/compilador_sencillo/4.png" title="entrada.txt" className="img-fluid mt-2 w-50 border border-dark rounded" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/compilador_sencillo/4.png")} alt="img sistema 4" loading="lazy"></img>
                    <p className="mt-3" style={{textAlign: "justify"}}>
                        Salida:
                    </p>
                    <img src="/proyectos/compilador_sencillo/1.png" title="Salida parte 1" className="img-fluid mt-2 w-50 border border-dark rounded" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/compilador_sencillo/1.png")} alt="img sistema 1" loading="lazy"></img><br />
                    <img src="/proyectos/compilador_sencillo/2.png" title="Salida parte 2" className="img-fluid mt-2 w-50 border border-dark rounded" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/compilador_sencillo/2.png")} alt="img sistema 2" loading="lazy"></img><br />
                    <img src="/proyectos/compilador_sencillo/3.png" title="Salida parte 3" className="img-fluid mt-2 w-50 border border-dark rounded" data-bs-toggle="modal" data-bs-target="#modalImagen" style={{cursor: "zoom-in"}} onClick={() => handleImageClick("/proyectos/compilador_sencillo/3.png")} alt="img sistema 3" loading="lazy"></img>
                </div>
            </section>

            <section className="card card-body mt-3">
                <div className="px-md-5">
                    <h3 className="pb-4 pt-4" style={{textAlign: "start"}}>Funcionamiento del compilador</h3>
                    <div>
                        <p style={{textAlign: "justify"}}>
                            <strong>1)</strong> Se guarda cada instrucción por separado.
                        </p>
                        <pre><code className="language-python">{`instrucciones = []
with open('entrada.txt') as texto:
        for linea in texto:
            instrucciones.append(linea)`}
                        </code></pre>
                    </div>
                    <div>
                        <p style={{textAlign: "justify"}}>
                            <strong>2)</strong> Se definen los tokens para los elementos.
                        </p>
                        <pre className="line-numbers"><code className="language-python">{`tokens = ('OPERACIONES','PARENT_IZQ','PARENT_DER','COR_IZQ','COR_DER','MAS','MENOS','POR',
    'DIVIDIDO','DECIMAL','ENTERO','PUNT_COMA','MEZCLA','ROJO','AMARILLO',
    'AZUL','CONVERSION','CONEXION','CELSIUS','FAHRENHEIT','KELVIN'
    )`}
                        </code></pre>
                    </div>
                    <div>
                        <p style={{textAlign: "justify"}}>
                            <strong>3)</strong> Se asigna el valor para los tokens definidos.
                        </p>
                        <pre><code className="language-python">{`t_OPERACIONES  = r'Operacion'
t_PARENT_IZQ = r'\('
t_PARENT_DER = r'\)'
t_COR_IZQ = r'\['
t_COR_DER = r'\]'
t_MAS = r'\+'
t_MENOS = r'-'
t_POR = r'\*'
t_DIVIDIDO = r'/'
t_PUNT_COMA = r';'
t_MEZCLA = r'Mezcla'
t_CONVERSION = r'Conversion|Conversion'
t_CONEXION = r'[aA]'`}
                        </code></pre>
                    </div>
                    <div>
                        <p style={{textAlign: "justify"}}>
                            <strong>3)</strong> Se indican los carácteres ignorados.
                        </p>
                        <pre><code className="language-python">{`t_ignore = " \t|Â"`}
                        </code></pre>
                    </div>
                    <div>
                        <p style={{textAlign: "justify"}}>
                            <strong>4)</strong> Tokens que regresan un valor.
                        </p>
                        <pre><code className="language-python">{`def t_DECIMAL(t):
    r'\\d+\.\\d+'
    try:
        t.value = float(t.value)
    except ValueError:
        self.insertar_texto(f"Valor decimal demasiado grande &d {str(t.value)}")
        t.value = 0
    return t

def t_ENTERO(t):
    r'\\d+'
    try:
        t.value = int(t.value)
    except ValueError:
        self.insertar_texto(f"Valor entero demasiado grande %d {str(t.value)}")
        t.value = 0
    return t

def t_ROJO(t):
    r'rojo|ROJO|Rojo'
    t.value = 'ROJO'
    return t
    
def t_AMARILLO(t):
    r'amarillo|AMARILLO|Amarillo'
    t.value = 'AMARILLO'
    return t

def t_AZUL(t):
    r'azul|AZUL|Azul'
    t.value = 'AZUL'
    return t

def t_CELSIUS(t):
    r'Celsius|CELSIUS|�C|celsius'
    t.value = 'C'
    return t

def t_FAHRENHEIT(t):
    r'Fahrenheit|FAHRENHEIT|�F|fahrenheit'
    t.value = 'F'
    return t

def t_KELVIN(t):
    r'Kelvin|KELVIN|�K|kelvin'
    t.value = 'K'
    return t

def t_newline(t):
    r'\\n+'
    t.lexer.lineno += t.value.count("\\n")
    
def t_error(t):
    texto = "Caracter ilegal '%s'" % t.value[0]
    self.insertar_texto(texto+"\\n")
    t.lexer.skip(1)`}
                        </code></pre>
                    </div>
                    <div>
                        <p style={{textAlign: "justify"}}>
                            <strong>5)</strong> Se construye el analizador léxico
                        </p>
                        <pre><code className="language-python">{`lexer = lex.lex()`}
                        </code></pre>
                    </div>
                    <div>
                        <p style={{textAlign: "justify"}}>
                            <strong>6)</strong> Declarando reglas de precedencia
                        </p>
                        <pre><code className="language-python">{`precedence = (('left','MAS','MENOS'),('left','POR','DIVIDIDO'),
            ('right','UMENOS'))`}
                        </code></pre>
                    </div>
                    <div>
                        <p style={{textAlign: "justify"}}>
                            <strong>7)</strong> Definición de la gramática para los casos de operaciones, mezcla de colores y conversiones. 
                        </p>
                        <pre><code className="language-python">{`def p_instrucciones_lista(t):
    '''instrucciones    : instruccion instrucciones
                        | instruccion '''

    def p_instrucciones_tipo(t):
        '''instruccion : OPERACIONES COR_IZQ expresion_num COR_DER PUNT_COMA
                        | MEZCLA COR_IZQ expresion_color COR_DER PUNT_COMA
                        | CONVERSION COR_IZQ expresion_conver COR_DER PUNT_COMA'''
        self.insertar_texto(f"      El resultado es: {str(t[3])}\\n\\n")

    def p_expresion_binaria(t):
        '''expresion_num : expresion_num MAS expresion_num
                    | expresion_num MENOS expresion_num
                    | expresion_num POR expresion_num
                    | expresion_num DIVIDIDO expresion_num'''   
        if( t[2] == '+' ): 
            t[0] = t[1] + t[3]
        elif(t[2] == '-'): 
            t[0] = t[1] - t[3]
        elif(t[2] == '*'): 
            t[0] = t[1] * t[3]
        elif(t[2] == '/'): 
            t[0] = t[1] / t[3]

    def p_expresion_unaria(t):
        'expresion_num : MENOS expresion_num %prec UMENOS'
        t[0] = -t[2]

    def p_expresion_agrupacion(t):
        'expresion_num : PARENT_IZQ expresion_num PARENT_DER'
        t[0] = t[2]

    def p_expresion_number(t):
        '''expresion_num    : ENTERO
                        | DECIMAL'''
        t[0] = t[1]

    def p_expresion_colores(t):
        'expresion_color : valor_color MAS valor_color'
        if((t[1] == 'ROJO' and t[3] == 'AMARILLO') or (t[1] == 'AMARILLO' and t[3] == 'ROJO')):
            t[0] = 'Naranja'
        elif((t[1] == 'AMARILLO' and t[3] == 'AZUL') or (t[1] == 'AZUL' and t[3] == 'AMARILLO')):
            t[0] = 'Verde'
        elif((t[1] == 'AZUL' and t[3] == 'ROJO') or (t[1] == 'ROJO' and t[3] == 'AZUL')):
            t[0] = 'Violeta'
        elif(
            (t[1] == 'ROJO' and t[3] == 'ROJO') or
            (t[1] == 'AMARILLO' and t[3] == 'AMARILLO') or
            (t[1] == 'AZUL' and t[3] == 'AZUL')
            ):
            t[0] = t[1]

    def p_valor_color(t):
        '''valor_color :  ROJO
                        | AMARILLO
                        | AZUL'''
        t[0] = t[1]

    def p_expresion_conversiones(t):
        'expresion_conver : escala PARENT_IZQ expresion_num PARENT_DER CONEXION escala'
        if(t[1] == 'C' and t[6] == 'F'):   # Celsius a Fahrenheit
            t[0] = (float(t[3])*1.8) + 32.0
        elif(t[1] == 'F' and t[6] == 'C'):   # Faherenheit a Celsius
            t[0] = (float(t[3])-32.0) / 1.8
        elif(t[1] == 'C' and t[6] == 'K'):   # Celsius a Kelvin
            t[0] = float(t[3]) + 273.15
        elif(t[1] == 'K' and t[6] == 'C'):   # Kelvin a Celsius
            t[0] = float(t[3]) - 273.15
        elif(t[1] == 'F' and t[6] == 'K'):   # Fahrenheit a Kelvin
            t[0] = ((float(t[3])-32.0) / 1.8) + 273.15
        elif(t[1] == 'K' and t[6] == 'F'):   # Kelvin a Fahrenheit 
            t[0] = ((float(t[3]) - 273.15)*1.8) + 32.0

    def p_tipo_escala(t):
        '''escala : CELSIUS
                | FAHRENHEIT
                | KELVIN'''
        t[0] = t[1]`}
                        </code></pre>
                    </div>
                    <div>
                        <p style={{textAlign: "justify"}}>
                            <strong>8)</strong> En caso de no cumplir con las reglas.
                        </p>
                        <pre><code className="language-python">{`def p_error(t):
    try:          
        texto = "Error sintactico en '%s'" % t.value
        self.insertar_texto(texto+"\\n")
    except Exception:
        pass`}
                        </code></pre>
                    </div>
                    <div>
                        <p style={{textAlign: "justify"}}>
                            <strong>9)</strong> Se construye el analizador sintáctico.
                        </p>
                        <pre><code className="language-python">{`parser = yacc.yacc()`}
                        </code></pre>
                    </div>
                    <div>
                        <p style={{textAlign: "justify"}}>
                            <strong>10)</strong> Finalmente se utiliza YACC.
                        </p>
                        <pre><code className="language-python">{`for linea in instrucciones:
    self.insertar_texto(f"Instruccion:   {linea}")
    parser.parse(linea)`}
                        </code></pre>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Compilador_sencillo;