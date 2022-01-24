<script>
  import { username, user } from './user';

  function signout() {
    user.leave();
    username.set('');
  }
</script>

<header class="tophead">
  {#if $username}
    <div class="user-bio">
      <span>Hello<strong>{$username}</strong></span>
      <img src={`https://avatars.dicebear.com/api/initials/${$username}.svg`} alt="avatar" /> 
    </div>

    <button class="signout-button" on:click={signout}>Sign Out</button>
    {:else}
      <h1 style="color:white;">dChat</h1>
      
  {/if}
</header>
