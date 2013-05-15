/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var loadingImage = 'C:\Users\vinicius\Documents\NetBeansProjects\projetos\Sites\Lightbox\images\loading.gif';
	jQuery(document).ready(function () {

		//Set the lightbox position in the center of screen
		jQuery('.lightbox').css({
			position: 'absolute',
			top:'30%',
			left:'50%',
			margin:'-'+(jQuery('.lightbox').height() / 2)+'px 0 0 -'+(jQuery('.lightbox').width() / 2)+'px'
		});

		//Show the lightbox with background if the link is clicked
		jQuery('a.open').click(function(e) {
                    
			e.preventDefault();
			jQuery('.lightbox').fadeIn(800);
			jQuery('.overlay').fadeIn(800);
		});

		//Hide the lightbox and background if the close link or overlay div is clicked
		jQuery('a.close, .overlay').click(function(e) {
			e.preventDefault();
			jQuery('.lightbox').fadeOut(800);
			jQuery('.overlay').fadeOut(800);
		});
	
	});