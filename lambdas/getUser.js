const Responses = require('./API_Responses');

exports.handler = async event => {
  if(!event.pathParameters || !event.pathParameters) {
    return Responses._400({message: 'Missing id from the path'});
  }

  let { ID } = event.pathParameters;

  if(data[ID]) {
    return Responses._200({message: data[ID]});
  }

  return Responses._400({message: 'no ID in data'})
};

const data = {
  123: {name: 'Asaf'},
  111: {name: 'Shay'},
  747: {name: 'Zohar'}
}
