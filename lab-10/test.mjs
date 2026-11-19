import { clamp, average, greet, makeCounter, applyN, compose } from "./js/utils.js";
import { Album, FeaturedAlbum } from "./js/album.js";

let failed = 0;
function eq(name, got, want) {
  if (JSON.stringify(got) !== JSON.stringify(want)) {
    console.log("FAIL", name, got, want);
    failed++;
  }
}

eq("clamp low", clamp(-5, 0, 10), 0);
eq("clamp high", clamp(50, 0, 10), 10);
eq("clamp mid", clamp(5, 0, 10), 5);
eq("average", average(2, 4, 6), 4);
eq("average empty", average(), 0);
eq("greet", greet(), "Сайн уу, Зочин!");
eq("greet name", greet("Бат"), "Сайн уу, Бат!");
const c = makeCounter(5);
c();
eq("counter", c(), 7);
eq("counter default", makeCounter()(), 1);
eq("applyN", applyN((x) => x * 2, 3, 1), 8);
eq("applyN 0", applyN((x) => x * 2, 0, 1), 1);
eq("compose", compose((x) => x + 1, (x) => x * 2)(5), 11);

const album = new Album([{ id: 1, title: "a", likes: 0, tags: [] }, { id: 5, title: "b", likes: 2, tags: ["x"] }]);
eq("size", album.size, 2);
const copy = album.photos;
copy.push({ id: 99 });
copy[0].title = "changed";
eq("deep copy", album.size, 2);
eq("deep copy title", album.find(1).title, "a");
const added = album.add({ title: "c" });
eq("add id", added.id, 6);
eq("add likes", added.likes, 0);
eq("add tags", added.tags, []);
eq("like", album.like(1), 1);
eq("like missing", album.like(100), undefined);
eq("remove", album.remove(5), true);
eq("remove missing", album.remove(5), false);
eq("find missing", album.find(5), undefined);
const again = Album.from(JSON.stringify(album));
eq("from", again.size, album.size);
eq("from empty add", new Album().add({ title: "z" }).id, 1);

const f = new FeaturedAlbum([{ id: 1, title: "a", likes: 2, tags: [] }]);
eq("featured none", f.featured.length, 0);
f.like(1);
eq("featured after like", f.featured.length, 1);

console.log(failed === 0 ? "ALL PASS" : failed + " failed");
