let inp1=document.getElementById('inp1')
let inp2=document.getElementById('inp2')
let inp3=document.getElementById('inp3')
let inp4=document.getElementById('inp4')
let inp5=document.getElementById('inp5')
let inp6=document.getElementById('inp6')
let inp7=document.getElementById('inp7')
let inp8=document.getElementById('inp8')
let inp9=document.getElementById('inp9')

let in1=document.getElementById('in1')
let in2=document.getElementById('in2')
let in3=document.getElementById('in3')
let in4=document.getElementById('in4')
let in5=document.getElementById('in5')
let in6=document.getElementById('in6')
let in7=document.getElementById('in7')
let in8=document.getElementById('in8')
let in9=document.getElementById('in9')

let moj = document.getElementById('moj')
let po = document.getElementById('m3dl')



function his(u) {
inp1.innerHTML=in1.value*6
inp2.innerHTML=in2.value*6
inp3.innerHTML=in3.value*4
inp4.innerHTML=in4.value*3
inp5.innerHTML=in5.value*3
inp6.innerHTML=in6.value*2
inp7.innerHTML=in7.value*2
inp8.innerHTML=in8.value*2
inp9.innerHTML=in9.value*1

let name1 = Number(inp1.innerHTML)
let name2= Number(inp2.innerHTML)
let name3 = Number(inp3.innerHTML)
let name4 = Number(inp4.innerHTML)
let name5= Number(inp5.innerHTML)
let name6 = Number(inp6.innerHTML)
let name7 = Number(inp7.innerHTML)
let name8= Number(inp8.innerHTML)
let name9 = Number(inp9.innerHTML)

let name = (name1+name2+name3+name4+name5+name6+name7+name8+name9)
 let pp = Number(name)
moj.innerHTML=pp

po.innerHTML=eval(pp/27)

if(pp<270) {
  po.style.background='red'
} else {
  po.style.background='green'
  po.innerHTML+='<h1>ناجح<h1>'
}


}