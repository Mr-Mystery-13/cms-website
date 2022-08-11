const database = firebase.database().ref();


let pass = document.getElementById('pass');

let title = document.getElementById('title');
let desc = document.getElementById('desc');
let img = document.getElementById('img')


document.getElementById('save-btn').onclick = (event) => {

    if (pass.value === 'Edit: P128') {

        event.preventDefault();

        let data = {};

        if (title.value !== '') {
            data[title.id] = title.value;
        }
        if (desc.value !== '') {
            data[desc.id] = desc.value;
        }
        if (img.value !== '') {
            data[img.id] = img.value;
        }
        
        console.log(data);

        database.update(data);

        alert('Firebase Link: https://saket-cms-default-rtdb.firebaseio.com/');
    }

}
