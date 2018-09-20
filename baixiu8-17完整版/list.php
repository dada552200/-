<?php 

$categoryId = $_GET['categoryId'];

include_once './common/mysql.php';
$conn = connect();

$list_sql = "select p.id,p.title,p.feature,p.content,p.created,p.views,p.likes,c.name,u.nickname,
        (select count(*) from comments where post_id =p.id) as commentsCount
        from posts as p
        left join categories as c on p.category_id = c.id
        left join users as u on p.user_id = u.id
        where p.category_id = {$categoryId}
        limit 10";
// die($list_sql);
$list_arr = query($conn,$list_sql);

// print_r($list_arr);
 
?>

<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>阿里百秀-发现生活，发现美!</title>
  <link rel="stylesheet" href="static/assets/css/style.css">
  <link rel="stylesheet" href="static/assets/vendors/font-awesome/css/font-awesome.css">
</head>
<body>
  <div class="wrapper">
    <div class="topnav">
      <ul>
        <li><a href="javascript:;"><i class="fa fa-glass"></i>奇趣事</a></li>
        <li><a href="javascript:;"><i class="fa fa-phone"></i>潮科技</a></li>
        <li><a href="javascript:;"><i class="fa fa-fire"></i>会生活</a></li>
        <li><a href="javascript:;"><i class="fa fa-gift"></i>美奇迹</a></li>
      </ul>
    </div>
    <?php include_once './common/aside.php' ?>
    <div class="content">
      <div class="panel new">
        <h3><?=$list_arr[3]['name'] ?></h3>
        <?php foreach($list_arr as $value): ?>
        <div class="entry">
          <div class="head">
            <span class="sort"><?=$value['name'] ?></span>
            <a href="detail.php?postId=<?=$value['id'] ?>"><?=$value['title'] ?></a>
          </div>
          <div class="main">
            <p class="info"><?=$value['nickname'] ?> 发表于 <?=$value['created'] ?></p>
            <p class="brief"><?=$value['content'] ?></p>
            <p class="extra">
              <span class="reading">阅读(<?=$value['views'] ?>)</span>
              <span class="comment">评论(<?=$value['commentsCount'] ?>)</span>
              <a href="javascript:;" class="like">
                <i class="fa fa-thumbs-up"></i>
                <span>赞(<?=$value['likes'] ?>)</span>
              </a>
              <a href="javascript:;" class="tags">
                分类：<span><?=$value['name']?></span>
              </a>
            </p>
            <a href="javascript:;" class="thumb">
              <img src="<?=$value['feature'] ?>" alt="">
            </a>
          </div>
        </div>
        <?php endforeach; ?>

        <div class="loadmore"><span class="btn">加载更多</span></div>

      </div>
    <div class="footer">
      <p>© 2016 XIU主题演示 本站主题由 themebetter 提供</p>
    </div>
  </div>
  <script src="static/assets/vendors/jquery/jquery.js"></script>
  <script src="static/assets/vendors/art-template/template-web.js"></script>
  <script type="text/template" id="listTpl">
    {{each data}}
      <div class="entry">
          <div class="head">
            <span class="sort">{{$value.name}}</span>
            <a href="detail.php?postId={{$value.id}}">{{$value.title}}</a>
          </div>
          <div class="main">
            <p class="info">{{$value.nickname}} 发表于 {{$value.created}}</p>
            <p class="brief">{{$value.content}}</p>
            <p class="extra">
              <span class="reading">阅读({{$value.views}})</span>
              <span class="comment">评论({{$value.commentsCount}})</span>
              <a href="javascript:;" class="like">
                <i class="fa fa-thumbs-up"></i>
                <span>赞({{$value.likes}})</span>
              </a>
              <a href="javascript:;" class="tags">
                分类：<span>{{$value.name}}</span>
              </a>
            </p>
            <a href="javascript:;" class="thumb">
              <img src="{{$value.feature}}" alt="">
            </a>
          </div>
      </div>
    {{/each}}
  </script>
  <script>
      //分类ID
      var categoryId = location.search.split('=')[1];
      var currentPage = 1;
      var pageSize = 10;
      // alert(categoryId);
      $('.btn').on('click',function(){
           
          $.ajax({
              type:'post',
              url:'./api/getMorePost.php',
              data:{
                "categoryId":categoryId,
                "currentPage":++currentPage,
                "pageSize":pageSize
              },
              dataType:'json',
              success:function(res){
                 var html = template('listTpl',res);
                 $(html).insertBefore('.loadmore');

                 var maxPage = Math.ceil(res.count/pageSize);
                 if(currentPage == maxPage){
                    $('.loadmore .btn').hide();
                 }
              }
          })
      })
  </script>
</body>
</html>