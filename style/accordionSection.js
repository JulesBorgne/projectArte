jQuery(document).ready(function() {
  // Inner Accordion
  jQuery(".arte_block__accordion-section__button").on("click", function() {
    const Wrapper = jQuery(this).parent();
    const Button = jQuery(this);

    const activeClassName = "arte_block__accordion-section--active";

    if (!Wrapper.hasClass(activeClassName)) {
      Wrapper.addClass(activeClassName);
      Button.attr("aria-expanded", "true");
    } else {
      Wrapper.removeClass(activeClassName);
      Button.attr("aria-expanded", "false");
    }

    jQuery("html, body").animate(
      {
        scrollTop: parseInt(Wrapper.offset().top - 100)
      },
      350
    );
  });
});
