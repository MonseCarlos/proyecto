const form=document.querySelector('.form-register')

function retrieveData(event){
    event.preventDefault()
    const data ={}
    data.username = document.querySelector('#usuario').value
    data.password = document.querySelector('#password').value
    fetch('http://localhost:3000/users',{
        method: 'POST',
        headers:{
                "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then((user) => {
        alert(`El usuario ${user.username} ya esta guardado`)
    })
}

form.addEventListener('submit',retrieveData)



