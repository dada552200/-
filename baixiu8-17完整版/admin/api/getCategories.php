<?php 

include_once '../../common/mysql.php';

// 连接数据库请求分类信息
$conn = connect();
$sql = "select * from categories";
$arr = query($conn,$sql);

$res = array('code'=>0,'msg'=>'请求分类信息失败');

if($arr){
	$res['code'] = 1;
	$res['msg'] = '请求分类信息成功';
    $res['data'] = $arr;
}

echo json_encode($res);

?>