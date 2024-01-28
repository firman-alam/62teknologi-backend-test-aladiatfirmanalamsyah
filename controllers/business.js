const { v4: uuidv4 } = require('uuid')
const pool = require('../config/dbConfig')

const getBusiness = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send('Error: ' + error.message)
  }
}

const addBusiness = async (req, res) => {
  try {
    await pool.query('BEGIN')

    const data = req.body
    const id = uuidv4()

    await pool.query(
      'INSERT INTO business (id, alias, name, image_url, is_claimed, is_closed, url, phone, display_phone, review_count, rating, coordinates_latitude, coordinates_longitude, price) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *',
      [
        id,
        data.alias,
        data.name,
        data.image_url,
        data.is_claimed,
        data.is_closed,
        data.url,
        data.phone,
        data.display_phone,
        data.review_count,
        data.rating,
        data.coordinates.latitude,
        data.coordinates.longitude,
        data.price,
      ]
    )

    for (const category of data.categories) {
      await pool.query(
        'INSERT INTO category (business_id, alias, title) VALUES ($1, $2, $3)',
        [id, category.alias, category.title]
      )
    }

    await pool.query(
      'INSERT INTO location (business_id, address1, address2, address3, city, zip_code, country, state, display_address, cross_streets) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
      [
        id,
        data.location.address1,
        data.location.address2,
        data.location.address3,
        data.location.city,
        data.location.zip_code,
        data.location.country,
        data.location.state,
        data.location.display_address,
        data.location.cross_streets,
      ]
    )

    for (const photo of data.photos) {
      await pool.query(
        'INSERT INTO photo (business_id, photo) VALUES ($1, $2)',
        [id, photo]
      )
    }

    const hoursResult = await pool.query(
      'INSERT INTO hours (business_id, hours_type, is_open_now) VALUES ($1, $2, $3) RETURNING hours_id, business_id, hours_type, is_open_now',
      [id, data.hours[0].hours_type, data.hours[0].is_open_now]
    )

    console.log(hoursResult.rows[0])

    const hoursId = hoursResult.rows[0].hours_id

    for (const hoursOpen of data.hours[0].open) {
      await pool.query(
        'INSERT INTO hours_open (business_id, is_overnight, start, end_hours, day) VALUES ($1, $2, $3, $4, $5)',
        [
          id,
          hoursOpen.is_overnight,
          hoursOpen.start,
          hoursOpen.end,
          hoursOpen.day,
        ]
      )
    }

    for (const transaction of data.transactions) {
      await pool.query(
        'INSERT INTO transaction (business_id, transaction) VALUES ($1, $2)',
        [id, transaction]
      )
    }

    await pool.query('COMMIT')

    res.status(201).json({ success: true, id })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, error: 'Internal Server Error' })
  }
}

const updateBusiness = async (req, res) => {}

const deleteBusiness = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send('Error: ' + error.message)
  }
}

module.exports = { getBusiness, addBusiness, updateBusiness, deleteBusiness }
