<script>
import Card from './Card.svelte';
import Button from './Button.svelte';

let text = '';
let btnDisabled = true;
let min = 10;
let message;

const messageText = document.getElementsByClassName("message");

const handleInput = () => {
  if(text.trim().length <= min){
    message = `Text must be at least ${min} characters` ;
    btnDisabled = true;
  }
  else if (text.length === 0 || text.length === null){
    message = ' ';
    btnDisabled = false;
    messageText.classList.add("hidden");
  }
}

</script>

<Card>
  <form>
    <!-- Rating Select -->
    <header>
      <h2>How would you rate your service with us?</h2>
    </header>

    <div class="input-group">
      <input type="text" on:input={handleInput} bind:value= {text} placeholder="Tell us something that keeps you coming back">
      <Button type="submit" disabled = {btnDisabled}>Send</Button>
    </div>
    {#if message}
      <div class="message">
        {message}
      </div>
    {/if}
    
  </form>
</Card>


<style>


  header{
    max-width: 400px;
    margin: auto;
  }

  header h2{
    font-size: 1.2rem;
    text-align:center;
    font-weight: 600;
  }

  .input-group{
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 2px solid hsl(var(--bkg-clr)/.5);
    box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
    padding: 6px 10px;
    border-radius:15px;
    margin-top: 15px;
    color: var(--card-text);
    background-color: hsl(var(--bkg-clr)/0.1);
    transition: background-color 200ms ease-in;
  }


  .input-group:focus-within{
    background-color: hsl(var(--bkg-clr)/0.6);
  }

  input{
    flex-grow: 2;
    border: none;
    font-size: 16px;
    background: transparent;
    color: var(--card-text);
    margin-top: 0.7rem;
  }

  input:focus{
    outline: none;
  }

  .message{
    text-align:center;
    padding-top: 0.5rem;
    color: hsl(var(--close)/0.75);
    opacity: 0.8;
    font-size: 0.8rem;
  }
  

</style>