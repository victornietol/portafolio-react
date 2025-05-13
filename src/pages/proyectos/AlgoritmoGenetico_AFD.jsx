import { Helmet } from 'react-helmet-async';
import { useOutletContext } from "react-router-dom";
import { useEffect } from 'react';

function AlgoritmoGenetico_AFD() {
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
                <title>Algoritmo Genético y Convertidor AFND a AFD | Portafolio</title>
            </Helmet>

            <div className="mt-5 mb-4">
                <h1 className="display-4 text-center">Algoritmo Genético y Convertidor AFND a AFD</h1>
            </div>

            <div className="container">
                <div className="row">
                    <section className="col-md-6 col-lg-4 card card-body m-1 d-flex flex-column align-items-center justify-content-center bg-light">
                        <div className="px-md-5 text-center">
                            <h3>Tecnologías empleadas</h3>
                            <p>
                                <i className="bi bi-code-slash"></i> Python
                                <br></br>
                                <i className="bi bi-gear-fill"></i> Numpy
                            </p>
                        </div>
                    </section>
                    
                    <section className="col-md-6 col-lg-4 card card-body m-1 d-flex flex-column align-items-center justify-content-center bg-light">
                        <div className="px-md-5 text-center">
                            <h3>Repositorios</h3>
                            <p>
                                <i className="bi bi-github"></i>
                                <br></br>
                                1. Algoritmo genético: <a className="text-break w-100" href="https://github.com/victornietol/CodigosPracticas/blob/main/Python/algoritmoGenetico.py" target="_blank" rel="noopener noreferrer">GitHub
                                </a>
                                <br></br>
                                2. Convertidor AFND a AFD: <a className="text-break w-100" href="https://github.com/victornietol/CodigosPracticas/blob/main/Python/convertidor_AFND_AFD.py" target="_blank" rel="noopener noreferrer">GitHub
                                </a>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            
            <section className="card card-body mt-2">
                <div className="px-md-5 text-center">
                    <h3 className="pb-3 pt-3" style={{textAlign: "start"}}>Descripción</h3>
                    <p style={{textAlign: "justify"}}>
                        En esta sección se muestran dos proyectos académicos. Uno corresponde a la aplicación de un algoritmo genético para encontrar un numero de cuatro dégitos. Mientras que el segundo es un convertidor de Autómata Finito No Determinista (AFND) en un Autómata Finito Determinista (AFD).
                        <br></br>
                        <a href="#algoritmo_genetico"><code>#Algoritmo Genético</code></a>
                        <br></br>
                        <a href="#convertidor_afnd"><code>#Convertidor AFND -&gt; AFD</code></a>
                    </p>
                </div>
            </section>

            <section id="algotimo_genetico" className="card card-body mt-2">
                <div className="px-md-5">
                    <h3 className="pb-3 pt-3" style={{textAlign: "start"}}>Algoritmo genético</h3>
                    <p style={{textAlign: "justify"}}>
                        En este proyecto académico de la materia Diseño y Análisis de Algoritmos, se planteó el problema de encontrar un número de 4 dígitos generado al azar, a través de la información generada con los intentos hechos por encontrar el número. En cada intento de encontrarlo, al proponer un número, se indica cuantos dígitos del número se encuentran en buena posición y cuantos dígitos se encuentran en mala posición pero que sí pertenecen al número a encontrar. Por ejemplo, si el número a encontrar es 5439, y se propone el número 4679 como solución, entonces esto indicaría 1 dígito en posición correcta y 1 dígito en posición incorrecta, pero el sistema de primera mano no sabrá que dígito esta correcto y cual está fuera de posición. Por lo tanto, se utilizó un algoritmo genético para que a través de las generaciones se produjeran individuos que estuvieran cada vez más cerca del número objetivo, esto, utilizando la información de las posiciones correctas e incorrectas para ir ajustando el sistema.
                    </p>
                    <p style={{textAlign: "justify"}}>
                        El problema se planteó de la siguiente manera: Cada individuo tiene 4 dígitos (20 bits en total). En consecuencia cada dígito consta de 5 bits donde los primeros 2 bits corresponden a la posición y los 3 siguientes al valor del dígito. Por lo tanto, cada dígito se representa con 3 bits porque el dígito puede ir de 1 a 8. Mientras que la posición de cada dígito se asigna con los elementos de una lista con valores en decimal donde cada vez que se ocupa una posición se elimina dicha posición de la lista con el objetivo de evitar las repeticiones en cuanto a la posición y posteriormente se convierte a binario. Por lo tanto, la correspondencia en cuanto a el valor de los dígitos y la posición es la siguiente:
                    </p>
                    <p className="text-center">
                        Dígitos: 000 -&gt; 1, 001 -&gt; 2, 010 -&gt; 3, 011 -&gt; 4, 100 -&gt; 5, 101 -&gt; 6, 110 -&gt; 7, 111 -&gt; 8
                        <br></br>
                        Posición: 00 -&gt; 0, 01 -&gt; 1, 10 -&gt; 2, 11 -&gt; 3
                    </p>
                    <p className="text-center">
                        Un ejemplo es el siguiente:
                        <br></br>
                        código = 4825
                        <br></br>
                        en bits = 00011011111000111100
                        <br></br>
                        donde el dígito 8 corresponde a los 5 bits siguientes: 01111  
                    </p>
                    <h4 className="mt-5" style={{textAlign: "start"}}>Descripción del sistema</h4>
                    <p style={{textAlign: "justify"}}>
                        Se genera un individuo de forma binaria, primero se genera la posición seleccionando un decimal al azar de una lista y después se convierte a binario. Posteriormente se genera el dígito directamente en binario al azar y se unen en un arreglo ambas partes en forma binaria.
                    </p>
                    <div className="card card-body mt-4 mb-4">
                        <pre><code className="language-python">{`def generarIndividuo(self):
    individuo = np.empty
    posiciones = [0,1,2,3]
    for i in range(4):
        posicion = random.choice(posiciones)
        posiciones.remove(posicion)
        if(posicion == 0):
            p1 = np.random.randint(0,1,(1))
            p2 = np.random.randint(0,1,(1))
            posicion = np.append(p1,p2)
            numero = np.random.randint(0,2,(3))
            digito = np.append(posicion,numero)
            individuo = np.append(individuo,digito)
        elif(posicion == 1):
            p1 = np.random.randint(0,1,(1))
            p2 = np.random.randint(1,2,(1))
            posicion = np.append(p1,p2)
            numero = np.random.randint(0,2,(3))
            digito = np.append(posicion,numero)
            individuo = np.append(individuo,digito)
        elif(posicion == 2):
            p1 = np.random.randint(1,2,(1))
            p2 = np.random.randint(0,1,(1))
            posicion = np.append(p1,p2)
            numero = np.random.randint(0,2,(3))
            digito = np.append(posicion,numero)
            individuo = np.append(individuo,digito)
        elif(posicion == 3):
            p1 = np.random.randint(1,2,(1))
            p2 = np.random.randint(1,2,(1))
            posicion = np.append(p1,p2)
            numero = np.random.randint(0,2,(3))
            digito = np.append(posicion,numero)
            individuo = np.append(individuo,digito)
    individuo = np.delete(individuo,0)
    return individuo`}
                        </code></pre>
                    </div>
                    <p style={{textAlign: "justify"}}>
                        Se genera la población que se utiliza en el algoritmo genético dependiendo del número de individuos.
                    </p>
                    <div className="card card-body mt-4 mb-4">
                        <pre><code className="language-python">{`def generaPoblacion(self,nInd):
    poblacion = []
    for i in range(nInd):
        individuo = self.generarIndividuo()
        poblacion.append(list(individuo))
    return poblacion`}
                        </code></pre>
                    </div>
                    <p style={{textAlign: "justify"}}>
                        Pasando de binario a decimal cada individuo, sin que sea su representación final aún.
                    </p>
                    <div className="card card-body mt-4 mb-4">
                        <pre><code className="language-python">{`def binarioADecimal(self,binario):
    exp=len(binario)-1
    decimal = 0
    for bit in binario:
        decimal+=bit*(np.power(2,exp))
        exp-=1
    return decimal`}
                        </code></pre>
                    </div>
                    <p style={{textAlign: "justify"}}>
                        Pasando cada individuo de su forma decimal a su representación en dígito final planteada para este problema.
                    </p>
                    <div className="card card-body mt-4 mb-4">
                        <pre><code className="language-python">{`def bitsADigito(self,d):  
    n = self.binarioADecimal(d) 
    digito = n+1
    return digito`}
                        </code></pre>
                    </div>
                    <p style={{textAlign: "justify"}}>
                        Pasando de genotipo a fenotipo, donde cada individuo (código) se guarda en una lista que contiene otras 4 listas, cada una con un dígito y su posición, por lo tanto, se guardan así [ [dígito,posición], [d,p], [d,p], [d,p] ]
                    </p>
                    <div className="card card-body mt-4 mb-4">
                        <pre><code className="language-python">{`def genotipoAFenotipo(self,individuo):  
    numerosEnBits = []
    C = []
    for i in range(4):
        numerosEnBits.append(individuo[i*5:(i+1)*5])
    for d in numerosEnBits:
        posicion = d[0:2] 
        digito = d[2:]
        C.append([self.bitsADigito(digito),self.bitsADigito(posicion)-1])
    return C`}
                        </code></pre>
                    </div>
                    <p style={{textAlign: "justify"}}>
                        Realizado la cruza para el proceso evolutivo del algoritmo genético con un punto de cruza generado al azar.
                    </p>
                    <div className="card card-body mt-4 mb-4">
                        <pre><code className="language-python">{`def cruza(self,indA,indB):
    puntoCruza = np.random.randint(len(indA))
    desc1 = list(indA[0:puntoCruza])+list(indB[puntoCruza:])
    desc2 = list(indB[0:puntoCruza])+list(indA[puntoCruza:])
    return desc1, desc2`}
                        </code></pre>
                    </div>
                    <p style={{textAlign: "justify"}}>
                        Proceso de mutación de un individuo seleccionado al azar para el proceso evolutivo del algoritmo genético.
                    </p>
                    <div className="card card-body mt-4 mb-4">
                        <pre><code className="language-python">{`def muta(self,ind):
    puntoMutacion = np.random.randint(len(ind))
    ind[puntoMutacion] = 1-ind[puntoMutacion]  # Si el bit del individuo es 0 cambia a 1 y viceversa
    return ind`}
                        </code></pre>
                    </div>
                    <p style={{textAlign: "justify"}}>
                        Revisa las posiciones de cada dígito de un código para poder rankear a cada individuo en la evaluación de cada código.
                    </p>
                    <div className="card card-body mt-4 mb-4">
                        <pre><code className="language-python">{`def valorarAB(self,numero):
    a = 0   # a) Dígitos en posición correcta
    b = 0   # b) Dígitos en posición incorrecta
    for i,d in zip(numero,self.codigo):
        if(i==d):
            a+=1
        else:
            if(i in self.codigo):
                b+=1
    return a, b`}
                        </code></pre>
                    </div>
                    <p style={{textAlign: "justify"}}>
                        Asigna el dígito a otra variable para poder valorar el individuo según la posición de sus dígitos y regresa el número de dígitos en posició correcta (a) y el número de dígitos en posición incorrecta (b)
                    </p>
                    <div className="card card-body mt-4 mb-4">
                        <pre><code className="language-python">{`def verificarDigitos(self,C):
    numero = [0,0,0,0]
    for i in C:
        numero[i[1]] = i[0]  # Acomodando dígitos en posición
    a,b = self.valorarAB(numero)
    return a, b`}
                        </code></pre>
                    </div>
                    <p style={{textAlign: "justify"}}>
                        Calificando al individuo dependiendo de la posición de sus dígitos.
                    </p>
                    <div className="card card-body mt-4 mb-4">
                        <pre><code className="language-python">{`def evaluaNumero(self,C):  
    a,b = self.verificarDigitos(C)       
    if(a==0 and b==0):
        return 0
    elif(a==0 and b==1):
        return 1
    elif(a==0 and b==2):
        return 2
    elif(a==0 and b==3):
        return 3
    elif(a==0 and b==4):
        return 4
    elif(a==1 and b==0):
        return 5
    elif(a==1 and b==1):
        return 6
    elif(a==1 and b==2):
        return 7
    elif(a==1 and b==3):
        return 8
    elif(a==2 and b==0):
        return 9
    elif(a==2 and b==1):
        return 10
    elif(a==2 and b==2):
        return 11
    elif(a==3 and b==0):
        return 12
    elif(a==3 and b==1):
        return 13
    elif(a==4 and b==0):
        return 14`}
                        </code></pre>
                    </div>
                    <p style={{textAlign: "justify"}}>
                        Pasa al individuo de su forma en bits a dígitos y después lo evalua.
                    </p>
                    <div className="card card-body mt-4 mb-4">
                        <pre><code className="language-python">{`def evaluarInd(self,ind):
    C = self.genotipoAFenotipo(ind)
    evaluacion = self.evaluaNumero(C)
    return evaluacion`}
                        </code></pre>
                    </div>
                    <p style={{textAlign: "justify"}}>
                        Valora la población y guarda la evaluación de cada individuo en una lista.
                    </p>
                    <div className="card card-body mt-4 mb-4">
                        <pre><code className="language-python">{`def evaluaPoblacion(self,poblacion):
    evaluacion = []
    for ind in poblacion:
        evaluacion.append(self.evaluarInd(ind))
    return evaluacion`}
                        </code></pre>
                    </div>
                    <p style={{textAlign: "justify"}}>
                        Genera los índices para la cruza y con ello generar los dos descendientes.
                    </p>
                    <div className="card card-body mt-4 mb-4">
                        <pre><code className="language-python">{`def buscaIndices(self,prob):
    a = 0
    n = np.random.random()
    while(n>prob[a]):
        a+=1
    b = 0
    n = np.random.random()
    while(n>prob[b]):
        b+=1
    return a, b`}
                        </code></pre>
                    </div>
                    <p style={{textAlign: "justify"}}>
                        Recorre todas las evaluaciones y busca la correspondiente al mejor individuo y al peor individuo (evaluación más alta y más baja).
                    </p>
                    <div className="card card-body mt-4 mb-4">
                        <pre><code className="language-python">{`def buscaMejorPeor(self,evaluacion):
    mejor = 0
    peor = 0
    for i in range(len(evaluacion)):
        if(evaluacion[i]>evaluacion[mejor]):
            mejor = i
        if(evaluacion[i]&ltevaluacion[peor]):
            peor = i
    return mejor, peor`}
                        </code></pre>
                    </div>
                    <p style={{textAlign: "justify"}}>
                        Realiza el proceso evolutivo del algoritmo genético generando una nueva población como resultado de la cruza y en ciertas ocasiones también se realiza mutación dependiendo de un valor al azar.
                    </p>
                    <div className="card card-body mt-4 mb-4">
                        <pre><code className="language-python">{`def procesoEvolutivo(self,poblacion,evaluacion,tam):
    nuevaPoblacion = []
    evaluacion = list(np.array(evaluacion)/sum(evaluacion))
    prob = [evaluacion[0]]
    for i in range(len(evaluacion)-1):
        prob.append(prob[-1]+evaluacion[i+1])
    while(len(nuevaPoblacion)<(tam-2)):
        a,b = self.buscaIndices(prob)
        desc1,desc2 = self.cruza(poblacion[a],poblacion[b])
        if(np.random.random() < 0.07):
            if(np.random.random() < 0.5):
                desc1 = self.muta(desc1)
            else:
                desc2 = self.muta(desc2)
        nuevaPoblacion.append(desc1)
        nuevaPoblacion.append(desc2)
    mejor,peor = self.buscaMejorPeor(evaluacion)
    nuevaPoblacion.append(poblacion[mejor])
    nuevaPoblacion.append(poblacion[peor])
    return nuevaPoblacion`}
                        </code></pre>
                    </div>
                    <p style={{textAlign: "justify"}}>
                        Inicio del algoritmo genético dependiendo del número de individuos, el tamaño de cada individuo y el número de generaciones.
                        <br></br>
                        Si se tiene al mejor individuo generado con la ejecución anterior se toma en cuenta al crear la población.
                    </p>
                    <div className="card card-body mt-4 mb-4">
                        <pre><code className="language-python">{`def algoritmoGen(self,nInd,tam,nMaxGen,indAnt=None):
    if(type(indAnt)==np.ndarray or indAnt != None):
        # Agregando el mejor individuo de la ejecución anterior
        poblacion = self.generaPoblacion(nInd-1)
        poblacion.append(list(indAnt))
    else:
        poblacion = self.generaPoblacion(nInd)
    gen = 0
    while(gen < nMaxGen):
        evaluacion = self.evaluaPoblacion(poblacion)
        nuevaPoblacion = self.procesoEvolutivo(poblacion,evaluacion,tam)
        poblacion = nuevaPoblacion
        gen+=1
    mejor,peor = self.buscaMejorPeor(evaluacion)
    mejorCodigo = self.genotipoAFenotipo(poblacion[mejor])     
    return mejorCodigo, poblacion[mejor]   # Regresa el código  representacion decimal (mejorCodigo) y binaria (poblacion[mejor])`}
                        </code></pre>
                    </div>
                    <p style={{textAlign: "justify"}}>
                        Generando de forma aleatoria el código de 4 dígitos que se va a buscar, donde cada dígito puede ir desde 1 a 8.
                    </p>
                    <div className="card card-body mt-4 mb-4">
                        <pre><code className="language-python">{`def generarCodigo(self):
    codigo = []
    for i in range(4):
        codigo.append(np.random.randint(1,9))    
    return codigo

def intentosAlAzar(self,nIntentos,AG):
    indice = 0
    calif = 0
    a_b = []
    intentosBin = []
    intentosFeno = []
    intentosLista = []
    for i in range(nIntentos):
        intento = AG.generarIndividuo() # individuo en binario
        res = AG.genotipoAFenotipo(intento)  # individuo en Fenotipo  [[d,p],[d,p],[d,p],[d,p]]
        resultado = self.acomodarDigito(res) # individuo en lista [0,0,0,0]
        a,b = self.valorarAB(resultado)
        califActual = AG.evaluaNumero(res)
        intentosBin.append(intento)
        intentosFeno.append(res)
        intentosLista.append(resultado)
        a_b.append([a,b])
        print(f"- Intento {i+1} -")
        print("Código no encontrado, mejor resultado: ",resultado,end="\\n\\n")
        if(califActual>calif):
            indice = i
            calif = califActual
    return intentosBin[indice],intentosFeno[indice],intentosLista[indice],a_b[indice][0],a_b[indice][1]`}
                        </code></pre>
                    </div>
                    <p style={{textAlign: "justify"}}>
                        Acomodando el dígito ingresado según su posición.
                    </p>
                    <div className="card card-body mt-4 mb-4">
                        <pre><code className="language-python">{`def acomodarDigito(self,digitos):
    numero = [0,0,0,0]
    try:    
        for i in digitos:
            numero[i[1]] = i[0]  # Acomodando digitos en posición
        return numero
    except NameError:
        pass`}
                        </code></pre>
                    </div>
                    <p style={{textAlign: "justify"}}>
                        Verificando si se encontró el código.
                    </p>
                    <div className="card card-body mt-4 mb-4">
                        <pre><code className="language-python">{`def valorarAB(self,numero):
    a = 0   # a) Dígitos en posición correcta
    b = 0   # b) Dígitos en posición incorrecta
    for i,d in zip(numero,self.codigo):
        if(i==d):
            a+=1
        else:
            if(i in self.codigo):
                b+=1
    return a, b`}
                        </code></pre>
                    </div>
                    <p style={{textAlign: "justify"}}>
                        Inicio del juego, en cada intento buscará encontrar el código con el algoritmo genético.
                        <br></br>
                        Si no se encuentra el código en la ejecucion actual, se utiliza el mejor código generado anterior en la siguiente ejecución del algoritmo genérico.
                    </p>
                    <div className="card card-body mt-4 mb-4">
                        <pre><code className="language-python">{`def jugar(self,nInt=4):
    AG = AlgoritmoGenetico(self.codigo)
    aux = 1
    resultado = []
    intentoAzar,res,resultado,a,b = self.intentosAlAzar(nInt,AG)
    aux = nInt 
    indAnt = intentoAzar
    while(not self.encontrado):     
        aux+=1
        print(f"- Intento {aux} -")   
        digitos,indAnt = AG.algoritmoGen(1000,20,1000,indAnt)
        resultado = self.acomodarDigito(digitos)
        a,b = self.valorarAB(resultado)
        if(a==4 and b==0):
            self.encontrado = True
            print("Código ¡ENCONTRADO!: ",resultado)
        else:
            print("Código no encontrado, mejor resultado: ",resultado,end="\\n\\n")`}
                        </code></pre>
                    </div>
                </div>
            </section>

            <section id="convertidor_afnd" className="card card-body mt-2">
                <div className="px-md-5">
                    <h3 className="pb-3 pt-3" style={{textAlign: "start"}}>Convertidor de AFND a AFD</h3>
                    <p style={{textAlign: "justify"}}>
                        Como proyecto académico de la materia Lenguajes Formales y Autómatas, se realizó un programa para convertir un Autómata Finito No Determinista (AFND) en un Autómata Finito Determinista (AFD) que reconozca el mismo lenguaje. El código del programa y un resultado ejemplo de la ejecución se muestra a continuación.
                    </p>
                    <h4 style={{textAlign: "start"}}>Código del programa</h4>
                    <p style={{textAlign: "justify"}}>
                        Clase para eliminar transiciones vacias.
                    </p>
                    <div className="card card-body mt-4 mb-4">
                        <pre><code className="language-python">{`class QuitarTranVacias:
    def __init__(self,numEstados):
        self.automataInicial = {}
        self.e_clausulas = {}
        self.automataFinal = {}
        aux = 0
        for i in range(numEstados):
            aux="q"+str(i)
            self.automataInicial[aux]={}
            self.e_clausulas[aux]={}
                    
    def agregar_estado(self,estado,tranA,conectaConA,tranB,conectaConB,tranVacia):   
        self.automataInicial[estado]={tranA:conectaConA,tranB:conectaConB,"e":tranVacia}
                    
    def mostrarAutomataInicial(self):
        self.claves = list(self.automataInicial.keys())
        for c in self.claves:
            print(f"{c} | {self.automataInicial[c]}")
                    
    def mostrarAutomataFinal(self):
        self.claves = list(self.automataFinal.keys())
        for c in self.claves:
            print(f"{c} | {self.automataFinal[c]}")

    def __crear_eClausulas(self,estado):
        e_clausula = []
        e_clausula = self.automataInicial[estado]["e"]
        if(len(e_clausula)==0):
            pass
        else:
            e_temp = 0
            for e in e_clausula:
                if(self.automataInicial[e]["e"]==[]):
                    pass
                else:  
                    e_temp = self.automataInicial[e]["e"]
                    for i in e_temp:  # agregando las conexiones con las otras transiciones vacias
                        if(i in e_clausula):
                            pass
                        else:
                            e_clausula.append(i)
        if(estado in e_clausula):
            pass
        else:
            e_clausula.append(estado)
            e_clausula.sort()
        self.e_clausulas[estado]={"e":e_clausula}
                    
    def __valorarEstados(self,estados):
        resA = []
        resB = []
        temp_A = []
        temp_B = []
        for e in estados:
            temp_A = self.automataInicial[e]["a"]
            temp_B = self.automataInicial[e]["b"]
            for i in temp_A:
                resA.append(i)
            for i in temp_B:
                resB.append(i)
        resA = list(set(resA))
        resB = list(set(resB))
        resA.sort()
        resB.sort()
        if("0" in resA and len(resA)>1):
            resA.remove("0")
        if("0" in resB and len(resB)>1):
            resB.remove("0")
        return resA,resB
                    
                    
    def __resultado_eClasulas(self,res):
        resFinal = []
        if(res==["0"]):   # si se busca una e clausula de 0
            return ["0"]
        elif("q" in res): # si se busca un solo estado
            temp = self.e_clausulas[res]["e"]  
            for i in temp:
                resFinal.append(i)
            resFinal = list(set(resFinal))
            resFinal.sort()
            return resFinal
        else: # si se busca mas de un estado
            for estado in res:
                temp = self.e_clausulas[estado]["e"]
                for i in temp:
                    resFinal.append(i)
            resFinal = list(set(resFinal))
            resFinal.sort()
            return resFinal
                    
    def __valorar_eClausulas(self):
        e_claus = []
        resA = []
        resB = []
        e_resA = []
        e_resB = []
        estados = list(self.e_clausulas.keys())
        for e in estados:
            e_claus = self.__resultado_eClasulas(e)
            resA, resB = self.__valorarEstados(e_claus)
            e_resA = self.__resultado_eClasulas(resA)
            e_resB = self.__resultado_eClasulas(resB)
            self.automataFinal[e]={"a":e_resA,"b":e_resB}
                    
    def eliminarTransiciones(self):
        estados = list(self.automataInicial.keys())
        for e in estados:
            self.__crear_eClausulas(e)
        self.__valorar_eClausulas() 
                    
    def regresarResultado(self):
        return self.automataFinal`}
                        </code></pre>
                    </div>
                    <p style={{textAlign: "justify"}}>
                        Clase para convertir de AFND a AFD
                    </p>
                    <div className="card card-body mt-4 mb-4">
                        <pre><code className="language-python">{`class Convertidor:
    def __init__(self,numEstados):  # En numEstados se puede introducir el número de estados o el automata completo en forma de diccionario
        self.automataOriginal = {}
        self.nuevoAutomata = {}
        self.transiciones = []   
        self.claves = []
        self.nuevasValoraciones = [["q0"]] # siempre se inicia la valoracion con q0
        self.valoracionesHechas = []
        self.nuevosEstados={}
        self.auxCrearE = 0
        self.equivalencias = {}
        if(type(numEstados)==dict):
            self.automataOriginal = numEstados
        else:
            aux = 0
            for i in range(numEstados):
                aux="q"+str(i)
                self.automataOriginal[aux]={}       

    def agregar_estado(self,estado,transicion,conectaCon):
        self.transiciones.append(transicion)   # guardando transiciones
        self.transiciones = list(set(self.transiciones)) # eliminando transiciones repetidas
        self.automataOriginal[estado].setdefault(transicion,conectaCon)
                    
    def __crear_estados(self,resA,resB):
        ind="q"+str(self.auxCrearE)
        self.nuevosEstados.update({ind:{"a":resA,"b":resB}})
        self.auxCrearE+=1
                    
    def recorrerAutomata(self):
        self.claves = list(self.automataOriginal.keys())
        for c in self.claves:
            print(f"{c} | {self.automataOriginal[c]}")
                    
    def recorrerNuevoAutomata(self):
        estados = list(self.nuevoAutomata.keys())
        for e in estados:
            print(f"{e} | {self.nuevoAutomata[e]}")        
                    
    def __valorarEstados(self,estados):
        valAct = []
        resultado = []
        resA = []
        resB = []
        if(estados in self.valoracionesHechas):
            pass    
        else:
            self.valoracionesHechas.append(estados)                      
            if(estados==["0"]):
                self.__crear_estados(["0"],["0"])               
            else:              
                for e in estados:   # valoración con "a"
                    valAct = self.automataOriginal[e]["a"] # lista con la validacion por separado de cada "a"
                    for elem in valAct:
                        if(elem in resultado):                          
                            pass
                        else:
                            resultado.append(elem)
                            resA.append(elem)
                            resultado.sort()    # acomodando los estados
                            resA.sort()
                        if("0" in resultado and len(resultado)>1):
                            resultado.remove("0")        
                            resA.remove("0")                           
                        if(resultado not in self.nuevasValoraciones and resultado not in self.valoracionesHechas):
                            self.nuevasValoraciones.append(resultado)       
                resultado = [] 
                for e in estados:  # valoración con "b"
                    valAct = self.automataOriginal[e]["b"] 
                    for elem in valAct:
                        if(elem in resultado):  
                            pass
                        else:
                            resultado.append(elem) 
                            resB.append(elem)
                            resultado.sort()
                            resB.sort()
                        if("0" in resultado and len(resultado)>1):
                            resultado.remove("0")
                            resB.remove("0")
                        if(resultado not in self.nuevasValoraciones and resultado not in self.valoracionesHechas):
                            self.nuevasValoraciones.append(resultado) 
                self.__crear_estados(resA,resB)  # creando nuevos estados y su correspondencia
                    
    def __tablaEquivalencias(self):
        keysEst = list(self.nuevosEstados.keys())
        aux = 0
        for estado in keysEst:
            self.equivalencias.update({estado:self.valoracionesHechas[aux]})
            aux+=1 
                    
    def __obtener_valAB(self,estado):
        valorA = 0
        valorB = 0
        estadosE = list(self.equivalencias.keys())       
        valor = self.nuevosEstados[estado]["a"]            
        for e in estadosE:      # encontrando coincidencia en tabla equivalencias
            if(valor==self.equivalencias[e]):
                valorA = e
        valor = self.nuevosEstados[estado]["b"]
        for e in estadosE:
            if(valor==self.equivalencias[e]):
                valorB = e
        return valorA,valorB
                    
    def __hacer_nAutomata(self):      
        estados = list(self.nuevosEstados)
        for e in estados:
            self.nuevoAutomata[e]={}
            valorA,valorB = self.__obtener_valAB(e)
            self.nuevoAutomata[e].setdefault("a",valorA)
            self.nuevoAutomata[e].setdefault("b",valorB)            
                    
    def convertirAFD(self):
        vacio = False
        while(len(self.nuevasValoraciones)!=0):
            for val in self.nuevasValoraciones:  
                if(val==["0"]):
                    vacio=True
                else:
                    self.__valorarEstados(val)
            self.nuevasValoraciones.remove(val)
        if(vacio):
            self.__valorarEstados(["0"])      
        self.__tablaEquivalencias()
        self.__hacer_nAutomata()`}
                        </code></pre>
                    </div>
                    <h4 style={{textAlign: "start"}}>Ejemplo de resuitado de ejecución.</h4>
                    <p>
                        <strong>1)</strong> Generando el automata
                        <br></br>
                        <strong>2)</strong> *Estado vacio se represeta con 0
                        <br></br>
                        <strong>3)</strong> agregar_estado() acepta lo siguiente: agregar_estado(estado, "a", transiciones con a, "b", transiciones con b, transiciones vacias del estado)
                    </p>
                    <div className="card card-body mt-4 mb-4">
                        <pre><code className="language-python">{`automataInicial = QuitarTranVacias(5)
automataInicial.agregar_estado("q0", "a", ["q1","q2","q3"], "b", ["0"], [])   
automataInicial.agregar_estado("q1", "a", ["0"],  "b", ["q4"], ["q4"])
automataInicial.agregar_estado("q2", "a", ["q1"], "b", ["q4"], [])
automataInicial.agregar_estado("q3", "a", ["q2","q3","q4"], "b", ["q3"], ["q2","q4"])
automataInicial.agregar_estado("q4", "a", ["q1"], "b", ["q3"], [])`}</code></pre>
                    </div>
                    <p>
                        <strong>4)</strong> Mostrando automata inicial
                    </p>
                    <div className="card card-body mt-4 mb-4">
                        <pre><code className="language-python">{`print(" - Automata con transiciones vacías - ")
automataInicial.mostrarAutomataInicial()`}</code></pre>
                    </div>
                    <div className="card card-body mt-1 mb-4">
                        <pre><code className="language-python">{` - Automata con transiciones vacías -
q0 | {'a': ['q1', 'q2', 'q3'], 'b': ['0'], 'e': []}
q1 | {'a': ['0'], 'b': ['q4'], 'e': ['q4']}
q2 | {'a': ['q1'], 'b': ['q4'], 'e': []}
q3 | {'a': ['q2', 'q3', 'q4'], 'b': ['q3'], 'e': ['q2', 'q4']}
q4 | {'a': ['q1'], 'b': ['q3'], 'e': []}`}</code></pre>
                    </div>
                    <p>
                        <strong>5)</strong> Eliminando trasiciones vacías.
                    </p>
                    <div className="card card-body mt-4 mb-4">
                        <pre><code className="language-python">{`automataInicial.eliminarTransiciones()`}</code></pre>
                    </div>
                    <p>
                        <strong>6)</strong> Asignando el automata sin transiciones vacías.
                    </p>
                    <div className="card card-body mt-4 mb-4">
                        <pre><code className="language-python">{`automataSinVacias = automataInicial.regresarResultado()`}</code></pre>
                    </div>
                    <p>
                        <strong>7)</strong> Convirtiendo de AFND a AFD.
                    </p>
                    <div className="card card-body mt-4 mb-4">
                        <pre><code className="language-python">{`automataFinal = Convertidor(automataSinVacias)
automataFinal.convertirAFD()`}</code></pre>
                    </div>
                    <p>
                        <strong>8)</strong> Mostrando el automata final.
                    </p>
                    <div className="card card-body mt-4 mb-4">
                        <pre><code className="language-python">{`print(" - AFD - ")
automataFinal.recorrerNuevoAutomata()`}</code></pre>
                    </div>
                    <div className="card card-body mt-1">
                        <pre><code className="language-python">{` - AFD - 
q0 | {'a': 'q1', 'b': 'q3'}
q1 | {'a': 'q1', 'b': 'q2'}
q2 | {'a': 'q1', 'b': 'q2'}
q3 | {'a': 'q3', 'b': 'q3'}`}</code></pre>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AlgoritmoGenetico_AFD;