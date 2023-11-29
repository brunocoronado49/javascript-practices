function areaPolygon(polygon) {
    let result = 0;
    let lado = 4;
    let base = 9;
    let altura = 4;
    let ancho = 20;
    let largo = 10;

    switch(polygon) {
        case 1:
            console.log('Square:')
            result = lado * lado;
            console.log(`Area Square: ${result}`);
            break;
        case 2:
            console.log('Rectangle:');
            result = largo * ancho;
            console.log(`Area Rectangle: ${result}`);
            break;
        case 3:
            console.log('Triangle:')
            result = (base * altura) / 2;
            console.log(`Area Triangle: ${result}`);
            break;
    }
}

areaPolygon(2);
areaPolygon(1);
areaPolygon(3);
