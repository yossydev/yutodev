import { FC } from "react";
import NextHead from "next/head";

type Props = {
  title?: string;
  description?: string;
  url?: string;
};

export const Head: FC<Props> = ({ title, description, url }) => {
  const _title: string = title ?? "ユウトブログ";
  const _description: string = description ?? "技術ブログや、近況報告などをやっていきます";
  const _url: string =
    url ?? "https://user-images.githubusercontent.com/87469023/233515022-26b256e8-8208-4a62-8621-aea4a9359742.png";

  return (
    <>
      <NextHead>
        <title>yuto blog</title>
        <link rel="icon" sizes="512x512" href="/god.png" />

        {/* Main */}
        <meta property="og:title" content={_title} />
        <meta property="og:description" content={_description} />
        <meta property="og:image" content={_url} />

        {/* Twitter */}
        <meta name="twitter:site" content="@codeyy_dev" />
        <meta name="twitter:image" content={_url} />
        <meta name="twitter:card" content="summary" />
      </NextHead>
    </>
  );
};
