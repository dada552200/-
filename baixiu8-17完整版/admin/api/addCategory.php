<?php 

// 收集数据
$name = $_POST['name'];
$slug = $_POST['slug'];
$classname = $_POST['classname'];

// 连接数据库
include_once '../../common/mysql.php';
$conn  = connect();

// 查询是否有同名的分类信息
$count_sql = "select count(*) as count from categories where name = '$name'";
$arr_count = query($conn,$count_sql);


$res = array('code'=>0,'msg'=>'插入分类信息失败');
if($arr_count[0]['count']>0){
    $res['msg']='输入的分类信息有重名';
}else{
   
    $sql = "insert into categories values(null,'$slug','$name','$classname')";
    $bool = mysqli_query($conn,$sql);
    $addId =mysqli_insert_id($conn);

    if($bool){
    	$res['code']=1;
    	$res['msg']='插入分类信息成功';
    	$res['addId'] = $addId;
    }
}


echo json_encode($res);






 ?>