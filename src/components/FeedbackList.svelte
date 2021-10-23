<script>
  import FeedbackItem from './FeedbackItem.svelte';
  export let feedback= []

  console.log(feedback)

</script>

{#each feedback as fb (fb.id)}
  <h3>{fb.text}</h3>
  <FeedbackItem item={fb} />
{/each}
Feedback List