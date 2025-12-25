import pool from '../db.js';

export const getStudent = async (_req, res) => {
    try {
        const result = await pool.query("SELECT id, name, skill FROM student");
        res.json(result.rows)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export const getStudentId = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await pool.query("SELECT name, skill FROM student WHERE id = $1",
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({message: "Student not found"})
        }

        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const createStudent = async (req, res) => {
    try {
        const {name, skill} = req.body;
        const result = await pool.query("INSERT INTO student (name, skill) VALUES ($1, $2) RETURNING *",
            [name, skill]
        );

        res.status(201).json({
            message: "Student created successfully",
            data: result.rows[0]
        })
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const updateStudent = async (req, res) => {
    try {
        const {id} = req.params
        const {name, skill} = req.body;
        const result = await pool.query("UPDATE student SET name = $1, skill = $2 WHERE id = $3 RETURNING *",
            [name, skill, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({message: "Student not found"});
        };
        
        res.json({
            message: "Student updated successfully",
            data: result.rows[0]
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const deleteStudent = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await pool.query("DELETE FROM student WHERE id = $1 RETURNING *",
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({message: "Student not found"})
        };

        res.status(200).json({
            message: "Data deleted successfully",
            data: result.rows[0]
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}