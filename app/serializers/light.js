// https://gist.github.com/marbemac/06c5040e4d71694f07b3
import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTSerializer.extend({
  // Custom json root. The API returns objects in the "data" key.
    // We need to re-assign it to the singular version of the model name.
    // So {data: {name: foo}} becomes {post: {name: foo}}

    normalizeSingleResponse: function(store, primaryModelClass, payload, id, requestType) {
        var typeKey = primaryModelClass.modelName;
        let dataObject = payload['data'][0];
        payload[typeKey] = payload['data'][0];
        delete payload['data'];
        let returnArray = [];
        let returnObj = {};

        dataObject.id = parseInt(id);
        dataObject.brightness = dataObject.state.bri;
        dataObject.alert = dataObject.state.alert;
        dataObject.reachable = dataObject.state.reachable;
        dataObject.state = dataObject.state.on;

        returnObj[typeKey] = dataObject;

        return this._normalizeResponse(store, primaryModelClass, returnObj, id, requestType, false);
    },
    // Custom json root. The API returns objects in the "data" key.
    // We need to re-assign it to the plural version of the model name.
    // So {data: [{post1}, {post2}]} becomes {posts: [{post1},{post2}]}
    normalizeArrayResponse: function(store, primaryModelClass, payload, id, requestType) {
        var pluralTypeKey = Ember.Inflector.inflector.pluralize(primaryModelClass.modelName);
        let dataObject = payload['data'][0];
        payload[pluralTypeKey] = payload['data'][0];
        delete payload['data'];
        let returnArray = [];

        for (let key in dataObject) {
          dataObject[key].id = parseInt(key);
          dataObject[key].brightness = dataObject[key].state.bri;
          dataObject[key].alert = dataObject[key].state.alert;
          dataObject[key].reachable = dataObject[key].state.reachable;
          dataObject[key].state = dataObject[key].state.on;
          returnArray.push(dataObject[key]);
        }

        let returnObj = {};
        returnObj[pluralTypeKey] = returnArray;

        return this._normalizeResponse(store, primaryModelClass, returnObj, id, requestType, false);
    }
});
