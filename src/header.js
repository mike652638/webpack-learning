function Header() {
  let header = document.createElement('div');
  let rootEle = document.getElementById('root');
  header.id = 'header';
  header.innerText = 'This is Header';
  rootEle.append(header);
}

export default Header;

//Common Js导出魔快
//module.exports = Header;