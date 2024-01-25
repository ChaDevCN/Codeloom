import { notFound } from "next/navigation";
import { getRequestConfig } from 'next-intl/server';
import { locales } from '@/lang/config'

export default getRequestConfig(async ({ locale }) => {
    if (!locales.includes(locale)) notFound();
    return {
        messages: (await import(`./lang/${locale}.json`)).default
    };
});
