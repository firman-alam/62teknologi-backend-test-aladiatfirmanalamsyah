exports.up = (pgm) => {
  pgm.createTable('hours_open', {
    hours_id: { type: 'SERIAL', primaryKey: true },
    business_id: {
      type: 'VARCHAR(255)',
      references: 'business',
      onDelete: 'CASCADE',
    },
    is_overnight: { type: 'BOOLEAN' },
    start: { type: 'VARCHAR(8)' },
    end_hours: { type: 'VARCHAR(8)' },
    day: { type: 'INTEGER' },
  })
}

exports.down = (pgm) => {
  pgm.dropTable('hours_open')
}
