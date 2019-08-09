// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function header(title, date, temp) {
    
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('header');
    
    date = document.createElement('span');
    date.classList.add('date');
    date.textContent = date;

    title = document.createElement('h1');
    title.textContent = title;

    temp = document.createElement('span');
    temp.textContent = temp;

    headerDiv.appendChild(date);
    headerDiv.appendChild(title);
    headerDiv.appendChild(temp);

    return header;
}

const headerContainer = document.querySelector('.header-container');

// const newHeader = header('Lambda Times', 'MARCH 28, 2019', '98°')
// console.log(newHeader)

headerContainer.append(header('Lambda Times', 'MARCH 28, 2019', '98°'));
