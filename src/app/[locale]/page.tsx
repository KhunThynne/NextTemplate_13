
import { unstable_setRequestLocale } from 'next-intl/server';

import { useTranslations } from 'next-intl';

export default function App({ params: { locale } }: { params?: any }) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('Index');
  return (

    <div >
      {t('title')}
    </div>

  );
}
