'use strict';

var createError = require('create-error');
var TypedError = require("error/typed");
var WrappedError = require('error/wrapped');

var EtcdError = WrappedError({
        message: 'server: {causeMessage}{host}:{port}',
        type: 'etcd.500',
        port: null,
        host: null
});
var QueryError = WrappedError({
        message: 'query: {causeMessage}',
        type: 'qeury.500',
        statusCode:null
});
    
module.exports = {
	NotFoundError: createError('NotFoundError'),
	EmptyError: createError('EmptyError'),
	NoRowsUpdatedError: createError('NoRowsUpdatedError'),
  
	EtcdUnavailableError: function(host,port){
		var err = new Error('注册中心无法连接!');
		err.statusCode = '500';
		var err2 = EtcdError(err, {
			port: port,
			host: host
		});
		return err2;
	},
	ServerError:TypedError({
		type: 'server.5xx',
		message: '{title} server error, status={statusCode}',
		title: null,
		statusCode: null
	}),
	QueryInvalideParams: function(code,msg){
		var err = new Error(msg);
		err.code = 'InvalidParams';
		var err2 = QueryError(err,{statusCode:code});
		return err2;
	}
};
