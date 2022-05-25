$(function() {
    $('#weight_form').submit(function(e) {
        
      var $form = $(this);
      //alert($form.serialize());
      $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize(),
        dataType: "json",
        success: function(data) {
            alert(data);
        },
        error: function(){
            alert("Ошибка!");
        }
      })
      e.preventDefault();
    });
  });

var heightSlider = document.getElementById("range");
var heightOutput = document.getElementById("inputHeight");

heightOutput.innerHTML = heightSlider.value;
heightSlider.oninput = function () {
  heightOutput.innerHTML = this.value;
}
// Change weight-slider value on weight-number input
function showValHeight(newVal) {
  heightSlider.value=newVal;
};
heightSlider.addEventListener("input", updateValueHeight);

function updateValueHeight(e) {
  heightOutput.value = e.srcElement.value;
}