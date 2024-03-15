

import { useTranslations } from 'next-intl';

export default function App() {
  const t = useTranslations('Index');
  return (

    <div >
      {t('title')}
    </div>

  );
}
