exports.up = (pgm) => {
  pgm.createTable('location', {
    id: { type: 'SERIAL', primaryKey: true },
    business_id: {
      type: 'VARCHAR(255)',
      references: 'business',
      onDelete: 'CASCADE',
    },
    address1: { type: 'VARCHAR(255)' },
    address2: { type: 'VARCHAR(255)' },
    address3: { type: 'VARCHAR(255)' },
    city: { type: 'VARCHAR(255)' },
    zip_code: { type: 'VARCHAR(20)' },
    country: { type: 'VARCHAR(255)' },
    state: { type: 'VARCHAR(255)' },
    display_address: { type: 'TEXT[]' },
    cross_streets: { type: 'VARCHAR(255)' },
  })
}

exports.down = (pgm) => {
  pgm.dropTable('location')
}
