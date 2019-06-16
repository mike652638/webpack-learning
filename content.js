export default function Content() {
  let content = document.createElement('div');
  let rootEle = document.getElementById('root');
  content.id = 'content';
  content.innerText = 'This is Content';
  rootEle.append(content);
}