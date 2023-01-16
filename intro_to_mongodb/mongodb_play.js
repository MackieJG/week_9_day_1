use zoo;

// Reading from the db

const id = ObjectId("63c55a31c6f2f62f2b18c8b2");
db.animals.findOne({_id: id})

// Update entry

db.animals.updateOne(
    {_id: ObjectId("63c55a31c6f2f62f2b18c8b3")},
    {$set: {name: "Josh"}}
)

db.animals.findOne({_id: ObjectId("63c55a31c6f2f62f2b18c8b3")})

// Delete entry

db.animals.deleteOne({_id: ObjectId("63c55a31c6f2f62f2b18c8b3")})


