<script>
import {createEventDispatcher} from 'svelte'

let selected = 10

const dispatch = createEventDispatcher();

const onChange = (e) => {
  selected = e.currentTarget.value;
  dispatch('rating-select', selected);
}
</script>


<ul class="rating">

  <li>
    <input type="rating" id="num1" name="rating" value="1" on:change={onChange} checked={selected === 1} />
    <label for="num1">1</label>
  </li>
  <li>
    <input type="rating" id="2" name="rating" value="2" on:change={onChange} checked={selected === 2} />
    <label for="2">2</label>
  </li>
  <li>
    <input type="rating" id="3" name="rating" value="3" on:change={onChange} checked={selected === 3} />
    <label for="3">3</label>
  </li>
  <li>
    <input type="rating" id="4" name="rating" value="4" on:change={onChange} checked={selected === 4} />
    <label for="4">4</label>
  </li>
  <li>
    <input type="rating" id="5" name="rating" value="5" on:change={onChange} checked={selected === 5} />
    <label for="5">5</label>
  </li>
  <li>
    <input type="rating" id="6" name="rating" value="6" on:change={onChange} checked={selected === 6} />
    <label for="6">6</label>
  </li>
  <li>
    <input type="rating" id="7" name="rating" value="7" on:change={onChange} checked={selected === 7} />
    <label for="7">7</label>
  </li>
  <li>
    <input type="rating" id="8" name="rating" value="8" on:change={onChange} checked={selected === 8} />
    <label for="8">8</label>
  </li>
  <li>
    <input type="rating" id="9" name="rating" value="9" on:change={onChange} checked={selected === 9} />
    <label for="9">9</label>
  </li>
  <li>
    <input type="rating" id="10" name="rating" value="10" on:change={onChange} checked={selected === 10} />
    <label for="10">10</label>
  </li>

</ul>