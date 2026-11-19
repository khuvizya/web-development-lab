# Лаб 8: Bootstrap ба Tailwind CSS

| Хэмжүүр | Bootstrap | Tailwind |
|---|---|---|
| CSS файлын хэмжээ | 227.4 KB (bootstrap.min.css) + 0.4 KB (brand.css) | 8.4 KB (output.css) |
| CSS gzip хэмжээ | 30.3 KB | 2.6 KB |
| JS файлын хэмжээ | 78.8 KB (bootstrap.bundle.min.js) | 0 KB |
| Нэг card-ын class тоо | 8 | 19 |
| Lighthouse (Performance) | өөрөө хэмжиж бичнэ | өөрөө хэмжиж бичнэ |
| Lighthouse (Accessibility) | өөрөө хэмжиж бичнэ | өөрөө хэмжиж бичнэ |

Lighthouse-ийг Chrome DevTools → Lighthouse хэсгээс хоёр хуудсанд ажиллуулж, оноог хүснэгтэнд бичнэ.

## Дүгнэлт

Bootstrap нь navbar, card, form validation зэрэг бэлэн бүрэлдэхүүнтэй тул HTML дээр class цөөн бичиж, хуудсыг хурдан угсардаг. Харин бүх CSS, JS-ээ бүтнээр нь ачаалдаг учир файлын хэмжээ их байна. Tailwind нь зөвхөн ашигласан class-уудыг build хийдэг тул CSS файл маш жижиг гардаг ч HTML дээр нэг card-д 19 class бичих шаардлагатай болж, код урт болдог. Бага, түргэн хуудсанд Bootstrap тохиромжтой, харин хэмжээ болон загварыг өөрөө хянах хэрэгтэй үед Tailwind илүү тохиромжтой байна.
