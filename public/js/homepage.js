
const renderSelectedPost = async (event) => {
  const buttonId = event.target.dataset.id
  console.log({buttonId});

  document.location.replace(`/post/${buttonId}`);
  
};

document.querySelectorAll('.commentsTag').forEach(button => {button.addEventListener('click', renderSelectedPost)});