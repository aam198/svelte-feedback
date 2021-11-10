<script>
 import Card from './Card.svelte'

 export let item

</script>


<Card>
  <div class="rating-display">
    {item.rating}
  </div>
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

</style>