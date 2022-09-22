import { FlexColumn } from '@atoms/FlexColumn/style';
import LinkHOC from '@atoms/LinkHOC';
import Logo from '@atoms/Logo';
import Text from '@atoms/Text';
import { FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { Author, FooterContainer, SiteLinks } from './style';

const Footer = () => {
  return (
    <FooterContainer>
      <div className="grid-column">
        <FlexColumn>
          <div className="site-footer">
            <Logo />
            <Text text="Enjoy your music life and Kpop charts on YouTube." />
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
          </ul>
        </SiteLinks>
      </div>
      <Author>© CHERRYCHART, 2021. Created by jihunhong.</Author>
    </FooterContainer>
  );
};

export default Footer;
