/* メインメニュー開閉用 */
$(function(){
	$(".open_trg").click(function(){
		$(this).toggleClass("open");
		$("body").toggleClass("open");
	});
});
/* 汎用開閉用 */
$(function(){
	$(".ac_trg").click(function(){
		var value = $(this).parent(".ac_box");
		$(value).toggleClass("active");
	});
})

/*メニュースライダー*/
$(function() {
	$('#main_images .slider').slick({
        arrows: false,
		infinite: true,
		dots: true,
		speed: 800,
		autoplay: true,
		autoplaySpeed: 5000,
		slidesToScroll: 1,
        slidesToShow: 1,
		accessibility: false,
		focusOnSelect: true,
		centerMode: false,
		//レスポンシブでの動作を指定
        responsive: [{
          breakpoint: '893',//ブレイクポイントを指定
          settings: {
            slidesToScroll: 1,
          }
		},{
          breakpoint: '640',
          settings: {
            slidesToScroll: 1,
		}
        }]
	});
});
/*TOPPAGE スライダー*/
$(function() {
	$('#voting .slider').slick({
        arrows: true,
		prevArrow:'<span class="prev_arrow">Prev Menu</span>',
		nextArrow:'<span class="next_arrow">Next Menu</span>',
		infinite: true,
		dots: false,
		autoplay: false,
		slidesToScroll: 1,
        slidesToShow: 1,
		accessibility: false,
		focusOnSelect: true,
		centerMode: false,
	});
});
/*汎用 テキストオーバーフロウ*/
$(function(){
	$('.text.leader').each(function() {
		var $target = $(this);
		// オリジナルの文章を取得する
		var html = $target.html();
		// 対象の要素を、高さにautoを指定し非表示で複製する
		var $clone = $target.clone();
		$clone
		.css({
			display: 'none',
			position : 'absolute',
			 overflow : 'visible'
			})
			.width($target.width())
			.height('auto');
		// DOMを一旦追加
		$target.after($clone);
		// 指定した高さになるまで、1文字ずつ消去していく
		while((html.length > 0) && ($clone.height() > $target.height())) {
			html = html.substr(0, html.length - 1);
			$clone.html(html + '...');
		}
		// 文章を入れ替えて、複製した要素を削除する
		$target.html($clone.html());
		$clone.remove();
	});
});
