$(document).ready(function(){
			$("th").hover(function(){
				$(this).addClass()
			}, function(){
				$(this).removeClass()
			})
			$("th").click(function(){
				alert("Anda Mengklik Judul " + $(this).html()+ ", Terimakasih");
			})
			$("td").hover(function(){
				$(this).addClass()
			}, function(){
				$(this).removeClass()
			})
			$("td").click(function(){
				alert("Anda Memilih " + $(this).html()+ ", Terimakasih");
			})
		})