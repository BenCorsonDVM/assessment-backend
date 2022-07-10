//COMPLIMENT
const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)
//FORTUNE
const fortuneBtn = document.querySelector('#fortuneButton')

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data
            alert(data)
    })
}

fortuneBtn.addEventListener('click', getFortune)
//ADD A RANDOM USER
const addARandomUserBtn = document.getElementById('addARandomUserBtn')

const addARandomUser = () => {
    //tried to get a form to work but it wouldn't so I had to manually create a random user below
    let newUser = {
        username: 'Random123',
        firstName: 'Parry',
        lastName: 'Hotter',
    }
    axios.post("http://localhost:4000/api/users/", newUser)
        .then(res => {
            alert(res.data)
        })
}

addARandomUserBtn.addEventListener('click', addARandomUser)
//UPDATE RANDOM USER'S USERNAME
const updateBtn = document.getElementById('updateRandomUser')

const updateRandomUser = () => {
    let newUsername = {
        username: 'photter123'
    }
    axios.put('/api/users/Random123', newUsername).then(res => alert(res.data))
}

updateBtn.addEventListener('click', updateRandomUser)
//DELETE RANDOM USER
const deleteUserBtn = document.getElementById('deleteRandomUser')

const deleteRandomUser = () => {
    axios.delete('/api/users/photter123').then(res => alert(res.data))
}

deleteUserBtn.addEventListener('click', deleteRandomUser)

