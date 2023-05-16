const newPostSection = document.querySelector('.newpost');

const newPostReroute = (e) => {
  e.preventDefault();
  console.log('clicked');

  newPostSection.classList.remove("hidden");
}

const newPostHandler = async (event) => {
  event.preventDefault();
  console.log('clicked');

  const tag_id = document.querySelector('#tags').value;
  const title = document.querySelector('#post-title').value;
  const message = document.querySelector('#post-message').value;

  await fetch(`/api/newpost`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      message,
      tag_id,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/');
}

document
  .querySelector('.createPostButton')
  .addEventListener('click', newPostHandler)

document
  .querySelector('#new-post')
  .addEventListener('click', newPostReroute);