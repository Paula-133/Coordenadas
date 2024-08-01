function convertirRectangularAPolar() {
    const x = parseFloat(document.getElementById('x').value);
    const y = parseFloat(document.getElementById('y').value);

    if (isNaN(x) || isNaN(y)) {
        alert("Por favor, ingrese valores válidos para X y Y.");
        return;
    }

    const r = Math.sqrt(x * x + y * y);
    const theta = Math.atan2(y, x) * (180 / Math.PI);

    document.getElementById('resultadoPolar').innerText = 
        `R = ${r.toFixed(2)}, Θ = ${theta.toFixed(2)}°`;
}

function convertirPolarARectangular() {
    const r = parseFloat(document.getElementById('r').value);
    const theta = parseFloat(document.getElementById('theta').value);

    if (isNaN(r) || isNaN(theta)) {
        alert("Por favor, ingrese valores válidos para R y Θ.");
        return;
    }

    const thetaRad = theta * (Math.PI / 180);
    const x = r * Math.cos(thetaRad);
    const y = r * Math.sin(thetaRad);

    document.getElementById('resultadoRectangular').innerText = 
        `X = ${x.toFixed(2)}, Y = ${y.toFixed(2)}`;
}