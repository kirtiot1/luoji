<?php
header( 'content-type=text/html;charset=utf8' );
//连接数据库
$link = mysqli_connect( 'localhost', 'root', '', 'abb' );
//获取传入的参数
$n = $_GET['zhanghao1'];
$a = $_GET['mima1'];
//设置数据库编码
mysqli_set_charset( $link, 'utf8' );
//sql语句
$sql = "insert into zhanghao(shoujihao,mima) values('$n','$a')";
//执行sql，返回结果集
$result = mysqli_query( $link, $sql );

if ( !$result ) {
    echo"
    <script>
    alert('注册失败(当前账号已存在)');
    location.href='../index/zhuce.html'
    </script>";
} else {
    echo"
    <script>
    alert('注册成功');
    location.href='../index/denglu.html'
    </script>";
}
//关闭数据库链接
mysqli_close( $link );
?>