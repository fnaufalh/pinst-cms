'use strict';

/**
 * maintenance-project service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::maintenance-project.maintenance-project');
