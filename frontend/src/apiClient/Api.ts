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

import { CatalogJsonld, GoodsJsonldGoods, GoodsOrderJsonld, GoodsOrderJsonldGoodsOrders } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Api<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves the collection of Catalog resources.
   *
   * @tags Catalog
   * @name GetCatalogCollection
   * @summary Retrieves the collection of Catalog resources.
   * @request GET:/api/catalogs
   */
  getCatalogCollection = (params: RequestParams = {}) =>
    this.request<
      {
        "hydra:member": CatalogJsonld[];
        "hydra:totalItems"?: number;
        "hydra:view"?: {
          "@id"?: string;
          "@type"?: string;
          "hydra:first"?: string;
          "hydra:last"?: string;
          "hydra:previous"?: string;
          "hydra:next"?: string;
        };
        "hydra:search"?: {
          "@type"?: string;
          "hydra:template"?: string;
          "hydra:variableRepresentation"?: string;
          "hydra:mapping"?: { "@type"?: string; variable?: string; property?: string | null; required?: boolean }[];
        };
      },
      any
    >({
      path: `/api/catalogs`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Retrieves the collection of Goods resources.
   *
   * @tags Goods
   * @name GetGoodsCollection
   * @summary Retrieves the collection of Goods resources.
   * @request GET:/api/goods
   */
  getGoodsCollection = (query?: { "catalog.id"?: number; "catalog.id[]"?: number[] }, params: RequestParams = {}) =>
    this.request<
      {
        "hydra:member": GoodsJsonldGoods[];
        "hydra:totalItems"?: number;
        "hydra:view"?: {
          "@id"?: string;
          "@type"?: string;
          "hydra:first"?: string;
          "hydra:last"?: string;
          "hydra:previous"?: string;
          "hydra:next"?: string;
        };
        "hydra:search"?: {
          "@type"?: string;
          "hydra:template"?: string;
          "hydra:variableRepresentation"?: string;
          "hydra:mapping"?: { "@type"?: string; variable?: string; property?: string | null; required?: boolean }[];
        };
      },
      any
    >({
      path: `/api/goods`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieves the collection of GoodsOrder resources.
   *
   * @tags GoodsOrder
   * @name GetGoodsOrderCollection
   * @summary Retrieves the collection of GoodsOrder resources.
   * @request GET:/api/goods_orders
   */
  getGoodsOrderCollection = (params: RequestParams = {}) =>
    this.request<
      {
        "hydra:member": GoodsOrderJsonldGoodsOrders[];
        "hydra:totalItems"?: number;
        "hydra:view"?: {
          "@id"?: string;
          "@type"?: string;
          "hydra:first"?: string;
          "hydra:last"?: string;
          "hydra:previous"?: string;
          "hydra:next"?: string;
        };
        "hydra:search"?: {
          "@type"?: string;
          "hydra:template"?: string;
          "hydra:variableRepresentation"?: string;
          "hydra:mapping"?: { "@type"?: string; variable?: string; property?: string | null; required?: boolean }[];
        };
      },
      any
    >({
      path: `/api/goods_orders`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Creates a GoodsOrder resource.
   *
   * @tags GoodsOrder
   * @name PostGoodsOrderCollection
   * @summary Creates a GoodsOrder resource.
   * @request POST:/api/goods_orders
   */
  postGoodsOrderCollection = (data: GoodsOrderJsonld, params: RequestParams = {}) =>
    this.request<GoodsOrderJsonldGoodsOrders, void>({
      path: `/api/goods_orders`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
