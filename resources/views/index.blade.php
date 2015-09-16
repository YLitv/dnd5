<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>DnD HP</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="/css/application.css">


</head>

<body>

<nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">DnD HP</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <li class="active"><a href="#">Главная</a></li>
                <li><a class="btn_add" href="#add">Добавить пексонажа</a></li>
                <!-- <li><a class="btn_refresh" href="#refresh">Обнулить</a></li> -->
            </ul>
        </div><!--/.nav-collapse -->
    </div>
</nav>

<div class="container" id="add">
    <div class="row">
        <div class="col-md-2 col-xs-2">
            <button class="btn_back" type="button" class="btn btn-default" aria-label="Left Align"><span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span></button>
        </div>
        <br>
    </div>
    <div class="row">
        <div class="col-md-12">
            <form id="add_form">
                <div class="form-group">
                    <label>Имя</label>
                    <input type="text" class="name form-control">
                </div>
                <div class="form-group">
                    <label>Уровень</label>
                    <input type="number" class="level form-control" value="">
                </div>
                <div class="form-group">
                    <label>Максимум HP</label>
                    <input type="number" class="hp form-control" value="">
                </div>
                <div class="form-group">
                    <label>Максимум VP</label>
                    <input type="number" class="vp form-control" value="">
                </div>
                <button class="btn_submit" type="submit" class="btn btn-default">Добавить</button>
            </form>

        </div>
    </div>
</div>

<div class="container" id="dashboard">

    <div class="row">
        <div class="col-md-12">

            <table>
                <tr id="template_profile" style="display: none;">
                    <td class="selector">
                        <input type="checkbox" value="1">
                    </td>
                    <td class="name"></td>
                    <td>
                        <span class="hp"></span> / <span class="max_hp"></span> (<span class="t_max_hp"></span>)
                    </td>
                    <td>
                        <span class="vp"></span> (<span class="max_vp"></span>)
                    </td>
                </tr>
            </table>

            <table class="table">
                <thead>
                    <th></th>
                    <th>Имя</th>
                    <th>HP</th>
                    <th>VP</th>
                </thead>
                <tbody class="dashboard_table">



                </tbody>
            </table>
        </div>
    </div>

    <div class="row">
        <div class="col-md-4 col-xs-7">
            <input type="number" name="value" class="form-control" value="0">
        </div>

        <div class="col-md-4 col-xs-2">
            <button class="btn_damage" type="button" class="btn btn-default" aria-label="Left Align"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
        </div>
        <div class="col-md-4 col-xs-3">
            <button type="button" class="btn btn-default" aria-label="Left Align"><span class="glyphicon glyphicon-minus" aria-hidden="true"></span></button>
        </div>
    </div>

</div><!-- /.container -->


<!-- Bootstrap core JavaScript
================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
<script src="/js/application.js"></script>

</body>
</html>
