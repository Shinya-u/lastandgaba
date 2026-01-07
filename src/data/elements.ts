export type ElementItem = {
  id: string;
  brand: string;
  title: string;
  category: string;
  thumbnail: string;
  images: string[];
  body: string;
};

export const ELEMENTS: ElementItem[] = [
  {
    id: 'el-0001',
    brand: 'MANIFOLD',
    title: 'MK-04-GS MINI BRIEF',
    category: 'BAG',
    thumbnail: '/images/elements/manifold-mini-brief.jpg',
    images: [
      '/images/elements/manifold-mini-brief.jpg',
      '/images/elements/manifold-mini-brief.jpg',
      '/images/elements/manifold-mini-brief.jpg',
    ],
    body: `...`,
  },
  {
    id: 'el-0002',
    brand: 'forme',
    title: 'Front Zip Boots',
    category: 'SHOES',
    thumbnail: '/images/elements/forme-boots.jpg',
    images: [
      '/images/elements/forme-boots.jpg',
      '/images/elements/forme-boots.jpg',
    ],
    body: `...`,
  },
];