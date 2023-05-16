const likeHandler = async function (event) {
  event.preventDefault();

  const buttonPostId = event.target.dataset.userpostid
  const buttonLikeId = event.target.dataset.like

  if (buttonLikeId == "like") {
    await fetch('/api/like', {
      method: 'POST',
      body: JSON.stringify({
        buttonPostId
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } else if (buttonLikeId == "unlike"){
    await fetch(`/api/like/${buttonPostId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
    });
  }
  document.location.reload();
};

document
  .querySelector('#like')
  .addEventListener('click', likeHandler);
