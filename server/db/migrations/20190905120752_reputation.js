export async function up(knex) {
  return knex.schema.createTable('reputation', (table) => {
    table.increments('id')
    table.integer('currentRep')
    table.string('message')
    table.integer('newRep')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('reputation')
}
