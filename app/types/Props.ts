import { ReactNode } from "react"
import { Method } from "axios"

export interface ChildrenProps {
  children: ReactNode
}

export interface ApiProps {
  URL: string
  options: {
    method?: Method,
    headers?: {},
    data?: any
  }
}

export interface HeadlinesProps {
  source: {
    name: string
  },
  title: string,
  description?: string,
  url?: string,
  urlToImage: string,
  publishedAt: string,
  content: string
}

export interface NewsArticleProps {
  news: HeadlinesProps
  isLoading: boolean
}

export type SearchProps = {
  searchInput: string
  setSearchInput: React.Dispatch<React.SetStateAction<string>>
}

export interface PlaceHolderProps {
  rows: number
}