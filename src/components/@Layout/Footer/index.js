import { FlexColumn } from '@atoms/FlexColumn/style';
import LinkHOC from '@atoms/LinkHOC';
import Text from '@atoms/Text';
import Title from '@atoms/Title';
import { Row } from 'antd';
import { BiGlobe, BiMailSend, BiMusic, BiWorld } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import { FaApple, FaGithub, FaPage4 } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { Author, FooterContainer, SiteLinks } from './style';

const Footer = () => {
  return (
    <FooterContainer>
      <div className="grid-column">
        <FlexColumn>
          <div className="site-footer">
            <h1>CHERRY CHART</h1>
            <Text text="Enjoy your music life and Kpop charts on YouTube. It's free!" />
          </div>
          <div>
            <div className="contact">
              <FiMail size={20} /> <a href="mailto:redgee49@gmail.com">redgee49@gmail.com</a>
            </div>
            <div className="contact">
              <FaGithub size={20} /> <a href="https://github.com/jihunhong">jihunhong</a>
            </div>
          </div>
        </FlexColumn>
        <SiteLinks>
          <ul>
            <li>Main</li>
            <li>
              <LinkHOC href="/">Home</LinkHOC>
            </li>
            <li>
              <LinkHOC href="/chart">Chart</LinkHOC>
            </li>
            <li>
              <LinkHOC href="/browse">Browse</LinkHOC>
            </li>
          </ul>
        </SiteLinks>
        <SiteLinks>
          <ul>
            <li>Music</li>
            <li>
              <LinkHOC href="/songs">Songs</LinkHOC>
            </li>
            <li className="disabled">
              <a>Artists</a>
            </li>
            <li className="disabled">
              <a>Albums</a>
            </li>
          </ul>
        </SiteLinks>
        <SiteLinks>
          <ul>
            <li>Users</li>
            <li className="disabled">
              <a>Played History</a>
            </li>
            <li className="disabled">
              <a>Favorite</a>
            </li>
            <li className="disabled">
              <a>MyPage</a>
            </li>
          </ul>
        </SiteLinks>
      </div>
      <Author>© CHERRYCHART, 2021. Created by jihunhong.</Author>
    </FooterContainer>
  );
};

export default Footer;
