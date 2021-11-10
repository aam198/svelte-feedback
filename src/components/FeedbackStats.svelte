<script>
  import {FeedbackStore} from '../stores'

  $: count = $FeedbackStore.length; 
  $: average = $FeedbackStore.reduce((a, {rating})=> a + rating, 0) /$FeedbackStore.length
  
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