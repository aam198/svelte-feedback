<script>
  export let style = 'primary'
  export let type = 'button'
  export let disabled = false
</script>




<button {type} {disabled} class={style}>
<slot></slot>

</button>

<style>
  button{
    color: hsl(var(--bkg-clr));
    border: 0;
    padding: 0.6rem 0.8rem;
    border-radius: 4px;
    width: 6rem;
    margin: 0.5rem 0.5rem;
    height: 2.5rem;
    cursor: pointer;
    font-size: 1.17rem;
  }

  .primary{
    background-color: hsl(var(--rating-clr));
  }

  .secondary{
    background: #ff6a95;
  }

  button:hover{
    transform: scale(0.98);
    opacity: 0.9;
  }

  button:active{
    background-color: hsl(var(--rating-clr));
    transform: scale(0.95);
  }

  button:disabled{
    background-color: hsl(var(--rating-clr));
    opacity: 0.4;
    cursor: not-allowed;
  }

  button:disabled:hover{
    transform: scale(1);
    opacity: 0.4;
  }

</style>