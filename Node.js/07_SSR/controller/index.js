const getController = (req,res) => {
  let data = "<ul>";
  for(let i = 0;i < 100;i++){
    data += `<li>line ${i}</li>`
  }
  data += "</ul>";
  res.send(data)
}

module.exports = {
  getController
}