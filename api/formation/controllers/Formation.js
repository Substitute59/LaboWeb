'use strict';

/**
 * Formation.js controller
 *
 * @description: A set of functions called "actions" for managing `Formation`.
 */

module.exports = {

  /**
   * Retrieve formation records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.formation.search(ctx.query);
    } else {
      return strapi.services.formation.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a formation record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.formation.fetch(ctx.params);
  },

  /**
   * Count formation records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.formation.count(ctx.query);
  },

  /**
   * Create a/an formation record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.formation.add(ctx.request.body);
  },

  /**
   * Update a/an formation record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.formation.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an formation record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.formation.remove(ctx.params);
  }
};
