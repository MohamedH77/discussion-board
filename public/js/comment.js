const postId = document.querySelector('#selectedPost');

const commentFormHandler = async function (event) {
  event.preventDefault();
  console.log('clicked');

  const comment = document.querySelector('input[name="comment-body"]').value.trim();

  const postIdValue = postId.dataset.id;
  console.log(comment);
  console.log(postIdValue);
  if (comment) {
    await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        comment,
        postIdValue
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  document.location.reload();
};

document
  .querySelector('#commentButton')
  .addEventListener('click', commentFormHandler);
