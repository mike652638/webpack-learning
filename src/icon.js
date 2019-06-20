import style from './index.scss';
console.log(style.iconfont);

export default function AppendIcons() {
  let rootEle = document.getElementById('root');
  let iconEle = document.createElement('div');
  iconEle.innerHTML = `  
  <span class="${style.iconfont} ${style['icon-shouji']}"></span>
  <span class="${style.iconfont} ${style['icon-hanbao']}"></span>
  `;
  rootEle.append(iconEle);
  console.log('iconEle append ...');
}