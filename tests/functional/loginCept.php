<?php 
$I = new FunctionalTester($scenario);
$I-> am('Usuario Registrado');
$I-> wantTo('Ingresar a la aplicación de clientes Crónicos Vitam');
$I-> amOnPage('/');
$I -> see('Laravel');
