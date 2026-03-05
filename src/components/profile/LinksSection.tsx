import { useContent } from '../../hooks/useContent';
import { profileContent } from '../../contents';
import LinkCard from '../ui/LinkCard';
import LinkCardContainer from '../ui/LinkCardContainer';

function LinksSection() {
  const { get } = useContent();
  const { links } = get(profileContent);

  return (
    <LinkCardContainer>
      {links.items.map((link) => (
        <LinkCard key={link.url} {...link} />
      ))}
    </LinkCardContainer>
  );
}

export default LinksSection;
