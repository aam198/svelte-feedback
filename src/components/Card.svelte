

<div class="card">
  <slot></slot>
</div>

<style>
  .card{
    background-color: #2b3544;
    color: var(--card-text);
    border-radius: 15px;
    padding: 40px 50px;
    margin: 20px 0;
    position: relative;
    font-family: 'Rubik', sans-serif;
    filter: drop-shadow(2.1px 4.2px 6.2px hsl(var(--shadow-color) / 0.73));
  }
</style>