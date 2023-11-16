export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('reputation').del()

  // Inserts seed entries
  await knex('reputation').insert([
    { id: 1, currentRep: 0, message: '', newRep: 0 },
  ])
}
