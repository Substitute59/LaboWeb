'use strict';

/**
 * Competence.js controller
 *
 * @description: A set of functions called "actions" for managing `Competence`.
 */

module.exports = {

  /**
   * Retrieve competence records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.competence.search(ctx.query);
    } else {
      return strapi.services.competence.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a competence record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.competence.fetch(ctx.params);
  },

  /**
   * Count competence records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.competence.count(ctx.query);
  },

  /**
   * Create a/an competence record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.competence.add(ctx.request.body);
  },

  /**
   * Update a/an competence record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.competence.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an competence record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.competence.remove(ctx.params);
  }
};
