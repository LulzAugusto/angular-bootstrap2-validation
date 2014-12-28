(function() {
    'use strict';

    angular
        .module('bootstrap2.validation')
        .value('ErrorMessages', {
            'email': 'Email inválido',
            'max': 'Valor máximo: ',
            'maxlength': 'Caracteres máximos: ',
            'min': 'Valor mínimo: ',
            'minlength': 'Caracteres mínimos: ',
            'required': 'Campo obrigatório',
            'unique': 'Este campo não permite valores duplicados'
        });
})();
