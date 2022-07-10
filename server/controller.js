module.exports = {
    //DO NOT CHANGE THIS CODE. USE THIS CODE AS INSPIRATION
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ['Your hard work will payoff today.', 'You will make change for the better.', 'Now is the time to try something new.', 'Every flower blooms in its own sweet time.', 'All the effort you are making will ultimately pay off.']

        let randomIndex = Math.floor(Math.random() * fortunes.length)

        let randomFortune = fortunes[randomIndex]
        res.status(200).send(randomFortune)
    },
    addARandomUser: (req, res) => {
        let username = req.body.username
        let firstName = req.body.firstName
        let lastName = req.body.lastName
        res.status(200).send(`You have added a new random user named ${firstName} ${lastName} who has a username of ${username}`)
    },
    updateRandomUser: (req, res) => {
        let existingUsername = req.params.username
        let newUsername = req.body.username
        if(newUser.username === existingUsername){
            newUser.username = newUsername
        }
        res.status(200).send(`Random User's Username has been updated to ${newUsername}`)
    },
    deleteRandomUser: (req, res) => {
        let existingUsername = req.params.username
        if(newUser.username === existingUsername){
            delete newUser
        }
        res.status(200).send('The Random User you created has been deleted')
    }
}

