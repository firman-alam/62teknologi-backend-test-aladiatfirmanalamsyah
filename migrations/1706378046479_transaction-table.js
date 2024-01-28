exports.up = (pgm) => {
  pgm.createTable('transaction', {
    business_id: {
      type: 'VARCHAR(255)',
      references: 'business',
      onDelete: 'CASCADE',
    },
    transaction: { type: 'VARCHAR(255)' },
  })

  pgm.createIndex('transaction', ['business_id', 'transaction'], {
    unique: true,
  })
}

exports.down = (pgm) => {
  pgm.dropTable('transaction')
}
