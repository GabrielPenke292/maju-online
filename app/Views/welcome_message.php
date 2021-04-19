
<?= $this->extend("templates/main_template"); ?>

<?= $this->section("main"); ?>

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