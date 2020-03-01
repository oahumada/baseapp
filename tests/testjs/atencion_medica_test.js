Feature('atencion_medica');

const { I } = inject();

Scenario('Ingreso Datos Medicos', (I) => {
    I.loginPage('omar.ahumadag@gmail.com', 'clave123');
    I.click('Ingreso datos medicos');
    I.amOnPage('/app/ingresomedico');


});
