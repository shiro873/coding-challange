const config = require('../config/config');
const db = require('../models');
require('dotenv').config();
const { pushData, getData, deleteData } = require('../services/db.service');

const User = db.user;
const SectorType = db.selectorType;
const SectorSubType = db.selectorSubTypes;

exports.insertSelectorData = async (req, res) => {
    try{
        const { sectors } = req.body;
        sectors?.map(async sector => {
            let sectorType = await SectorType.create({
                name: sector.name
            });
            sector.map(async sub => {
                let subType = await SectorSubType.create({
                    name: sub.name,
                    sectorTypeId: sectorType?.id
                });
            });
        });
        res.json('operation successful');
    }catch(e){
        console.log(e);
        res.status(500).json('operation failed');
    }
}

exports.getSelectorData = async (req, res) => {
    try{
        let sectors = await SectorType.findAll({
            include: [
              {
                all: true,
                nested: true
              },
            ],
          });
          res.json(sectors);
    }catch(e){
        console.log(e);
        res.status(500).json('operation failed');
    }
}

exports.insertUserData = async (req, res) => {
    try{
        let user = await User.create({
            name: req.body.name,
            categories: req.body.categories,
            agreedToTerms: req.body.agreedToTerms
        });
        res.json(user);
    }catch(e){
        console.log(e);
        res.status(500).json('operation failed');
    }
}

exports.getUserData = async (req, res) => {
    try{
        let user = await User.findOne({
            where: {
                name: req.query.name
            }
        });
        res.json(user);
    }catch(e){
        console.log(e);
        res.status(500).json('operation failed');
    }
}