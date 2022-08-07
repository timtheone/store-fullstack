/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Catalog {
  id: number;
  name: string;
}

export interface CatalogGoods {
  id: number;
  name: string;
}

export interface CatalogJsonld {
  "@id"?: string;
  "@type"?: string;
  "@context"?:
    | string
    | {
        "@vocab": string;
        hydra: "http://www.w3.org/ns/hydra/core#";
        [key: string]: any;
      };
  id?: number;
  name: string;
}

export interface CatalogJsonldGoods {
  "@context"?:
    | string
    | {
        "@vocab": string;
        hydra: "http://www.w3.org/ns/hydra/core#";
        [key: string]: any;
      };
  "@id"?: string;
  "@type"?: string;
  id?: number;
  name?: string;
}

export interface Goods {
  id: number;
  name: string;
  hidden: boolean;
  quantity: number;
  regprice: number;
  catalog: Catalog;
  measure: Measure;
  goodsOrders?: GoodsOrder[];
}

export interface GoodsGoods {
  id: number;
  name: string;
  hidden: boolean;
  quantity: number;
  regprice: number;
  catalog: CatalogGoods;
  measure: MeasureGoods;
  goodsOrders?: GoodsOrderGoods[];
}

export interface GoodsGoodsOrders {
  id: number;
  name: string;
  quantity: number;
  regprice: number;
  measure: MeasureGoodsOrders;
}

export interface GoodsJsonld {
  "@context"?:
    | string
    | {
        "@vocab": string;
        hydra: "http://www.w3.org/ns/hydra/core#";
        [key: string]: any;
      };
  "@id"?: string;
  "@type"?: string;
  id: number;
  name: string;
  hidden: boolean;
  quantity: number;
  regprice: number;
  catalog: CatalogJsonld;
  measure: MeasureJsonld;
  goodsOrders?: GoodsOrderJsonld[];
}

export interface GoodsJsonldGoods {
  "@id": string;
  "@type"?: string;
  "@context"?:
    | string
    | {
        "@vocab": string;
        hydra: "http://www.w3.org/ns/hydra/core#";
        [key: string]: any;
      };
  id: number;
  name: string;
  hidden: boolean;
  quantity: number;
  regprice: number;
  catalog: CatalogJsonldGoods;
  measure: MeasureJsonldGoods;
  goodsOrders?: GoodsOrderJsonldGoods[];
}

export interface GoodsJsonldGoodsOrders {
  "@context"?:
    | string
    | {
        "@vocab": string;
        hydra: "http://www.w3.org/ns/hydra/core#";
        [key: string]: any;
      };
  "@id"?: string;
  "@type"?: string;
  id: number;
  name: string;
  quantity: number;
  regprice: number;
  measure: MeasureJsonldGoodsOrders;
}

export interface GoodsOrder {
  id: number;
  goods?: Goods[];
  quantity?: number;
}

export interface GoodsOrderGoods {
  id?: number;
  goods?: GoodsGoods[];
  quantity?: number;
}

export interface GoodsOrderGoodsOrders {
  id?: number;
  goods?: GoodsGoodsOrders[];
  quantity?: number;
}

export interface GoodsOrderJsonld {
  "@context"?:
    | string
    | {
        "@vocab": string;
        hydra: "http://www.w3.org/ns/hydra/core#";
        [key: string]: any;
      };
  "@id"?: string;
  "@type"?: string;
  id?: number;
  goods?: GoodsJsonld[];
  quantity?: number;
}

export interface GoodsOrderJsonldGoods {
  "@context"?:
    | string
    | {
        "@vocab": string;
        hydra: "http://www.w3.org/ns/hydra/core#";
        [key: string]: any;
      };
  "@id"?: string;
  "@type"?: string;
  id?: number;
  goods?: GoodsJsonldGoods[];
  quantity?: number;
}

export interface GoodsOrderJsonldGoodsOrders {
  "@context"?:
    | string
    | {
        "@vocab": string;
        hydra: "http://www.w3.org/ns/hydra/core#";
        [key: string]: any;
      };
  "@id"?: string;
  "@type"?: string;
  id?: number;
  goods?: GoodsJsonldGoodsOrders[];
  quantity?: number;
}

export interface Measure {
  id: number;
  name: string;
}

export interface MeasureGoods {
  id: number;
  name: string;
}

export interface MeasureGoodsOrders {
  name: string;
}

export interface MeasureJsonld {
  "@context"?:
    | string
    | {
        "@vocab": string;
        hydra: "http://www.w3.org/ns/hydra/core#";
        [key: string]: any;
      };
  "@id"?: string;
  "@type"?: string;
  id: number;
  name: string;
}

export interface MeasureJsonldGoods {
  "@context"?:
    | string
    | {
        "@vocab": string;
        hydra: "http://www.w3.org/ns/hydra/core#";
        [key: string]: any;
      };
  "@id"?: string;
  "@type"?: string;
  id: number;
  name: string;
}

export interface MeasureJsonldGoodsOrders {
  "@context"?:
    | string
    | {
        "@vocab": string;
        hydra: "http://www.w3.org/ns/hydra/core#";
        [key: string]: any;
      };
  "@id"?: string;
  "@type"?: string;
  name: string;
}
