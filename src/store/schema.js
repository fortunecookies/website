import { schema } from 'normalizr'

export const variant = new schema.Entity('variant')

export const brand = new schema.Entity('brand', {
  variants: [variant]
})

export const product = new schema.Entity('products', {
  brand,
  variant
})
export const productList = new schema.Array(product)

export const assortment = new schema.Entity('assortment', {
  products: [product]
})

export const entry = new schema.Entity('entries', {
  products: [product]
})

export const entryList = new schema.Array(entry)

export const order = new schema.Entity('orders', {
  entries: [entry]
})
export const orderList = new schema.Array(order)

export const store = new schema.Entity('stores', {
  assortment: [assortment],
  orders: [order]
})
export const storeList = new schema.Array(store)

export const territory = new schema.Entity('territories', {
  stores: [store]
})
export const territoryList = new schema.Array(territory)

export const employee = new schema.Entity('employee', {
  territories: [territory],
  orders: [order]
})
