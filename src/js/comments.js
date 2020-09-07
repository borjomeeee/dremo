import $ from 'jquery'
import 'slick-carousel'

window.jQuery = window.$ = $

$('.reviews__comment-list').slick({
  nextArrow: $('.reviews__comment-switcher .switcher__button_right'),
  prevArrow: $('.reviews__comment-switcher .switcher__button_left')
})
