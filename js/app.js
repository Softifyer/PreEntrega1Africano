//Sistema básico de un cajero automático.
//Este pequeño algoritmo permite identificarnos como usuario con un nombre cualquiera pero con una clave predeterminada.
//Al ingresar en el sistema podremos: Consultar Saldo, Retirar Fondos, Depositar Fondos o salir del sistema.

//A continuación comparto las pequeñas tareas en la que he dividido las diferentes funciones que conforman el algoritmo.

// 1-. Pedir Nombre y Clave al Usuario LISTO
// 2-. Seleccionar operación
    //  a-. Consulta de Saldo LISTO
    //  b-. Retiro LISTO
    //  c-. Depósito LISTO
    //  d-. Salir LISTO
// 3-. Hacer otra operación LISTO

//Para que el agoritmo funcione podemos escribir cualquier nombre de usuario, pero la contraseña debe ser "1234".
//Al ingresar una contraseña errada el algoritmo nos dará la advertencia de haber ingresado una contraseña errada.

// ----------- INICIO SISTEMA DE CAJERO AUTOMÁTICO ---------- //

    // ----------- Inicio Variables y constantes ------- //

    let saldoActual = 1000; // Saldo inicial del usuario
    let nombreUsuario = prompt('Por favor ingrese su nombre: '); // Nombre del usuario (Puede ser cualquiera)
    let claveUsuario = +prompt('Por favor ingrese su clave de cajero: '); // Clave del usuario (Usar 1234)
    const claveReal = 1234;

    // ----------- Fin Variables y constantes ------- //

    // Imprime en consola el nombre del usuario
    console.log(nombreUsuario); // Solo control para confirmar que efectivamente se imprime el dato.

    // -------- Inicio Confirmación de Usuario y Contraseña ----- //
    function verificarClave() {

        console.log(claveReal); // Solo control interno
        console.log(claveUsuario); // Solo control interno

        while (claveUsuario !== claveReal) {
          alert('Clave incorrecta');
          claveUsuario = +prompt('Por favor ingrese su clave de cajero: ');
        }

        alert('Clave correcta');
        mostrarOperaciones();

      };

    verificarClave();
    // -------- Fin Confirmación de Usuario y Contraseña ----- //

    // -------- Inicio Seleccionar operación ------------ //
    function mostrarOperaciones() {

        let operacion = prompt('Seleccione el número de la operación:\n1-. Consulta de Saldo\n2-. Retiro\n3-. Depósito\n4-. Salir');
        let saldo = saldoActual;
      
        switch (operacion) {
          case '1':
            alert(nombreUsuario + ' tu saldo es: $' + saldo);
            nuevaOperacion();
            break;
          case '2':
            saldo = retiro(saldo);
            nuevaOperacion();
            break;
          case '3':
            saldo = deposito(saldo);
            nuevaOperacion();
            break;
          case '4':
            alert('¡Hasta luego, ' + nombreUsuario + '!');
            break;
          default: alert('Opción no válida. Por favor, seleccione una opción válida.');
          
          nuevaOperacion();

        };

      };
    // -------- Fin Seleccionar operación ------------ //

    // -------- Inicio Operación Retiro ---------- //
    function retiro(saldo) {

      let montoRetiro = 0;

      do {
        montoRetiro = +prompt('Tu saldo actual es: $' + saldo + '\nIngrese el monto a retirar: ');

        if (montoRetiro <= saldo) {
          saldo = saldo - montoRetiro;
          alert('Retiro realizado satisfactoriamente\nSaldo anterior: ' + (saldo + montoRetiro) + '\nMonto retirado: ' + montoRetiro + '\nSaldo actual: ' + saldo);
          saldoActual = saldo;
        } else {
          alert('Fondos insuficientes.\nPor favor ingrese un monto menor.');
        };
      }
      
      while (montoRetiro > saldo);
      return saldo;

    };
    // -------- Fin Operación Retiro ---------- //

    // -------- Inicio Operación Depósito -------- //
    function deposito(saldo) {

        let montoDeposito;
      
        do {

          montoDeposito = +prompt('Ingrese el monto a depositar: ');

          if (montoDeposito > 0) {
            saldo = saldo + montoDeposito;
            alert('Depósito realizado satisfactoriamente\nSaldo anterior: ' + (saldo - montoDeposito) + '\nMonto depositado: ' + montoDeposito + '\nSaldo actual: ' + saldo);
            saldoActual = saldo;
          } else {
            alert('Monto errado. \nPor favor ingrese un monto mayor.');
          };
        }
        
        while (montoDeposito < 0);
        return saldo;

      };
    // -------- Fin Operación Depósito -------- //

    // ---------- Inicio Nueva operación --------- //
    function nuevaOperacion() {

      let respuesta = prompt(nombreUsuario + ' ¿Deseas hacer una nueva operación? Si/No');

      if (respuesta.toLocaleLowerCase() === 'si') {
        mostrarOperaciones();
      } else if (respuesta.toLocaleLowerCase() === 'no') {
        alert('Saliendo del sistema.\nGracias por usar nuestro servicio');
      } else {
        alert('Respuesta no válida. Por favor, ingresa "Si" o "No".');
      };

    };
    // ---------- Fin Nueva Operación --------- //

// ----------- FIN SISTEMA DE CAJERO AUTOMÁTICO ---------- //