<template>
    <div>
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">

                <a class="navbar-brand" href="#"><b>Trabi</b></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <ul class="navbar-nav">
                    <li class="nav-item">
                        <div class="input-group">
                            <input class="form-control" type="search" placeholder="Pesquisar" aria-label="Search">
                            <span class="input-group-append">
                                <button class="btn btn-outline-success" type="button">
                                    <i class="fa fa-search"></i>
                                </button>
                            </span>
                        </div>
                    </li>
                </ul>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Entrar <span class="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>

            </nav>
        </header>
        <div class="container">

            <div class="row">
                <div class="col-12">
                    <hr>
                </div>
            </div>

            <div class="row">
                <div class="col-4">
                    <img src="http://via.placeholder.com/600x400" alt="" class="img-fluid img-thumbnail">
                    <div class="row">
                        <div class="col-12">
                            <span class="span-bold">Eletricista</span>
                        </div>
                        <div class="col-12">
                            <span>Sou eletricista do morro alto.</span  >
                        </div>
                        <div class="col-12">
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                    </div>
                    
                </div>
                <div class="col-4">
                    <img src="http://via.placeholder.com/600x400" alt="" class="img-fluid img-thumbnail">
                </div>
                <div class="col-4">
                    <img src="http://via.placeholder.com/600x400" alt="" class="img-fluid img-thumbnail">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style>

.span-bold{
    font-weight: bold;
}

</style>    
