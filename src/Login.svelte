<script>
  import { user } from './user';//import the user object
  let username;//set up local state for the username
  let password;//set up local state for the password
  function login() {
    user.auth(username, password, ({ err }) => err && alert(err));
    //use the user auth method it takes the username and password as arguments then the third argument allows you to define a callback
  }
  function signup() {
    user.create(username, password, ({ err }) => {  //create method on the user 
      if (err) {
        alert(err);
      } else {
        login();//if the user creation is successful then we will log that user in automatically 
      }
    });
  }
</script>

<label for="username">Username</label>                                                 
<input name="username" bind:value={username} minlength="3" maxlength="16" /> 

<label for="password">Password</label>
<input name="password" bind:value={password} type="password" />

<!--two-way data binding with a variable bycreating a form input and then saying bind value 
to that variable that means anytime the user types into the form the value of the variable will change--> 


<button class="login" on:click={login}>Sign in</button>
<button class="login"  on:click={signup}>Sign Up</button>

<!--both the login and signup process which itself just consists of two different buttons 
that will either call the login function or the sign up function to log a user-->
