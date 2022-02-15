var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var router = express.Router();
var moment = require('moment');
var models = require('../models');
var id = models.tbl_id;




//readall method call
router.get('/details', function(req, res) {
             id.findAll({where:{}}).then(function(results) {
                if (results) {
                    res.json({ success: true, message: "product details are fetched" });
                } else {
                    res.json({ success: false, message: "product details are not fetched" });
                }
            }).catch(function(err) {
                console.log(err)
                res.json({ success: false, message: "product details are not fetched" });
            });
    
    })


//insert method call
router.post('/create', jsonParser, function(req, res) {
    console.log(req.body)
    id.create(req.body).then(function(results) {
        if (results) {
            res.json({ success: true, message: "product Inserted" });
        } else {
            res.json({ success: false, message: "product not Inserted" });
        }
    }).catch(function(err) {
        console.log(err)
        res.json({ success: false, message: "product not Inserted" });
    });

        
    
})
//update method call
router.put('/update/:user_id', jsonParser, function(req, res) {
    id.update(req.body,{where:{user_id :req.params.user_id}}).then(function(results) {
        if (results) {
            res.json({ success: true, message: "product updated" });
        } else {
            res.json({ success: false, message: "product is not updated" });
        }
    }).catch(function(err) {
        console.log(err)
        res.json({ success: false, message: "product is not updated" });
    });
    
    })

//detete method call
router.delete('/delete/:user_id', jsonParser, function(req, res) {
    
        id.destroy({ where: {
           user_id: req.params.user_id }
          }).then(function(results) {
        if (results) {
            res.json({ success: true, message: "product deleted" });
        } else {
            res.json({ success: false, message: "product is not deleted" });
        }
    }).catch(function(err) {
        console.log(err)
        res.json({ success: false, message: "product is not deleted" });
    });
   
})


module.exports = router;