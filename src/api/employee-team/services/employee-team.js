'use strict';

/**
 * employee-team service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::employee-team.employee-team');
