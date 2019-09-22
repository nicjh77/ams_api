
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('location', t => {
        t.integer('location_id').unsigned().primary();
        t.integer('room_number').unsigned().nullable();
        t.string('room_name').notNull();
        t.string('place').nullable();
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('item')
};
