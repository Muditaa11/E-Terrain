const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const { ChartJSNodeCanvas } = require("chartjs-node-canvas");
const PDFDocument = require("pdfkit");
const brain = require("brain.js");

const app = express();
const PORT = 3000;
const DB_FILE = "expenses.db";

// Middleware
app.use(bodyParser.json());
app.use(express.static("public"));

// Initialize database
const db = new sqlite3.Database(DB_FILE, (err) => {
    if (err) console.error("Database connection error:", err);
    db.run(`CREATE TABLE IF NOT EXISTS expenses (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        category TEXT,
        description TEXT,
        amount REAL,
        date TEXT
    )`);
});

// Home Route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "indes.html"));
});

// Add Expense
app.post("/add_expense", (req, res) => {
    const { category, description, amount, date } = req.body;
    db.run(
        "INSERT INTO expenses (category, description, amount, date) VALUES (?, ?, ?, ?)",
        [category, description, amount, date],
        (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: "Expense added successfully" });
        }
    );
});

// Get Expenses
app.get("/expenses", (req, res) => {
    db.all("SELECT * FROM expenses", [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// Delete Expense
app.delete("/delete_expense/:id", (req, res) => {
    db.run("DELETE FROM expenses WHERE id = ?", req.params.id, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Expense deleted successfully" });
    });
});

// Generate Expense Graph
app.get("/generate_graph", async (req, res) => {
    db.all("SELECT category, SUM(amount) AS total FROM expenses GROUP BY category", [], async (err, rows) => {
        if (err || rows.length === 0) return res.send("No expense data available to generate a graph.");
        
        const width = 600;
        const height = 400;
        const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height });
        
        const config = {
            type: "bar",
            data: {
                labels: rows.map(row => row.category),
                datasets: [{
                    label: "Total Expense",
                    data: rows.map(row => row.total),
                    backgroundColor: "skyblue",
                }]
            }
        };
        
        const imageBuffer = await chartJSNodeCanvas.renderToBuffer(config);
        fs.writeFileSync("public/expense_graph.png", imageBuffer);
        res.send('<img src="/expense_graph.png" alt="Expense Graph">');
    });
});

// AI Expense Insights
app.get("/expense_insights", (req, res) => {
    db.all("SELECT * FROM expenses", [], (err, rows) => {
        if (err || rows.length === 0) return res.json({ message: "No expense data available." });
        
        let totalExpense = rows.reduce((sum, row) => sum + row.amount, 0);
        let categoryTotals = {};
        rows.forEach(row => {
            categoryTotals[row.category] = (categoryTotals[row.category] || 0) + row.amount;
        });
        let topCategory = Object.keys(categoryTotals).reduce((a, b) => categoryTotals[a] > categoryTotals[b] ? a : b);
        
        let avgSpending = totalExpense / rows.length;
        let unusualExpenses = rows.filter(row => row.amount > avgSpending * 2);
        
        res.json({
            totalExpense,
            topCategory,
            avgSpending,
            unusualExpenses
        });
    });
});

// Generate PDF Report
app.get("/generate_report", (req, res) => {
    db.all("SELECT * FROM expenses", [], (err, rows) => {
        if (err || rows.length === 0) return res.send("No expenses to generate report.");
        
        const doc = new PDFDocument();
        const filePath = "public/expense_report.pdf";
        doc.pipe(fs.createWriteStream(filePath));
        doc.fontSize(16).text("Expense Report", { align: "center" });
        doc.moveDown();
        rows.forEach(row => {
            doc.fontSize(12).text(`${row.date} - ${row.category} - ₹${row.amount} (${row.description})`);
        });
        doc.end();
        res.download(filePath);
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});