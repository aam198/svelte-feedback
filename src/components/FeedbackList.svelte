<script>
  // import {onMount, onDestroy} from 'svelte'
  import {FeedbackStore} from '../stores'
  import Card from './Card.svelte'
  import { scale, fly } from 'svelte/transition'

  // Optional way to subscribe/unsubscribe:
      // let feedback = []

      // console.log(feedback)


      // const unsubscribe = FeedbackStore.subscribe((data) => feedback = data)

      // // unsubscribe/lifecycle method
      
      // onMount(()=> {
      //   console.log('mounted')
      // })

      // onDestroy(() => {
      //   unsubscribe()
      // })

  const handleDelete = (itemId) =>{
    FeedbackStore.update((currentFeedback) => {
      return currentFeedback.filter(item => item.id != itemId)
    })
  }

</script>



{#each $FeedbackStore as fb (fb.id)}
<div in:scale out:fly="{{y:200, duration: 500}}">
<Card>
  <div class="rating-display">
    {fb.rating}
  </div>
  <button class="close" on:click={() => handleDelete(fb.id)}>X</button>
  <p class="text-display">
    {fb.text}
  </p>
</Card>
</div>
{/each}



<style>
  .rating-display{
    position: absolute;
    top: -10px;
    left: -10px;
    width: 50px;
    height: 50px;
    background: hsl(var(--rating-clr));
    color: hsl(var(--bkg-clr));
    border: 2px #2b3544 solid;
    border-radius: 50%;
    padding: 8px;
    text-align: center;
    font-size: 19px;
  }

  .close{
    color: hsl(var(--close));
    font-size: 18px;
    position: absolute;
    top: 6px;
    right: 16px;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: 55%;
    transition: transform 300ms ease-in,  color 200ms ease-in;
  }
  .close:hover{
    color: hsl(355 68% 59%);
    transform: scale(1.2);
  }

  .close:active{
    background: none;
  }

</style>