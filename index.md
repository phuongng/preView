
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/style.css">
    <link rel="stylesheet" href="/searchbar.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap" rel="stylesheet" crossorigin="anonymous">
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
    <title>preView </title>
</head>

<body>
    <!--Search Bar-->
    <nav class="top-menu">
        <ul>
            <li> <i class="fa-regular fa-search"></i> <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search ..."> </li>
            <li>
                <a href="Watchlist.html"> <i class="far fa-bookmark"></i> Watchlist</a>
            </li>
            <li><a href="Sign In.html"> Sign In</a></li>
            <!--Search Bar <script src="./app.js"></script> -->
        </ul>
    </nav>
    <!--end Search Bar-->
    <div class="square"></div>
    <section class="homepage">

        <nav>
            <h1 class="sliding-text">Precede offical opening <br> to your favorite movie </h1>
            <ul>
                <li>
                    <a href="/Menu Bar/Movies.html"> Movies</a>
                    <a href="/Menu Bar/Series Movie.html"> Series Movie </a>
                    <a href="/Menu Bar/Cartoon.html"> Cartoon</a>
                    <a href="/Menu Bar/TV Shows.html"> TV Shows</a>
                    <a href="/Menu Bar/Cinemas.html"> Cinemas</a>
                </li>
            </ul>
        </nav>
        <h1 class="logo"> preView </h1>
    </section>

    <section class="first-page">
        <div class="intro">
            <h2>Movie & TV Trailers</h2>
            <ul>
                <li>Trending Trailer</li>
                <li>Most Anticipated</li>
                <li>Most Popular</li>
                <li>Recently Added</li>
            </ul>
        </div>
        <img src="./image/leaf.jpg" alt="">
    </section>

    <section class="first-page">
        <img src="./image/green.jpg" alt="">
        <div class="intro">
            <h2>Top 10 Movies</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
    </section>


</body>

<footer class="footer">
    <div class="container">
        <div class="row">
            <div class="col-md-5">
                <h5><i class="fa fa-road"></i>
                    <script src="./app.js"></script> &copy; <em id="date"></em> preView
                </h5>
                <div class="row">
                    <div class="col-6">
                        <ul class="list-unstyled">
                            <li><a href="">Help</a></li>
                            <li><a href="">Condition of Use</a></li>
                            <li><a href="">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div class="col-6">
                        <ul class="list-unstyled">
                            <li><a href="">Documentation</a></li>
                            <li><a href="">Support</a></li>
                            <li><a href="">Legal Terms</a></li>
                            <li><a href="">About</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-2">
                <h5 class="text-md-right">Contact Us</h5>
                <hr>
            </div>
            <div class="col-md-5">
                <form>
                    <fieldset class="form-group">
                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
                    </fieldset>
                    <fieldset class="form-group">
                        <textarea class="form-control" id="exampleMessage" placeholder="Message"></textarea>
                    </fieldset>
                    <fieldset class="form-group text-xs-right">
                        <button type="button" class="btn btn-secondary-outline btn-lg">Send</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</footer>



</html>