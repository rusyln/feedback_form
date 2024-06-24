<?php

namespace Drupal\feedback_form\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'FeedbackFormBlock' block.
 *
 * @Block(
 *   id = "feedback_form_block",
 *   admin_label = @Translation("Feedback Form Block"),
 * )
 */
class FeedbackFormBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    // Attach the library for CSS and JS.
    return [
      '#theme' => 'feedback_form',
      '#attached' => [
        'library' => [
          'feedback_form/feedback',
        ],
      ],
    ];
  }

}
