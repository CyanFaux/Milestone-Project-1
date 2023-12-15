const playingField = [
['a13', 'b13', 'c13', 'd13', 'e13', 'f13', 'g13', 'h13', 'i13', 'j13', 'k13', 'l13', 'm13'],
['a12', 'b12', 'c12', 'd12', 'e12', 'f12', 'g12', 'h12', 'i12', 'j12', 'k12', 'l12', 'm12'],
['a11', 'b11', 'c11', 'd11', 'e11', 'f11', 'g11', 'h11', 'i11', 'j11', 'k11', 'l11', 'm11'],
['a10', 'b10', 'c10', 'd10', 'e10', 'f10', 'g10', 'h10', 'i10', 'j10', 'k10', 'l10', 'm10'],
['a9', 'b9', 'c9', 'd9', 'e9', 'f9', 'g9', 'h9', 'i9', 'j9', 'k9', 'l9', 'm9'],
['a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8', 'i8', 'j8', 'k8', 'l8', 'm8'],    
['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7', 'i7', 'j7', 'k7', 'l7', 'm7'],    
['a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6', 'i6', 'j6', 'k6', 'l6', 'm6'],
['a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5', 'i5', 'j5', 'k5', 'l5', 'm5'],
['a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4', 'i4', 'j4', 'k4', 'l4', 'm4'],
['a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3', 'i3', 'j3', 'k3', 'l3', 'm3'],
['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2', 'i2', 'j2', 'k2', 'l2', 'm2'],
['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1', 'i1', 'j1', 'k1', 'l1', 'm1']
]

const fieldDiv  = document.getElementById('field-div')

for (let row = 0; row < playingField.length; row++) {
    for (let col = 0; col < playingField[row].length; col++) {
        const fieldTile = document.createElement('div');
        fieldTile.textContent = playingField[row][col];
        fieldTile.classList.add('field-tile-class');
        fieldDiv.appendChild(fieldTile);
    }
}