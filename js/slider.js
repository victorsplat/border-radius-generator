$('body').on('load', () =>{
  $('p.range-value').html('0%')
})

$('input[type=range]').on('input', function () {
  const RangeId = $(this).attr("sliderId")
  const actualRange =$(`p.range-value[rangeNumber=${RangeId}]`)
  actualRange.html($(this).val() + "%")
  const finalString = getSliderId()
  $('div.box').css("border-radius", finalString)

});

const getSliderId = () => {
  const borderValues = []
  for(let i = 1; i <= 4; i++){
    const sliderValue = $(`input[type=range][sliderId=${i}]`).val()
    borderValues.push(sliderValue)
  }
  const finalString = makeBorderString(borderValues)
  return finalString
}

const makeBorderString = (borderValues) => {
  let borderString = ''
  borderValues.map(value =>{
     borderString += value +"% "
  })
  return borderString
}