const table = document.getElementById('table');
const tbody = table.querySelector('tbody');
const headers = table.querySelectorAll('th');
const rows = Array.from(tbody.querySelectorAll('tr'));

function getValue(row, index) {
  const cell = row.cells[index];
  const value = cell.innerText.trim();
  return value;
}

function sortTable(columnIndex, ascending) {
  const number = ascending;
  const sortFunction = (a, b) => {
    const aValue = getValue(a, columnIndex);
    const bValue = getValue(b, columnIndex);
    return aValue > bValue ? number : -number;
  };
  rows.sort(sortFunction);
  rows.forEach(row => tbody.appendChild(row));
}
    
headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const ascending = !header.classList.contains('sorted-asc');
    header.classList.toggle('sorted-asc', ascending);
    sortTable(index, ascending);
  });
});