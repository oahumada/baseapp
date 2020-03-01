Feature('login');

Scenario('Test de Login - Ruta Principal', (I) => {
    I.amOnPage('/');
    I.see('Login');
    I.fillField('email', 'omar.ahumadag@gmail.com');
    I.fillField('password', 'clave123');
    I.click('Login');
    I.seeCurrentUrlEquals('/app/home');
    I.see('Gestión de Pacientes Centro Médico Vitam');

});

Scenario('Test de Login - Ruta Alternativa 1: Login Incorrecto - Email', (I) => {
    I.amOnPage('/');
    I.see('Login');
    I.fillField('Email', 'mail@incorrecto.cl');
    I.fillField('password', 'clave123');
    I.click('Login');
    I.see('These credentials do not match our records.');
    I.amOnPage('/');
});

Scenario('Test de Login - Ruta Alternativa 2: Login Incorrecto - Clave', (I) => {
    I.amOnPage('/');
    I.see('Login');
    I.fillField('Email', 'omar.ahumadag@gmail.com');
    I.fillField('password', 'claveIncorrecta');
    I.click('Login');
    I.see('These credentials do not match our records.');
    I.amOnPage('/');
});

Scenario('Test de Login - Ruta Alternativa 3: Trato de entrar sin estar autenticado.', (I) => {
    I.amOnPage('/');
    I.see('Login');
    I.amOnPage('/app/home');
    I.dontSee('Sistema de Gestión de Pacientes Centro Médico Vitam');
    I.see('Login');
    I.seeCurrentUrlEquals('/login');
});