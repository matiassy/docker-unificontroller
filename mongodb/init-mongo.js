db.getSiblingDB("MONGO_DBNAME2").createUser({user: "MONGO_USER2", pwd: "MONGO_PASS2", roles: [{role: "dbOwner", db: "MONGO_DBNAME2"}]});
db.getSiblingDB("MONGO_DBNAME2_stat").createUser({user: "MONGO_USER2", pwd: "MONGO_PASS2", roles: [{role: "dbOwner", db: "MONGO_DBNAME2_stat"}]});