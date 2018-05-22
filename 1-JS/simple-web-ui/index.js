console.log('-app.js-');

// import 'bootstrap/dist/css/bootstrap.css';


// using DOM API

// let alertBox = document.querySelector('.alert');
// let showBtn = document.querySelector('.btn-primary');
// let hideBtn = document.querySelector('.btn-danger');

// showBtn.addEventListener('click', (e) => {
//     alertBox.style.display = ''
// });
// hideBtn.addEventListener('click', (e) => {
//     alertBox.style.display = 'none'
// });

let alertBox = $('.alert');
$('.btn-primary').click((e) => {
    alertBox.show();
});
$('.btn-danger').click((e) => {
    alertBox.hide();
});

// using Timer API

let imgEle = document.querySelector('img');
let idx = 0;
setInterval(() => {
    imgEle.src = `images/${idx + 1}.jpeg`;
    idx++;
    if (idx === 5) {
        idx = 0;
    }
}, 1000);

// using XHR/fetch API

document.querySelector('#loadTodosBtn')
    .addEventListener('click', () => {
        let promise = fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
        promise
            .then(response => response.json())
            .then(todos => {
                document.querySelector('.jumbotron')
                    .innerText = JSON.stringify(todos);
            });
    });

