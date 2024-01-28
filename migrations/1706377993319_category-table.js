exports.up = async (pgm) => {
  await pgm.createTable('category', {
    business_id: {
      type: 'VARCHAR(255)',
      references: 'business',
      onDelete: 'CASCADE',
    },
    alias: { type: 'VARCHAR(255)' },
    title: { type: 'VARCHAR(255)' },
  })

  await pgm.createIndex('category', ['business_id', 'alias'], { unique: true })
}

exports.down = async (pgm) => {
  await pgm.dropTable('category')
}
