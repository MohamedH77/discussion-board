/*
const secondNavbar = document.getElementById("#html");
const secondNavbar = document.getElementById("#css");
const secondNavbar = document.getElementById("#javascript");
const secondNavbar = document.getElementById("#other");
*/


const htmlHandler = async function (event) {
    document.location.replace('/html');
  };
  const cssHandler = async function (event) {
    document.location.replace('/css');
  };
  const javascriptHandler = async function (event) {
    document.location.replace('/javascript');
  };
  const nodeHandler = async function (event) {
    document.location.replace('/node');
  };
  const otherHandler = async function (event) {
    document.location.replace('/other');
  };

  document
    .querySelector('#html')
    .addEventListener('click', htmlHandler);
  document
    .querySelector('#css')
    .addEventListener('click', cssHandler);
  document
    .querySelector('#javascript')
    .addEventListener('click', javascriptHandler);
  document
    .querySelector('#node')
    .addEventListener('click', nodeHandler);
  document
    .querySelector('#other')
    .addEventListener('click', otherHandler);

Message #general
