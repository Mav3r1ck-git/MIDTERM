const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('database_name', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'active'
    }
});

const express = require('express');
const app = express();

app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});


sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch(err => console.error('Database connection error:', err));
