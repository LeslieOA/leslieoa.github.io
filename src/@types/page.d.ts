export type Page = {
  markup: string,
  path: string,
  meta: PageMeta
}

export type PageMeta = {
  title: string,
  slug: string,
  tags: string[],
  template: string,
  description: string
}

export type Pages = {
  markdown: any[]
}