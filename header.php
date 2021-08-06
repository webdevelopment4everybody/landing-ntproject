
<!DOCTYPE html>

<html <?php language_attributes(); ?>>

<head>

    <meta charset="<?php bloginfo('charset'); ?>">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <?php wp_head();?>

    <title><?php echo get_bloginfo( 'name' ) . ' - '. get_bloginfo( 'description' ); ?></title>

</head>

<body <?php body_class();?>>

    <header class="header">
        <nav>
            <div id="burger-menu-icon" class="burger-menu"><span></span></div>
            <div class="logo">
                <a href="#hero">NTPROJECT</a>
            </div>
            <div id="links" class="nav-links">
                <a href="#hero">Pradžia</a>
                <a href="#offers">Pasiūlymai</a>
                <a href="#news">Naujienos</a>
                <a href="#contacts">Kontaktai</a>
            </div>
        </nav>
    </header>