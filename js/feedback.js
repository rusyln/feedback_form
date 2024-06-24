(function ($, Drupal) {
    Drupal.behaviors.feedbackForm = {
      attach: function (context, settings) {
        console.log('Feedback Form behavior attached.');
  
        // Check if #feedback-tab element is found
        console.log($('#feedback-tab', context));
  
        // Toggle #feedback-form on click
        $('#feedback-tab', context).click(function () {
          console.log('Feedback Tab clicked.');
          $('#feedback-form').toggle();
        });
      }
    };
  })(jQuery, Drupal);
  