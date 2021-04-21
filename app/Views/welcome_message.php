
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
				<input type="submit" class="btn btn-primary" onclick="funcaoTeste()" value="Pesquisar" >
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
						<h5 class="card-title" id="cityName">Lavras</h5>
						<p class="card-text" id="temperatura">18°C</p>
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

    <!-- Modal -->
    <div class="modal fade" id="chooseCity" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Escolha a cidade</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" >
                    <table class="table">
                        <thead>
                            <tr class="table-primary">
                                <th hidden>Id</th>
                                <th>Cidade</th>
                                <th>Estado</th>
                                <th>País</th>
                                <th>Selecionar</th>
                            </tr>
                        </thead>
                        <tbody id="cities">

                        </tbody>

                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                </div>
            </div>
        </div>
    </div>


<?= $this->endSection(); ?>


