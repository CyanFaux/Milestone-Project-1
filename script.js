const playingField = [
[a7, b7, c7, d7, e7, f7, g7]    
[a6, b6, c6, d6, e6, f6, g6],
[a5, b5, c5, d5, e5, f5, g5],
[a4, b4, c4, d4, e4, f4, g4],
[a3, b3, c3, d3, e3, f3, g3],
[a2, b2, c2, d2, e2, f2, g2],
[a1, b1, c1, d1, e1, f1, g1],
]

const fieldDiv  = document.getElementById('field-div')

for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {

        const fieldTile = document.createElement('div');

        fieldTile.textContent = grid[row][col];

        fieldTile.classList.add('');

        fieldDiv.appendChild(fieldTile);
    }
}