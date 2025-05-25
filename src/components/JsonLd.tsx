import { FC } from "react";

type JsonLdData = {
  "@context": string;
  "@type": string;
  [key: string]: string | string[] | JsonLdData | Record<string, unknown>;
};

interface JsonLdProps {
  data: JsonLdData;
}

const JsonLd: FC<JsonLdProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default JsonLd;
