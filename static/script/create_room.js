        function checkbox_change(this_input_name){
            
            const this_input = document.getElementsByName(this_input_name)[0]

            if(this_input.value === 'true'){
                document.getElementsByName(this_input_name)[0].value = false
            }
            else{
                document.getElementsByName(this_input_name)[0].value = true
            }
            
        }
