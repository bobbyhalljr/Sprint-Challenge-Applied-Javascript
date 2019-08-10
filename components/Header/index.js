// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//<div class="header">
/* <span class="date">SMARCH 28, 2019</span>
<h1>Lambda Times</h1>
<span class="temp">98°</span>
</div> */
// And add it to the DOM in the .headerContainer component


function headLineComponet(date, title, temp) {
    const headLine = document.createElement('div');
    headLine.classList.add('header');

    date = document.createElement('span');
    date.classList.add('date');
    date.textContent = date;

    title = document.createElement('h1');
    title.textContent = title;

    temp = document.createElement('span');
    temp.classList.add('temp');
    temp.textContent = temp;

    headLine.append(date);
    headLine.append(title);
    headLine.append(temp);

    console.log(headLineComponet)
    return headLineComponet;
}


const headLineContainer = document.querySelector('.header-container');

let newHeadLine = headLineComponet('MARCH 28, 2019', 'Lambda Times', '98°');
// console.log(newHeadLine)

headLineContainer.append(newHeadLine);
