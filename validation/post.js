const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : '';
  data.image = !isEmpty(data.image) ? data.image : '';

  if (!Validator.isLength(data.text, { min: 1, max: 300})) {
    errors.text = 'Post must be between 1 and 300 characters';
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = 'Text field is required';
  }

  if (Validator.isEmpty(data.image)) {
    errors.image = 'Image is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};