// Add your code here
function submitData(userName, userEmail) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        })
    })
        .then((res) => res.json())
        .then((data) => {
            const id = document.createElement('p');
            document.querySelector('body').appendChild(id);
            id.textContent = data.id
        })
        .catch((error) => {
            const errorMessage = document.createElement('p');
            document.querySelector('body').appendChild(errorMessage);
            errorMessage.textContent = error.message;
        })
}
