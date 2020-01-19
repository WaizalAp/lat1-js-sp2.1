function LPerBalok(p,l,t) {
    document.write('Latihan 2 : '+'<br>'+'<br>')
    document.write('panjang : ' + p +'<br>'+ 'lebar : ' + l+'<br>' + 'tinggi : '+ t+'<br>')
    return document.write('Volume Balok : ' + p*l*t +'<br>' + 'Luas Permukaan Balok : '+(2 * (p*l+p*t+l*t)))
    
}LPerBalok(8,5,2)