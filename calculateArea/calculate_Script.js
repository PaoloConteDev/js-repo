function calculateArea() 
{
    let length = parseFloat(document.getElementById('length').value);
    let width = parseFloat(document.getElementById('width').value);

    let area = length * width;

    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

function calculateCost() 
{
    let A1 = parseFloat(document.getElementById('A1').value);
    let A2 = parseFloat(document.getElementById('A2').value);
    let A3 = parseFloat(document.getElementById('A3').value);

    let totalCost = A1 + A2 + A3;

    document.getElementById('cost').innerText = `The total grocery cost is: ${totalCost}€`;
}