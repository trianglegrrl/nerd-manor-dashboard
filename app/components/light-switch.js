import Ember from 'ember';

const { Component, computed, inject: { service } } = Ember;

export default Component.extend({
  store: service(),

  lightIds: [],

  lights: computed('lightIds', function() {
    let lightIds = this.get('lightIds');

    return this.get('store').findAll('light').then(function(lights) {
      return lights.filter(function(item) {
        return lightIds.includes(parseInt(item.get('id')));
      });
    });
  }),

  didReceiveAttrs() {
    this._super(...arguments);
  },

  actions: {
    setStates(state) {
      this.get('lights').then((lights) => {
        return lights.forEach(function(light) {
          return light.setState({ "on": `${state}` });
        });
      });
    },
  },
});
