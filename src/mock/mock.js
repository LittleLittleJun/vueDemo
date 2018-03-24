import Mock from 'mockjs'
Mock.mock(/getNewsList/,{
	'list|5':[
		{
			src:getRImg(),
			url:"@url",//生成随机的url
			title:"@ctitle(5,20)"//生成随机的字符，5-20个
		},
		{
			src:getRImg(),
			url:"xxx2",
			title:"title12"
		}
	]
})
function getRImg() {//随机生成700*300的图片，随机图片背景色
	return Mock.Random.image('700*300',Mock.Random.hex())
}
Mock.mock(/getSlides/,[
		{
			src:getRImg().
			title:"@ctitle(4,10)",
			ky:1,
			tokey:'analysis'
		},
		{
			src:getRImg().
			title:"@ctitle(4,10)",
			ky:2,
			tokey:'publish'
		}
	])}
