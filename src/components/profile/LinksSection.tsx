import { useContent } from '../../hooks/useContent';
import { profileContent } from '../../contents';
import LinkCard from '../ui/LinkCard';
import LinkCardContainer from '../ui/LinkCardContainer';

function LinksSection() {
  const { get } = useContent();
  const { links } = get(profileContent);

  return (
    <LinkCardContainer>
      {links.items.map((item, index) => (
        <LinkCard
          key={index}
          url={item.url}
          title={item.title}
          description={item.description}
          image={item.image}
          imageFit={item.imageFit}
        />
      ))}
    </LinkCardContainer>
  );
}

export default LinksSection;
