import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://192.168.0.10',
  namespace: 'api/17cQFYcuEmVKWl-vveWb573MJQwM33ILf8KiRE0q',

  ajax: function(url, method, hash) {
    hash.crossDomain = true;
    hash.xhrFields = { withCredentials: false };
    return this._super(url, method, hash).then(function(json) {
      // Massage this to look like RESTAdapter expects.
      return { data: [json] };
    });
  }
});
