function Header() {
  let header = document.createElement('div');
  let rootEle = document.getElementById('root');
  let arr = [new Promise(() => {}), new Promise(() => {})];
  arr.map(item => {
    //console.log(item);
  });
  header.id = 'header';
  header.innerText = 'This is Header ... !!';
  rootEle.appendChild(header);
  //console.log('abc');
}

export default Header;

//Common Js导出魔快
//module.exports = Header;