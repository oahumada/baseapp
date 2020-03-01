Feature('seguimiento_controles');

const { I } = inject();

Scenario('Consulta Seguimiento de Controles', (I) => {
    I.loginPage('omar.ahumadag@gmail.com', 'clave123');
    I.click('Seguimiento Controles');
    I.amOnPage('/app/segcontroles');

});
