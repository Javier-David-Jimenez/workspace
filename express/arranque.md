# Guía de Express con PgAdmin

## Arrancar PgAdmin con el script del `package.json`

Ejecutamos el siguiente comando de package.jsonen la terminal 
para iniciar los servicios dockers-compose:
```bash
npm run start-services
```

Accedemos a [http://localhost:8081](http://localhost:8081).

## Configuración del PostgresSQL en PGADMIN 

sacamos datos del `docker-compose.yml`

###      LOGIN de PgAdmin
En la sección `services > pgadmin > environment`, configuramos lo siguiente:

- **login**: `admin@local.host`
- **password**: `password`



### Crear un nuevo servidor en PgAdmin

1. Agregar un nuevo servidor.
2. Asignar un nombre (puedes elegir el que quieras).
3. En la sección de **Connection**, asegurarte de que esté correctamente configurado.

### Dependencias de PgAdmin
En la sección `services > pgadmin > depends_on`, configuramos:
```yaml
hostname: express-db
```


En la sección `services > pgadmin > ports`, vemos el puerto del localhost por el que sale pero no lo configuramos dejamos el:

 ####  5432 
 



### Base de datos (`express-db`)
En la sección `services > express-db > environment`, configuramos:
- **user**: `postgres`
- **password**: `1234`

## Arrancar Nodemon

Ejecutamos el siguiente comando para iniciar el servidor en desarrollo:
```bash
npm run start-dev
```

## Crear la base de datos con Sequelize

Para que Sequelize cree la base de datos según lo programado, ejecutamos:
```bash
sequelize db:migrate
```

## Poblar la base de datos con Sequelize

Para que Sequelize pueble la base de datos según las configuraciones existentes, ejecutamos:
```bash
sequelize db:seed:all
```

> ⚠ **Nota**: Si vuelves a ejecutar este comando, los datos se duplicarán.

---

Ya estamos listos para seguir en el entorno de pruebas. 🎉
