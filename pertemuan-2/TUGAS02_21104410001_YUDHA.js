function setup() {

    // LEBAR TINGGI
    createCanvas(640, 480);

}

function draw() {

    // ATUR WARNA BACKGROUND CANVAS
    background(80, 127, 204);

    // WARNA KOTAK
    fill(51);
    // KOTAK [X,Y, UKURAN, RADIUS ]
    square(180, 120, 255, 25);

    // WARNA MATA 1
    fill(240, 36, 53);
    // KOTAK [X, Y, UKURAN, RADIUS]
    square(190, 150, 105, 25);

    // WARNA MATA 2
    fill(240, 36, 53);
    // PERSEGI PANJANG [ X, Y, LEBAR. TINGGI]
    rect(320, 180, 98, 40);
    
    fill(240, 36, 53);
    circle(310, 330, 70);
}