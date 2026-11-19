export class Album {
  #photos = [];

  constructor(photos = []) {
    this.#photos = structuredClone(photos);
  }

  get size() {
    return this.#photos.length;
  }

  get photos() {
    return structuredClone(this.#photos);
  }

  find(id) {
    const photo = this.#photos.find((p) => p.id === id);
    return photo ? structuredClone(photo) : undefined;
  }

  add(photo) {
    const newPhoto = { likes: 0, tags: [], ...structuredClone(photo) };
    if (newPhoto.id === undefined) {
      const ids = this.#photos.map((p) => p.id);
      newPhoto.id = ids.length === 0 ? 1 : Math.max(...ids) + 1;
    }
    this.#photos.push(newPhoto);
    return structuredClone(newPhoto);
  }

  remove(id) {
    const index = this.#photos.findIndex((p) => p.id === id);
    if (index === -1) {
      return false;
    }
    this.#photos.splice(index, 1);
    return true;
  }

  like(id) {
    const photo = this.#photos.find((p) => p.id === id);
    if (!photo) {
      return undefined;
    }
    photo.likes = photo.likes + 1;
    return photo.likes;
  }

  toJSON() {
    return this.photos;
  }

  static from(json) {
    const data = typeof json === "string" ? JSON.parse(json) : json;
    return new this(data);
  }
}

export class FeaturedAlbum extends Album {
  #featuredIds = [];

  constructor(photos = []) {
    super(photos);
    this.#updateFeatured();
  }

  #updateFeatured() {
    this.#featuredIds = this.photos
      .filter((p) => p.likes >= 3)
      .map((p) => p.id);
  }

  get featured() {
    return this.photos.filter((p) => this.#featuredIds.includes(p.id));
  }

  like(id) {
    const likes = super.like(id);
    this.#updateFeatured();
    return likes;
  }

  add(photo) {
    const added = super.add(photo);
    this.#updateFeatured();
    return added;
  }

  remove(id) {
    const removed = super.remove(id);
    this.#updateFeatured();
    return removed;
  }
}
