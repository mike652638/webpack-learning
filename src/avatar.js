import avatar from './assets/images/avatar.jpg';

function Avatar(title1, hasClassAvatar) {
  let img = new Image();
  //let img = document.createElement('img');
  let rootEle = document.getElementById('root');
  //img.class = 'avatar'; //这种写法是无效的, img元素添加class可用下面三种方式
  if (hasClassAvatar) {
    img.className = 'avatar';
  }
  //img.classList.add('avatar');
  //img.setAttribute('class', 'avatar');
  img.src = avatar;
  img.title = title1;
  //img.style = 'width: 200px; height: auto; box-shadow: 2px 2px 2px #ccc';
  rootEle.append(img);
}

export {
  Avatar
}