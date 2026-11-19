// Массивын аргууд. for, while байхгүй; оролтын массивыг өөрчлөхгүй.

export const titles = (list) => list.map((p) => p.title);

export const likedOnly = (list) => list.filter((p) => p.likes > 0);

export const byTag = (list, tag) => list.filter((p) => p.tags.includes(tag));

export const searchTitle = (list, text) => {
  const q = text.trim().toLowerCase();
  return list.filter((p) => p.title.toLowerCase().includes(q));
};

export const sortByLikes = (list) => [...list].sort((a, b) => b.likes - a.likes);

export const topN = (list, n) => sortByLikes(list).slice(0, n);

export const totalLikes = (list) => list.reduce((sum, p) => sum + p.likes, 0);

export const uniquePlaces = (list) => [...new Set(list.map((p) => p.place))];
