"use strict";function ORM(t){var e,o,n,a={};e={tableName:"books",pages:function(){return this.hasMany(o)},authors:function(){return this.belongsToMany(n)}},o={tableName:"pages",book:function(){return this.belongsTo(e)}},n={tableName:"authors",books:function(){return this.belongsToMany(e)}};var r,s;r={tableName:"fjtx_hospital"},s={tableName:"fjtx_doctor"};var u=t.Model.extend(e);a.Book=u;var i=t.Model.extend(r);return a.Hospital=i,a}ORM.initialize=function(t){return new ORM(t)},exports["default"]=ORM,module.exports=exports["default"];