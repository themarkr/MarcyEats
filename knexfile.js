// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'marcyeats',
      user:     'leo',
      password: '1'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'marcyeats',
      user:     'leo',
      password: '1'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection:{
      connectionString: process.env.DATABASE_URL, 
      ssl: {rejectUnauthorized: false}
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
