angular-bootstrap2-validation
=============================

AngularJS directive to make easier to apply Twitter Bootstrap 2.3.2 form validation

## Install

With Bower:

`bower install --save angular-bootstrap2-validation`

## Get Started

1. Include the module ```bootstrap2.validation``` in your AngularJS app:
    ```angular.module('app', ['bootstrap2.validation']);```

2. Include the directives in your Bootstrap#2.3.2 form
```html
<form novalidate name="login-form">
	<div class="control-group" bs-validation>
		<div class="controls">
			<input type="text" name="login" ng-model="login" required>
			<bs-validation-messages>
		</div>
	</div>
	<div class="control-group" bs-validation>
		<div class="controls">
			<input type="password" name="password" ng-model="password" required>
			<bs-validation-messages>
		</div>
	</div>
	<button class="btn btn-primary btn-large" type="submit">Save</button>
</form>
```

## Optional

Localize your error messages:
```html
<script src="angular-bootstrap2-validation.js"></script>
<script src="angular-bootstrap2-validation-locale_pt-br.js"></script>
```

