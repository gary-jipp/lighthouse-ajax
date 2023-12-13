
$(() => { // Short form
  $(".dog-form").on('submit', onSubmit);
  $(".toggle").on('click', toggleForm);

  // Doesn't work
  // $('.dog-article').on('click', onArticleClick);

  // Must add listener to an existing DOM element
  $('#dogs-container').on('click', ".dog-article", onArticleClick);

  loadDogs();
});


const onArticleClick = function() {
  const dog = $(this).data("dog");

  $("#dog-detail span.id").text(dog.id)
  $("#dog-detail span.name").text(dog.name)
  $("#dog-detail span.breed").text(dog.breed)
  console.log(dog);
};

const toggleForm = function() {
  const $section = $('#dog-form');

  if ($section.is(':visible')) {
    return $section.slideUp('fast');
  }

  $section.slideDown('fast');
  $section.find('input[name="name"]').focus();
};

const onSubmit = function(event) {
  event.preventDefault();
  const $form = $(this);
  const $name = $form.find('input.name').val();
  const $breed = $form.find('input.breed').val();
  if (!$name || !$breed) {
    return;
  }

  const data = $form.serialize();
  console.log(data);


  $.post("/api/dogs", data)
    .then(() => {
      loadDogs(); // need to clear each time
    });

};

const loadDogs = function() {

  $.get('/api/dogs')
    .then(data => {
      console.log(data);
      renderDogs(data);
    });
};

const renderDogs = function(dogs) {
  // Save this once and reuse
  const $container = $('#dogs-container').empty();

  for (const dog of dogs) {
    const $element = createDogElement(dog);
    $container.prepend($element);
  }
};

const createDogElement = function(dog) {
  const article = `
  <article class="dog-article"
    <div>${dog.name}</div>
    <div>${dog.breed}</div>
  </article>
  `;

  const $element = $(article);
  $element.data("dog", dog);

  return $element;
};