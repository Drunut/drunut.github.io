<!doctype html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>Weather Home</title>
	<meta name="viewport" content="width=device-width">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<link rel="stylesheet" href="/jsonweather/css/weather-style.css" type="text/css" media="screen">
</head>
<!-- *********************************************
* Who Did You Collaborate With On This Assessment?
* 1. Your own name goes here
* 2.
* 3.
* 4.
* 5.
* ******************************************** -->
<body>
	<div id="wrapper">
		<header id="page-header">
			<?php include 'modules/header.php'; ?>
		</header>
		<nav id="page-nav">
			<?php include 'modules/navigation.php'; ?>
		</nav>
		<main id="page-main">
			<section class="weather-container">
				<div id="cover">
					<div id="status">Loading...</div>
				</div>
				<h1 id="cityDisplay"></h1>
				<h2>Current Conditions</h2>
				<ul id="current_conditions">
					<li id="currentTemp"></li>
					<li id="summary"></li>
					<li id="add1"></li>
					<li id="add2"></li>
					<li id="add3"></li>
				</ul>
			</section>
		</main>
		<footer id="page-footer">
			<?php include 'modules/footer.php'; ?>
			<small>Last updated: <?php echo date('j F, Y', getlastmod()); ?></small>
		</footer>
		<script src="/jsonweather/scripts/jquery-3.0.0.min.js"></script>
		<script src="/jsonweather/scripts/remote_wu.js"></script>
	</div>
</body>

</html>
