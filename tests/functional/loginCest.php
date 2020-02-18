<?php 

class loginCest
{
    public function _before(FunctionalTester $I)
    {
    }

    /**
     * Ruta normal
     */
    public function loginAsNormalUser(FunctionalTester $I)
    {
        $I->wantTo('Login en Sistema de Gestion Vitam');
        $I->amOnPage('/login');
        $I->fillField('email', 'omar.ahumadag@gmail.com');
        $I->fillField('password', 'clave123');
        $I->click('Login');
        $I->seeInCurrentUrl('/app/home');
        $I->see('Hola, Omar');
    }
    /**
     * Ruta alternativa 1
     */
    public function loginNonAuthenticated(FunctionalTester $I)
    {
        $I->wantTo('Login en Sistema de Gestion Vitam pero no estoy autenticado');
        $I->amOnPage('/app/home');
        $I->see('Recordar');
        $I->seeInCurrentUrl('/');
    }
    public function tryloginBadPassword(FunctionalTester $I)
    {
        $I->wantTo('Login en Sistema de Gestion Vitam');
        $I->amOnPage('/login');
        $I->fillField('email', 'omar.ahumadag@hotmail.com');
        $I->fillField('password', 'clave12345');
        $I->click('Login');
        $I->see(' These credentials do not match our records.');
        $I->seeInCurrentUrl('/');

    }
    public function tryloginBadEmail(FunctionalTester $I)
    {
        $I->wantTo('Login en Sistema de Gestion Vitam');
        $I->amOnPage('/login');
        $I->fillField('email', 'oscar.ahumadag@hotmail.com');
        $I->fillField('password', 'clave123');
        $I->click('Login');
        $I->see(' These credentials do not match our records.');
        $I->seeInCurrentUrl('/');
    }

}