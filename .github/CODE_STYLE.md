# SCDesktop: example by code style

## Example
<details>
	<summary>Click to see a basic html example</summary>

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8"/>
	...
	<!-- No need to write css rules in html file,
	better write in css file.
	-->
	<style>
		.green {
			color: #000;
		}

		p {
			color: blue;
		}
	</style>
</head>
<body>
	<header id="logotype" class="logo">
		<div class="container">
			...
			<img class="brand" type="image/png" width="100" height="100" src="../assets/img/logo.png" alt="Logotype"/>
		</div>
	</header>
	<main>
		<section>
			<p style="color: rgb(255, 0, 0);">
				Color: red
			</p>
			<!--===-->
			<p class="green">
				Color: green
			</p>
			<!--===-->
			<p>
				Color: blue
			</p>
		</section>
	</main>
	...
	<script type="text/javascript">
		alert("Text"); // Do not forget to end the line with a comma.
		...
	</script>
</body>
</html>
```
</details>