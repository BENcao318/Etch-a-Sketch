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
  let opacity = 0;
  let opacity2 = 0;
  content.addEventListener('mouseover', (e) => {
    if(e.target.getAttribute('data-opacity')){
      opacity2 = parseFloat(e.target.getAttribute('data-opacity'));
      opacity2 += 0.1;
      e.target.setAttribute('data-opacity', opacity2);
      console.log('opacity:' + opacity2)
    } else {
      e.target.setAttribute('data-opacity', opacity)
    }
    

    console.log(e.target);
    e.target.style.backgroundColor = randomRgba(opacity2);
  })
  
  
}

function gridDimension(grid, height, width, gridName) {
  grid.setAttribute('id', gridName);
  grid.style.height = height;
  grid.style.width = width;
}

function randomRgba(opacity) {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}


// console.log(Math.floor(Math.random() * 255));
// console.log(document.querySelectorAll('.grid'))


