$(() => { // Short form
  loadDogs();
});

const loadDogs = function() {

  $.get('/api/dogs')
    .then(data => {
      console.log(data);
      renderDogs(data);
    });
};


const renderDogs = function(dogs) {
  // Can't just render an array of Objects.
  // $('#dogs-container').text(dogs);

  // Save this once and reuse
  const $container = $('#dogs-container');

  for (const dog of dogs) {
    const $element = createDogElement(dog);
    $container.append($element);
  }

};

const createDogElement = function(dog) {
  const $element = `
  <article class="dog-article"
    <div>${dog.name}</div>
    <div>${dog.breed}</div>
  </article>
  `;

  return $element;
};