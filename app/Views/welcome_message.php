
<?= $this->extend("templates/main_template"); ?>

<?= $this->section("busca"); ?>

<section id="main" class='position-relative'>
	<div class="container">
		<div class="col-md-12 text-center">
			<form method="post">
				<div class="mb-3">
					<label for="city" class="form-label">Digite uma cidade</label>
					<input type="text" class="form-control" id="city" placeholder="Cidade" required>					
				</div>
				
				<input type="submit" class="btn btn-primary" onclick="funcaoTeste()" value="Pesquisar">
			</form>
		</div>
	</div>
</section>

<?= $this->endSection(); ?>	

<?= $this->section("card"); ?>
	<div class="container">
		<div class="row justify-content-center">
			<div class="">
				<div class="card" style="width: 18rem;">
					<img src="assets/img/morning.png" class="card-img-top" alt="...">
					<div class="card-body">
						<h5 class="card-title">Lavras</h5>
						<p class="card-text">18°C</p>
					</div>
					<ul class="list-group list-group-flush">
						<li class="list-group-item">An item</li>
						<li class="list-group-item">A second item</li>
						<li class="list-group-item">A third item</li>
					</ul>
				</div>
			</div>
			

		</div>
	</div>
<?= $this->endSection(); ?>