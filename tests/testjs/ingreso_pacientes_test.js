Feature('ingreso');

const { I } = inject();

Scenario('Ingreso de Pacientes', (I) => {
    I.loginPage('omar.ahumadag@gmail.com','clave123');
    I.click('Ingreso Paciente');
    I.amOnPage('/app/ingresopaciente');


});
