// export interface BlogPost {
//   id: number
//   slug: string
//   title: string
//   description: string
//   content: string
//   category: string
//   author: string
//   publishedDate: string
//   readTime: string
//   tags: string[]
//   featured?: boolean
//   image?: string
// }

// const API_URL = "https://api.aiprojectreport.com/blogs"

// // Fetch all blogs
// export async function fetchAllPosts(): Promise<BlogPost[]> {
//   const res = await fetch(API_URL)
//   if (!res.ok) {
//     throw new Error("Failed to fetch blog posts")
//   }
//   const data = await res.json()

//   // Map API response keys to BlogPost interface
//   return data.map((post: any) => ({
//     id: post.id,
//     slug: post.slug,
//     title: post.title,
//     description: post.description,
//     content: post.content,
//     category: post.category,
//     author: post.author,
//     publishedDate: post.publisheddate, // note API uses lowercase
//     readTime: post.readtime,
//     tags: post.tags,
//     featured: post.featured,
//     image: post.image,
//   }))
// }

// // Fetch all categories
// export async function fetchAllCategories(): Promise<string[]> {
//   const posts = await fetchAllPosts()
//   const categories = Array.from(new Set(posts.map((p) => p.category)))
//   return categories
// }

// lib/blogApi.ts

export interface BlogPost {
  id: number
  slug: string
  title: string
  description: string
  content: string
  category: string
  author: string
  publishedDate: string
  readTime: string
  tags: string[]
  featured?: boolean
  image?: string
}

const API_URL = "https://api.aiprojectreport.com/blogs"

// Fetch all blog posts
export async function fetchAllPosts(): Promise<BlogPost[]> {
  const res = await fetch(API_URL, {
    cache: "no-store", // 👈 ensures no static caching
  })
  if (!res.ok) {
    throw new Error("Failed to fetch blog posts")
  }
  const data = await res.json()

  return data.map((post: any) => ({
    id: post.id,
    slug: post.slug,
    title: post.title,
    description: post.description,
    content: post.content,
    category: post.category,
    author: post.author,
    publishedDate: post.publisheddate, // API uses lowercase
    readTime: post.readtime,
    tags: post.tags,
    featured: post.featured,
    image: post.image,
  }))
}
export async function fetchThreePosts(): Promise<BlogPost[]> {
  const res = await fetch(`${API_URL}/fetch-blog`)
  if (!res.ok) {
    throw new Error("Failed to fetch blog posts")
  }
  const data = await res.json()

  return data.map((post: any) => ({
    id: post.id,
    slug: post.slug,
    title: post.title,
    description: post.description,
    content: post.content,
    category: post.category,
    author: post.author,
    publishedDate: post.publisheddate, // API uses lowercase
    readTime: post.readtime,
    tags: post.tags,
    featured: post.featured,
    image: post.image,
  }))
}

export async function fetchBlogBySlug(slug: string): Promise<BlogPost | null> {
  const res = await fetch(`${API_URL}/slug/${slug}`, {   // 👈 CHANGED
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    return null;
  }

  const data = await res.json();

  const post = Array.isArray(data) ? data[0] : data;

  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    description: post.description,
    content: post.content,
    category: post.category,
    author: post.author,
    publishedDate: post.publisheddate,
    readTime: post.readtime,
    tags: post.tags,
    featured: post.featured,
    image: post.image,
  };
}


// Fetch all categories
export async function fetchAllCategories(): Promise<string[]> {
  const posts = await fetchAllPosts()
  const categories = Array.from(new Set(posts.map((p) => p.category)))
  return categories
}
