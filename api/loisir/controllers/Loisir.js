'use strict';

/**
 * Loisir.js controller
 *
 * @description: A set of functions called "actions" for managing `Loisir`.
 */

module.exports = {

  /**
   * Retrieve loisir records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.loisir.search(ctx.query);
    } else {
      return strapi.services.loisir.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a loisir record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.loisir.fetch(ctx.params);
  },

  /**
   * Count loisir records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.loisir.count(ctx.query);
  },

  /**
   * Create a/an loisir record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.loisir.add(ctx.request.body);
  },

  /**
   * Update a/an loisir record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.loisir.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an loisir record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.loisir.remove(ctx.params);
  }
};
