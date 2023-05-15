const updateProfileSection = document.querySelector('section');

const showUpdateField = (event) => {
  console.log('clicked')
  event.preventDefault();
  updateProfileSection.classList.remove("hidden");
}

const updateProfileHandler = async (e) => {
  e.preventDefault();
  console.log("got it")

  const fname = document.querySelector('#fname-update').value.trim();
  const lname = document.querySelector('#lname-update').value.trim();
  const email = document.querySelector('#email-update').value.trim();
  const password = document.querySelector('#password-update').value.trim();

  console.log(fname, lname, email, password);

  if (fname && lname && email && password) {
    const response = await fetch('/api/users', {
      method: 'PUT',
      body: JSON.stringify({ fname, lname, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      console.log(response);
      alert('Success! Account info updated successfully.');
      document.location.reload();
    } else {
      console.log(response)
      alert(response.statusText);
    }
  }
};

document
  .querySelector('#updateButton')
  .addEventListener('click', updateProfileHandler);

document.
  querySelector("#updateProfileButton").
  addEventListener('click', showUpdateField);
