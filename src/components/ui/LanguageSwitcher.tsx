import { Button, Group } from '@mantine/core';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import type { Language } from '../../contents/types';

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useParams<{ lang: string }>();

  const switchLanguage = (newLang: Language) => {
    setLanguage(newLang);
    const newPath = location.pathname.replace(`/${lang}`, `/${newLang}`);
    navigate(newPath);
  };

  return (
    <Group gap={0}>
      <Button
        variant={language === 'ja' ? 'filled' : 'outline'}
        size="xs"
        style={{ borderRadius: '4px 0 0 4px' }}
        onClick={() => switchLanguage('ja')}
      >
        JP
      </Button>
      <Button
        variant={language === 'en' ? 'filled' : 'outline'}
        size="xs"
        style={{ borderRadius: '0 4px 4px 0', marginLeft: '-1px' }}
        onClick={() => switchLanguage('en')}
      >
        EN
      </Button>
    </Group>
  );
}

export default LanguageSwitcher;
