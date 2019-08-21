Markdown Links
Preámbulo

Markdown es un lenguaje de marcado ligero muy popular entre developers. Es usado en muchísimas plataformas que manejan texto plano (GitHub, foros, blogs, ...), y es muy común encontrar varios archivos en ese formato en cualquier tipo de repositorio (empezando por el tradicional README.md).

Estos archivos Markdown normalmente contienen links (vínculos/ligas) que muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una herramienta usando Node.js, que lea y analice archivos en formato Markdown, para verificar los links que contengan y reportar algunas estadísticas.

md-links
Introducción

Node.js es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome. Esto nos va a permitir ejecutar JavaScript en el entorno del sistema operativo, ya sea tu máquina o un servidor, lo cual nos abre las puertas para poder interactuar con el sistema en sí, archivos, redes, ...

En este proyecto nos alejamos un poco del navegador para construir un programa que se ejecute usando Node.js, donde aprenderemos sobre cómo interactuar con el sistema archivos, con el entorno (process, env, stdin/stdout/stderr), ...
Objetivos

El objetivo práctico de este proyecto es que aprendas cómo crear tu propia librería (o biblioteca - library) en JavaScript.

Diseñar tu propia librería es una experiencia fundamental para cualquier desarrollador porque que te obliga a pensar en la interfaz (API) de tus módulos y cómo será usado por otros developers. Debes tener especial consideración en peculiaridades del lenguaje, convenciones y buenas prácticas.

Tópicos:

    Node.js.
    módulos (CommonJS).
    file system.
    path.
    http.get.
    Parsing.
    markdown.
    CLI.
    npm-scripts.
    semver.

Consideraciones generales

Este proyecto se debe "resolver" de manera individual.

La librería debe estar implementada en JavaScript para ser ejecutada con Node.js. Está permitido usar librerías externas.
Parte obligatoria

Tu módulo debe ser instalable via npm install <github-user>/md-links. Este módulo debe incluir tanto un ejecutable que podamos invocar en la línea de comando como una interfaz que podamos importar con require para usarlo programáticamente.

Los tests unitarios deben cubrir un mínimo del 70% de statements, functions, lines y branches. Te recomendamos explorar Jest para tus pruebas unitarias.

Para comenzar este proyecto tendrás que hacer un fork y clonar este repositorio.

Antes de comenzar a codear, es necesario crear un plan de acción. Esto debería quedar detallado en el README.md de tu repo y en una serie de issues y milestones para priorizar y organizar el trabajo, y para poder hacer seguimiento de tu progreso.

Dentro de cada milestone se crearán y asignarán los issues que cada quien considere necesarios.

También te sugerimos que empieces a utilizar los project boards de github que te ayudaran a organizar y priorizar su trabajo.
Archivos del proyecto

    README.md con descripción del módulo, instrucciones de instalación/uso, documentación del API y ejemplos. Todo lo relevante para que cualquier developer que quiera usar tu librería pueda hacerlo sin inconvenientes.
    index.js: Desde este archivo debes exportar una función (mdLinks).
    package.json con nombre, versión, descripción, autores, licencia, dependencias, scripts (pretest, test, ...)
    .editorconfig con configuración para editores de texto.
    .eslintrc con configuración para linter.
    .gitignore para ignorar node_modules u otras carpetas que no deban incluirse en control de versiones (git).
    test/md-links.spec.js debe contener los tests unitarios para la función mdLinks(). Tu implementación debe pasar estos test.

JavaScript API

El módulo debe poder importarse en otros scripts de Node.js y debe ofrecer la siguiente interfaz:
mdLinks(path, options)
Argumentos

    path: Ruta absoluta o relativa al archivo o directorio. Si la ruta pasada es relativa, debe resolverse con respecto al directorio desde donde se invoca node (current working directory).
    options: Un objeto con las siguientes propiedades:
        validate: Booleano que determina si se desea validar los links encontrados.

Valor de retorno

La función debe retornar una promesa (Promise) que resuelva a un arreglo (Array) de objetos (Object), donde cada objeto representa un link y contiene las siguientes propiedades:

    href: URL encontrada.
    text: Texto que aparecía dentro del link (<a>).
    file: Ruta del archivo donde se encontró el link.

Ejemplo

const mdLinks = require("md-links");

// Caso 1 .- Ruta relativa sin options
mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);

// Caso  .- Ruta relativa con option (validate)
mdLinks("./some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, ok }]
  })
  .catch(console.error);

// Caso 3 .- Ruta relativa de un directorio sin options
mdLinks("./some/dir")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);

//PD: Pueden presentarse más casos.

CLI (Command Line Interface - Interfaz de Línea de Comando)

El ejecutable de nuestra aplicación debe poder ejecutarse de la siguiente manera a través de la terminal:

md-links <path-to-file> [options]

Por ejemplo:

$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google

El comportamiento por defecto no debe validar si las URLs responden ok o no, solo debe identificar el archivo markdown (a partir de la ruta que recibe como argumento), analizar el archivo Markdown e imprimir los links que vaya encontrando, junto con la ruta del archivo donde aparece y el texto que hay dentro del link (truncado a 50 caracteres).
Options
--validate

Si pasamos la opción --validate, el módulo debe hacer una petición HTTP para averiguar si el link funciona o no. Si el link resulta en una redirección a una URL que responde ok, entonces consideraremos el link como ok.

Por ejemplo:

$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google

Vemos que el output en este caso incluye la palabra ok o fail después de la URL, así como el status de la respuesta recibida a la petición HTTP a dicha URL.
--stats

Si pasamos la opción --stats el output (salida) será un texto con estadísticas básicas sobre los links.

$ md-links ./some/example.md --stats
Total: 3
Unique: 3

También podemos combinar --stats y --validate para obtener estadísticas que necesiten de los resultados de la validación.

$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1

Entregables

Módulo instalable via npm install <github-user>/md-links. Este módulo debe incluir tanto un ejecutable como una interfaz que podamos importar con require para usarlo programáticamente.
Hacker edition

    Puedes agregar la propiedad line a cada objeto link indicando en qué línea del archivo se encontró el link.
    Puedes agregar más estadísticas.
    Integración continua con Travis o Circle CI.

Pistas / Tips
FAQs
¿Cómo hago para que mi módulo sea instalable desde GitHub?

Para que el módulo sea instalable desde GitHub solo tiene que:

    Estar en un repo público de GitHub
    Contener un package.json válido

Con el comando npm install githubname/reponame podemos instalar directamente desde GitHub. Ver docs oficiales de npm install acá.

Por ejemplo, el course-parser que usamos para la currícula no está publicado en el registro público de NPM, así que lo instalamos directamente desde GitHub con el comando npm install Laboratoria/course-parser.
Sugerencias de implementación

La implementación de este proyecto tiene varias partes: leer del sistema de archivos, recibir argumentos a través de la línea de comando, analizar texto, hacer consultas HTTP, ... y todas estas cosas pueden enfocarse de muchas formas, tanto usando librerías como implementando en VanillaJS.

Por poner un ejemplo, el parseado (análisis) del markdown para extraer los links podría plantearse de las siguientes maneras (todas válidas):

    Usando un módulo como markdown-it, que nos devuelve un arreglo de tokens que podemos recorrer para identificar los links.
    Siguiendo otro camino completamente, podríamos usar expresiones regulares (RegExp).
    También podríamos usar una combinación de varios módulos (podría ser válido transformar el markdown a HTML usando algo como marked y de ahí extraer los link con una librería de DOM como JSDOM o Cheerio entre otras).
    Usando un custom renderer de marked (new marked.Renderer()).

No dudes en consultar a tus compañeras, coaches y/o el foro de la comunidad si tienes dudas existenciales con respecto a estas decisiones. No existe una "única" manera correcta wink
Tutoriales / NodeSchool workshoppers

    learnyounode
    how-to-npm
    promise-it-wont-hurt

Otros recursos

    Acerca de Node.js - Documentación oficial
    Node.js file system - Documentación oficial
    Node.js http.get - Documentación oficial
    Node.js - Wikipedia
    What exactly is Node.js? - freeCodeCamp
    ¿Qué es Node.js y para qué sirve? - drauta.com
    ¿Qué es Nodejs? Javascript en el Servidor - Fazt en YouTube
    ¿Simplemente qué es Node.js? - IBM Developer Works, 2011
    Node.js y npm
    Módulos, librerías, paquetes, frameworks... ¿cuál es la diferencia?
    Asíncronía en js
    NPM
    Publicar packpage
    Crear módulos en Node.js
    Leer un archivo
    Leer un directorio
    Path
    Linea de comando CLI

Checklist
General

    Puede instalarse via npm install --global <github-user>/md-links

README.md

    Colocar el pseudo código o diagrama de flujo con el algoritmo que soluciona el problema.
    Un board con el backlog para la implementación de la librería.
    Documentación técnica de la librería.
    Guía de uso e instalación de la librería

API mdLinks(path, opts)

    El módulo exporta una función con la interfaz (API) esperada.
    Implementa soporte para archivo individual
    Implementa soporte para directorios
    Implementa options.validate

Pruebas / tests

    Pruebas unitarias cubren un mínimo del 70% de statements, functions, lines, y branches.
    Pasa tests (y linters) (npm test).

CLI

    Expone ejecutable md-links en el path (configurado en package.json)
    Se ejecuta sin errores / output esperado
    Implementa --validate
    Implementa --stats

Hacker Edition

    Crear un script en el package.json que transforme el codigo ES6+ a ES5.
    Puedes agregar la propiedad line a cada objeto link indicando en qué línea del archivo se encontró el link.
    Puedes agregar más estadísticas.
    Integración continua con Travis o Circle CI.
