const fs = require('fs')
const path = require('path')
const moment = require('moment')
const conn = require('../../config/pool')
const code = require('../../commons/code')


exports.test = async function (req, res, next) {
    try{
        res.send({ "code": 2000000, "msg": code['2000000'], data:{} })
    } catch(e) {
        console.log(e)
    }
}

