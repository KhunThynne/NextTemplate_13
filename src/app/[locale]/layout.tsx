import { unstable_setRequestLocale } from 'next-intl/server';

import { NextIntlClientProvider, useMessages } from 'next-intl';
export default function RootLayout({
    children, params: { locale }
}: Readonly<{
    children: React.ReactNode;
    params: any;
}>) {
    unstable_setRequestLocale(locale);

    const messages = useMessages()
 
    return (

        <NextIntlClientProvider messages={messages} locale={locale}>

            {children}
        </NextIntlClientProvider>

    );
}

