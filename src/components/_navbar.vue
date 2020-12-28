<template>
    <div class="hello">
    
    <!-- Start Header -->
    <header id="home">
        <nav class="navbar navbar-expand-lg  navbar-fixed-top" role="navigation">
            <div class="container">
                <!--start of the container -->
                <div class="navbar-header">
                    <!-- start header -->
        
            
                    <a class="navbar-brand" href="#">
                        <img src="../../public/data/img/skailogo.png" alt="Brand Skailab" class="skailogo">
                    </a>
                    
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#col0" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                
                </div> <!-- end header -->
                <!--
                    *! use collapse for responsive web site 
                    *? you have to use the collapse in the next time when you want to update this page .. for phone 
                    
                -->
                <div class="collapse navbar-collapse" id="col0">
                    <ul class="navbar-nav">
                        <li class="el-navbar"><a href="#home">HOME</a></li>
                        <li class="el-navbar"><a href="#projects">PROJECTS</a></li>
                        <li class="el-navbar"><a href="#goals">GOALS</a></li>
                        <li class="el-navbar"><a href="#team">TEAM</a></li>
                        <li class="el-navbar"><a href="#contact">CONTACT US</a></li>
                        <li class="dropdownxx el-navbar">
                            <a>
                                <select id="lang" name="lang" class="inputbox" size="1">
                                    <option value="EN" class="clang">En</option>
                                    <option value="AR" class="clang">Ar</option>
                                    <option value="FR" class="clang">Fr</option>
                                    <option value="DU" class="clang">Du</option>
                                    <option value="SP" class="clang">Sp</option>
                                </select>
                            </a>
                        </li>
                
                    </ul>
                </div>
            </div><!-- end of the container -->
        </nav>
        <!-- End The nav bar -->

        <!-- The Background -->
        <section class="background">
            <div class="bigimg">
                <img class="bigbrand" src="../../public/data/img//Frame_1_brand.svg" alt="Backgound Image" width="430px"
                    height="auto">
                <header class="intro-brand">
                    Artificial Intelligence Excellence Laboratory
                </header>
                <button type="button" class="discoverBtn"> DISCOVER NOW </button>
            </div>
        </section>
    </header>
    <!-- End of the header-->
    <!-- End of the header-->

    
    
    </div>
</template>

<script>
export default {
    name: "navbar",


};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
