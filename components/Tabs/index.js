// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.


const tabDiv = document.querySelector('.tab');
const topics = document.querySelector('.topics')

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then((res) => {
        //handle success
        console.log(res);
        let newTab = tabCreator(res.data.topics);
        topics.append(tabCreator(newTab))
    })
    .catch((error) => {
        console.log(error)
    })

function tabCreator(arr){
    for(let i = 0; i < arr.length; i++){
        tab = document.createElement('div');
        tab.classList.add('.tab');
        tab.textContent = tab[i];
        topics.appendChild(tab);
        console.log(tabCreator)
        return arr;
    }
    
    return tabCreator;
}

// Iterate over the topics creating a new Tab component and add it to the DOM

// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

