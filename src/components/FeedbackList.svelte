<script>
  import Card from './Card.svelte'
  import { createEventDispatcher} from 'svelte'
  export let feedback= []

  console.log(feedback)


  const dispatch = createEventDispatcher();
  const handleDelete = (itemId) =>{
    dispatch('delete-feedback', itemId)
  }
</script>



{#each feedback as fb (fb.id)}
<Card>
  <div class="rating-display">
    {fb.rating}
  </div>
  <button class="close" on:click={() => handleDelete(fb.id)}>X</button>
  <p class="text-display">
    {fb.text}
  </p>
</Card>

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
    top: 10px;
    right: 20px;
    cursor: pointer;
    background: none;
    border: 0;
  }
  .close:hover{
    color: #f67d87
  }

  .close:active{
    background: none;
  }

</style>