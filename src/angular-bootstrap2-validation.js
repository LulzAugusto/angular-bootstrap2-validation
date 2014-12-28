(function() {
	'use strict';

	var scripts = document.getElementsByTagName('script');
	var currentScriptPath = scripts[scripts.length-1].src;
	var errorMessages = {
        'email': 'Invalid email',
        'max': 'Maximum value: ',
        'maxlength': 'Maximum length: ',
        'min': 'Minimum value: ',
        'minlength': 'Minimum length: ',
        'required': 'This field cannot be blank',
        'unique': 'This field does not allow duplicated values'
    };

	var module = angular.module('bootstrap2.validation', []);

	module.value('ErrorMessages', errorMessages);

	module.directive('bsValidation', bsValidation)

	function bsValidation() {
		var directive = {
			restrict: 'A',
			require: '^form',
			link: link,
			scope: {}
		};

		return directive;

		function link(scope, element, attrs) {
			var input = element[0].querySelector('input[ng-model]');
			var $input = angular.element(input);
			if ($input) {
				$input.bind('keyup blur', function(event) {
					// Avoid triggering validation on the next element when navigating using the tab key
					if (event.which !== 9) {
						var isInvalid = $input.hasClass('ng-invalid');
						element.toggleClass('error', isInvalid);
						element.toggleClass('success', !isInvalid);
					}
				});
			} else {
				throw 'You don\'t have a ng-model input inside your control-group';
			}
		}
	}

	module.directive('bsValidationMessages', bsValidationMessages);

	bsValidationMessages.$inject = ['ErrorMessages'];

	/* @ngInject */
	function bsValidationMessages(ErrorMessages) {
		var directive = {
			link: link,
			restrict: 'E',
			require: '^form',
			scope: {},
			templateUrl: currentScriptPath.replace('angular-bootstrap2-validation.js', 'validation-messages.html')
		};
		return directive;

		function link(scope, element, attrs, ctrl) {
			var input = element.parent()[0].querySelector('input[ng-model],select[ng-model],textarea[ng-model]');

			if (!input) {
				throw 'You don\'t have a ng-model input inside your control-group';
			}

			var $controlGroup = element.parent().parent();
			scope.inputCtrl = ctrl[input.name];
			scope.errorMessages = angular.copy(ErrorMessages);
			scope.errorValues = [];
			scope.showMessages = function() {
				return scope.inputCtrl.$invalid && (scope.inputCtrl.$touched || scope.inputCtrl.$dirty);
			};

			angular.forEach(input.attributes, function(attr) {
				if (ErrorMessages.hasOwnProperty(attr.name)) {
					scope.errorValues[attr.name] = attr.nodeValue;
				}
			});
		}
	}
}());
