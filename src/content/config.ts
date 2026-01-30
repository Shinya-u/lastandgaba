import { defineCollection, z } from 'astro:content';

const elements = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    brand: z.string(),
    title: z.string(),
    category: z.string(),
    thumbnail: z.string(),
    images: z.array(z.string()).default([]),
    date: z.string().optional(),
    price: z.string().optional(),
    specs: z.object({
      size: z.string().optional(),
      weight: z.string().optional(),
      material: z.string().optional(),
      color: z.string().optional(),
      dimensions: z.string().optional(),
      // Technical Data Sheet format for el-0001 and el-0012
      identifier: z.string().optional(),
      item: z.string().optional(),
      gauge: z.string().optional(),
      shoulderWidth: z.string().optional(),
      chestWidth: z.string().optional(),
      sleeveLength: z.string().optional(),
      totalLength: z.string().optional(),
      cuffWidth: z.string().optional(),
      frontZipper: z.string().optional(),
      neck: z.string().optional(),
      stitching: z.string().optional(),
      density: z.string().optional(),
      softness: z.string().optional(),
      rigidity: z.string().optional(),
      weightRating: z.string().optional(),
      // el-0001 specific fields
      leather: z.string().optional(),
      production: z.string().optional(),
      width: z.string().optional(),
      height: z.string().optional(),
      depth: z.string().optional(),
      shoulderBelt: z.string().optional(),
      zipper: z.string().optional(),
      hardware: z.string().optional(),
      construction: z.string().optional(),
      attachment: z.string().optional(),
      texture: z.string().optional(),
      aging: z.string().optional(),
      // el-0002 specific fields
      modelName: z.string().optional(),
      lastNumber: z.string().optional(),
      origin: z.string().optional(),
      referenceSize: z.string().optional(),
      primaryMaterial: z.string().optional(),
      outsoleLength: z.string().optional(),
      heelHeight: z.string().optional(),
      shaftProfile: z.string().optional(),
      targetFootLength: z.string().optional(),
      last: z.string().optional(),
      userFittingNote: z.string().optional(),
      zipperSystem: z.string().optional(),
      outsole: z.string().optional(),
      edgeFinish: z.string().optional(),
      recraftability: z.string().optional(),
      upperLeather: z.string().optional(),
      lining: z.string().optional(),
      agingCharacteristics: z.string().optional(),
      hardwareGrade: z.string().optional(),
      // el-0003 specific fields
      productCode: z.string().optional(),
      sizeSDimensions: z.string().optional(),
      sizeMDimensions: z.string().optional(),
      fittingNote: z.string().optional(),
      closure: z.string().optional(),
      ribbing: z.string().optional(),
      analysis: z.string().optional(),
      // el-0006 specific fields
      waist: z.string().optional(),
      rise: z.string().optional(),
      inseam: z.string().optional(),
      thighWidth: z.string().optional(),
      hemWidth: z.string().optional(),
      detailing: z.string().optional(),
      dyeing: z.string().optional(),
      hardware: z.string().optional(),
    }).optional(),
  }),
});

const essay = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    date: z.string(),
    thumbnail: z.string(),
    image: z.string().optional(), // メイン画像（後方互換性のため）
    images: z.array(z.string()).default([]), // 複数画像対応
  }),
});

const purchaselog = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    brand: z.string(),
    title: z.string(),
    category: z.string(),
    thumbnail: z.string(),
    images: z.array(z.string()).default([]),
    date: z.string().optional(),
    price: z.string().optional(),
    specs: z.object({
      size: z.string().optional(),
      weight: z.string().optional(),
      material: z.string().optional(),
      color: z.string().optional(),
      dimensions: z.string().optional(),
    }).optional(),
  }),
});

export const collections = { elements, essay, purchaselog };