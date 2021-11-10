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
    <input type="radio" id="num1" name="rating" value="1" on:change={onChange} checked={selected === 1} />
    <label for="num1">1</label>
  </li>

  <li>
    <input type="radio" id="num2" name="rating" value="2" on:change={onChange} checked={selected===2} />
    <label for="num2">2</label>
  </li>

  <li>
    <input type="radio" id="num3" name="rating" value="3" on:change={onChange} checked={selected === 3} />
    <label for="num3">3</label>
  </li>

  <li>
    <input type="radio" id="num4" name="rating" value="4" on:change={onChange} checked={selected === 4} />
    <label for="num4">4</label>
  </li>

  <li>
    <input type="radio" id="num5" name="rating" value="5" on:change={onChange} checked={selected === 5} />
    <label for="num5">5</label>
  </li>

  <li>
    <input type="radio" id="num6" name="rating" value="6" on:change={onChange} checked={selected === 6} />
    <label for="num6">6</label>
  </li>

  <li>
    <input type="radio" id="num7" name="rating" value="7" on:change={onChange} checked={selected === 7} />
    <label for="num7">7</label>
  </li>

  <li>
    <input type="radio" id="num8" name="rating" value="8" on:change={onChange} checked={selected === 8} />
    <label for="num8">8</label>
  </li>

  <li>
    <input type="radio" id="num9" name="rating" value="9" on:change={onChange} checked={selected === 9} />
    <label for="num9">9</label>
  </li>
  
  <li>
    <input type="radio" id="num10" name="rating" value="10" on:change={onChange} checked={selected === 10} />
    <label for="num10">10</label>
  </li>

</ul>

<style>

  /* Actual radio is invisible */

  [type="radio"]{
    opacity: 0;
  }

  
  .rating{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 30px 0;
  }

  .rating li{
    position: relative;
    background: hsl(var(--bkg-clr));
    width: 50px;
    height: 50px;
    color: var(--card-text);
    padding: 1em;
    text-align: center;
    border-radius: 50%;
    font-size: 1.2rem;
    border: 1px solid hsl(var(--shadow-color)/0.7);
    transition: 0.3s;
  } 

  .rating li label{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    padding: 0.5em;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }

  /* For hover and sibling select */

  .rating li:hover {
    background: hsl(var(--rating-clr));
    color: hsl(var(--bkg-clr));
  }

  .rating li:active{
    transform: scale(1.5);
  }
  
  [type="radio"]:checked ~ label{
    background: hsl(var(--rating-clr));
    color: hsl(var(--bkg-clr));
    animation: scaleIn 500ms ease-in;
  }

  @keyframes scaleIn {
    from{
      transform: translate(0.5, 0.5);
      opacity: 0.7;
    }
    to {
      transform: translate(4.5,4.5);
      opacity: 1;
    }
  }

</style>