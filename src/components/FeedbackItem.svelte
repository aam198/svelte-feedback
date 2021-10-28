<script>
  import { createEventDispatcher} from 'svelte'
  import Card from './Card.svelte'
  export let item

  const dispatch = createEventDispatcher();
  const handleDelete = (itemId) =>{
    dispatch('delete-feedback', itemId)
  }
</script>


<Card>
  <div class="rating-display">
    {item.rating}
  </div>
  <button class="close" on:click={() => handleDelete(item.id)}>X</button>
  <p class="text-display">
    {item.text}
  </p>
</Card>



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