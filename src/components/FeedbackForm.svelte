<script>
import {v4 as uuidv4} from 'uuid'
import {FeedbackStore} from '../stores'
import Card from './Card.svelte'
import Button from './Button.svelte'
import RatingSelect from './RatingSelect.svelte'


let text = '';
let rating = 10;
let btnDisabled = true;
let min = 10;
let message;

const handleSelect = e => rating = e.detail;


const handleInput = () => {
  if(text.trim().length <= min){
    console.log(text.trim().length);
    message = `Text must be at least ${min} characters` ;
    btnDisabled = true;
  }
  else{
    message = '';
    btnDisabled = false;
  }
}
// newFeedback creates an object, text will be a string, rating: +rating, changes rating from a string to a number/int. UUID package used for custom id creation. 
const handleSubmit = () => {
  if(text.trim().length > min){
    const newFeedback = {
      id: uuidv4(), 
      text,
      rating: +rating
    }

    FeedbackStore.update((currentFeedback) => {
      return [newFeedback, ...currentFeedback]
    })
  
    //clears the form after submission
    text = '';
  }
}
</script>

<Card>
    <header>
      <h2>How would you rate your service with us?</h2>
    </header>

  <form on:submit|preventDefault={handleSubmit}>
    
    <RatingSelect on:rating-select={handleSelect} />

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
    font-size: 1.4rem;
    text-align:center;
    font-weight: 600;
  }

  .input-group{
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 2px solid hsl(var(--bkg-clr)/.5);
    box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
    padding: 4px 10px;
    border-radius:15px;
    margin-top: 15px;
    color: var(--card-text);
    background-color: hsl(var(--bkg-clr)/0.1);
    transition: background-color 200ms ease-in;
  }


  .input-group:focus-within{
    background-color: hsl(var(--bkg-clr)/0.6);
  }

  input::placeholder{
    font-size: 1rem;
  }

  input{
    flex-grow: 2;
    border: none;
    font-size: 1.1rem;
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