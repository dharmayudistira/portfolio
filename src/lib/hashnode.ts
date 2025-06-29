import { FeaturedPostMetadata } from "./types";

const endpoint = process.env.NEXT_PUBLIC_HASHNODE_ENDPOINT;
const publicationId = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_ID;

export async function fetchPosts({
  first = 9,
  after = "",
}: {
  first?: number;
  after?: string;
}) {
  if (!endpoint || !publicationId) {
    throw new Error("Missing Hashnode environment variables");
  }

  const query = `
    query getPosts($publicationId: ObjectId!, $first: Int!, $after: String) {
      publication(id: $publicationId) {
        posts(first: $first, after: $after) {
          edges {
            node {
              id
              title
              subtitle
              slug
              views
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

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        publicationId,
        first,
        after,
      },
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  if (data.errors) {
    throw new Error(data.errors[0].message);
  }

  return data.data.publication.posts.edges;
}

export async function fetchPostBySlug(slug: string) {
  if (!endpoint || !publicationId) {
    throw new Error("Missing Hashnode environment variables");
  }

  const query = `
    query getPostBySlug($publicationId: ObjectId!, $slug: String!) {
      publication(id: $publicationId) {
        post(slug: $slug) {
          title
          subtitle
          readTimeInMinutes
          publishedAt
          views
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

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        publicationId,
        slug,
      },
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  if (data.errors) {
    throw new Error(data.errors[0].message);
  }

  return data.data.publication.post;
}

export async function fetchFeaturedPosts() {
  if (!endpoint || !publicationId) {
    throw new Error("Missing Hashnode environment variables");
  }

  const query = `
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

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        publicationId,
      },
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  if (data.errors) {
    throw new Error(data.errors[0].message);
  }

  const featuredPosts = data.data.publication.posts.edges
    .map((edge: { node: FeaturedPostMetadata }) => edge.node)
    .sort(
      (a: FeaturedPostMetadata, b: FeaturedPostMetadata) =>
        (b.views || 0) - (a.views || 0)
    )
    .slice(0, 3);

  return featuredPosts;
}
