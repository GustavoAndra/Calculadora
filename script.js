const resultado = document.querySelector('.resu');
function insert(num)
        {
            var numero = document.getElementById('resu').innerHTML;
            document.getElementById('resu').innerHTML = numero + num;
        }

        function clean()
        {
            document.getElementById('resu').innerHTML = "";
        }
        function back()
        {
            var resultado = document.getElementById('resu').innerHTML;
            document.getElementById('resu').innerHTML = resultado.substring(0, resultado.length -1);
        }
        function calcular()
        {
            var resultado = document.getElementById('resu').innerHTML;
            if(resultado)
            {
                document.getElementById('resu').innerHTML = eval(resultado);
            }
            else
            {
                document.getElementById('resu').innerHTML = ""
            }
        }