  <?php 
// 收集数据
$email = $_POST['email'];
$pwd = $_POST['pwd'];

// 连接数据库进行数据查询
include_once '../../common/mysql.php';
$conn = connect();
$sql = "select * from users where email='$email' and password = '$pwd' and status='activated'";
$arr = query($conn,$sql);

// 构建查询成功或失败的返回值
$res = array('code'=>0,'msg'=>'查询用户失败');
if($arr){
	$res['code']=1;
	$res['msg']="查询用户成功";

	session_start();
	$_SESSION['userInfo'] = $arr[0];
}


echo json_encode($res);

 ?>