'use strict';


exports.handler = (req, res) => {

  function processParams(req) {
    return Promise.resolve('ya');
  }

  return processParams(req, res)
    .then((response) => {
      return res.status(200).json({
        content: response
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        message: 'Internal Server error.'
      });
    });
};
