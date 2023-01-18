migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("crgv2cn2u0vugsj")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ztsccnea",
    "name": "content",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("crgv2cn2u0vugsj")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ztsccnea",
    "name": "text",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
