'use strict'

module.exports.funchelloworldPOST = function funchelloworldPOST(req, res, next) {
  res.send({
    message: 'Hello '+req.undefined.value.name
  });
};