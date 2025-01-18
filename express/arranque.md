# Guía de Express con PgAdmin

## Arrancar PgAdmin con el script del `package.json`

Ejecutamos el siguiente comando para iniciar los servicios:
```bash
npm run start-services
```

Accedemos a [http://localhost:8081](http://localhost:8081).

## Configuración del `docker-compose.yml`

### PgAdmin
En la sección `services > pgadmin > environment`, configuramos lo siguiente:

- **login**: `admin@local.host`
- **password**: `password`

En la sección `services > pgadmin > ports`, configuramos el puerto:
```yaml
ports:
  - "8081:8080"
```

### Crear un nuevo servidor en PgAdmin

1. Agregar un nuevo servidor.
2. Asignar un nombre (puedes elegir el que quieras).
3. En la sección de **Connection**, asegurarte de que esté correctamente configurado.

### Dependencias de PgAdmin
En la sección `services > pgadmin > depends_on`, configuramos:
```yaml
hostname: express-db
```

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
