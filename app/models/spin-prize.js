import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  theme: DS.attr(),
  size: DS.attr(),
  spinPrize: DS.attr(),
  img: DS.attr()
});
