exports.up = (pgm) => {
  pgm.createTable('business', {
    id: { type: 'VARCHAR(255)', primaryKey: true },
    alias: { type: 'VARCHAR(255)' },
    name: { type: 'VARCHAR(255)' },
    image_url: { type: 'VARCHAR(255)' },
    is_claimed: { type: 'BOOLEAN' },
    is_closed: { type: 'BOOLEAN' },
    url: { type: 'VARCHAR(255)' },
    phone: { type: 'VARCHAR(20)' },
    display_phone: { type: 'VARCHAR(20)' },
    review_count: { type: 'INTEGER' },
    rating: { type: 'INTEGER' },
    location_id: { type: 'SERIAL' },
    coordinates_latitude: { type: 'DOUBLE PRECISION' },
    coordinates_longitude: { type: 'DOUBLE PRECISION' },
    price: { type: 'VARCHAR(255)' },
  })
}

exports.down = (pgm) => {
  pgm.dropTable('business')
}
