import $ from 'jquery'
import calc from './pages/calc.html'
import index from './pages/index.html'
import _404 from './pages/404.html'
import date from './pages/date'
import todo from './pages/todo/todo.js'

if(location.pathname === "/") {
    $("#app").html(index)
} else if(location.pathname === "/calc") {
    $("#app").html(calc)
} else if(location.pathname === '/date') {
    date()
} else if (location.pathname === '/todo') {
    todo()  
} else {
    console.log(location.pathname)
    $("#app").html(_404)
} 

