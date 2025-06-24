import request, { gql } from "graphql-request";
import {
  GetPostBySlugResponse,
  GetPostsArgs,
  GetPostsResponse,
  GetFeaturedPostsResponse,
  FeaturedPostMetadata,
} from "./types";

const endpoint = process.env.NEXT_PUBLIC_HASHNODE_ENDPOINT;
const publicationId = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_ID;

export async function getPosts({ first = 9, pageParam = "" }: GetPostsArgs) {
  if (!endpoint || !publicationId) {
    throw new Error("Missing Hashnode environment variables");
  }

  const query = gql`
    query getPosts($publicationId: ObjectId!, $first: Int!, $after: String) {
      publication(id: $publicationId) {
        posts(first: $first, after: $after) {
          edges {
            node {
              id
              title
              subtitle
              slug
              readTimeInMinutes
              publishedAt
              tags {
                id
                name
                slug
              }
              content {
                text
              }
              coverImage {
                url
              }
              author {
                name
                profilePicture
              }
            }
            cursor
          }
        }
      }
    }
  `;

  const response = await request<GetPostsResponse>(endpoint, query, {
    publicationId,
    first,
    after: pageParam,
  });

  return response.publication.posts.edges;
}

export async function getPostBySlug(slug: string) {
  if (!endpoint || !publicationId) {
    throw new Error("Missing Hashnode environment variables");
  }

  const query = gql`
    query getPostBySlug($publicationId: ObjectId!, $slug: String!) {
      publication(id: $publicationId) {
        post(slug: $slug) {
          title
          subtitle
          readTimeInMinutes
          publishedAt
          coverImage {
            url
          }
          tags {
            id
            name
            slug
          }
          content {
            html
          }
          author {
            name
            profilePicture
          }
        }
      }
    }
  `;

  const response = await request<GetPostBySlugResponse>(endpoint, query, {
    publicationId,
    slug,
  });

  return response.publication.post;
}

export async function getFeaturedPosts(): Promise<FeaturedPostMetadata[]> {
  if (!endpoint || !publicationId) {
    throw new Error("Missing Hashnode environment variables");
  }

  const query = gql`
    query getFeaturedPosts($publicationId: ObjectId!) {
      publication(id: $publicationId) {
        posts(first: 50) {
          edges {
            node {
              id
              title
              subtitle
              slug
              readTimeInMinutes
              publishedAt
              views
              featured
              tags {
                id
                name
                slug
              }
              content {
                text
              }
              coverImage {
                url
              }
              author {
                name
                profilePicture
              }
            }
            cursor
          }
        }
      }
    }
  `;

  const response = await request<GetFeaturedPostsResponse>(endpoint, query, {
    publicationId,
  });

  const featuredPosts = response.publication.posts.edges
    .map((edge) => edge.node)
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, 3);

  return featuredPosts;
}
