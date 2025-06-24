import type { QueryFunctionContext } from "@tanstack/react-query";

export type PublicationName = {
  publication: {
    title: string;
    displayTitle?: string;
    favicon?: string;
  };
};

export type PostMetadata = {
  id: string;
  title: string;
  subtitle?: string;
  readTimeInMinutes: number;
  slug: string;
  publishedAt: string;
  tags: Tag[];
  views: number;
  content: {
    text: string;
  };
  coverImage?: {
    url: string;
  };
  author: {
    name: string;
    profilePicture?: string;
  };
};

export type Tag = {
  id: string;
  name: string;
  slug: string;
};

type GetPostsResponse = {
  publication: {
    posts: {
      edges: {
        node: PostMetadata;
        cursor: string;
      }[];
    };
  };
};

type GetPostsFunctionArgs = {
  first: number;
  after: string;
};

export type GetPostsArgs = QueryFunctionContext & GetPostsArgs;

export type GetPostBySlugResponse = {
  publication: {
    post: {
      title: string;
      subtitle?: string;
      readTimeInMinutes: number;
      publishedAt: string;
      tags: Tag[];
      views: number;
      coverImage: {
        url: string;
      };
      content: {
        html: string;
      };
      author: {
        name: string;
        profilePicture?: string;
      };
    };
  };
};

export type FeaturedPostMetadata = PostMetadata & {
  views: number;
  featured: boolean;
};

type GetFeaturedPostsResponse = {
  publication: {
    posts: {
      edges: {
        node: FeaturedPostMetadata;
        cursor: string;
      }[];
    };
  };
};
