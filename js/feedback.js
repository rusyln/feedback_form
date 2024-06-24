(function ($, Drupal) {
    Drupal.behaviors.feedbackForm = {
      attach: function (context, settings) {
        $('#feedback-tab', context).click(function () {
          $('#feedback-form').toggle();
        });
      }
    };
  })(jQuery, Drupal);
  