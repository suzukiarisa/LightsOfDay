// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery-ui/widgets/autocomplete
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .

$(function(){
  $fileField = $('#file')

  // 選択された画像を取得し表示
  $($fileField).on('change', $fileField, function(e) {
    file = e.target.files[0]
    reader = new FileReader(),
    $preview = $("#img_field");

    reader.onload = (function(file) {
      return function(e) {
        $preview.empty();
        $preview.append($('<img>').attr({
          src: e.target.result,
          width: "100%",
          class: "preview",
          title: file.name
        }));
      };
    })(file);
    reader.readAsDataURL(file);
  });
});


//  $(function() {
//   $('#check_all').on('click', function() {
//     $('.check').prop('checked', this.checked);
//   });

//   $('.check').on('click', function() {
//     if ($('#favorite-checkbox :checked').length == $('#favorite-checkbox :input').length){
//       $('#check_all').prop('checked', 'checked');
//     }else{
//       $('#check_all').prop('checked', false);
//     }
//   });
// });

//  $(document).on('turbolinks:load', function(){
//   var dropzone = $('.dropzone-area');
//   var dropzone2 = $('.dropzone-area2');
//   var dropzone_box = $('.dropzone-box');
//   var images = [];
//   var inputs  =[];
//   var input_area = $('.input_area');
//   var preview = $('#preview');
//   var preview2 = $('#preview2');

//   $('.slider').slick({
//     autoplay:true,
//     autoplaySpeed:5000,
//     dots:true,
//   });

//   $(document).on('change', 'input[type= "file"].upload-image',function(event) {
//     var file = $(this).prop('files')[0];
//     var reader = new FileReader();
//     inputs.push($(this));
//     var img = $('<div class= "img_view"><img class="post-img"></div>');
//     reader.onload = function(e) {
//       var btn_wrapper = $('<div class="btn_wrapper"><div class="btn delete">削除</div></div>');
//       img.append(btn_wrapper);
//       img.find('img').attr({
//         src: e.target.result
//       })
//     }
//     reader.readAsDataURL(file);
//     images.push(img);

//     if(images.length >= 5) {
//       dropzone2.css({
//         'display': 'block'
//       })
//       dropzone.css({
//         'display': 'none'
//       })
//       $.each(images, function(index, image) {
//         image.attr('data-image', index);
//         preview2.append(image);
//         dropzone2.css({
//           'width': 'calc(100% - (135px * ${images.length - 5}))'
//         })
//       })
//       if(images.length == 9) {
//         dropzone2.find('p').replaceWith('<i class="fa fa-camera"></i>')
//       }
//     } else {
//         $('#preview').empty();
//         $.each(images, function(index, image) {
//           image.attr('data-image', index);
//           preview.append(image);
//         })
//         dropzone.css({
//           'width': 'calc(100% - (135px * ${images.length}))'
//         })
//       }
//       if(images.length == 4) {
//         dropzone.find('p').replaceWith('<i class="fa fa-camera"></i>')
//       }
//     if(images.length == 10) {
//       dropzone2.css({
//         'display': 'none'
//       })
//       return;
//     }
//     var new_image = $('<input multiple= "multiple" name="product_images[image][]" class="upload-image" data-image= ${images.length} type="file" id="upload-image">');
//     input_area.prepend(new_image);
//   });
//   $(document).on('click', '.delete', function() {
//     var target_image = $(this).parent().parent();
//     $.each(inputs, function(index, input){
//       if ($(this).data('image') == target_image.data('image')){
//         $(this).remove();
//         target_image.remove();
//         var num = $(this).data('image');
//         images.splice(num, 1);
//         inputs.splice(num, 1);
//         if(inputs.length == 0) {
//           $('input[type= "file"].upload-image').attr({
//             'data-image': 0
//           })
//         }
//       }
//     })
//     $('input[type= "file"].upload-image:first').attr({
//       'data-image': inputs.length
//     })
//     $.each(inputs, function(index, input) {
//       var input = $(this)
//       input.attr({
//         'data-image': index
//       })
//       $('input[type= "file"].upload-image:first').after(input)
//     })
//     if (images.length >= 5) {
//       dropzone2.css({
//         'display': 'block'
//       })
//       $.each(images, function(index, image) {
//         image.attr('data-image', index);
//         preview2.append(image);
//       })
//       dropzone2.css({
//         'width': 'calc(100% - (135px * ${images.length - 5}))'
//       })
//       if(images.length == 9) {
//         dropzone2.find('p').replaceWith('<i class="fa fa-camera"></i>')
//       }
//       if(images.length == 8) {
//         dropzone2.find('i').replaceWith('<i class="far fa-caret-square-down"></i>')
//       }
//     } else {
//       dropzone.css({
//         'display': 'block'
//       })
//       $.each(images, function(index, image) {
//         image.attr('data-image', index);
//         preview.append(image);
//       })
//       dropzone.css({
//         'width': 'calc(100% - (135px * ${images.length}))'
//       })
//     }
//     if(images.length == 4) {
//       dropzone2.css({
//         'display': 'none'
//       })
//     }
//     if(images.length == 3) {
//       dropzone.find('i').replaceWith('<i class="far fa-caret-square-down"></i>')
//     }
//   })
// });


