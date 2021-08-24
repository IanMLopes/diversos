    

selecionarConsulta(consulta){
        if(moment(consulta.dataAgenda).add(15, 'minutes').toDate() < new Date())
        alert("Não é possível fazer checkin, pois já passamos do horário agendado para sua consulta que estava agendada para as " + consulta.dataAgenda.substring(16, 11) )
       
      }      

   