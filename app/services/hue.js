import Ember from 'ember';
import ENV from 'nerd-manor-dashboard/config/environment';

export default Ember.Service.extend({
  hueKey: ENV.HUE_KEY,
});
