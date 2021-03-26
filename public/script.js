//function expression to select elements
const header= document.querySelector(' .header')
const selectElement = (s) => document.querySelector(s);
//open the menu on click
selectElement('.open').addEventListener('click', () =>{
    selectElement('.nav-list').classList.add('active');
});
//close menu on click
selectElement('.close').addEventListener('click', () =>{
    selectElement('.nav-list').classList.remove('active');
});
 