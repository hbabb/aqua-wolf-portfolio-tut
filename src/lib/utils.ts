import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

// export function getAllTags(posts: Array<Post>) {
//   const tags: Record<string, number> = {};
//   posts.forEach(post => {
//     if (post.published) {
//       post.tags?.forEach((tag: string | number) => {
//         tags[tag] = (tags[tag] ?? 0) +1;
//       })
//     }
//   })

//   return tags;
// };

// export function sortTagsByCount(tags: Record<string, number>) {
//   return Object.keys(tags).sort((a, b) => tags[b] - tags[a]);
// };

// export function getPostsByTagSlug(posts: Array<Post>, tag: string) {
//   return posts.filter(post => {
//     if (!post.tags) return false
//     const slugifiedTags = post.tags.map((tag: any) => slugifiedTags(tag));
//     return slugifiedTags.includes(tag);
//   });
// };
