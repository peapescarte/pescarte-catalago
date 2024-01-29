Table fish {
  id VARCHAR(255) [primary key]
  scientific_name VARCHAR(255) [unique, not null]
  native BOOLEAN
  image VARCHAR(255)
}

Table habitat {
  id VARCHAR(255) [primary key]
  name VARCHAR(255) [unique, not null]
}

Table fish_habitat {
  fish_id VARCHAR(255) [ref: > fish.id]
  habitat_id VARCHAR(255) [ref: > habitat.id]
  primary key (fish_id, habitat_id)
}

Table gear {
  id VARCHAR(255) [primary key]
  name VARCHAR(255) [unique, not null]
}

Table fish_gear {
  fish_id VARCHAR(255) [ref: > fish.id]
  gear_id VARCHAR(255) [ref: > gear.id]
  primary key (fish_id, gear_id)
}

Table community {
  id VARCHAR(255) [primary key]
  name VARCHAR(255) [not null]
  description VARCHAR(255)
  municipality_id VARCHAR(255) [ref: > municipality.id]
}

Table municipality {
  id VARCHAR(255) [primary key]
  name VARCHAR(255) [not null]
  uf_name VARCHAR(255) [ref: > uf.uf_name]
}

Table uf {
  uf_name VARCHAR(255) [primary key]
  uf VARCHAR(255) [unique, not null]
}

Table fish_common_name_by_community {
  common_name VARCHAR(255)
  fish_id VARCHAR(255) [ref: > fish.id]
  community_id VARCHAR(255) [ref: > community.id]
  primary key (fish_id, community_id, common_name)
}

Table suggested_common_names {
  id VARCHAR(255) [primary key]
  name VARCHAR(255) [not null]
  email VARCHAR(255)
  suggestedName VARCHAR(255)
  status VARCHAR(255) [default: 'PENDING']
  fish_id VARCHAR(255) [ref: > fish.id]
  community_id VARCHAR(255) [ref: > community.id]
}
