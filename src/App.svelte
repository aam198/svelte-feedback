<script>
  import FeedbackForm from './components/FeedbackForm.svelte';
  import FeedbackList from './components/FeedbackList.svelte';
  import FeedbackStats from './components/FeedbackStats.svelte';

  let feedback = [
    {
      id: 1,
      rating: 10,
      text: 'Culpa et elit irure ut esse enim elit minim anim quis ex occaecat. Ad eu irure enim irure culpa qui esse cillum Lorem voluptate qui ullamco. Esse excepteur aliquip eiusmod dolor sunt culpa Lorem cupidatat. Magna mollit fugiat deserunt veniam esse aute et. Proident ullamco cupidatat id duis commodo eiusmod duis velit proident do nostrud exercitation duis.'
    },
    {
      id: 2, 
      rating: 8,
      text: 'Nostrud duis tempor est dolor. Eiusmod adipisicing nulla reprehenderit ea aute Lorem nostrud laboris. Proident qui est ipsum cillum dolor enim. Aliquip deserunt velit elit occaecat do labore tempor eu commodo culpa pariatur minim.'
    },
    {
      id: 3, 
      rating: 9,
      text: 'Nostrud duis tempor est dolor. Eiusmod adipisicing nulla reprehenderit ea aute Lorem nostrud laboris. Proident qui est ipsum cillum dolor enim. Aliquip deserunt velit elit occaecat do labore tempor eu commodo culpa pariatur minim.'
    },
    {
      id: 4,
      rating: 3,
      text: 'Culpa et elit irure ut esse enim elit minim anim quis ex occaecat. Ad eu irure enim irure culpa qui esse cillum Lorem voluptate qui ullamco. Esse excepteur aliquip eiusmod dolor sunt culpa Lorem cupidatat. Magna mollit fugiat deserunt veniam esse aute et. Proident ullamco cupidatat id duis commodo eiusmod duis velit proident do nostrud exercitation duis.'
    },
  ]

// Finding stats of feedback

$: count = feedback.length; 
$: average = feedback.reduce((a, {rating})=> a + rating, 0) /feedback.length

  const addFeedback = (e) => {
    const newAddFeedback = e.detail;
    feedback=[newAddFeedback, ...feedback];
  }

  const deleteFeedback = (e) => {
    const itemId= e.detail
    feedback = feedback.filter((item) => item.id != itemId)
  }
  
</script>


<main class="container">
 <FeedbackForm on:add-feedback={addFeedback} />
 <FeedbackStats {count} {average} />
  <FeedbackList {feedback} on:delete-feedback={deleteFeedback} />
</main>

<style>
  
</style>