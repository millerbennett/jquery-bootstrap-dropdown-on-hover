# Bootstrap Dropdown on Hover

Adds hover functionality to bootstrap dropdowns, nice things:

+ Utilizes Bootstrap's native events
+ Maintains keyboard accessibility
+ ~ 1.5kb
+ Configurable mouse-out delay
+ Responsive [] [  ]
+ CSS3 menu animations

## Getting Started

Download the [minified version][min] or the [commented version][max].

[min]: https://raw.github.com/millerbennett/jquery-bootstrap-dropdown-on-hover/master/dist/jquery.bootstrap-dropdown-on-hover.min.js
[max]: https://raw.github.com/millerbennett/jquery-bootstrap-dropdown-on-hover/master/dist/jquery.bootstrap-dropdown-on-hover.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/bootstrap-dropdown-on-hover.min.js"></script>
<script>
jQuery(function($) {
  $("#menu").bootstrapDropdownOnHover();
});
</script>
```

```html
<ul id="menu" class="nav navbar-nav">
	<li class="dropdown">
	    <a href="#" data-toggle="dropdown">Menu Item <b class="caret"></b></a>
	    <ul class="dropdown-menu">
	        <li><a href="#">First</a></li>
	        <li><a href="#">Second</a></li>
	        <li><a href="#">Third</a></li>
	    </ul>
	</li>
</ul>
```

## Demo
[See the demo html here](https://raw.github.com/millerbennett/jquery-bootstrap-dropdown-on-hover/master/demo/demo.html)

Public demo coming soon.

## Documentation

| Property            | Description                                                              | Default value  |
| ------------------- |:------------------------------------------------------------------------:| --------------:|
| mouseOutDelay       | Number of milliseconds to wait before closing the menu on mouseleave     | 500            |
| responsiveThreshold | Pixel width where the menu's should no-longer be activated by hover      | 992            |
| hideBackdrop        | Whether to remove the backdrop element upon hover (mobile only)          | true           |
