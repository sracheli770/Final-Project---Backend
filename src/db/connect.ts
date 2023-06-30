import mongoose from "mongoose";
import dbConfig from "./config/db.config.js";
import { Role } from "./models/roleModel.js";

const { HOST, PORT, DB, ROLES } = dbConfig

const connect = async () => {
    await mongoose.connect(`mongodb://${HOST}:${PORT}/${DB}`)
    console.log(`Successfully connected to the database ${DB}`);
    mongoose.set("strictQuery", false)
    initDB()
}

const initDB = async () => {
    try {
        const count = await Role.estimatedDocumentCount()
        if (count === 0) {
            const roles = ROLES.map((r) => new Role({ name: r }))

            for (let role of roles) {
                await role.save();
                console.log(`Added ${role.name} to Roles collection`);
            }
        }
    }

    catch (e) {
        console.log(`Failed with error: ${e}`);
    }
}

export { connect }