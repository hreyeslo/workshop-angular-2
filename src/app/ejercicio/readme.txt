En este ejercicio se pide:

- Definir el método 'helloWorld' en el servicio para los módulos no lazy y el mismo método para el servicio de los módulos lazy. Ambos deben devolver un string, diferenciando cuál es cada servicio. ej: 'Hello from root service.'

- Definir los providers en el 'ExampleModule', utilizando como 'provide' la clase abstracta 'MyServiceService'.

- Importar 'ExampleModule' ejecutando el método forRoot en el módulo 'AppModule'. 

- Importar 'ExampleModule' ejecutando el método forChild en el módulo 'ChildModule'. 

- Descomentar las líneas en los ficheros 'root.component.ts' y 'child.component.ts'

Deberíamos poder ver ambas rutas, cada una con un texto en pantalla distinto de:
  'Esto no funciona'