import {writable} from 'svelte/store'

// Setting as writeable and passing in default state
export const FeedbackStore = writable([
  {
    id: 1,
    rating: 7,
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
  }
]);