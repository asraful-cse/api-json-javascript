// :24-5:Load data, JSON placeholder ,GET Display..:
fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => displayUser(json))

function displayUser(users) {
    const userNames = users.map(user => user.username);
    const ul = document.getElementById("user-container");

    for (let i = 0; i < userNames.length; i++) {
        const userName = userNames[i];
        const li = document.createElement("li");
        li.innerText = userName;
        ul.appendChild(li);
    }

}
// //  24-5 :end: