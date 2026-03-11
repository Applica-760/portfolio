import { useContent } from '../../hooks/useContent';
import { profileContent } from '../../contents';
import MarkdownRenderer from '../ui/MarkdownRenderer';

function LinksSection() {
  const { get } = useContent();
  const { links } = get(profileContent);

  return <MarkdownRenderer content={links.content} />;
}

export default LinksSection;
