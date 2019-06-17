import avatar from './assets/images/avatar.jpg';

function Avatar() {
  let img = new Image();
  let rootEle = document.getElementById('root');
  img.src = avatar;
  img.title = '头像';
  img.style = 'width: 200px; height: auto; box-shadow: 2px 2px 2px #ccc';
  rootEle.append(img);
}

export {
  Avatar
}