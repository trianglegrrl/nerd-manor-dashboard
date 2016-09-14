import Ember from 'ember';

const { inject: { service } } = Ember;

export default Ember.Controller.extend({
  hue: service(),

  allLightIds: [1, 2, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  livingRoomLightIds: [1, 2, 6, 7, 8, 9, 11, 12],
  kitchenLightIds: [1, 2, 6, 7],
  tvLightIds: [8, 9, 11, 12],
  washroomLightIds: [13, 14],
  laundryLightIds: [15],
  bedroomLightIds: [16, 17, 18, 19],
  bedroomOverheadLightIds: [16, 17, 18],
  bedLightIds: [19],
});
