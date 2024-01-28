exports.up = (pgm) => {
  pgm.createTable('photo', {
    business_id: {
      type: 'VARCHAR(255)',
      references: 'business',
      onDelete: 'CASCADE',
    },
    photo: { type: 'VARCHAR(255)' },
  })

  pgm.createIndex('photo', ['business_id', 'photo'], { unique: true })
}

exports.down = (pgm) => {
  pgm.dropTable('photo')
}
