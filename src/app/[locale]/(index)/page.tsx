
import { useTranslations } from 'next-intl';


export default function Home({ params: { locale } }: { params?: any }) {


  const t = useTranslations('Index');
  return (

    <div >

      {t('title')}
    </div>

  );
}
