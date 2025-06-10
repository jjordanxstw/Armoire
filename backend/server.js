const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//Load env variables
dotenv.config({ path: "./config/config.env" });

//Connect to database
connectDB();

//Route files
const clothes = require("./routes/clothes");

const app = express();

//Body parser
app.use(express.json());

app.use('/api/v1/clothes', clothes);

const PORT = process.env.PORT || 5000;

// // Example route: fetch all clothing items
// app.get("/clothes", async (req, res) => {
// 	const { data, error } = await supabase.from("clothing_items").select("*");

// 	if (error) return res.status(500).json({ error: error.message });

// 	res.status(200).json(data);
// });

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

app.listen(PORT, () =>
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
	)
);
