Feature('atencion_nutricional');

const { I } = inject();

Scenario('Ingreso Datos Nutricionales', (I) => {
    I.loginPage('omar.ahumadag@gmail.com', 'clave123');
    I.click('Ingreso datos nutricionales');
    I.amOnPage('/app/ingresonutricional');

});
