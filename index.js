$('main').append('<div class="caixa1"></div>');
$('<img src="/Desafio-6-Stats-preview-card-component/image-header-desktop.jpg"></img>').insertAfter('.caixa1');
$('.caixa1').append('<h1 class="titulo"><div class="infotitle">Get <p class="Insights">Insights</p> that help</div> your business grow.</h1>');
$('.titulo').after('<p class="informacao"> Discover the benefits of data analytics and make <br> better decisions regarding revenue, customer <br> experience,and overall efficiency.</p>');
$('.informacao').after('<ul class="lista"></ul>');

$('.lista').append('<li class="number1"></li>');
$('.number1').append('<div class="div1"></div>')
$('.div1').append('<p class="valor1">10K+</p>')
$('.valor1').append('<p class="text1">Compantes</p>')

$('.number1').after('<li class="number2"></li>');
$('.number2').append('<div class="div2"></div>')
$('.div2').append('<p class="valor2">314K+</p>')
$('.valor2').append('<p class="text2">Templates</p>')

$('.number2').after('<li class="number3"></li>');
$('.number3').append('<div class="div3"></div>')
$('.div3').append('<p class="valor3">12M+</p>')
$('.valor3').append('<p class="text3">Quertes</p>')
