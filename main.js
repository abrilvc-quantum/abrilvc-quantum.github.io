var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Maestra en Ciencias Física Aplicada')
// pausa
    .pauseFor(2500)
    // borra todo
    .deleteAll()
    .typeString('Lo cuántico es el futuro')
    // pausa
    .pauseFor(2500)
    // carcateres que se borraran
    .deleteChars(9)
    .typeString('<strong>el ahora</strong>')
    .pauseFor(2500)
    .start();