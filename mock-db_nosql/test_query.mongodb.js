use("chrome-burger-db");

db.orders.aggregate([
    {
        $group: {
            _id: "$staff.staff_id",
            first_name: { $first: "$staff.first_name" },
            last_name: { $first: "$staff.last_name" },
        }
    },
    {
        $project: {
            _id: 0,
            name: { $concat: ["$first_name", " ", "$last_name"] }
        }
    }

])