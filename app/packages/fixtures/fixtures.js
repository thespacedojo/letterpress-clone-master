(function () {

  'use strict';

  Meteor.methods({

    'fixtures/reset': function () {
      Letterpress.Collections.Pages.remove({});
      Meteor.users.remove({});
    },

    'fixtures/seedData': Letterpress.Utils.seedData,

    'fixtures/page/create': function (pages) {

      // convert page to an array just in case it's a single page
      pages = [].concat(pages);

      // then create all pages
      for (var i = 0; i < pages.length; i++) {
        Letterpress.Collections.Pages.insert(pages[i]);
      }
    },

    'fixtures/getSettings': function () {
      return Meteor.settings;
    },

    'fixtures/setPaymentPlan': function (plan) {
      Meteor.settings.private.paymentPlan = plan;
    }

  });

})();
