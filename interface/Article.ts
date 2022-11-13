export interface Article {
  id: string;
  image: string;
  title: string;
  date_created: string;
  author: string;
  content: string;
}

export interface ResponseArticlesDataType {
  articles: Article[];
}

export interface ResponseArticleDataType {
  article: Article;
}

export type BlogData = {
  // [collection_name]: typescript_type
  articles: Article;

  // You can also extend Directus collection. The naming has
  // to match a Directus system collection and it will be merged
  // into the system spec.
  directus_users: {
    bio: string;
  };
};
