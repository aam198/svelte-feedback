<script>
  import Card from './Card.svelte'
  export let item
</script>


<Card>
  <div class="rating-display">
    {item.rating}
  </div>
  <div class="close">X</div>
  <p class="text-display">
    {item.text}
  </p>
</Card>


<style>
  .rating-display{
    position: absolute;
    top: 10px;
    left: -10px;
    width: 50px;
    height: 50px;
    background: hsl(var(--rating-clr));
    color: hsl(var(--bkg-clr));
    border: 1px #2b3544 solid;
    border-radius: 50%;
    padding: 10px;
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
  }
  .close:hover{
    color: #f67d87
  }

</style>