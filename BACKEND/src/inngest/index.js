const { Inngest } = require('inngest');
const User = require('../models/user.models');

// Create a client to send and receive events
const inngest = new Inngest({ id: "movie-ticket-booking" });

//Inngest function to save user data to database
const syncUserCreation = inngest.createFunction(
    { id: 'save-user', triggers: [{ event: 'clerk/user.created' }] },
    async ({ event })=>{
        const {id, first_name, last_name, email_addresses, image_url} = event.data
        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: first_name + ' ' + last_name,
            image: image_url
        }
        await User.create(userData)
    }
)


//Inngest function to delete user data from database
const syncUserDeletion = inngest.createFunction(
    { id: 'delete-user', triggers: [{ event: 'clerk/user.deleted' }] },
    async ({ event })=>{
        const {id} = event.data
        await User.findByIdAndDelete(id)
    }
)

//Inngest function to update user data in database
const syncUserUpdate = inngest.createFunction({
    id: 'update-user',
    triggers: [{ event: 'clerk/user.updated' }]
},
    async ({ event })=>{
        const {id, first_name, last_name, email_addresses, image_url} = event.data
        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: first_name + ' ' + last_name,
            image: image_url
        }
        await User.findByIdAndUpdate(id,userData)
    }
)

// Inngest functions to be served
export const functions = [syncUserCreation, syncUserDeletion, syncUserUpdate];

