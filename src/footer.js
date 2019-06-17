function Footer() {
  let footer = document.createElement('div');
  let rootEle = document.getElementById('root');
  footer.id = 'footer';
  footer.innerText = 'This is Footer';
  rootEle.append(footer);
}

export default Footer;

//Common Js导出魔快
//module.exports = Footer;