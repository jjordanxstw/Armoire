const supabase = require("../config/db");

// @desc    Get all cloth items
// @route   GET /api/v1/clothes
// @access  Public
exports.getClothes = async (req, res, next) => {
	try {
		const { data, error } = await supabase.from("clothes").select("*");

		if (error) {
			console.error("Fetch clothes error:", error.message);
			return res.status(400).json({
				success: false,
				message: "Failed to fetch clothes",
				error: error.message,
			});
		}

		const { count, error: countError } = await supabase
			.from("clothes")
			.select("*", { count: "exact", head: true });

		if (countError) {
			console.warn("Count error:", countError.message);
		}

		res.status(200).json({
			success: true,
			count: count || data.length,
			data,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "Server Error",
			error: err.message,
		});
	}
};

// @desc    Get single cloth item
// @route   GET /api/v1/clothes/:id
// @access  Public
exports.getCloth = async (req, res, next) => {
	try {
		const { id } = req.params;

		if (!id) {
			return res.status(400).json({
				success: false,
				message: "Missing clothing item ID",
			});
		}

		const { data, error } = await supabase
			.from("clothes")
			.select("*")
			.eq("id", id)
			.single();

		if (error) {
			console.error("Fetch clothing item error:", error.message);
			return res.status(400).json({
				success: false,
				message: "Failed to fetch clothing item",
				error: error.message,
			});
		}

		res.status(200).json({
			success: true,
			data,
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			message: "Server Error",
			error: err.message,
		});
	}
};

// @desc    Create new cloth item
// @route   POST /api/v1/clothes
// @access  Private
exports.createCloth = async (req, res, next) => {
	try {
		const { data, error } = await supabase
			.from("clothes")
			.insert([req.body])
			.select();

		if (error) {
			console.error("Insert error:", error.message);
			return res
				.status(400)
				.json({ success: false, message: error.message });
		}

		const { count, error: countError } = await supabase
			.from("clothes")
			.select("*", { count: "exact", head: true });

		if (countError) {
			console.error("Count error:", countError.message);
		}

		res.status(201).json({ success: true, count, data });
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "Server Error",
			error: err.message,
		});
	}
};

// @desc    Update cloth item
// @route   PUT /api/v1/clothes/:id
// @access  Private
exports.updateCloth = async (req, res, next) => {
	try {
		const { id } = req.params;
		const updates = req.body;

		const { data, error } = await supabase
			.from("clothes")
			.update(updates)
			.eq("id", id)
			.single()
			.select();

		if (error) {
			return res.status(400).json({
				success: false,
				message: "Failed to update cloth item",
				error: error.message,
			});
		}

		res.status(200).json({
			success: true,
			message: `Cloth item ${id} updated`,
			data,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			message: "Server Error",
			error: err.message,
		});
	}
};

// @desc    Delete cloth item
// @route   DELETE /api/v1/clothes/:id
// @access  Private
exports.deleteCloth = async (req, res, next) => {
	try {
		const { id } = req.params;

		const { data, error } = await supabase
			.from("clothes")
			.delete()
			.eq("id", id)
			.single()
               .select();

		if (error) {
			return res.status(400).json({
				success: false,
				message: "Failed to delete cloth item",
				error: error.message,
			});
		}

		res.status(200).json({
			success: true,
			message: `Cloth item ${id} deleted`,
			data,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			message: "Server Error",
			error: err.message,
		});
	}
};
