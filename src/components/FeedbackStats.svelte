<script>
  export let count
  export let average

</script>

<div class="feedback-stats">
  <h4>Reviews: {count}</h4>
  <h4>Ratings Average: {average}</h4>
</div>

<style>
  .feedback-stats{
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
  }
</style>