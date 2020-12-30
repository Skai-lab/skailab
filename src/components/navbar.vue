


<template>
    <div class="hello">
    
    <!-- Start Header -->
    <header id="home">

        <nav class="navbar navbar-expand-lg navbar-fixed-top ">
            
            <a class="navbar-brand" href="#">
                <img src="../../public/data/img/skailogo.png" alt="Brand Skailab" class="skailogo">
            </a>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#col" aria-controls="mycollapse" aria-expanded="false" aria-label="Toggle navigation">
                <!--
                    <span class="navbar-toggler-icon"></span>
                -->
                <span></span>
                <span></span>
                <span></span>

            </button>
            
            

            <div class="collapse navbar-collapse" id="col">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="#home">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#projects">projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#goals">goals</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#team">team</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact" style="white-space: nowrap; margin-right :-6px">contact us</a>
                    </li>
                    <li class=" nav-item ">
                        <a class="nav-link">
                            <select id="lang" name="lang" class="inputbox" size="1">
                                <option value="EN" class="clang">En</option>
                                <option value="AR" class="clang">Ar</option>
                            </select>
                        </a>
                    </li>

                </ul>
            </div>
            
        </nav>

        
        <!-- The Background -->
        <section class="background">
            <div class="bigimg">
                
                <img class="bigbrand" src="../../public/data/img//Frame_1_brand.svg" alt="Backgound Image" height="auto">

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
    name: "navbar"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
