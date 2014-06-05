/*
 * bootstrap navigation on hover
 * 
 *
 * Copyright (c) 2014 Ben Miller
 * Licensed under the MIT license.
 */

// boilerplate from http://stefangabos.ro/jquery/jquery-plugin-boilerplate-revisited/

(function($) {

    // here we go!
    $.bootstrapNavigationOnHover = function(element, options) {

        // plugin's default options
        // this is private property and is  accessible only from inside the plugin
        var defaults = {
            animationInSpeed: 500,
            animationOutSpeed: 500,
            animation: "fade",
            mouseOutDelay: 500,
            responsive: true,
            responsiveThreshold: 768,
            parentClickable: true
        };

        // to avoid confusions, use "plugin" to reference the
        // current instance of the object
        var plugin = this;

        // this will hold the merged default, and user-provided options
        // plugin's properties will be available through this object like:
        // plugin.settings.propertyName from inside the plugin or
        // element.data('pluginName').settings.propertyName from outside the plugin,
        // where "element" is the element the plugin is attached to;
        plugin.settings = {};

        var $element = $(element); // reference to the jQuery version of DOM element
        var $W = $(window); // reference to the window object

        // the "constructor" method that gets called when the object is created
        plugin.init = function() {

            // the plugin's final properties are the merged default and
            // user-provided options (if any)
            plugin.settings = $.extend({}, defaults, options);

            // find each dropdown parent item
            $element.find("li.dropdown").each(function(i, el) {

                var $li = $(el);

                if (plugin.settings.responsive) {

                    // if the window is within the responsive threshold
                    if (windowGreaterThanThreshold()) {

                        //attach hover bindings to list element
                        $li.bind("mouseenter.bnoh", onMouseIn);
                        $li.bind("mouseleave.bnoh", onMouseOut);
                    }
                } else {

                    //attach hover bindings to list element
                    $li.bind("mouseenter.bnoh", onMouseIn);
                    $li.bind("mouseleave.bnoh", onMouseOut);
                }

                // find and hook into the click function for each root list element
                $li.find("a.root").bind("click.bnoh", function(e) {
                    var $self = $(this);

                    // prevent bootstrap's default action to show the drop-down menu
                    if (windowGreaterThanThreshold()) {

                        // stop defualt event and event propagation
                        e.stopPropagation();
                        e.preventDefault();

                        // check if we need to go somewhere upon clicking the parent item
                        if (plugin.settings.parentClickable) {

                            // go to the anchor's href location
                            window.location = $self.attr("href");
                        }

                    }
                });
            });
        };

        // public methods
        // these methods can be called like:
        // plugin.methodName(arg1, arg2, ... argn) from inside the plugin or
        // element.data('pluginName').publicMethod(arg1, arg2, ... argn) from outside
        // the plugin, where "element" is the element the plugin is attached to;

        // destroy and unset all the plugin functions
        plugin.destroy = function() {

            // unbind mouse enter and leave events
            $element.find("li.dropdown").unbind(".bnoh");

            // unbind mouse click events
            $element.find("a.root").unbind(".bnoh");

            // remove plugin data
            $element.removeData("bootstrapNavigationOnHover");
        };

        // private methods
        // these methods can be called only from inside the plugin like:
        // methodName(arg1, arg2, ... argn)

        var onMouseIn = function() {
            var $self = $(this);
            var $parent = $(this).parent().parent();
            var $menu = $self.find('.dropdown-menu');

            // we'll check to see if this dropdown has already been opened
            if (!$self.hasClass('open')) {

                // if it hasn't, we should hide all the possible other open dropdown menus
                $parent.find('.dropdown-menu').hide();
                $parent.find('li.dropdown').removeClass('open');
            }

            // add the active class to this dropdown menu
            $self.addClass("open");
            $menu.stop(true, true);

            // animate on plugin setting
            if (plugin.settings.animation == "slide") {
                $menu.slideDown(plugin.settings.animationInSpeed);
            }

            if (plugin.settings.animation == "fade") {
                $menu.fadeIn(plugin.settings.animationInSpeed);
            }
        };

        var onMouseOut = function() {
            var $self = $(this);
            var $menu = $self.find('.dropdown-menu');

            // stop all animations
            $menu.stop(true, true);

            // introduce a mouse delay for usability, this protects the user from accidently mousing-out
            // of a dropdown menu, giving them time to mouse back in
            $menu.delay(plugin.settings.mouseOutDelay);

            // animate on plugin setting
            if (plugin.settings.animation == "slide") {
                $menu.slideUp(plugin.settings.animationOutSpeed, function() {
                    $self.removeClass("open");
                });
            }

            if (plugin.settings.animation == "fade") {
                $menu.fadeOut(plugin.settings.animationOutSpeed, function() {
                    $self.removeClass("open");
                });
            }
        };

        var windowGreaterThanThreshold = function() {
            return $W.width() >= plugin.settings.responsiveThreshold;
        };

        // fire up the plugin!
        // call the "constructor" method
        plugin.init();

    };

    // add the plugin to the jQuery.fn object
    $.fn.bootstrapNavigationOnHover = function(options) {

        // iterate through the DOM elements we are attaching the plugin to
        return this.each(function() {

            // if plugin has not already been attached to the element
            if (undefined == $(this).data('bootstrapNavigationOnHover')) {

                // create a new instance of the plugin
                // pass the DOM element and the user-provided options as arguments
                var plugin = new $.bootstrapNavigationOnHover(this, options);

                // in the jQuery version of the element
                // store a reference to the plugin object
                // you can later access the plugin and its methods and properties like
                // element.data('pluginName').publicMethod(arg1, arg2, ... argn) or
                // element.data('pluginName').settings.propertyName
                $(this).data('bootstrapNavigationOnHover', plugin);

            }

        });

    }

})(jQuery);