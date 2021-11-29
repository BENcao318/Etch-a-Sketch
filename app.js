const content = document.querySelector('.content');
const clearBtn = document.querySelector('.btn-clear');
let gridSize = document.querySelector('.number');
const gridSizeSelected = document.querySelector('.gridSizeSelected');

gridSize.addEventListener('keyup', () => {
  clearGridColors();
  clearGrid();
  if(gridSize.value >=16 || gridSize.value <= 100){
    createGrid(gridSize.value);
    console.log(`createGrid, ${gridSize.value}`);
  } else {
    console.log('gridlimit')
  }
  showSelectedGridSize(gridSize.value);
  
})


clearBtn.addEventListener('click', clearGridColors);

function showSelectedGridSize(gridSize) {
  gridSizeSelected.style.fontSize = '26px';
  gridSizeSelected.textContent = `${gridSize} X ${gridSize}`;
}

function clearGridColors() {
  document.querySelectorAll('.grid').forEach(g => {
    g.style.backgroundColor = '#fff';
  })
}

function clearGrid() {
  document.querySelectorAll('.grid').forEach(g => {
    g.remove();
  })
}

function createGrid(gridSize) {
  const gridWidth = `${400 / gridSize}px`;
  const gridHeight = `${400 / gridSize}px`;

  for(let i = 0; i < gridSize * gridSize; i++) {
    const grid = document.createElement('div');
    grid.className = 'grid';
    gridDimension(grid, gridWidth, gridHeight, i);
    content.appendChild(grid);
  }
  
  content.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'black';
  })
  
  
}

function gridDimension(grid, height, width, gridName) {
  grid.setAttribute('id', gridName);
  grid.style.height = height;
  grid.style.width = width;
}

// console.log(document.querySelectorAll('.grid'))


