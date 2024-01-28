exports.up = (pgm) => {
  pgm.addColumns('hours', {
    hours_id: { type: 'SERIAL', primaryKey: true },
  })

  pgm.addConstraint('hours', 'fk_hours_business_id', {
    foreignKeys: {
      columns: 'business_id',
      references: 'business(id)',
      onDelete: 'CASCADE',
    },
  })

  pgm.dropIndex('hours', ['business_id', 'hours_type'])

  pgm.createIndex('hours', ['business_id', 'hours_type'], { unique: true })
}

exports.down = (pgm) => {
  pgm.dropTable('hours')
}
