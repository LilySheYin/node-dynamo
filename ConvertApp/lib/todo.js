'use strict'
const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB();
var uuid = require('uuid');

var awsregion=process.env.AWS_REGION;
AWS.config.update({region:awsregion});

module.exports = function TodoApp() {
    return {
        list: (callback) => {
          const done = (err, res) => callback(null, {
            statusCode: err ? '400' : '200',
            body: err ? err.message : res,
            headers: {
              'Content-Type': 'application/json',
            },
          });
          var tableName=process.env.DB_TABLENAME;
          dynamo.scan({ TableName: tableName }, function (err,res) {
            if (err){
              console.log('Error Getting Items from Database:',JSON.stringify(err));
            }
            else{
              if(res.Items.length >0){
                var new_res=[];
                res.Items.forEach(function(obj) {
                  var temp={};
                  temp.id=obj.id.S;
                  temp.text=obj.text.S;
                  new_res.push(temp);
                });
                res=new_res;
              }
              else{
                res={};
              }
            }
            done(err,res);
          });

        },
        add: (post, callback) => {
          const done = (err, res) => callback(null, {
            statusCode: err ? '400' : '200',
            body: err ? err.message : res,
            headers: {
              'Content-Type': 'application/json',
            },
          });
          var tableName=process.env.DB_TABLENAME;
          var params = {};
          params.TableName=tableName;
          params.Item={};
          params.Item.id={S:uuid.v4()};
          params.Item.text={S:post.text};
          console.log(JSON.stringify(params));
          dynamo.putItem(params,function (err,res) {
            if (err){
              console.log('Error Adding Item in Database:',JSON.stringify(err));
            }
            done(err,res);
          });
        },
        delete: (post, callback) => {
          const done = (err, res) => callback(null, {
            statusCode: err ? '400' : '200',
            body: err ? err.message : res,
            headers: {
              'Content-Type': 'application/json',
            },
          });
          var tableName=process.env.DB_TABLENAME;
          var params = {};
          params.TableName=tableName;
          params.Key={};
          params.Key.id={S:post._id};
          console.log(post);
          dynamo.deleteItem(params, function (err,res) {
            if (err){
              console.log('Error Deleting Item from Database:',JSON.stringify(err));
            }
            done(err,res);
          });
        },
    };
}
