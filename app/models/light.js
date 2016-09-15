import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

import {
  instanceOp,
} from 'ember-api-actions';

const { computed } = Ember;

export default Model.extend({
  state: attr('boolean'),
  brightness: attr('number'),
  alert: attr('string'),
  reachable: attr('boolean'),
  type: attr('string'),
  name: attr('string'),
  modelid: attr('string'),
  manufacturername: attr('string'),
  uniqueid: attr('string'),
  swversion: attr('string'),

  setState: instanceOp({
    path: 'state',
    method: 'put',
  }),

  isOn: computed.equal('state', true),
  isOff: computed.equal('state', false),
});
