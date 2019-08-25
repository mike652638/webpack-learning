import style from './index.scss';

function Content() {
  let content = document.createElement('button');
  let rootEle = document.getElementById('root');
  //content.id = 'content';
  content.id = style.content;
  content.innerText = '新增';
  //content.style = "display: block; width: 200px; height: 100px; background-color: #666; border: 1px solid #000; text-align: center; color: #fff; cursor: pointer; padding: 20px 0";
  content.onclick = function () { 
    let item = document.createElement('p');
    item.classList.add(style.item);
    item.innerText = "我是新增的行";
    content.after(item);
  }
  rootEle.append(content);
}

export default Content;

//Common Js导出魔快
//module.exports = Content;