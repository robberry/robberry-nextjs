// components/seo.tsx
import Head from 'next/head';

interface Props {
    title: string;
    description: string;
    canonical?: string;
}
export default function SEO({ title, description, canonical }: Props) {
    const url = `https://robberry.net${canonical}`;
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {canonical && <meta property="og:url" content={url} />}
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            {canonical && <link rel="canonical" href={url} />}
        </Head>
    );
}
