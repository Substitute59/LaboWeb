'use strict';

/**
 * Domaine.js controller
 *
 * @description: A set of functions called "actions" for managing `Domaine`.
 */

module.exports = {

  /**
   * Retrieve domaine records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.domaine.search(ctx.query);
    } else {
      return strapi.services.domaine.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a domaine record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.domaine.fetch(ctx.params);
  },

  /**
   * Count domaine records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.domaine.count(ctx.query);
  },

  /**
   * Create a/an domaine record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.domaine.add(ctx.request.body);
  },

  /**
   * Update a/an domaine record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.domaine.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an domaine record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.domaine.remove(ctx.params);
  }
};
