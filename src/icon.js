//import './assets/fonts/iconfont.css';
import style from './index.scss';

export default function AppendIcons() {
  let rootEle = document.getElementById('root');
  let iconEle = document.createElement('div');

  console.log(style);
  /* iconEle.innerHTML = `  
  <span class="iconfont icon-shouji"></span>
  <span class="iconfont icon-hanbao"></span>
  `; */

  iconEle.innerHTML = `  
  <span class="${style.iconfont} ${style['icon-shouji']}"></span>
  <span class="${style.iconfont} ${style['icon-hanbao']}"></span>
  `;
  rootEle.append(iconEle);
}