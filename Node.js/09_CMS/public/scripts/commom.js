fetch("http://localhost:8080/api/list")
  .then(response => {
    console.log(response)
    return response.json() 
  })
  .then(result => {
    console.log(result)
    let templateStr = `
      <ul>
        {{each data}}
        <li>
            {{$value}}
        </li>
        {{/each}}
      <ul>
    `
    //构建DOM树...
    let str = template.render(templateStr,{data:result.data})
    const root = document.getElementById("root")
    root.innerHTML = str;

  })

//console.log(data)