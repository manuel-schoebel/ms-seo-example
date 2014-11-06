Router.route('/', {
  template: 'hello',
  name: 'home',
  onAfterAction: function(){
    SEO.set({
      title: 'blup'
    });
  }
});

Router.route('/test', {
  template: 'test',
  name: 'test'
});

Router.route('/standard', {
  template: 'test',
  name: 'standard'
});

if (Meteor.isClient) {

  SEO.config({
    title: 'STANDARD TITLE',
    auto: {
      twitter:true,
      og:true,
      set: ['description', 'url', 'title']
    }
  })

  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    SeoCollection.upsert({route_name: 'test'},{route_name: 'test', title: 'test'});
  });
}
