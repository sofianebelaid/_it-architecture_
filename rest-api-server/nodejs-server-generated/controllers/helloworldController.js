'use strict'

var varhelloworldController = require('./helloworldControllerService');

module.exports.funchelloworldPOST = function funchelloworldPOST(req, res, next) {
  varhelloworldController.funchelloworldPOST(req.swagger.params, res, next);
};