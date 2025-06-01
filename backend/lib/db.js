// ./lib/db.js
import mongoose from "mongoose";


// Load environment variables

export const connectDB = async () => {
	try {
		// Optional: log to check if MONGO_URL is being read
		console.log("Mongo URI:", process.env.MONGO_URL);

		if (!process.env.MONGO_URL) {
			throw new Error("MONGO_URL is not defined in the .env file");
		}

		const conn = await mongoose.connect(process.env.MONGO_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log(`✅ MongoDB connected: ${conn.connection.host}`);
	} catch (error) {
		console.error("❌ Error connecting to MongoDB:", error.message);
		process.exit(1); // Exit the app if DB connection fails
	}
};
