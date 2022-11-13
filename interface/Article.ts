export interface Article {
  id: string,
  image: string,
  title: string,
  published: string,
  author: string,
  content: string
}

export interface ResponseArticlesDataType {
  articles: Article[]
}

export interface ResponseArticleDataType {
  article: Article
}