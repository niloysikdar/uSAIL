const Response = ({ isSuccess, message, data }) => {
  return {
    success: isSuccess ? 'ok' : 'no',
    message: message || '',
    data: data || {},
  };
};

module.exports = { Response };
