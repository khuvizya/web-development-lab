// Объект. Spread, destructuring, rest хэрэглэнэ; оролтыг өөрчлөхгүй.

export const rename = (photo, title) => ({ ...photo, title });

export const withDefaults = (photo) => ({ likes: 0, tags: [], ...photo });

export const mergePhoto = (photo, changes) => ({ ...photo, ...changes });

export const omit = (photo, key) => {
  const { [key]: removed, ...rest } = photo;
  return rest;
};

export const pick = (photo, ...keys) =>
  Object.fromEntries(keys.map((k) => [k, photo[k]]));

export const summary = ({ title, place, likes }) => `${title} (${place}) - ${likes} like`;

export const addTag = (photo, tag) => ({ ...photo, tags: [...photo.tags, tag] });

export const groupByPlace = (list) => Object.groupBy(list, (p) => p.place);
