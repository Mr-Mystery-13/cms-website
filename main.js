const database = firebase.database().ref();


let title = document.getElementById('title');
let desc = document.getElementById('desc');
let img = document.getElementById('img')


function updateWebsite(dataSnapshot) {
    let data = dataSnapshot.val()

    console.log(data);

    if (data[title.id] !== undefined) {
        title.innerHTML = data[title.id]
    }
    if (data[desc.id] !== undefined) {
        desc.innerHTML = data[desc.id]   
    }
    if (data[img.id] !== undefined) {
        img.src = data[img.id]
    }
}


database.on('value', updateWebsite)