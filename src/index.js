//Es6 Moduleuo引入模块
import Root from './root';
import Header from './header';
import Content from './content';
import Footer from './footer';
import {
  Avatar
} from './avatar';

//Common Js规范引入模块
//const Root = require('.root');
//const Header = require('.header');
//const Content = require('.content');
//const Footer = require('.footer');

new Root();
new Header();
new Content();
new Footer();
new Avatar();