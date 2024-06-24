(function ($, Drupal) {
    Drupal.behaviors.feedbackForm = {
      attach: function (context, settings) {
        $('#feedback-tab', context).once('feedbackForm').click(function () {
          $('#feedback-form').toggle();
        });
      }
    };
  })(jQuery, Drupal);
  