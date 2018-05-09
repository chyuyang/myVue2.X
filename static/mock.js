var Mock = require('mockjs')
var data = Mock.mock({
	msg:'mock数据'
})
Mock.mock('/getMock','get',function(opt){
	return 'get方法获取'+data.msg;
})
Mock.mock('/postMock','post',function(opt){
	return 'post方法获取'+data.msg;
})