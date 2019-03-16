exports.handler = (event, context, callback) => {
  console.log(event);

  if (event.request.userAttributes) {
    console.log(event.request);
  }
};
