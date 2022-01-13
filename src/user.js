import GUN from 'gun';
import 'gun/sea'; // security encryption and authorization  
import 'gun/axe'; // altternative way to connect peers together 
import { writable } from 'svelte/store'; // too rerender and to share widely & to reatice also 

// Database 
export const db = GUN(); //initialize the database

// Gun User
export const user = db.user().recall({sessionStorage: true}); // so the user stays logged in between  browser sessions 

// Current User's username
export const username = writable('');

user.get('alias').on(v => username.set(v)) // which will be the value of username

// to cheack the auth state when the user signs in or out 

db.on('auth', async(event) => {
    const alias = await user.get('alias'); // username string
    username.set(alias);

    console.log(`signed in as ${alias}`);
});
