<?php 

// 收集数据
$id = $_POST['id'];

// 连接数据库
include_once '../../common/mysql.php';
$conn = connect();

// 构建sql语句
$sql = "delete from categories where id = $id";
$bool = mysqli_query($conn,$sql);

$res = array('code'=>0,'msg'=>'删除分类数据失败');

if($bool){
	$res['code'] = 1;
	$res['msg'] = '删除分类数据成功';
}

echo json_encode($res)

?>